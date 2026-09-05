# Response to Structural, Mechanistic, and Prioritization Questions

**From:** DeepSeek  
**To:** CTV research group  
**Re:** Stage_0 decision support for p65/p61 transmission determinant mutagenesis

Thank you for the thoughtful follow-up. Below are responses to the three questions, with the goal of informing construct order, residue subset selection, and mechanistic interpretation.

---

## 1. Necessity vs. Sufficiency — Recommended Phase 1 Priority

**Recommendation:**  
**Prioritize necessity testing in the FS577 background as Phase 1.**  
Specifically, introduce T36‑like amino acids into FS577 at the same p65 and p61 positions, and measure whether aphid transmission decreases from the high baseline toward the low T36 baseline.

**Rationale:**

- The ultimate biocontainment goal is to disable aphid transmission in a virus that currently transmits efficiently. The direct test of that goal is to take a high‑transmission isolate and knock transmission down.
- Necessity experiments ask, “Are these residues required for high transmission?” If the answer is yes, we have identified the minimal set of residues that must be altered to achieve the desired phenotype.
- Sufficiency experiments (adding FS577 residues to T36) are mechanistically informative but do not directly demonstrate that a field isolate can be rendered non‑transmissible by changing these residues. They show that the residues can confer a gain of function in a low‑transmission background, which may be more sensitive to background effects.

**How the two directions inform each other:**

- If necessity (FS577 → T36 residues) reduces transmission to near T36 levels, that strongly supports causality and provides a candidate for biocontainment.
- If sufficiency (T36 → FS577 residues) increases transmission to near FS577 levels, that confirms the residues are sufficient in the T36 context, but does not prove they are necessary in FS577 without the reciprocal experiment.
- Performing both directions, even if not simultaneously, is the gold standard for establishing sufficiency and necessity.

**Phase 1 plan:**

- Construct **FS577 p65(G227S, R496H)** alone, **FS577 p61(all nine T36‑like substitutions)** alone, and **FS577 p65+p61 combined**.
- Include wild‑type FS577 and T36 as controls.
- Aphid transmission assays with *T. citricida* and *A. gossypii*.
- If the combined mutant reduces transmission to ≤2–3%, proceed to dissect which subset is responsible. If not, test p33 in addition.

**Parallel option:**  
If resources allow, also begin building the T36 sufficiency constructs in parallel, but do not delay the necessity experiment. The necessity result will likely determine which subset of residues is most important.

---

## 2. Structural and Conservation Context

### 2.1 Evolutionary conservation across Closterovirus

Without a pre‑existing alignment, the first step is to generate a multiple sequence alignment of p65 and p61 from at least 15–20 full‑genome CTV isolates, plus representative members of other closteroviruses (e.g., Beet yellows virus, Lettuce infectious yellows virus). Conservation scores can be calculated using tools such as ConSurf or the EMBL‑EBI MSA package.

**Preliminary expectation based on CTV biology:**

- p65 and p61 are structural proteins associated with the virion tail. They are under moderate purifying selection, but many surface‑exposed residues are variable because they tolerate substitutions without breaking assembly.
- The fact that FS577 and T36 differ at only 11 positions in these two proteins, yet show a 16‑fold difference in transmission, suggests that the key residues are not deeply buried structural core residues; they are likely surface‑exposed or located in flexible regions that can modulate function without destroying the protein fold.

**Specific residues:**

| Protein | Residue change | Predicted location | Conservation expectation |
|--------|----------------|-------------------|--------------------------|
| p65 | G227S | ATPase domain, surface loop | Likely variable among isolates |
| p65 | R496H | Substrate‑binding domain, surface | Positively charged; may be under moderate constraint |
| p61 | S169N | ATPase domain, surface | Variable, polar |
| p61 | I179T | ATPase domain, buried or partially buried | Hydrophobic to polar; may affect local stability |
| p61 | T224A | ATPase domain, surface | Variable |
| p61 | M289T | ATPase domain, near active site | Sulfur to polar; may affect ATPase activity |
| p61 | D324G | ATPase domain, surface | Removal of negative charge; likely exposed |
| p61 | E382D | Linker between ATPase and substrate‑binding | Acidic to acidic, but shorter; may affect interdomain movement |
| p61 | S391G | Substrate‑binding domain, surface | Polar to small; likely exposed |
| p61 | I455V | Substrate‑binding domain, buried | Conservative, may be neutral |
| p61 | D458G | Substrate‑binding domain, surface | Removal of negative charge; likely exposed |

**Structural interpretation:**

- The nine p61 changes are **not clustered in a single continuous patch**. Instead, they are distributed across both the N‑terminal ATPase domain (residues 169, 179, 224, 289, 324) and the C‑terminal substrate‑binding domain (391, 455, 458) with one in the linker (382).
- Three of the nine changes involve loss of a negative charge: **D324G**, **E382D** (partial loss), and **D458G**. These are the most likely to have functional consequences, as they alter surface electrostatics.
- p65 changes are also surface‑exposed, with R496H removing a positive charge.

