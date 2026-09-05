# Peer Review — claude-opus-5

*Independent review of the CTV transmission brief. Written 2026-09-05 in the Claude Code session that ran the panel, from the brief only, before reading any other reviewer's output. All statistics below were computed directly (exact Fisher tests and Clopper–Pearson intervals) rather than asserted.*

---

## Statistics computed from the brief's own counts

Every number the brief reports as a bare percentage, recomputed with exact methods:

| Group | Count | Rate | 95% CI (Clopper–Pearson) |
|---|---|---|---|
| T68-1 | 95/215 | 44.19% | 37.44 – 51.10% |
| FS577 | **?/?** | 24.10% | **not computable — no denominator** |
| T30 | 2/127 | 1.57% | 0.19 – 5.57% |
| T36 field | 1/66 | 1.52% | 0.04 – 8.16% |
| T36 + p33(T68-1) | 16/90 | 17.78% | 10.52 – 27.26% |
| T36 + p33 + CPm + 5′UTR | 17/90 | 18.89% | 11.41 – 28.51% |

Exact Fisher two-tailed tests:

| Comparison | p |
|---|---|
| p33 swap (16/90) vs T36 (1/66) | **0.0012** |
| T68-1 (95/215) vs T36 (1/66) | **< 0.00001** |
| p33 (16/90) vs p33+CPm+UTR (17/90) | **1.00** |
| T30 (2/127) vs T36 (1/66) | **1.00** |

## (a) Logical soundness of the inference chain

**Step 1 (CPm falsified) — sound in direction, overstated in scope.**
The logic is valid: identical protein sequence cannot produce a phenotype difference *through protein sequence*. But the brief writes the conclusion as "CPm does not explain the transmission gap," which is broader than what follows. Identical amino acids do not rule out (i) synonymous codon differences altering translation rate or RNA structure, (ii) differences in CPm expression level driven by upstream sequence, or (iii) CPm requiring a partner protein that differs. The defensible claim is narrower: *CPm coding variation* is excluded. The functional data in B3 support the broader claim far better than the alignment does — p33+CPm+5′UTR gains nothing over p33 alone (p = 1.00). Lead with that, not the alignment.

**Step 2 (p33 explains most of the gap) — the strongest link in the chain.**
16/90 vs 1/66 is genuinely significant (p = 0.0012), and the effect is large. This survives review.

**Step 3 (p33 alone insufficient; need p61/p65) — this is the weak link, and it is load-bearing.**
The entire "5.2% gap" is an artifact of comparing two numbers that cannot be subtracted. 17.8% comes from Shilts 2020; 23% comes from Harper 2016, a paper the brief states outright has not been read and whose denominators are unknown. Different labs, different aphid cohorts, different years, possibly different host plants and inoculation access periods. Transmission rate in this system is notoriously sensitive to all of those.

Even granting the comparison, the arithmetic fails on its own terms. 17.8% (CI 10.5–27.3%) and 23% overlap heavily. I computed the power to distinguish 17.8% from 23.0% at n = 90 per arm: **14%**. To reach 80% power you would need roughly **950 aphids per arm**. The study is not merely underpowered for this comparison — it is nowhere near it. There is no statistical basis for asserting a residual gap exists at all, let alone attributing it to p61/p65.

This matters because Step 3 is what justifies building the multi-gene constructs. Remove it and the construct program shrinks considerably.

**Step 4 (K174R) — the brief's own data contradict it, and the brief says so without following through.**
T30 and FS577 both carry R174. They differ 15-fold in transmission. That is a direct within-genotype falsification of K174 as the determinant, and the brief correctly notes the puzzle — then proceeds to put K174R in the lead construct anyway. Note also that T36 field's A174 is flagged in the brief as a *frameshift artifact*, meaning that row is a sequencing error, not a biological observation, and should be struck from the table rather than listed alongside real residues.

Four isolates cannot support a residue-level claim. With n = 4 and a binary residue, any residue splits the set somehow; K174 tracking the top transmitter is what you would expect by chance roughly half the time.

## (b) Strength of evidence

| Claim | Rating | Why |
|---|---|---|
| Transmission varies ~16–29× across isolates | **Strong** | p < 0.00001, non-overlapping CIs, large N for T68-1 |
| CPm coding variation does not drive the gap | **Strong** | Direct functional test (p = 1.00 for CPm addition), not just alignment |
| p33 is a major transmission determinant | **Strong** | p = 0.0012, replicated in direction by the 2026 abstract |
| p33 explains *most* of the gap | **Moderate** | 17.8% vs T68-1's 44.2% — p33 recovers under half the donor's rate |
| p61/p65 are additionally required | **Weak** | Rests on a cross-study subtraction with 14% power and an unread source |
| K174R is the key residue | **Weak** | n = 4; directly contradicted by T30 vs FS577; one row is a sequencing artifact |
| FS577 is a 24.1% transmitter | **Unverifiable** | No denominator anywhere in the brief |

