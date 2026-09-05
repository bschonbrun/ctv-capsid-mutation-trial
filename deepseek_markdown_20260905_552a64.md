# Revised Proposal: Targeting CTV p65 and p61 to Disable Aphid Transmission While Preserving Virion Assembly and Plant Movement

**Prepared for:** CTV vector and disease management research group  
**Subject:** Revised mutation design based on transmission phenotyping data  
**Objective:** Identify capsid or virion-tail mutations that separate aphid transmissibility from virion assembly and systemic plant infection

---

## 1. Summary of Reassessment

The original proposal targeting the N‑terminal domain of the minor coat protein CPm (Δ2–67) was based on the general assumption that CPm is a key aphid transmission determinant. However, new sequence and functional data provided by the research group show that this assumption is not supported for the isolates in question.

- CPm is **100% identical** between the high‑transmission isolate FS577 and the low‑transmission isolate T36 (field isolate U16304 / infectious clone AY170468).
- Reciprocal swap experiments (Harper et al., 2016) demonstrate that replacing **p65 and p61** from T36 with those from FS577 increases transmission from 1.5% to ~17.9%, while replacing CPm alone has no effect.
- Ranked transmission determinants:
  1. **p65 + p61** (major effect, ~18 percentage points)
  2. **p33** (secondary effect, ~5–7 percentage points)
  3. **CPm** (no measurable effect in this system)

Therefore, the revised proposal targets **p65 and p61** as the primary candidates for uncoupling aphid transmission from virion assembly and systemic movement.

---

## 2. Background and Rationale for New Target

CTV virions have a complex architecture. The major coat protein p25 covers most of the particle, while one end contains the minor coat protein CPm together with p65 and p61. In closteroviruses, p65 and p61 are structural proteins associated with the virion tail and are thought to be involved in virion assembly, stability, and vector interaction.

The data from Harper et al. (2016) strongly suggest that p65 and p61, rather than CPm, are the primary determinants of aphid transmissibility in the FS577 vs T36 system. The sequence differences between the two isolates in p65 and p61 are limited (2 and 9 amino acids, respectively), making them ideal targets for mutagenesis to test transmission function.

---

## 3. Specific Sequence Differences and Proposed Mutations

Starting genome: **T36 infectious clone AY170468** (or EU937521, which is equivalent for this purpose).

### p65 (595 aa protein)
Differences between FS577 and T36 clone:
- G227S
- R496H

**Proposed mutation for T36:**  
Introduce the FS577-like residues into T36 p65:  
**T36 p65 G227S + R496H**

### p61 (536 aa protein)
Differences between FS577 and T36 clone:
- S169N
- I179T
- T224A
- M289T
- D324G
- E382D
- S391G
- I455V
- D458G

**Proposed mutation for T36:**  
Introduce all nine FS577-like substitutions into T36 p61:  
**T36 p61 S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G**

### Combined mutation
**T36 p65(G227S, R496H) + p61(S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G)**

---

## 4. Staged Approach to Isolate Effects

To determine the individual contributions of p65 and p61, and to avoid confounding effects, the following mutant series should be generated in the T36 infectious clone:

1. **T36 p65‑FS577** (G227S + R496H only)
2. **T36 p61‑FS577** (all nine p61 substitutions only)
3. **T36 p65‑FS577 + p61‑FS577** (combined)

If necessary, further fine‑mapping can be done by introducing subsets of the p61 substitutions (e.g., clustered charged residues: D324G, E382D, D458G) to identify the minimal set required for transmission enhancement.

**Reciprocal control:**  
To confirm the role of these residues, the reverse experiment is recommended: introduce T36‑like amino acids into the FS577 background at the corresponding p65 and p61 positions, and measure whether transmission decreases.

---

## 5. Mechanistic Hypotheses

The exact mechanism by which p65 and p61 influence aphid transmission is not yet resolved. The following hypotheses should be tested:

### Hypothesis A: Altered virion tail structure and aphid foregut binding
p65 and p61 are components of the virion tail. The FS577‑specific residues may alter the surface charge or conformation of the tail, enhancing retention in the aphid foregut. This would be consistent with non‑circulative transmission.

**Test:**  
- Purify virions from mutant and wild‑type plants.  
- Perform *in vitro* binding assays to aphid foregut extracts or dissected foreguts.  
- Compare binding affinity using surface plasmon resonance or ELISA‑based assays.

### Hypothesis B: Increased virion stability or titer in phloem
p65/p61 may affect virion assembly efficiency or stability, resulting in higher accumulation of intact virions in phloem sap, which increases acquisition by aphids.

**Test:**  
- Quantify virion and RNA titers in phloem sap or whole‑plant extracts.  
- Compare particle integrity by electron microscopy and nuclease protection assays.

### Hypothesis C: Indirect effect via interaction with other viral or plant factors
p65/p61 may interact with plant proteins or other viral proteins (e.g., p33, p20) that modulate aphid attraction or feeding behavior.

