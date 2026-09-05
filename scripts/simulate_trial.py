#!/usr/bin/env python3
"""Monte-Carlo simulation of the CTV paired-swap greenhouse trial.

Structure per docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md section B10 as
corrected by docs/peer_reviews_round3/CONSENSUS.md (items 6, 13, 14 and the
section-2 clustering note):

  * Unit of inference = recipient plant (10 aphids per recipient).
  * Arms: paired-swap construct (true per-plant transmission rate scanned
    over {0, 0.5, 1, 3, 5, 8}%) vs T36-clone control (~0.6%) vs FS577 WT
    positive control (~24%).
  * Plant-level clustering: source-plant titer variation induces a shared
    per-recipient random effect. Modelled as beta-binomial over groups of
    BATCH_SIZE recipients sharing one source plant, ICC rho in {0, 0.1, 0.3}
    (no legacy clustering data exists, so rho is scanned, not assumed).
  * Blinded scoring with a 1% ELISA false-positive base rate on every plant
    (treatment and controls alike).
  * Decision bands on the observed construct rate: PASS < 5%, UNCLEAR
    [5%, 15%), FAIL >= 15%. Boundary tie rule (consensus item 13): an exact
    boundary goes to the more conservative band (5.0% -> UNCLEAR,
    15.0% -> FAIL).

Outputs per cell (20,000 draws): PASS/UNCLEAR/FAIL rates, the rate at which
the Clopper-Pearson upper 95% bound certifies <= 5%, and Fisher-exact power
vs the control arm (nominal alpha and Bonferroni alpha for 3 constructs,
per the FWER cap adopted from round 2).

Standard library only. Fixed seed. Run: python3 scripts/simulate_trial.py
"""

import bisect
import math
import random
import time

SEED = 20260905
DRAWS = 20_000

BATCH_SIZE = 5          # recipient plants fed from one source plant
FP_RATE = 0.01          # ELISA false-positive base rate per plant
CONTROL_RATE = 0.006    # T36 clone
WT_RATE = 0.24          # FS577 wild type
WT_N = 30               # positive-control arm size (assay validity check)

TRT_RATES = [0.0, 0.005, 0.01, 0.03, 0.05, 0.08]
ICCS = [0.0, 0.1, 0.3]
TRT_NS = [90, 150, 250]
CTRL_NS = [50, 110]

ALPHA = 0.05
N_CONSTRUCTS = 3                 # cap adopted in round 2 (FWER 30% -> Bonferroni)
ALPHA_BONF = ALPHA / N_CONSTRUCTS
PASS_HI = 0.05
FAIL_LO = 0.15

LN_F = [0.0]
for _ in range(1, 401):
    LN_F.append(LN_F[-1] + math.log(_))


def ln_choose(n, k):
    if k < 0 or k > n:
        return float("-inf")
    return LN_F[n] - LN_F[k] - LN_F[n - k]


def binomial_sample(rng, n, p):
    """Binomial(n, p) via geometric waiting times (Devroye)."""
    if n <= 0 or p <= 0.0:
        return 0
    log_q = math.log1p(-p)
    count, pos = 0, int(math.log(1.0 - rng.random()) / log_q)
    while pos < n:
        count += 1
        pos += 1 + int(math.log(1.0 - rng.random()) / log_q)
    return count


_bb_cdf_cache = {}


def beta_binomial_cdf(m, p, rho):
    key = (m, p, rho)
    cached = _bb_cdf_cache.get(key)
    if cached is not None:
        return cached
    s = (1.0 - rho) / rho
    a, b = p * s, (1.0 - p) * s
    log_den = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
    pmfs = []
    for k in range(m + 1):
        lp = (ln_choose(m, k) + math.lgamma(k + a) + math.lgamma(m - k + b)
              - math.lgamma(m + a + b) - log_den)
        pmfs.append(math.exp(lp))
    total = sum(pmfs)
    cdf, run = [], 0.0
    for v in pmfs:
        run += v / total
        cdf.append(run)
    cdf[-1] = 1.0
    _bb_cdf_cache[key] = cdf
    return cdf


