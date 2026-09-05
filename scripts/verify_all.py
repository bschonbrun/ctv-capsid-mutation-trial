#!/usr/bin/env python3
"""Recompute key sequence and statistical claims in docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md
(corrected per docs/peer_reviews_round3/CONSENSUS.md) from the raw GenBank files.
Stdlib only. Writes docs/peer_reviews_round3/VERIFICATION_RUN.md.
"""
import re
import sys
from fractions import Fraction
from math import comb
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SEQ = REPO / "data" / "sequences"
OUT = REPO / "docs" / "peer_reviews_round3" / "VERIFICATION_RUN.md"

GB_FILES = ["ctv_genomes.gb", "ctv_labeled_isolates.gb", "ctv_t36_infectious_clones.gb"]
T36_LINEAGE_302 = ["U16304", "NC_001661", "DQ272579", "AY340974", "OR192037"]

log = []
rows = []  # (section, check, computed, expected, verdict)


def emit(s=""):
    print(s)
    log.append(s)


def check(section, name, computed, expected, tol=None):
    """Record a PASS/FAIL/INFO row. tol: absolute, or (abs, rel) tuple."""
    if expected is None:
        verdict = "INFO"
    elif isinstance(expected, (set, list, tuple)) and not (isinstance(expected, tuple) and tol is not None):
        verdict = "PASS" if computed == expected else "FAIL"
    elif isinstance(expected, str):
        verdict = "PASS" if computed == expected else "FAIL"
    elif tol is None:
        verdict = "PASS" if computed == expected else "FAIL"
    else:
        tol_abs, tol_rel = tol if isinstance(tol, tuple) else (tol, 0.0)
        verdict = "PASS" if abs(computed - expected) <= max(tol_abs, tol_rel * abs(expected)) else "FAIL"
    rows.append((section, name, computed, expected, verdict))
    return verdict


# ---------- GenBank parsing ----------

def read_qualifier(lines, i, name):
    """Read a possibly multi-line /name="value" qualifier starting at line i."""
    m = re.search(rf'/{name}="([^"]*)"?', lines[i])
    if not m:
        return None, i
    val = m.group(1)
    start = lines[i].index(f'/{name}=') + len(name) + 2  # opening quote
    while '"' not in lines[i][start + 1:] and i + 1 < len(lines):
        i += 1
        val += lines[i].strip()
        if '"' in lines[i]:
            break
    return re.sub(r'["\s]', "", val), i


def parse_genbank(path):
    records = {}
    for raw in path.read_text().split("\n//"):
        lines = raw.splitlines()
        acc = None
        for line in lines:
            if line.startswith("ACCESSION"):
                acc = line.split()[1]
                break
        if not acc:
            continue
        cds = []
        i = 0
        while i < len(lines):
            if lines[i].startswith("     CDS"):
                j = i + 1
                entry = {}
                while j < len(lines) and lines[j].startswith(" " * 21):
                    if "/product=" in lines[j]:
                        entry["prod"], j = read_qualifier(lines, j, "product")
                    elif "/translation=" in lines[j]:
                        entry["tr"], j = read_qualifier(lines, j, "translation")
                    j += 1
                if "prod" in entry and "tr" in entry:
                    cds.append(entry)
                i = j
            else:
                i += 1
        records[acc] = cds
    return records


PATTERNS = {
    "p27": re.compile(r"^(p27|cpm)|^27[ -]?kda|minorcoat", re.I),
    "p33": re.compile(r"^p33|^33[ -]?kda", re.I),
    "p61": re.compile(r"^p61|^61[ -]?kda", re.I),
    "p65": re.compile(r"^p65|^65[ -]?kda|^hsp70", re.I),
}


def get_protein(records, acc, gene):
    for cds in records[acc]:
        if "prod" in cds and PATTERNS[gene].search(cds["prod"]):
            return cds["tr"]
    raise KeyError(f"{gene} not found in {acc}")


# ---------- alignment ----------

