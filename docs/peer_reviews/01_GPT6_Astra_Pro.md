# Peer Review — openai/gpt-6-astra-pro

*Independent review of the CTV transmission brief. Generated 2026-09-05 06:50 PDT via OpenRouter. Tokens: 31130 in / 17195 out. 324s.*

---

## (a) Logical soundness of the inference chain

**The evidence supports a contribution from the p33-containing substitution in one genetic background. It does not establish the proposed residue-level mechanism or a transmission-disabled, otherwise functional virus.**

I refer to section labels because the brief has no line numbers. The assessments below concern the evidence as presented; I have not independently verified the cited papers or alignments.

### 1. CPm identity narrows the hypothesis; it does not falsify CPm involvement

The **240/240-amino-acid identity** between FS577 and T36 (B2) supports this narrow conclusion: **differences in CPm amino-acid sequence cannot explain their reported phenotypic difference**, assuming the aligned sequences represent the actual phenotyped material.

It does not rule out differences in CPm abundance, expression timing, incorporation into particles, or interactions with other viral components. Amino-acid identity also does not establish nucleotide-sequence or regulatory-context identity.

Thus, “CPm sequence variation does not explain this comparison” is defensible; “CPm is falsified as a transmission determinant” is not.

### 2. The p33 substitution supports an effect, but not “most of the gap”

The change from **1/66 to 16/90** is an increase from **1.52% to 17.78%**, or **16.26 percentage points**, not an unqualified “17% gain” (B3).

Relative to T68-1 at **95/215 = 44.19%**, that increase accounts for only approximately **38% of the baseline-to-donor difference**. It accounts for approximately **76%** of the difference between baseline and the reported **23%** broader swap—but that comparison is cross-study and lacks denominators and methodological verification.

A whole-gene substitution also does not distinguish the encoded protein’s activity from effects involving RNA sequence, expression, or junction context.

### 3. Neither “CPm adds nothing” nor “p61/p65 explain the remainder” follows

The comparison is **16/90 versus 17/90**: a difference of **1.11 percentage points**, not “<1%” (B3). Moreover, **CPm and the 5′-UTR were added together**. Their separate effects are unidentified.

The **5.2-percentage-point** difference between **17.8% and 23%** (B4) is not an established biological residual. Without the original denominator, construct boundaries, and matched experimental conditions, it could reflect sampling error or study differences. It cannot be assigned to p61, p65, or regulatory context.

### 4. Position 174 is not supported as a key determinant

The allele pattern in B5 is not persuasive association evidence:

- **R174** occurs in both FS577 at **24.1%** and T30 at **1.57%**.
- **K174** occurs in T68-1 and the T36 infectious-clone sequence.
- The field-isolate **A174** is described as a **frameshift artifact**, so it is not reliable biological variation.

If the low-transmission T36 experimental material corresponds to the K174 clone, it directly undermines K174 as sufficient for high transmission. If that correspondence is unknown, linking sequences to the actual phenotyped stocks is a prerequisite.

“K174 is conserved in high transmitters” is unsupported by one high-transmitting isolate. Neither necessity nor sufficiency has been demonstrated.

### 5. Gain of transmission is not evidence for selective containment

A substitution that increases transmission does not establish that reversing a particular residue, or altering associated proteins, will selectively eliminate transmission while preserving assembly and plant infection. The final design inference outruns the evidence.

The desired preservation of “plant-to-plant movement” also needs clarification: aphid transmission is itself plant-to-plant movement. Presumably the intended distinction is preservation of within-plant spread and/or a specified non-vector route.

## (b) Strength of evidence

### Quantitative assessment

**These calculations assume the denominators represent independent Bernoulli transmission trials.** If they instead count aphids used in pooled exposures, or observations clustered within donor plants or experimental runs, ordinary binomial inference is inappropriate or overly precise.

Approximate **95% Wilson confidence intervals** are:

| Observation | Estimate | 95% CI |
|---|---:|---:|
| T68-1, **95/215** | 44.19% | 37.7–50.9% |
| T30, **2/127** | 1.57% | 0.43–5.56% |
| T36, **1/66** | 1.52% | 0.27–8.10% |
| T36 + p33, **16/90** | 17.78% | 11.3–26.9% |
| T36 + p33 + CPm + 5′-UTR, **17/90** | 18.89% | 12.1–28.2% |

For **1/66**, the **Clopper–Pearson exact interval is approximately 0.038–8.16%**, rather than the brief’s quoted upper limit of approximately **7.7%**. T36 plainly does **not** exclude T30’s **1.57%** rate.

For **16/90 versus 1/66**, the two-sided Fisher exact test gives **p ≈ 0.00116**. The estimated increase is **16.26 percentage points**, with an approximate score-based 95% interval of **7.0–25.5 percentage points**. This is substantial evidence for a difference, conditional on valid experimental units and comparable groups.

For **17/90 versus 16/90**, the approximate 95% interval for the difference spans roughly **−10 to +12.5 percentage points**. These data cannot establish equivalence or exclude a consequential additional effect.

There is also an arithmetic error in B1:

- T68-1/T36: **44.19/1.52 ≈ 29.2-fold**, not 16-fold.
- FS577/T36: approximately **16-fold**, using the reported percentages.

The T68-1–T36 difference is well supported under the binomial assumptions, but its fold magnitude is uncertain because the baseline contains only **one success**. Non-overlapping confidence intervals do not validate a miscalculated ratio.

### Claim ratings