def draw_true_positives(rng, n, p, rho):
    """Transmission positives among n recipients (pre-FP), clustered by source
    plant: each batch of BATCH_SIZE recipients shares one source plant whose
    effective per-recipient probability is Beta-distributed (ICC = rho)."""
    if p <= 0.0:
        return 0
    if rho <= 0.0:
        return binomial_sample(rng, n, p)
    cdf = beta_binomial_cdf(BATCH_SIZE, p, rho)
    return sum(bisect.bisect_left(cdf, rng.random())
               for _ in range(n // BATCH_SIZE))


def add_false_positives(rng, n, true_pos):
    return true_pos + binomial_sample(rng, n - true_pos, FP_RATE)


def classify(x, n):
    """Decision band on observed rate. Boundary -> more conservative band."""
    rate = x / n
    if rate < PASS_HI:
        return "PASS"
    if rate < FAIL_LO:
        return "UNCLEAR"
    return "FAIL"


def cert_cutoff(n, bound=PASS_HI, one_sided_alpha=0.025):
    """Largest x whose Clopper-Pearson two-sided 95% upper bound is <= `bound`.
    CP upper bound U solves P_{p=U}(X <= x) = 0.025, so U <= bound iff the
    Binomial(n, bound) CDF at x is <= 0.025."""
    pmf = (1.0 - bound) ** n
    cdf, k = pmf, (0 if pmf <= one_sided_alpha else -1)
    x = 0
    while x < n and cdf <= one_sided_alpha:
        pmf *= (n - x) / (x + 1) * bound / (1.0 - bound)
        cdf += pmf
        x += 1
        if cdf <= one_sided_alpha:
            k = x
    return k


_fisher_cache = {}


def fisher_two_sided(a, n1, c, n0):
    """Two-sided Fisher exact p for table [[a, n1-a], [c, n0-c]]."""
    key = (a, n1, c, n0)
    cached = _fisher_cache.get(key)
    if cached is not None:
        return cached
    total_pos, N = a + c, n1 + n0
    log_den = ln_choose(N, total_pos)
    logp_obs = ln_choose(n1, a) + ln_choose(n0, total_pos - a) - log_den
    p = 0.0
    for x in range(max(0, total_pos - n0), min(n1, total_pos) + 1):
        lp = ln_choose(n1, x) + ln_choose(n0, total_pos - x) - log_den
        if lp <= logp_obs + 1e-9:
            p += math.exp(lp)
    p = min(1.0, p)
    _fisher_cache[key] = p
    return p


def cell_seed(n, rho, rate_index):
    return SEED + n * 1000 + int(round(rho * 100)) * 50 + rate_index


def simulate_arm(n, rate, rho, seed):
    rng = random.Random(seed)
    draws = []
    for _ in range(DRAWS):
        xt = draw_true_positives(rng, n, rate, rho)
        draws.append((xt, add_false_positives(rng, n, xt)))
    return draws


def summarize_construct(draws, n, k_star):
    bands = {"PASS": 0, "UNCLEAR": 0, "FAIL": 0}
    pass_no_fp, cert = 0, 0
    for xt, xo in draws:
        bands[classify(xo, n)] += 1
        if classify(xt, n) == "PASS":
            pass_no_fp += 1
        if xo <= k_star:
            cert += 1
    return {
        "pass": bands["PASS"] / DRAWS,
        "unclear": bands["UNCLEAR"] / DRAWS,
        "fail": bands["FAIL"] / DRAWS,
        "pass_no_fp": pass_no_fp / DRAWS,
        "cert": cert / DRAWS,
    }


def power_vs_control(trt_draws, n1, ctrl_draws, n0):
    sig = bonf = 0
    for (_, a), (_, c) in zip(trt_draws, ctrl_draws):
        p = fisher_two_sided(a, n1, c, n0)
        if p <= ALPHA:
            sig += 1
        if p <= ALPHA_BONF:
            bonf += 1
    return sig / DRAWS, bonf / DRAWS


def main():
    t0 = time.time()
    print(f"CTV greenhouse trial Monte-Carlo | {DRAWS} draws/cell | seed {SEED}")
    print(f"FP rate {FP_RATE:.1%} | batch {BATCH_SIZE} recipients/source plant | "
          f"control {CONTROL_RATE:.1%} | WT {WT_RATE:.0%} n={WT_N}")
    print(f"Decision bands: PASS <{PASS_HI:.0%}, UNCLEAR [{PASS_HI:.0%},{FAIL_LO:.0%}), "
          f"FAIL >={FAIL_LO:.0%} (boundary -> conservative band)")

    # --- WT positive control: assay validity check ---
    print("\n== FS577 WT positive control (n=%d) ==" % WT_N)
    print("rho   mean-rate  P(rate>=15%)  P(sig vs ctrl n=110)")
    for rho in ICCS:
        wt = simulate_arm(WT_N, WT_RATE, rho, cell_seed(WT_N, rho, 99))
        ctrl = simulate_arm(110, CONTROL_RATE, rho, cell_seed(110, rho, 98))
        mean_rate = sum(xo for _, xo in wt) / (DRAWS * WT_N)
        p_ge15 = sum(1 for _, xo in wt if xo / WT_N >= FAIL_LO) / DRAWS
        p_sig = sum(1 for (_, a), (_, c) in zip(wt, ctrl)
                    if fisher_two_sided(a, WT_N, c, 110) <= ALPHA) / DRAWS
        print(f"{rho:<5} {mean_rate:>9.1%}  {p_ge15:>12.1%}  {p_sig:>14.1%}")

    # --- construct arm draws, reused across control sizes ---
    trt = {}
    print("\n== Construct classification (control-size independent) ==")
    for n in TRT_NS:
        k_star = cert_cutoff(n)
        print(f"\n-- construct n={n} (CP 95% upper bound <=5% iff x<={k_star}) --")
        print("true-p  rho   PASS%   noFP%   UNCLEAR%  FAIL%   cert<=5%")
        for rho in ICCS:
            for i, rate in enumerate(TRT_RATES):
                draws = simulate_arm(n, rate, rho, cell_seed(n, rho, i))
                trt[(rate, rho, n)] = draws
                s = summarize_construct(draws, n, k_star)
                print(f"{rate:>6.1%}  {rho:<4}  {s['pass']:>6.1%}  {s['pass_no_fp']:>6.1%}  "
                      f"{s['unclear']:>8.1%}  {s['fail']:>6.1%}  {s['cert']:>8.1%}")

    # --- power vs control ---
    print("\n== Fisher-exact power vs T36-clone control (two-sided) ==")
    ctrl_cache = {}
    for nc in CTRL_NS:
        for rho in ICCS:
            ctrl_cache[(rho, nc)] = simulate_arm(nc, CONTROL_RATE, rho,
                                                 cell_seed(nc, rho, 97))
    for n in TRT_NS:
        print(f"\n-- construct n={n} --")
        hdr = "true-p  rho   " + "  ".join(
            f"p(n{nc})  b(n{nc})" for nc in CTRL_NS)
        print(hdr + "   [p=alpha .05, b=Bonferroni .05/3]")
        for rho in ICCS:
            for rate in TRT_RATES:
                row = f"{rate:>6.1%}  {rho:<4} "
                for nc in CTRL_NS:
                    pw, pb = power_vs_control(trt[(rate, rho, n)], n,
                                              ctrl_cache[(rho, nc)], nc)
                    row += f"  {pw:>6.1%}  {pb:>6.1%}"
                print(row)

    # --- headline recommendation ---
    print("\n== Headline ==")
    for n in TRT_NS:
        k_star = cert_cutoff(n)
        for nc in CTRL_NS:
            pw5, pb5 = power_vs_control(trt[(0.05, 0.3, n)], n,
                                        ctrl_cache[(0.3, nc)], nc)
            cert05 = summarize_construct(trt[(0.005, 0.3, n)], n, k_star)["cert"]
            print(f"worst-case (rho=0.3) n={n}/{nc}: power at 5% vs 0.6% = {pw5:.1%} "
                  f"(Bonf {pb5:.1%}); cert<=5% when true=0.5%: {cert05:.1%}")
    print(f"\nelapsed {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
