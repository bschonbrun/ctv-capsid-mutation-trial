# Peer Review — x-ai/grok-4.6

*Independent review of the CTV transmission brief. Generated 2026-09-05 06:46 PDT via OpenRouter. Tokens: 3216 in / 7519 out. 125s.*

---

**(a) Logical soundness of the inference chain**

The chain (CPm falsified → p33 explains most of the gap → p33 insufficient so p61/p65 required → K174R is a key residue → build p33 K174R + p61/p65 constructs) is only partly valid. Several steps overreach the data, and one step is internally inconsistent.

STEP 1 is valid only in a narrow form. FS577 vs T36-field CPm is 240/240 amino acids identical while reported transmission is 24.1% vs 1.5%. That falsifies “CPm *amino-acid sequence variation* explains the FS577–T36 gap.” It does **not** falsify CPm as a transmission factor (RNA structure, codon usage, expression level, PTMs, or CPm function that is identical in sequence but epistatic with other proteins). The B1 conclusion also misstates the fold-change: 95/215 (44.18%) vs 1/66 (1.5%) is ~29-fold, not 16-fold. The 16-fold figure is 24.1/1.5 and belongs to FS577 vs T36, not T68-1 vs T36. High transmitters are being conflated.

STEP 2 is the strongest link. T36 baseline 1/66 (1.5%) vs T36+p33(T68-1) 16/90 (17.8%) is a large, statistically clear gain. The further construct T36+p33+CPm+5′-UTR 17/90 (18.9%) is not different from 16/90 (one extra transmission). “CPm adds <1%” is descriptively true and also uninformative: n=90 vs 90 has essentially no power to detect a small CPm contribution.

STEP 3 does not follow. The 5.2-point residual (17.8% vs Harper’s 23%) is being treated as a real biological gap that “must” be p61, p65, or 5′-UTR. That residual is smaller than the sampling error on 16/90 (Wilson 95% CI roughly 11–27%). Harper 2016 is unread, denominators unknown. The Shilts 2026 claim that efficient transmission “requires coordinated function of … P33, P61, and P65” is an abstract sentence, not a methods result you have evaluated. Three untested variables are being collapsed into one hypothesis.

STEP 4 is the broken link. K174 is **not** a credible necessary residue on these data:
- T68-1 (44.18%): K174
- T36 infectious clone EU937521: **also K174**, and T36 baseline is 1.5%
- FS577 (24.1%): R174
- T30 (2/127 = 1.57%): R174

If the swap recipient is the T36 clone, both donor and recipient p33 already encode K174, so the 1.5% → 17.8% gain **cannot be K174R**. Independently, R174 is compatible with both 24.1% (FS577) and 1.57% (T30): a ~15-fold difference *inside* the R174 genotype. K174 is correlated with T68-1 in an alignment, not shown to be causal, and is insufficient (T36 clone) and unnecessary (FS577).

FINAL plan therefore targets the wrong resolution (a single residue that the swap already contradicts) plus two genes supported mainly by an unread paper and an abstract.

Even a correct p33 whole-gene swap does not close the phenotype: 16/90 = 17.8% is far below 95/215 = 44.18% (two-proportion z ≈ 5, p ≪ 0.001). Full 5′-end at 23% (Harper, n unknown) still leaves ~21 points of T68-1 unexplained. 3′ ORFs, titer, aphid colony, and assay conditions remain in the residual.

**(b) Strength of evidence**

| Claim | Rating | Reasoning |
|---|---|---|
| T68-1 transmits far more than T36/T30 | **Strong** | 95/215 = 44.18% (Wilson ~37–51%) vs 1/66 = 1.5% (Clopper–Pearson ~0.04–7.7%) and 2/127 = 1.57%. CIs do not overlap; the T68-1 vs T36 difference is robust. T36 1/66 and T30 2/127 are indistinguishable (CIs ~0.04–7.7% vs ~0.2–5.6%). |
| “16-fold T68-1 vs T36” | **Weak** | Arithmetic error/conflation. 44.18/1.5 ≈ 29-fold. 16-fold is 24.1/1.5 (FS577 vs T36). |
| CPm AA variation does not explain FS577 vs T36 | **Moderate** | 240/240 identity is a clean sequence observation. Phenotype comparison is only as good as FS577’s missing denominator and cross-assay comparability. Does not rule CPm out of the mechanism. |
| p33 swap drives ~17-point gain; CPm adds nothing detectable | **Strong** (gain) / **Moderate** (CPm-null) | 16/90 vs 1/66: OR ≈ 14, two-sided Fisher exact p ≈ 0.001–0.003. 17/90 vs 16/90 is one event; correctly “no gain,” but not a powered null. |
| Full 5′-end reaches 23%; 5.2-point gap is p61/p65/UTR | **Weak** | Harper 2016 not fetched; n unknown. 5.2 points is well within error on n=90. If Harper n were ~20, 23% is compatible with almost anything; if n=200, the gap still would not identify *which* of three factors. |
| K174R is a candidate key residue | **Weak** | Pattern-matching on five isolates. Contradicted by T36 clone (K174, 1.5%) and by T30 vs FS577 (both R174, 1.57% vs 24.1%). T36-field A174 is a frameshift artifact and should not enter the argument. |
| Coordinated p33+p61+p65 required | **Weak** | Visible Shilts 2026 abstract only; construct table and stats unread. This is author interpretation, not a result you can defend. |
| p33 is a Class I viroporin | **Moderate** as cell biology; **weak** as transmission genetics | Aknadibossian 2025 (oocyte currents, ER/PM localization) does not map onto aphid transmission or onto residue 174. |
| FS577 = 24.1% | **Weak** as a quantitative anchor | No N. Without N it is not comparable to 95/215, 16/90, 2/127, or 1/66. |