| Key claim | Rating | Reason |
|---|---|---|
| T68-1 transmits more efficiently than T36 in these assays | **Strong, conditional** | **95/215 versus 1/66** supports a large difference if trials and materials are comparable and appropriately independent. |
| FS577 differs substantially from T36 | **Weak as documented** | **24.1%** has no numerator, denominator, replication structure, or assay description. |
| CPm amino-acid differences explain FS577–T36 variation | **Evidence against: moderate** | **240/240 identity** excludes that specific explanation if stock identities are correct; it does not exclude CPm function. |
| The p33-containing substitution increases transmission in T36 | **Moderate** | Strong count-level contrast, but construct verification, source-plant effects, and biological replication are not documented here. |
| CPm has no additional effect | **Weak** | Imprecise **16/90 versus 17/90** comparison; CPm is bundled with the 5′-UTR. |
| p61/p65 explain the broader-swap advantage | **Weak** | The **23%** result lacks a denominator; the **5.2-point** difference is untested and cross-study. |
| Coordinated p33/p61/p65 function is required | **Weak as documented** | B6 supplies an abstract’s interpretation, not evidence sufficient to evaluate necessity, interactions, or statistical support. |
| K174R is a key transmission-containment target | **Weak** | Sparse, genetically confounded isolate comparison, sequence-provenance problems, and no residue-specific causal evidence. |
| Viroporin activity explains aphid transmission | **Weak** | B7 may support channel activity, but heterologous membrane currents do not establish a transmission mechanism. |

### Power and multiplicity

The brief’s blanket claim of **30–50% power for a 10% difference** is not interpretable without baseline rates, allocation, clustering, and whether “10%” means relative change or **10 percentage points**.

For illustration, standard independent, equal-sized two-group calculations at two-sided **α = 0.05** and **80% power** require approximately:

- **200 per group** for **10% versus 20%**;
- **290 per group** for **20% versus 30%**;
- **940 per group** for **17.8% versus 23%**.

These are illustrative statistical requirements, not recommendations for a construct-testing program. Clustering and multiplicity would increase requirements.

A hypothetical **23%** estimate based on **20** independent trials has an approximate standard error of **9.4 percentage points**, versus **3.0 points** with **200**. Neither denominator can be treated as immaterial.

Finally, construct count is not the same as hypothesis count. Historical comparisons and new confirmatory tests should be distinguished, and primary contrasts specified in advance. Statistical independence does not eliminate multiple-testing concerns; shared controls also make comparisons correlated.

## (c) Key confounds or alternative explanations

1. **Experimental-unit misidentification.**  
   Does **95/215** mean 95 infected recipient plants out of 215 exposure trials, or 95 individually demonstrated transmitting aphids? If multiple aphids jointly inoculated a plant, infection cannot be assigned independently to each aphid. Donor plants, recipient plants, aphid batches, and runs create additional clustering.

2. **Source availability rather than transmission-specific activity.**  
   A higher recipient infection rate could result from greater infectious-virus abundance, altered tissue distribution, or more accessible infection sites in the donor plant. The p33 substitution need not act directly at a vector–virus interface.

3. **Sequence–phenotype mismatch.**  
   The use of both **U16304** and **EU937521** for “T36,” together with a stated frameshift artifact, makes stock identity a central concern. A GenBank genotype assignment does not establish that an archived sequence represents the tested stock.

4. **Whole-genome background and mixed populations.**  
   FS577, T30, and T68-1 differ at many linked sites. The approximately **15.4-fold** FS577–T30 difference despite shared R174 illustrates that background matters; it does not identify which background features matter. Mixed infections and within-stock diversity also remain unaddressed.

5. **Assay heterogeneity.**  
   Host condition, aphid population, exposure conditions, recipient susceptibility, detection timing, and assay sensitivity can alter measured transmission. Cross-paper percentages should not be subtracted as though they came from a randomized contemporaneous experiment.

6. **Pleiotropy and endpoint ambiguity.**  
   Reduced recipient infection could reflect impaired replication, particle integrity, or plant establishment—not selective transmission containment. B7’s membrane-related activity makes indirect explanations particularly plausible.

7. **Interactions are asserted, not estimated.**  
   “Coordinated function” does not distinguish additive effects, synergy, redundancy, or generic compatibility between components.

8. **Selective evidence collection and incomplete provenance.**  
   The hypothesis sequence does not itself prove confirmation bias, but the review needs explicit inclusion criteria and contradictory findings. An unread secondary citation and an abstract are insufficient foundations for detailed causal claims.

## (d) The single measurement that would most strengthen—or break—the case

**The most informative quantity is the transmission-specific effect size for the already-reported p33 comparison: the difference in recipient infection probability after accounting for infectious-virus availability in the source plant, estimated across independent biological replicates.**

This addresses the central unresolved distinction:

- A persistent difference at comparable source infectious-virus availability would strengthen a transmission-specific interpretation.
- A difference explained by source infection burden or between-donor variation would weaken that interpretation substantially.

The relevant uncertainty must be based on independent biological units, not merely the total number of aphids or recipients.

This measurement would not, by itself, validate K174R or establish p61/p65 necessity. No single measurement can repair all those separate inferential gaps. Nor would observing zero transmissions establish zero risk: even **0/90 independent trials** gives a one-sided **95% upper bound of approximately 3.3%**.

## (e) Final verdict

**Do not proceed to the proposed construct design now: the evidence supports p33-region involvement in one background, but not K174R targeting, p61/p65 necessity, or selective loss of transmission with preserved viral function; resolve experimental-unit, stock-provenance, source-availability, and primary-source uncertainties before committing to that design.**