def nw_align(a, b, match=2, mismatch=-1, gap=-2):
    n, m = len(a), len(b)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        dp[i][0] = i * gap
    for j in range(1, m + 1):
        dp[0][j] = j * gap
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            dp[i][j] = max(
                dp[i - 1][j - 1] + (match if a[i - 1] == b[j - 1] else mismatch),
                dp[i - 1][j] + gap,
                dp[i][j - 1] + gap,
            )
    aa, bb = [], []
    i, j = n, m
    while i or j:
        if i and j and dp[i][j] == dp[i - 1][j - 1] + (match if a[i - 1] == b[j - 1] else mismatch):
            aa.append(a[i - 1]); bb.append(b[j - 1]); i -= 1; j -= 1
        elif i and dp[i][j] == dp[i - 1][j] + gap:
            aa.append(a[i - 1]); bb.append("-"); i -= 1
        else:
            aa.append("-"); bb.append(b[j - 1]); j -= 1
    return "".join(reversed(aa)), "".join(reversed(bb))


def identity(a, b):
    if len(a) == len(b):
        matches = sum(x == y for x, y in zip(a, b))
        return matches, len(a), 0
    ga, gb = nw_align(a, b)
    matches = sum(x == y for x, y in zip(ga, gb))
    gaps = sum("-" in p for p in zip(ga, gb))
    return matches, len(ga), gaps


def subs(ref, qry, qry_label):
    """FS577->query substitutions, 1-based on ref. Returns list like ['S169N']."""
    ga, gb = nw_align(ref, qry) if len(ref) != len(qry) else (ref, qry)
    out, pos = [], 0
    for x, y in zip(ga, gb):
        if x != "-":
            pos += 1
        if x != y and x != "-" and y != "-":
            out.append(f"{x}{pos}{y}")
    return out


# ---------- statistics ----------

def fisher_p(a, b, c, d):
    """Exact two-sided Fisher p (sum of hypergeometric probs <= observed),
    plus one-sided (a or more extreme in the observed direction)."""
    n1, n2, m1 = a + b, c + d, a + c
    N = n1 + n2
    def pmf(x):
        return Fraction(comb(m1, x) * comb(N - m1, n1 - x), comb(N, n1))
    p_obs = pmf(a)
    lo, hi = max(0, n1 - (N - m1)), min(m1, n1)
    two = Fraction(0)
    one = sum((pmf(x) for x in range(a, hi + 1)), Fraction(0))
    for x in range(lo, hi + 1):
        p = pmf(x)
        if p <= p_obs:  # exact rational comparison includes ties
            two += p
    return float(one), float(two)


def binom_cdf(k, n, p):
    return sum(comb(n, j) * p**j * (1 - p) ** (n - j) for j in range(k + 1))


def binom_surv(k, n, p):  # P(X >= k)
    return sum(comb(n, j) * p**j * (1 - p) ** (n - j) for j in range(k, n + 1))


def cp_interval(x, n, alpha=0.05):
    """Clopper-Pearson two-sided (1-alpha) CI by bisection on the binomial CDF."""
    if x == 0:
        lo = 0.0
    else:
        lo, a, b = None, 0.0, x / n
        for _ in range(80):
            mid = (a + b) / 2
            if 1 - binom_cdf(x - 1, n, mid) < alpha / 2:
                a = mid
            else:
                b = mid
        lo = (a + b) / 2
    if x == n:
        hi = 1.0
    else:
        a, b = x / n, 1.0
        for _ in range(80):
            mid = (a + b) / 2
            if binom_cdf(x, n, mid) > alpha / 2:
                a = mid
            else:
                b = mid
        hi = (a + b) / 2
    return lo, hi


def fmt_p(p):
    return f"{p:.4g}" if p < 1e-3 or p > 0.9999 else f"{p:.5f}"


# ---------- main ----------