On the brief’s own quantitative questions: T36 1/66 95% CI is very wide (~0.04–7.7%) and does **not** exclude T30’s 1.57%. T68-1 vs T36 CIs do not overlap, so a large difference is real (the 16-fold slogan is still wrong). Power to detect a 10-point transmission difference at n=66–90 is roughly 30–50%, inadequate for the 5.2-point Harper residual or for a 7-construct combinatorial screen without a pre-specified analysis plan and larger n.

**(c) Key confounds and alternative explanations**

1. **Titer / fitness, not vector specificity.** p33 is a movement/viroporin protein. A chimeric p33 that raises source-plant titer, phloem loading, or virion yield will raise apparent transmission without being an aphid-binding determinant. No titer-normalized transmission is in the brief.

2. **Cross-experiment incommensurability.** 44.18%, 24.1%, 23%, 17.8%, 1.57%, 1.5% are treated as one series. Aphid clone, acquisition/inoculation time, receptor genotype, temperature, and virus titer routinely move CTV transmission by this much. FS577’s 24.1% with no N is the clearest example.

3. **Incomplete genome comparison.** “CPm identical, therefore the gap is p33/p61/p65” inspects a handful of 5′-proximal ORFs. CTV has additional ORFs (p6, CP/p25, p18, p13, p20, p23, replicase). If the FS577–T36 comparison was not whole-genome, the inference is unanchored. The brief never shows p33 pairwise identity T68-1 vs T36 clone — the actual object of the swap.

4. **K174 is a post-hoc alignment hit.** After CPm was dropped, residue 174 was read off five sequences. T30 vs FS577 (both R174, ~15-fold phenotypic gap) is direct evidence that other loci dominate. Treating K174R as the design axis is confirmation bias.

5. **Additive vs synergistic vs redundant 5′ factors.** p33, p61, p65, and 5′-UTR are four variables. One 5.2-point residual cannot distinguish additivity, synergy, or noise. Combinatorial constructs (7 tests) without a multiplicity plan will overfit.

6. **RNA-level CPm/p33 effects.** 100% amino-acid identity ≠ 100% nucleotide identity. Codon pair, packaging signals, and 5′-UTR structure are untested and are exactly what a “CPm+5′-UTR add-on” that went 16/90 → 17/90 was underpowered to see.

7. **Secondary citation.** Harper 2016 is known only through Shilts 2020. Unread denominators, unread chimeric breakpoints (does “full 5′-end” even include p65/p61?).

8. **T36-field U16304 A174 frameshift** is a sequence artifact and should be removed from the residue argument.

9. **Helper-component / aphid-side variation** is unmentioned. *T. citricida* colony genotype and endosymbionts can dominate transmission rate.

**(d) Single measurement that would most strengthen or break the case**

**Titer-matched transmission of the existing T36 vs T36+p33(T68-1) pair, plus a full amino-acid (and nucleotide) p33 alignment of those two genomes, with Harper 2016 raw n retrieved in parallel.**

Concretely: quantify virion or genomic RNA in the source plants used for acquisition; then rerun transmission with n ≥ 200 aphids per arm (or enough for 80% power on a 10-point difference; at p≈0.18 that is ~230/arm). If the 16/90-type gain vanishes after titer matching, p33 is a fitness/movement gene, not a transmission determinant, and construct design should stop. If the gain survives, the alignment tells you the swap is *not* K174R (both already K174) and identifies the actual p33 differences to mutagenize. Harper’s n decides whether the 23% vs 17.8% residual is real enough to justify p61/p65 constructs at all.

(If only one lab action is allowed this week: open Shilts 2026 and Harper 2016. An unread 2026 chimera paper that already did p33/p61/p65 substitutions is the highest-leverage object in the brief.)

**(e) Verdict: do not proceed with construct design as specified**

The gene-level observation that T68-1 p33 raises T36 transmission from 1/66 to 16/90 is real and worth pursuing. The **stated** plan — p33 **K174R** + p61/p65 combinatorial variants — is not supported. K174R is incompatible with the T36 clone already encoding K174 and with a 15-fold gap between two R174 isolates (2/127 vs 24.1%). p61/p65 rest on a 5.2-point residual inside the CI of 16/90 and on a paywalled abstract. n=66–90 cannot resolve the effects you intend to screen; seven constructs without a pre-specified contrast and without titer controls will produce uninterpretable hits.

Spend the next days on Harper 2016 n’s, Shilts 2026 full constructs/stats, whole-p33 differences (not residue 174), and a power calculation. Redesign around titer-controlled whole-gene or domain swaps if those papers still point at p33. Do not freeze K174R+p61+p65 constructs in the next 3 weeks on this brief.