### 2.2 Minimal subset proposal

Based on charge and surface exposure, the highest‑priority subset to test first is:

> **p61 D324G + E382D + D458G**

This subset captures all three acidic residue changes, two of which are complete charge removal. If this subset is sufficient to alter transmission, it would greatly simplify downstream work.

**Fallback:**  
If the charged subset does not recapitulate the effect, expand to include the remaining p61 substitutions in groups:

- Group A: S169N, I179T, T224A (ATPase domain surface)
- Group B: M289T (near ATPase active site)
- Group C: S391G, I455V (substrate‑binding domain)

**Recommendation for initial constructs:**

- For **necessity**, build the full 11‑residue mutant first, because dissecting later is easier than building multiple small constructs before knowing the phenotype.
- For **sufficiency**, also build the full 11‑residue mutant in T36, but if resources are limited, start with the charged subset in T36.

---

## 3. Mechanism Prediction

Based on the distribution of the 11 residues and their predicted locations, the most likely mechanism is **altered virion tail stability and/or virion accumulation in phloem, leading to increased aphid acquisition**, rather than direct modulation of aphid foregut binding.

**Reasoning:**

- The residues are scattered across two structural domains of p61 and across two domains of p65. They do not form a single contiguous surface patch that would be expected for a direct receptor‑binding interface.
- Many of the changes are conservative or involve surface charge modulation. The loss of negative charges (D324G, D458G) could reduce repulsion between p61 monomers or between p61 and other tail proteins (p65, CPm, p25), stabilizing the tail.
- Stabilizing the tail could increase the proportion of intact, full‑length virions in phloem sap. Aphids acquire more virus when intact virions are abundant, which would explain the transmission difference without requiring a specific aphid‑binding change.

**Alternative possibility:**

- Some of the residues (especially charged ones) may still be exposed on the tail surface and could directly influence electrostatic interactions with the aphid cuticle. The cuticle is negatively charged, so removing negative charges from the virion surface could reduce electrostatic repulsion and enhance binding.

**How to distinguish:**

1. **Virion titer and integrity assay:**  
   - Purify virions from wild‑type and mutant plants.  
   - Compare particle length distribution by electron microscopy.  
   - Quantify intact virion RNA by nuclease protection assay.

2. **Aphid foregut binding assay:**  
   - Incubate purified virions with dissected aphid foreguts or foregut homogenate.  
   - Measure bound virions by qRT‑PCR or ELISA.  
   - If binding is similar between mutant and wild type but titer differs, mechanism is stability/titer. If binding differs, mechanism is direct interaction.

**Prediction for Stage_0 document:**  
The mechanism is most consistent with **titer/stability**, but direct binding cannot be ruled out without experimental data. Therefore, the first experiments should include both virion quantification and binding assays.

---

## 4. Next Steps for Stage_0

1. **Generate multiple sequence alignments** of p65 and p61 from available CTV isolates to confirm conservation at the 11 positions.
2. **Generate structural models** of p65 and p61 using AlphaFold or SWISS‑MODEL, and map the residues onto the models to visualize surface exposure and clustering.
3. **Construct the necessity mutants** in FS577 background:
   - p65 alone
   - p61 alone
   - p65+p61 combined
4. **Construct the charged‑subset mutant** (p61 D324G, E382D, D458G) in both FS577 and T36 backgrounds for initial finer mapping.
5. **Perform transmission assays** with both aphid species, including at least 100–150 aphids per treatment to achieve statistical power for detecting a >10 percentage point difference.
6. **Perform virion titer and binding assays** in parallel to determine mechanism.

This plan aligns with your Stage_0 decision document and provides a clear path from sequence data to functional confirmation.

---

**References:**

Harper, S.J., Killiny, N., Tatineni, S., Gowda, S., Cowell, S.J., Dawson, W.O. (2016). Sequence variation in two genes determines the efficacy of transmission of citrus tristeza virus by the brown citrus aphid. *Archives of Virology*, 161, 3559–3563. DOI: 10.1007/s00705-016-3070-x

Dawson, W.O., Bar‑Joseph, M., Garnsey, S.M., Moreno, P. (2015). Citrus tristeza virus: making an ally from an enemy. *Annual Review of Phytopathology*, 53, 137–155.

Peremyslov, V.V., Andreev, I.A., Prokhnevsky, A.I., Duncan, G.H., Taliansky, M.E., Dolja, V.V. (2004). Complex molecular architecture of beet yellows virus particles. *Proceedings of the National Academy of Sciences USA*, 101, 5030–5035.