**Test:**  
- Use yeast two‑hybrid or co‑immunoprecipitation to identify binding partners of p65/p61 from wild‑type and mutant viruses.

---

## 6. Expected Phenotype

If p65 and p61 are the primary transmission determinants:

| Property | Expected outcome |
|---|---|
| Virion self‑assembly | Maintained (mutations are conservative) |
| Cell‑to‑cell movement | Maintained |
| Systemic movement in citrus | Maintained |
| Aphid acquisition / transmission | Strongly reduced or lost (T36‑like low transmission) |
| Plant‑to‑plant spread by aphids | Disabled |

The mutations are relatively conservative (mostly surface‑exposed residues with moderate charge changes), so major structural disruption is unlikely. However, some effect on virion stability cannot be excluded and must be monitored.

---

## 7. Validation Plan

1. **Virus generation and plant infection**  
   - Introduce mutations into T36 infectious clone (AY170468) by standard mutagenesis.  
   - Inoculate citrus seedlings by agroinfiltration or particle bombardment.  
   - Confirm systemic infection by RT‑PCR and symptom development.

2. **Virion characterization**  
   - Purify virions from infected tissue.  
   - Examine by transmission electron microscopy for particle length, flexibility, and tail morphology.  
   - Western blot for p25, CPm, p65, p61.

3. **Aphid transmission assays**  
   - Use *Toxoptera citricida* and *Aphis gossypii*.  
   - Acquisition access period on infected citrus, then inoculation access on healthy seedlings.  
   - Compare transmission rates of mutants, wild‑type T36 (low), and FS577 (high).

4. **Titer quantification**  
   - qRT‑PCR for viral RNA in phloem sap or leaf tissue.  
   - ELISA for coat protein.

5. **Stability testing**  
   - Serial passage in citrus to check for reversion or compensatory mutations.

---

## 8. Risks and Mitigations

**Risk 1:** The p65/p61 mutations may reduce virion assembly or systemic movement more than expected.

- Mitigation: Test the p65 and p61 mutants separately. If combined mutant is defective, identify which single protein is responsible and use less disruptive substitutions (e.g., conservative changes).

**Risk 2:** The transmission phenotype may not be fully recapitulated because the T36 infectious clone may differ subtly from the original field isolate.

- Mitigation: Use the exact clone AY170468 as starting material; also confirm the sequence of the clone before mutagenesis.

**Risk 3:** The effect may be due to a combination of p65, p61, and p33; p65+p61 alone may not achieve the full 18 percentage point increase.

- Mitigation: Include p33 mutations (3 aa + 1 gap) in later constructs if needed, but first establish the p65+p61 effect.

**Risk 4:** The mechanism may be complex and involve plant‑virus‑vector interactions that are not captured by simple virion binding assays.

- Mitigation: Use the mechanistic tests described above; also perform aphid feeding behavior assays (electrical penetration graph) to assess whether infected plants alter aphid probing.

---

## 9. Conclusions and Recommendations

Based on the provided sequence and functional data, the revised first‑trial mutation should target **p65 and p61**, not CPm. The specific mutations are:

- **T36 p65 G227S + R496H**
- **T36 p61 S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G**

The staged approach (p65 alone, p61 alone, combined) will isolate the contribution of each protein. The reciprocal experiment in FS577 background is essential to confirm causality.

This strategy is more likely to produce a CTV variant that retains systemic movement and virion assembly but cannot be transmitted by aphids, because it directly targets the residues that differ between high and low transmission isolates and that have been functionally implicated by swap experiments.

---

## 10. References

1. Harper, S.J., Killiny, N., Tatineni, S., Gowda, S., Cowell, S.J., Dawson, W.O. (2016). Sequence variation in two genes determines the efficacy of transmission of citrus tristeza virus by the brown citrus aphid. *Archives of Virology*, 161, 3559–3563. DOI: 10.1007/s00705-016-3070-x

2. Satyanarayana, T., Gowda, S., Ayllón, M.A., Dawson, W.O. (2004). The p27 minor coat protein of Citrus tristeza virus is essential for virion assembly and systemic infection. *Journal of Virology*, 78, 3170–3177.

3. Dawson, W.O., Bar‑Joseph, M., Garnsey, S.M., Moreno, P. (2015). Citrus tristeza virus: making an ally from an enemy. *Annual Review of Phytopathology*, 53, 137–155.

4. Peremyslov, V.V., Andreev, I.A., Prokhnevsky, A.I., Duncan, G.H., Taliansky, M.E., Dolja, V.V. (2004). Complex molecular architecture of beet yellows virus particles. *Proceedings of the National Academy of Sciences USA*, 101, 5030–5035.

5. Moreno, P., Ambrós, S., Albiach‑Martí, M.R., Guerri, J., Peña, L. (2008). Citrus tristeza virus: a pathogen that changed the course of the citrus industry. *Molecular Plant Pathology*, 9, 251–268.