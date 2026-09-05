# Simulation report — CTV paired-swap greenhouse trial

*2026-09-05 · script: `scripts/simulate_trial.py` (stdlib only, seed 20260905, 20,000 draws per cell) ·
context: B10 of `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md` as corrected by
`docs/peer_reviews_round3/CONSENSUS.md` items 6 (plants-not-aphids), 13 (boundary tie rule),
14 (state the contrast for every power number) and the §2 clustering note.*

## The question, in plain English

Before we spend 550–700 plants and 5,500–7,000 aphids: if we run the trial as designed,
how often does it give the right answer? We taught a computer the trial's rules and had
it "run the greenhouse" 20,000 times for every plausible truth, then counted how often
each truth produces PASS / UNCLEAR / FAIL.

## What the computer experiment assumes

- The unit is the **recipient plant** (10 aphids each). Three arms: the paired-swap
  construct (true transmission scanned 0% → 8%), the T36-clone control (0.6%), and a
  30-plant FS577 wild-type positive control (24%) as an assay-validity check.
- **Clustering:** recipient plants sharing one source plant inherit that plant's titer.
  Modeled as batches of 5 recipients per source plant with a shared random transmission
  probability (beta-binomial), at three clustering strengths: none (ICC 0), mild (0.1),
  strong (0.3). No legacy paper reports clustering, so we scan rather than assume.
- **Scoring noise:** blinded ELISA with a 1% false-positive rate on every plant, all arms.
- **Decision bands** on the observed construct rate: PASS < 5%, UNCLEAR 5–15%, FAIL ≥ 15%,
  with the adopted tie rule (exact boundary → more conservative band).
- "Certify ≤5%" = the Clopper–Pearson 95% upper confidence bound on the observed rate
  sits at or under 5% — the stricter, publish-and-defend version of PASS.
- "Power" = two-sided Fisher exact test, construct vs control, at α = 0.05 and at the
  Bonferroni α = 0.0167 the panel adopted for 3 constructs.

## Headline answers

1. **Take the largest planned size: 250 construct plants, 110 controls.** Smaller sizes
   cannot certify the 5% PASS bound even when silencing works perfectly.
2. **The 1% ELISA false-positive rate is the dominant risk** — bigger than clustering,
   bigger than boundary noise. It does three kinds of damage (below).
3. **A construct that truly transmits at exactly 5% will read UNCLEAR most of the time**
   (~60–70%), not PASS — because the false-positive floor pushes observed 5% to ~6%.
4. **The trial cannot statistically prove the construct equals the T36 control at any
   planned size.** That is fine: the PASS band, not the construct-vs-control test,
   carries the decision. Say this in the pre-registration.
5. **The WT positive control at n=30 flunks its own validity check 10–20% of the time**
   on a perfectly good assay. Enlarge it or widen its acceptance band.

## Table 1 — when silencing works, does the trial say so?

Worst-case clustering (ICC 0.3); the ICC-0 column differs by ≤ 9 points.

| True construct rate | n=90 PASS / certify ≤5% | n=150 PASS / certify | n=250 PASS / certify |
|---|---|---|---|
| 0% (fully silenced) | 99.8% / 41% | 100% / 81% | 100% / 96% |
| 0.5% (≈ T36 control) | 97.0% / 31% | 98.9% / 63% | 99.8% / 80% |
| 1% | 92.4% / 23% | 96.2% / 48% | 98.7% / 62% |

Read: at n=250 a silenced construct PASSes ~always and the strict certified version
succeeds 80–96% of the time. At n=90 the certified version succeeds only ~31–41% of the
time — n=90 is a coin flip dressed as a PASS.

## Table 2 — at and above the boundary

Observed bands, construct vs control power (α = 0.05), worst-case clustering, control n = 110.

| True rate | n=150: PASS / UNCLEAR / FAIL | n=250: PASS / UNCLEAR / FAIL | Power n=150 | Power n=250 |
|---|---|---|---|---|
| 3% | 71% / 29% / 0.2% | 75% / 26% / 0% | 21% | 18% |
| 5% (the PASS bound) | 40% / 60% / 0.3% | 36% / 64% / 0% | 42% | 44% |
| 8% | 12% / 84% / 4% | 5% / 93% / 2% | 71% | 76% |

Three plain-language consequences:

- **FAIL is nearly unreachable** in the scanned range — even a true 8% construct almost
  never reads ≥15%. The FAIL band exists to catch catastrophic failure (leaky construct,
  wrong backbone), not marginal failure. Fine, but write that down.
- **5% true → mostly UNCLEAR.** The 1% false-positive floor adds ~1 point to every
  observed rate, so a construct sitting exactly on the 5% line reads ~6%. The pre-registration
  must say in advance what UNCLEAR-at-the-boundary means for the go/no-go decision —
  otherwise the likely outcome of a borderline-good construct is an argument, not a decision.