## (c) Confounds and alternatives not addressed

1. **p33 swap does not recover the donor phenotype.** T68-1 is 44.2%; T36 carrying T68-1's p33 reaches 17.8% — about 40% of the donor rate, and the CIs do not overlap. The brief treats p33 as "most of the gap." A cleaner reading is that p33 is necessary and large but genuinely partial, with the remainder in an unidentified elsewhere. That is a different research question from "which of p61/p65 tops it up."

2. **No reciprocal swap.** Every experiment cited moves T68-1 sequence *into* T36. Nobody has put T36's p33 into T68-1. If p33 is the determinant, that should crash T68-1's 44.2%. If it doesn't, p33 is permissive rather than causal in that background. This is the single most informative missing experiment and it is conspicuously absent.

3. **p33 is a viroporin (B7) — so its swap has systemic effects.** An ion channel that alters membrane properties and localizes to ER and plasma membrane could change virion titre, tissue tropism, or phloem loading. Any of those would change how many virions an aphid acquires without p33 having any vector-interaction role at all. The brief never separates *acquisition* from *transmission*. Titre in the source plant is the obvious confound and it is not measured or controlled anywhere in the evidence presented.

4. **Vector genetics and rearing are unmodelled.** *T. citricida* colonies differ in transmission competence between labs and across generations. Comparing Shilts 2020 to Harper 2016 assumes vector equivalence that nobody has demonstrated.

5. **The confirmation-bias question in the brief's own red-team section is not answered.** Whether p33 was nominated before or after the CPm falsification determines whether B3–B7 is a test or a search. The brief asks the question and leaves it open. It should be answered from the lab notebook, in writing, before construct design.

6. **The 2026 "coordinated function" quote is abstract-level.** Abstracts state the authors' preferred framing. "Requires coordinated function" is compatible with p61/p65 being individually dispensable, or with an effect that fails to reach significance in the full paper. Building constructs on an unread abstract's phrasing repeats the Harper 2016 error one paper later.

## (d) The single most valuable measurement

**The reciprocal swap: T68-1 carrying T36's p33, at n ≥ 200 aphids.**

It is the only experiment that can *break* the hypothesis rather than decorate it. Every current result is consistent with p33 being permissive in a T36 background; the reciprocal is not. If transmission collapses, p33's causal role is established in both directions and the construct program is justified. If it holds up, the hypothesis as written is wrong and five weeks of inference rest on a background-specific effect.

Two cheaper items should be collected in parallel, because both are retrieval rather than experiment:

- **FS577's denominator.** It is quoted to three significant figures with no N. Until that number exists, FS577 cannot be used in any comparison, and it currently anchors the CPm falsification.
- **The Harper 2016 full text and the Shilts 2026 full text.** Two of the four load-bearing evidence blocks are unread sources quoted secondhand. Both are obtainable by interlibrary loan or by emailing the corresponding author, in days rather than weeks.

## (e) Verdict

**Proceed to construct design — but on a corrected and much narrower plan.**

Not proceeding would be the wrong call. The p33 result is real, significant, and large, and a three-week decision window does not allow waiting for the reciprocal swap before designing anything. But three specific changes are required first, and none of them costs experimental time:

1. **Drop K174R from the lead construct.** It is contradicted by the brief's own T30/FS577 comparison and supported by n = 4. Carry it as a secondary arm if there is capacity; do not build the program around it.
2. **Demote the p61/p65 arms from "required" to "exploratory."** The 5.2% gap that justifies them does not survive contact with the arithmetic. Building them is defensible as exploration; describing them as filling a measured gap is not.
3. **Add the reciprocal swap to the construct set.** It is the cheapest possible falsification test of the whole program and it is currently missing.

On the brief's own multiple-comparison question: seven constructs with an uncorrected α of 0.05 gives roughly a 30% chance of at least one spurious hit. Pre-register which single construct is confirmatory and treat the rest as screening. Given the power calculation above — ~950 aphids per arm to resolve differences of the size being chased — the honest framing is that this round *screens for large effects only*, and the brief should say so rather than implying it can resolve 5-percentage-point differences.

**One-sentence assessment:** The p33 finding is strong enough to design constructs around; the p61/p65 and K174R extensions are not, and shipping them as established would carry an underpowered cross-study subtraction into three weeks of wet-lab work.