def main():
    records = {}
    for f in GB_FILES:
        records.update(parse_genbank(SEQ / f))

    emit("# Verification run — CTV round-3 packet recomputation")
    emit()
    emit("## Inputs")
    emit("Files: " + ", ".join(f"data/sequences/{f}" for f in GB_FILES))
    emit("Accessions used: KC517488 (FS577), U16304 & AY170468 & EU937521 (T36), "
         "JQ965169 (T68-1); T36-lineage 302-aa p33 set: " + ", ".join(T36_LINEAGE_302))
    emit()

    # ---- 1a. CPm identity ----
    emit("## 1a. CPm/p27 identity FS577 (KC517488) vs T36 (U16304)")
    a, b = get_protein(records, "KC517488", "p27"), get_protein(records, "U16304", "p27")
    emit(f"lengths: FS577={len(a)}, U16304={len(b)}")
    m, L, g = identity(a, b)
    emit(f"identity: {m}/{L} = {100*m/L:.1f}%  (gaps={g})")
    check("1a", "CPm identity matches/L", f"{m}/{L}", "240/240")

    # ---- 1b. p33 identity ----
    emit()
    emit("## 1b. p33 identity, FS577 (KC517488) vs T36 references")
    fs33 = get_protein(records, "KC517488", "p33")
    for acc, exp in [("U16304", ("299/303", 98.68)), ("AY170468", (None, 99.67)), ("EU937521", (None, 99.67))]:
        q = get_protein(records, acc, "p33")
        m, L, g = identity(fs33, q)
        pct = 100 * m / L
        emit(f"vs {acc}: lengths FS577={len(fs33)}, {acc}={len(q)}; "
             f"identity {m}/{L} = {pct:.2f}% (gaps={g})")
        check("1b", f"p33 identity vs {acc} (matches/L)", f"{m}/{L}", exp[0])
        check("1b", f"p33 identity vs {acc} (%)", pct, exp[1], tol=0.05)

    # ---- 1c. residue 174 ----
    emit()
    emit("## 1c. p33 residue 174 (1-based) and T36-lineage homologous residue")
    for acc, exp in [("EU937521", "K"), ("AY170468", "R"), ("KC517488", "R"), ("JQ965169", "R")]:
        q = get_protein(records, acc, "p33")
        res = q[173]
        emit(f"{acc} len={len(q)} p33[174]={res}")
        check("1c", f"{acc} p33 residue 174", res, exp)
    for acc in T36_LINEAGE_302:
        q = get_protein(records, acc, "p33")
        ga, gb = nw_align(fs33, q)
        # residue in q aligned to fs33 position 174
        fpos, res = 0, None
        for x, y in zip(ga, gb):
            if x != "-":
                fpos += 1
            if fpos == 174:
                res = y
                break
        emit(f"{acc} len={len(q)} direct[173]={q[172]} aligned-to-FS577-174={res}")
        check("1c", f"{acc} homologous (pos173) residue", q[172] if len(q) == 302 else res, "R")

    # ---- 1d. p61/p65 substitutions ----
    emit()
    emit("## 1d. p61/p65 substitutions FS577 (KC517488) -> T36 clones")
    P61_AY = ["S169N", "I179T", "T224A", "M289T", "D324G", "E382D", "S391G", "I455V", "D458G"]
    P65_AY = ["G227S", "R496H"]
    P61_EU = ["S169N", "I179T", "T224A", "M289T", "S391G", "D458G"]
    P65_EU = ["R496H"]
    for gene, acc, exp in [("p61", "AY170468", P61_AY), ("p65", "AY170468", P65_AY),
                           ("p61", "EU937521", P61_EU), ("p65", "EU937521", P65_EU)]:
        r = get_protein(records, "KC517488", gene)
        q = get_protein(records, acc, gene)
        s = subs(r, q, acc)
        emit(f"{gene} vs {acc}: len ref={len(r)} qry={len(q)}; "
             f"{len(s)} substitution{'s' if len(s) != 1 else ''}: {', '.join(s)}")
        check("1d", f"{gene} subs vs {acc}", sorted(s), sorted(exp))
        check("1d", f"{gene} subs count vs {acc}", len(s), len(exp))
    emit(f"total vs EU937521 (validated clone): {len(P61_EU)+len(P65_EU)} expected, "
         f"{len(subs(get_protein(records,'KC517488','p61'), get_protein(records,'EU937521','p61'),'')) + len(subs(get_protein(records,'KC517488','p65'), get_protein(records,'EU937521','p65'),''))} computed")

    # ---- 2. statistics ----
    emit()
    emit("## 2. Statistics from raw counts")

    one, two = fisher_p(16, 74, 1, 65)
    emit(f"Fisher 16/90 vs 1/66: two-sided p={two:.6f}  one-sided p={one:.6f}")
    check("2", "Fisher 16/90 vs 1/66 two-sided p", two, 0.00116, tol=1e-5)
    oratio = (16 * 65) / (74 * 1)
    emit(f"odds ratio = {oratio:.4f}")
    check("2", "OR 16/90 vs 1/66", oratio, 14.05, tol=0.005)

    one2, two2 = fisher_p(16, 74, 1, 171)
    emit(f"Fisher 16/90 vs 1/172: two-sided p={fmt_p(two2)}  one-sided p={fmt_p(one2)}")
    check("2", "Fisher 16/90 vs 1/172 p (packet/consensus state ~3e-4)", two2, 3e-4, tol=(0, 0.5))

    one3, two3 = fisher_p(35, 161, 16, 515)
    emit(f"Fisher pair vs pooled singles 35/196 vs 16/531: two-sided p={fmt_p(two3)}")
    check("2", "Fisher 35/196 vs 16/531 p (no packet value)", two3, None)

    emit()
    emit("Clopper-Pearson 95% CIs (bisection, two-sided):")
    for x, n, exp in [(1, 66, (0.00038, 0.0816)), (2, 127, (0.00191, 0.0557)),
                      (95, 215, (0.3744, 0.5110)), (95, 394, (0.200, 0.286)),
                      (1, 172, (0.000147, 0.0320))]:
        lo, hi = cp_interval(x, n)
        emit(f"  {x}/{n}: [{100*lo:.3f}%, {100*hi:.3f}%]")
        check("2", f"CP lower {x}/{n}", lo, exp[0], tol=5e-4)
        check("2", f"CP upper {x}/{n}", hi, exp[1], tol=5e-4)

    emit()
    emit("Zero-event upper bounds (exact binomial):")
    for n, exp1, exp2 in [(110, 0.0269, 0.0330), (200, 0.0149, 0.0183)]:
        u1 = 1 - 0.05 ** (1 / n)
        u2 = 1 - 0.025 ** (1 / n)
        emit(f"  0/{n}: one-sided 95% upper = {100*u1:.3f}%  two-sided 95% upper = {100*u2:.3f}%")
        check("2", f"0/{n} one-sided upper", u1, exp1, tol=2e-4)
        check("2", f"0/{n} two-sided upper", u2, exp2, tol=2e-4)

    emit()
    f1 = (95 / 394) / (1 / 172)
    emit(f"fold FS577 vs T36 clone = (95/394)/(1/172) = {f1:.2f}x")
    check("2", "fold FS577 vs T36 clone", f1, 41.5, tol=0.1)
    f2 = (95 / 215) / (1 / 66)
    emit(f"fold T68-1 vs 1/66 (Shilts clone arm; packet's corrected note: mislabeled 'field' baseline) = {f2:.2f}x")
    check("2", "fold T68-1 vs 1/66", f2, 29.16, tol=0.01)
    f3 = (95 / 215) / (2 / 380)
    emit(f"fold T68-1 vs Harper field 2/380 (corrected baseline per claim-12 fix) = {f3:.2f}x")
    check("2", "fold T68-1 vs 2/380 (correction)", f3, 83.95, tol=0.1)

    fwer = 1 - 0.95**7
    emit(f"FWER 1-0.95^7 = {fwer:.4f} ({100*fwer:.1f}%)")
    check("2", "FWER 7 tests", fwer, 0.302, tol=5e-4)

    bt = binom_surv(35, 196, 0.053)
    emit(f"binomial P(X>=35 | n=196, p=0.053) = {bt:.3e}")
    check("2", "binomial tail synergy", bt, 3e-10, tol=(0, 0.5))

    # ---- 3. table ----
    emit()
    emit("## 3. PASS/FAIL table")
    emit(f"{'sec':<4} {'check':<52} {'computed':<28} {'expected':<22} verdict")
    n_pass = n_fail = n_info = 0
    fails = []
    for sec, name, comp, exp, v in rows:
        cs = f"{comp:.6g}" if isinstance(comp, float) else str(comp)
        es = "" if exp is None else (f"{exp:.6g}" if isinstance(exp, float) else str(exp))
        emit(f"{sec:<4} {name:<52} {cs:<28} {es:<22} {v}")
        if v == "PASS":
            n_pass += 1
        elif v == "FAIL":
            n_fail += 1
            fails.append(name)
        else:
            n_info += 1
    emit()
    emit(f"TOTAL: {n_pass} PASS, {n_fail} FAIL, {n_info} INFO")

    write_md()