- **Power vs control tops out at ~44–76%.** At these rates and with the false-positive
  floor inflating the control to ~1.6% observed (from 0.6% true), even n=250/110 cannot
  reach 80% power for the 5%-vs-0.6% contrast under a two-sided Fisher test, and
  Bonferroni drops the 8% contrast to ~55–62%. The consensus correction-14 numbers
  (n=90 → ~45%, 80% needs ~211/arm at a 1→6% contrast) were computed without the FP
  floor; with it, that contrast needs roughly ~350 per arm. The pre-registration's power
  table must be regenerated with FP included.

## Which risks dominate — ranked

1. **ELISA false-positive rate (dominant).** It floors every arm at ~1% observed, moves a
   true-5% construct from PASS to UNCLEAR ~60% of the time, and halves the power against
   the control by tripling the control's apparent rate. Mitigation: run virus-free
   negative-control plants to estimate the in-run FP rate, and pre-register a decision
   rule on the *FP-adjusted* rate (or the certified upper bound) rather than the raw one.
2. **Plant-level overdispersion (real but secondary).** Going from ICC 0 → 0.3 costs
   roughly: PASS rate −2 to −13 points in the 0.5–8% range, certification −0 to −9
   points, power −2 to −6 points. It also pushes the Fisher test's near-null rejection
   rate to ~6–7% vs the nominal 5% — mild anticonservatism that a cluster-aware primary
   analysis (beta-binomial / GLMM with a plant random effect, per the §2 note) removes.
   Budget all power claims at ICC 0.3.
3. **Boundary tie rule (inert at the planned sizes).** 90, 150, and 250 are not divisible
   by 20, so an observed count can never sit exactly at 5% or 15% — the tie rule adopted
   in correction 13 can never trigger. Keep it (sizes may change), but it buys nothing
   here; the *real* boundary risk is item 1's upward shift, not ties.
4. **WT-arm sizing (operational, cheap to fix).** A n=30 WT arm on a working assay reads
   below the 15% acceptance line in 10% (ICC 0) to 21% (ICC 0.3) of trials — a false
   "assay failed" verdict that costs a full rerun.

## What changes in the pre-registration

1. **Sizes:** construct n = 250, T36-clone control n = 110 (top of the corrected range;
   claim-42's 250–300/100–150). Do not descope to n=90 — certification falls to ~31–41%.
2. **WT positive control: n ≥ 50**, or keep n=30 with the acceptance band widened to
   ≥10% observed. State which.
3. **Decision rule restated on the FP-adjusted basis:** primary = Clopper–Pearson upper
   95% bound ≤ 5% against the *adjusted* rate; the raw PASS/UNCLEAR/FAIL bands stay as
   the communication layer, with UNCLEAR-in-(5,6]% explicitly mapped to a follow-up
   decision *before* unblinding, since a true-5% construct lands there ~60% of the time.
4. **Negative-control plants** (virus-free source, full protocol) in every batch to
   estimate the in-run ELISA FP rate; FP estimate enters the adjustment in item 3.
5. **Cluster-aware primary analysis** (beta-binomial GLMM, plant random effect), with
   all power numbers budgeted at ICC 0.3 — the panel's §2 note, now quantified.
6. **Every power statement carries its contrast and assumes the 1% FP floor**
   (correction 14, strengthened). Regenerate the claims-42/43 power table from
   `scripts/simulate_trial.py` rather than analytic approximations.
7. **Keep the boundary tie rule** (correction 13) and add the note that it is
   unreachable at n ∈ {90, 150, 250}.
8. **Keep the Bonferroni cap at 3 constructs** — but state that at α = 0.0167 the
   smallest distinguishable residual activity is ~8% (power ~61%), not 5% (~26%);
   partial knockdowns between 1% and 6% are statistically invisible to the
   construct-vs-control test at the planned sizes and must be caught by the PASS-band
   decision rule instead.

## Method notes and limits

- One random stream per cell (`seed = 20260905 + n·1000 + ICC·50 + rate index`); the run
  is exactly reproducible and takes ~3 s. Fisher p-values and beta-binomial batch CDFs
  are memoized; identical tables are not recomputed.
- The Clopper–Pearson "certify" rate uses the exact equivalence: upper 95% bound ≤ 5% ⟺
  Binomial(n, 0.05) CDF at the observed count ≤ 0.025 (cutoffs: n=90 → 0 positives;
  n=150 → ≤ 2; n=250 → ≤ 5).
- Assumed 5 recipients per source plant (one source feeds ~50 aphids). No published
  clustering data exists for this assay; if the real batch size or ICC differs, re-run —
  inputs are constants at the top of the script.
- False negatives in ELISA are not modeled (no published FN rate; the assay is run at
  8 weeks post-challenge where sensitivity is high). A nonzero FN rate would mostly act
  like a small FP-rate reduction.