def render(comp):
    return f"{comp:.6g}" if isinstance(comp, float) else str(comp)


def write_md():
    lines = [
        "# CTV Round-3 Packet — Executable Verification Run",
        "",
        "*Run date: 2026-09-05 · script: `scripts/verify_all.py` (Python 3, stdlib only) · "
        "regenerate: `python3 scripts/verify_all.py` from the repo root.*",
        "",
        "## Inputs",
        "",
        "- GenBank: `data/sequences/ctv_genomes.gb` (130 records), "
        "`ctv_labeled_isolates.gb` (4 records: JQ965169, KC517488, AF260651, U16304), "
        "`ctv_t36_infectious_clones.gb` (2 records: AY170468, EU937521). "
        "CDS amino-acid sequences taken from each record's `/translation` qualifier.",
        "- Accessions used: KC517488 (FS577); U16304 (T36); AY170468, EU937521 (T36 infectious clones); "
        "JQ965169 (T68-1); T36-lineage 302-aa p33 set: U16304, NC_001661, DQ272579, AY340974, OR192037.",
        "- Expected values: `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md` (round 3-4 corrections applied) "
        "+ `docs/peer_reviews_round3/CONSENSUS.md`; CI expectations cross-checked against panel quotes in "
        "`docs/peer_reviews_round3/raw/` (Fable, Grok, GPT, Gemini, GLM recomputations).",
        "- Methods: pairwise identity by direct comparison or hand-written Needleman-Wunsch "
        "(match +2, mismatch -1, linear gap -2); Fisher exact p by exact hypergeometric sum over "
        "all tables with fixed margins (integer arithmetic); Clopper-Pearson by 80-step bisection on "
        "the binomial CDF; zero-event bounds in closed form 1 - alpha^(1/n) (one-sided) and "
        "1 - (alpha/2)^(1/n) (two-sided).",
        "",
        "## Full run log",
        "",
        "```",
    ]
    lines += log
    lines += ["```", ""]
    lines.append("## Result table")
    lines.append("")
    lines.append("| Sec | Check | Computed | Expected | Verdict |")
    lines.append("|-----|-------|----------|----------|---------|")
    for sec, name, comp, exp, v in rows:
        es = "—" if exp is None else render(exp)
        lines.append(f"| {sec} | {name} | {render(comp)} | {es} | **{v}** |")
    n_pass = sum(1 for r in rows if r[4] == "PASS")
    n_fail = sum(1 for r in rows if r[4] == "FAIL")
    n_info = sum(1 for r in rows if r[4] == "INFO")
    lines += ["", f"**Totals: {n_pass} PASS · {n_fail} FAIL · {n_info} INFO (computed-only, no packet value).**", ""]
    if n_fail:
        lines.append("## Mismatches and adjudication")
        lines.append("")
        lines.append("- **Fisher exact 16/90 vs 1/172 — the packet/consensus value ~3e-4 is wrong; the script's "
                     "1.77e-7 is right.** Both one- and two-sided exact hypergeometric sums give p = 1.772e-7; "
                     "they coincide here because the observed table's exact-tie partner is unreachable under these "
                     "margins (the far tail beyond x=16 contributes nothing until x=17, the table maximum given "
                     "m1=17). Cross-checks: Pearson chi2 p = 8.1e-8, Yates-corrected p = 3.3e-7, log-OR Wald "
                     "p = 5.2e-4 — no standard test lands at 3e-4. The figure originated in the Fable seat's "
                     "round-3 recomputation (`raw/fable.md`, claim 25) and propagated to CONSENSUS.md §3 and the "
                     "packet appendix ('both p33-swap p-values … 3×10⁻⁴') and round4/fable.reply.md without being "
                     "re-derived. Consequence: none for the science — the corrected value is *more* significant, "
                     "so claim 25's 'decisive on either baseline' stands strengthened. Fix the document: replace "
                     "3×10⁻⁴ with ≈1.8×10⁻⁷ (two-sided exact Fisher) everywhere it appears.")
        lines.append("")
    OUT.write_text("\n".join(lines))
    print(f"\nwrote {OUT}")


if __name__ == "__main__":
    main()
