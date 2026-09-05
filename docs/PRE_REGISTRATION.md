# Pre-Registration — CTV Paired p61+p65 Allele Swap: Blinded, Titer-Controlled Greenhouse Necessity Test

**Registry format:** OSF-style pre-registration (internal, unpublished; timestamped at commit to version control, before construct ordering).
**Date drafted:** 2026-09-05.
**Status:** Decision-meeting draft. Nothing in this document has been executed; all materials below are unpublished, published-isolate, greenhouse-scale work.
**Basis:** all numerical baselines verified against the primary literature during the six-model Round 3–4 adversarial review (`docs/peer_reviews_round3/CONSENSUS.md`); corrected claim set at `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md` §B10; in-silico construct definition at `docs/STAGE_0_IN_SILICO_PLANNING.md`.
**Design rule:** the panel consensus corrections are binding design inputs; every deviation from a previously circulated figure is marked **[corrected from]** with its source correction.

---

## 1. Study summary

**Question.** Do the p61 and p65 genes, together, *determine* aphid transmissibility in Citrus tristeza virus (CTV)? Harper et al. (2016) showed that moving FS577 (high-transmission) p61+p65 alleles *into* the T36 clone raised transmission from 0.6% to 17.9% (1/172 → 35/196) — the **gain-of-function** direction. The reciprocal — installing the T36 alleles of both genes into the FS577 backbone — is untested and is the design we actually need for a transmission-disabled ("biocontained") CTV vector. This trial is a **necessity test** of that reciprocal swap.

**Directional caveat (pre-registered, per panel correction on claim 24).** Only gain-of-function is published. Our lead construct assumes the effect is reciprocal. If it is not, the trial yields a decisive negative result, not ambiguity.

**Hypothesis class.** Confirmatory, single-stage, no interim analyses.

---

## 2. Hypotheses (written in advance)

### 2.1 Primary hypothesis (H1)

> Engineering the seven EU937521-validated T36 alleles of p61 and p65 **together** into the FS577 backbone yields a construct that (a) infects *Citrus macrophylla* systemically at titer equivalent to the FS577 parent, and (b) is transmitted by *Toxoptera citricida* at **≤5%** of recipient plants — at parental titer.

Both limbs (a) and (b) are required. A non-transmissible construct that fails limb (a) is a debilitated virus, not a biocontainment candidate, and does not support H1.

### 2.2 Null hypothesis (H0, stated in advance)

> The paired p61+p65 T36 allele set does not confer the T36 transmission phenotype on FS577; at matched titer the construct will transmit at a rate indistinguishable from the FS577 parent (≥15%, the FAIL band defined in §6.4).

We reject H0 in favor of H1 only if limb (a) holds **and** the construct's observed transmission rate falls below 5% under the boundary rule in §6.4.

### 2.3 Secondary hypotheses

- **H2 (single-gene insufficiency, confirmatory of the published table in the reciprocal direction):** neither the p61-only nor the p65-only T36-allele swap into FS577 achieves ≤5% transmission. Rationale: in the gain-of-function direction, neither single recovered the WT phenotype (p61 alone partially active, p = 0.034 vs control — a nominal, cluster-unadjusted p-value we treat as indicative only; p65 alone p = 0.41; Harper 2016). **[corrected from]** the earlier wording "singles are falsified"; the panel's wording — singles are *insufficient*, moving both genes is data-required — is adopted.
- **H3 (titer equivalence):** construct and FS577 source plants do not differ in accumulation beyond a pre-registered equivalence margin (§6.2, test P3). This is a *tested* claim, not an assumption carried over from Harper's underpowered null (their Tukey HSD ran on n = 2–4 source plants/arm — **[corrected from]** treating that quote as settling the matter).

---

## 3. Construct definition — the 7-allele default (11-vs-7 adjudication)

### 3.1 The default construct

The primary construct is **FS577 + the seven p61/p65 residues that differentiate FS577 from the validated T36 infectious clone EU937521**: p61 — S169N, I179T, T224A, M289T, S391G, D458G; p65 — R496H. p25/p27 (CPm) are left unchanged (CPm is 240/240 aa identical between FS577 and T36 by our own re-alignment — panel-confirmed).

### 3.2 The 11-vs-7 adjudication (binding for construct ordering)

A preliminary target list of **11** substitutions (9 in p61, 2 in p65) was derived from a pairwise comparison of FS577 against the AY170468 T36 clone. Four of the eleven — **p61 D324G, E382D, I455V and p65 G227S — are AY170468-private polymorphisms**: the validated clone EU937521 matches *FS577* at those four positions. Installing them would introduce variation the validated phenotype does not require and would confound attribution. **Default ruling: the 11-allele set is rejected; the validated 7-allele set is the construct ordered.** The 4 excluded residues are reconsidered **only** if the 7-allele construct lands in the UNCLEAR or FAIL band, and then as a separate Phase 2 construct (11-allele), not as a silent expansion of Phase 1. This adjudication must be executed *before* construct ordering (panel consensus §1.11).

### 3.3 Sign convention (corrected)

Historical target lists in this repository are written in **FS577→T36** notation (left of the arrow = FS577 residue, right = T36 residue). For the construct order this direction is the one actually performed on the FS577 backbone: e.g., list entry "p61 S169N" means *FS577 carries S169; install N* (FS577 S169 → N169). To make this unambiguous downstream, the engineering table states both:

| Gene | Position | FS577 (parent) residue | Residue installed (T36/EU937521) | Mutation-as-ordered |
|------|----------|------------------------|----------------------------------|---------------------|
| p61  | 169      | S                      | N                                | p61 S169N           |
| p61  | 179      | I                      | T                                | p61 I179T           |
| p61  | 224      | T                      | A                                | p61 T224A           |
| p61  | 289      | M                      | T                                | p61 M289T           |
| p61  | 391      | S                      | G                                | p61 S391G           |
| p61  | 458      | D                      | G                                | p61 D458G           |
| p65  | 496      | R                      | H                                | p65 R496H           |

**Excluded (AY170468-private), not ordered:** p61 D324G, p61 E382D, p61 I455V, p65 G227S.

Any ordering document must carry this table verbatim; a construct order that reverses the sign convention is a protocol deviation and halts synthesis.

### 3.4 Verification

Every synthesized construct is full-length Sanger/NGS sequence-verified before any plant inoculation (Gate G1, §7). A construct whose sequence deviates at any of the 7 sites, or anywhere outside them, does not enter the plant phase.

---

## 4. Experimental design

### 4.1 Assay mechanics (adopted from Harper et al. 2016 — that paper is cited for assay mechanics only)

- **Vector:** *Toxoptera citricida* (brown citrus aphid).
- **Acquisition:** 24 h acquisition access on the infected source plant.
- **Transfer:** 10 aphids per recipient plant.
- **Recipient host:** *Citrus macrophylla*, same greenhouse conditions for all arms.
- **Scoring:** recipient infection status read by ELISA at 8 weeks post-inoculation.
- **Unit of observation:** the recipient plant (binary outcome). The aphid batch is a within-plant vector pool, not a unit; sources are plants, each serving a block of recipients.

### 4.2 Additions introduced by this trial (explicitly ours; not published practice)

The following are design additions by this project and are labeled as such wherever the Harper protocol is cited (panel correction on claim 40: Harper published **no blinding**).

1. **Blinded scoring.** Recipient plants, ELISA plates, and RT-qPCR runs are code-labeled; the scorer does not know construct identity. Decode occurs only after the primary analysis scripts are locked and the data frozen.
2. **Titer on every source plant.** Every source plant is assayed by **RT-qPCR + ELISA** before its block of recipients is run. (Harper 2016 measured titer at the arm level; Shilts 2020 measured donor-plant ELISA [OD 3.36/3.41/3.50, same Tukey letter] but not RT-qPCR — the genuine residual gap — **[corrected from]** "no source-plant titer was measured".)
3. **Single-genotype verification of every tree.** All source and recipient trees are sequence-verified as single-genotype before use. Required because mixed-genotype infections complement: T36 transmits ~0.5% alone but up to **35.7%** in genotype mixtures (Harper et al. 2018). Any tree found carrying a second CTV genotype is excluded with its entire block.
4. **Reversion / escape surveillance.** Monthly sequencing (Sanger; NGS if mixed signal suspected) of (i) the p61/p65 edit window and (ii) the CPm/tail (5′-terminal) region of every source tree for the duration of the assay. Precedent: in the LIYV CPm-frameshift system, compensatory frameshift revertants restoring CPm appeared by ~3 months post-inoculation (Stewart et al. 2010) — genetic escape is observed in the wild for exactly this class of transmission-disabling lesion.
5. **Cluster-aware analysis.** The experimental unit is the plant; outcomes of recipients sharing a source plant are correlated. No legacy CTV transmission study reports this structure. Primary inference is by a GLMM with a source-plant random effect (§6.2); marginal tests are reported as sensitivity.
6. **Boundary tie rule.** Decision thresholds touch at exactly 5% and 15%; a boundary result goes to the more conservative band (§6.4).
7. **Multiplicity cap.** Seven uncorrected comparisons carry ~30.2% family-wise false-positive risk (panel-recomputed); the confirmatory construct family is capped at ≤4 constructs with Bonferroni correction (§5.2, §6.3).

### 4.3 Arms

| Arm | Backbone | Edit | Planned recipients | Role |
|-----|----------|------|--------------------|------|
| **P (primary)** | FS577 | T36 p61+p65 (§3.1, 7 alleles) | 250–300 | Decision |
| **C (parental control)** | FS577 | none | 100–150 | Transmission baseline + titer reference |
| **N (clone reference)** | T36 clone (EU937521) | none | ≥60 if budget allows | Low-transmission anchor, not required for decision |
| Phase 1.5 (conditional) | FS577 | T36 p61-only; T36 p65-only | ~200 each | Only if budget allows after P and C are fully powered |

Total confirmatory constructs (including Phase 1.5): **≤4**. Phase 1.5 arms do not change the Phase 1 decision.

### 4.4 Exclusion and attrition rules (pre-registered)

- Recipient dead or lost before the 8-week ELISA: excluded from numerator and denominator; attrition reported per arm.
- Recipient block whose entire aphid cohort dies during the inoculation-access period: excluded; reported.
- Source plant failing the titer equivalence gate (§7, G2): its block does not run.
- Tree found mixed-genotype at pre-assay sequencing: excluded with its block.
- Reversion detected above threshold (§7, G3): the affected source tree's block is halted pending adjudication; data collected to that point are reported but excluded from the primary analysis.
- No outcome-driven exclusion of completed, valid recipients is permitted post-decode.

---

## 5. Sampling plan and power

### 5.1 Sizes

Primary decision arm P: **250–300 recipients**; control C: **100–150**; conditional single-gene arms ~200 each. Total ≈ **550–700 plants**.

**[corrected from]** "550–700 aphids": those counts are **plants**. At 10 aphids per plant the aphid budget is **5,500–7,000 aphids**. The previously circulated cost (~$8–13K) and ~20-week timeline were built on this ~10× aphid undercount and are **withdrawn pending re-estimation** (§8; consensus correction 6).

### 5.2 Power, with the contrast stated for every number

1. **Decision direction (P vs C at 24.1%):** if the true construct rate is 5%, a 250–300-plant P arm against a 100–150-plant control at 24.1% has >99% power at one-tailed α = 0.0125 (exact-binomial/arcsine calculation, this document's own: 99.6–100.0%). At 10% true rate, ≥84–94%. The PASS direction is not power-limited.
2. **Threshold operating characteristics (exact binomial, point-estimate bands with the §6.4 tie rule):** at n = 275, PASS requires ≤13 positives (4.73%). P(PASS) = 1.00 if the true rate is the clone baseline (0.6%); 0.49 if exactly 5.0%; 0.001 if 10%; <10⁻³ if 15% or parental. Symmetrically, P(FAIL) = ~1.00 at the parental baseline, ~0.48 at exactly 15%, and ~0.004 at 10%. The trial is deliberately conservative at the band edges — a true 5% or 15% construct resolves PASS or FAIL only ~half the time and lands UNCLEAR otherwise; that is the intended behavior, not a defect.
3. **CI convention (one convention, pre-registered):** Clopper–Pearson for zero-success anchors — 0/110 → upper bound 2.69% one-sided / 3.30% two-sided; 0/200 → 1.49% / 1.83%. **[corrected from]** mixed CI conventions in earlier estimates.
4. **Adopted baseline-dependent power finding (from review; the contrast is stated, per panel correction on claim 43):** at a *mid-scale* contrast (15% vs 20%), n = 90/arm has ~14% power and ~934/arm is needed for 80%. At the decision-relevant *low-end* contrast (1% vs 6%), n = 90/arm gives ~45% and 80% power needs ~211 per arm. Any future power statement in project documents must name its contrast.

---

## 6. Analysis plan

### 6.1 Baselines (corrected labels)

| Baseline | Rate | Source | Label |
|----------|------|--------|-------|
| FS577 wild type | 24.1% (95/394) | Harper 2016 Fig. 1 | Parental control expectation |
| T36 infectious clone | 0.6% (1/172) | Harper 2016 Fig. 1 | Low-transmission anchor |
| T36 *field* | 0.53% (2/380) | Harper 2016 | **[corrected from]** "T36 field 1.5% (1/66)": 1/66 is Shilts 2020's T36-*clone* arm (AY170468 backbone), not a field rate |
| T36 clone on AY170468 backbone | 1.5% (1/66) | Shilts 2020 | Secondary, cross-study reference only |

### 6.2 Pre-registered tests (exact names)

- **P0 (decision, primary).** Band classification of construct P's observed recipient-positive rate, with the §6.4 tie rule, supported by the two-sided Clopper–Pearson 95% interval.
- **P1.** Construct P vs control C: **two-sample one-tailed Fisher exact test** (construct < control), α = 0.0125 (Bonferroni over the ≤4-test confirmatory family, §6.3).
- **P2.** Construct P vs the clone baseline 0.6% (1/172): one-tailed Fisher exact test in the *excess* direction — confirms silencing is not merely "below control" but near the T36 phenotype. Reported, not gated.
- **P3 (titer).** Equivalence of log₁₀ viral RNA copies per source plant (RT-qPCR), construct vs C, by **TOST** (two one-sided tests, α = 0.05 each), equivalence margin **±2-fold** on the geometric mean titer; ELISA OD reported as secondary. Margin chosen in advance to be tighter than any plausible transmission-relevant accumulation effect; if RT-qPCR variance proves larger than anticipated the margin is *not* widened post hoc — a failed equivalence is reported as failed.
- **P4 (cluster-aware primary confirmation).** Binomial **GLMM, logit link**: recipient outcome ~ construct (fixed) + (1 \| source plant), with aphid-run date as a block effect if multiple acquisition days occur. Construct coefficient and its CI are the headline confirmatory estimate; ICC reported. Marginal Fisher results (P1/P2) are sensitivity analyses. Note (panel-recomputed): the Harper synergy headline survives plausible clustering (p ≈ 3×10⁻⁵ at ρ = 0.2); small-margin claims such as p61-alone (nominal p = 0.034) do not — we make no inference from nominal single-gene p-values.

### 6.3 Multiplicity

Confirmatory family capped at **4 tests** (P0/P1/P2 count as one decision complex; P3; plus at most one Phase 1.5 contrast if run): Bonferroni α = 0.05/4 = **0.0125** per test. Everything else is exploratory and labeled as such in any report.

### 6.4 Decision bands and the tie rule

Observed construct transmission rate (validated recipients only), at parental-equivalent titer:

| Observed rate | Verdict | Consequence |
|---------------|---------|-------------|
| < 5.0% | **PASS** | p61+p65 pair sufficient for the T36 phenotype on FS577; construct advances as biocontainment candidate (design level; see §10 exclusions) |
| 5.0–15.0% | **UNCLEAR** | Partial effect; advance to Phase 2 (p33 whole-gene swap on the P construct, or reciprocal gain-of-function rescue to test causality) |
| > 15.0% | **FAIL** | H0 stands; p61+p65 alone insufficient in the loss-of-function direction |

**Tie rule (pre-registered, resolving the threshold-overlap defect found in review):** an observed rate of **exactly 5%** resolves UNCLEAR; **exactly 15%** resolves FAIL. The boundary always goes to the more conservative band.

### 6.5 Mechanism check

If titer equivalence (P3) holds and transmission collapses (P0 PASS), the result isolates the vector-transmission step from replication/accumulation. If titer is reduced, the transmission result — whatever it is — cannot be attributed to the interface and the mechanism question stays open. This contingency is decided before data collection, not after.

---

## 7. Stopping and gating rules

| Gate | Criterion | Trigger |
|------|-----------|---------|
| **G0 — synthesis** | Full-length sequence equals §3.3 exactly | Any deviation → construct rejected; no plant work |
| **G1 — replication feasibility** | Construct replicates after *N. benthamiana* agroinfiltration (RT-qPCR, day 5–7 post-infiltration) | Failure → constructs redesigned from §3.3 before citrus work (assembly-defect path) |
| **G2 — systemic infection at parental titer** (the binding go/no-go for the aphid phase) | Construct infects *C. macrophylla* systemically **and** source-plant titer is equivalent to FS577 within the ±2-fold margin (P3 machinery, run as a gate on the gate cohort) | Failure → **no aphid acquisition begins**; result is logged as a negative *on the debilitation path*, which is not a biocontainment phenotype. This gate exists so that "transmission-disabled" can never be reported for a virus that simply infects poorly. |
| **G3 — reversion/escape** | Monthly sequencing of the p61/p65 edit window and CPm/tail region (§4.2.4) | WT or new-variant reads above **5%** in any source tree → halt that tree's block, extended sequencing, exclusion per §4.4. A confirmed reversion-to-WT at any edit site in any tree stops the trial pending adjudication. (Stewart et al. 2010 precedent: escape by ~3 months.) |
| **G4 — contamination/mixture** | Any single-genotype check fails (§4.2.3) | Exclusion per §4.4; if source material stocks are contaminated at the stock level, the trial stops. |

**No interim analyses.** P0–P4 are run once, after the last ELISA plate is read and the blind is broken by the analysis lead. No unblinded looks are permitted; greenhouse staff with legitimate decode keys (plant welfare) log every access.

---

## 8. Timeline and budget (corrected)

**[corrected from]** the ~20-week / $8–13K estimate: that figure rested on the 550–700 plants being read as aphids (a ~10× aphid-budget undercount; see §5.1). The corrected aphid budget is **5,500–7,000 aphids** across 550–700 recipient plants. **Cost re-estimation is pending** and no dollar figure is carried in this pre-registration.

Provisional phase durations, pending re-costing (all durations are estimates, not commitments):

1. Construct design + synthesis + full-length verification (G0): 4–6 weeks.
2. *N. benthamiana* feasibility (G1): 2–3 weeks.
3. *C. macrophylla* propagation, inoculation, systemic establishment, titer gate (G2): 8–10 weeks (includes plant growth).
4. Acquisition/transfer rounds across 550–700 recipients at greenhouse throughput (blinded, code-labeled): 3–6 weeks.
5. ELISA readout at 8 weeks post-inoculation of the last set + monthly surveillance sequencing throughout.
6. Decode, locked analysis, report: 2 weeks.

Plausible end-to-end: **~6–9 months**, to be re-estimated with the aphid/plant throughput and cost.

---

## 9. Risk register

| Risk | Evidence | Consequence if unmitigated | Mitigation in this protocol |
|------|----------|----------------------------|------------------------------|
| **Complementation in mixed infections** | T36 transmits ~0.5% alone but up to **35.7%** with a co-infecting genotype (Harper et al. 2018) | A "transmission-disabled" phenotype that silently depends on a helper genotype reads as containment and is not | §4.2.3 single-genotype sequencing of every tree; §4.4/G4 exclusions; no mixed plantings anywhere in the greenhouse |
| **Reversion / genetic escape** | Stewart et al. 2010 (LIYV CPm frameshift): virions assemble and move systemically, 0/24 transmitted vs 17/24 for the restored-CPm control — but compensatory frameshift revertants restoring CPm appeared by ~3 months post-inoculation | Transmission competence re-emerges during the assay or in propagation | §4.2.4 monthly surveillance of the edit window + CPm/tail; G3 halt rule; seven simultaneous edits make single-event reversion of the full set remote (single-site escape is still monitored) |
| **Titer confound** | Genuine residual gap in the published record: Shilts 2020 measured donor ELISA but not RT-qPCR (panel correction on claim 27) | The transmission phenotype could be an accumulation artifact rather than an interface effect | §4.2.2 RT-qPCR+ELISA on *every* source plant; G2 gate; P3 equivalence test with pre-registered ±2-fold margin; per-source-plant titer reported with every block |
| **Docking is not the T36 bottleneck** | Killiny et al. 2016 full text: free p27, p61, p65 each compete labeled-virion binding; T36 virions bind the cibarium normally ("no correlation with lack of retention and poor transmissibility"); cross-isolate competition works (T68-1 proteins vs T36 virions) — the interface is conserved across isolates 40× apart in transmission | A design premised on *binding* disruption would target the wrong step | We make no binding-disruption claim: the pair swap is hypothesized to act *downstream of docking* (acquisition/retention strength); if P0 fails, the next mechanistic probe is retention strength, not binding. NB: Killiny's is a binding assay, never a transmission assay, and it must not be cited as transmission blocking; the carbohydrate is on the *insect cuticular* side (chitinase-sensitive, protease-insensitive), not "a carbohydrate interface on the virion tail" (panel re-read of claims 2–3) |
| **Clustering inflates significance** | No legacy study reports the plant-level unit structure | Anticonservative p-values | GLMM primary (P4); ICC reported; no inference from nominal single-gene p-values |
| **Multiplicity** | 7 uncorrected tests → ~30.2% FWER (panel-recomputed) | False-positive "successful" constructs | ≤4-construct cap; Bonferroni α = 0.0125; tie rule to conservative bands |
| **Partial result (UNCLEAR 5–15%)** | Harper gene-level data show the pair dominates but p33 carries a separable effect (Shilts 2020: T68 p33 swap raised the T36 clone 1.5% → 17.8%; the 2026 abstract reports ~50% on triple complement and "coordinated function of P33, P61, P65") | Program stalls without a next construct | Pre-planned Phase 2: add the p33 whole-gene swap (not residue-level: R174 is ruled out as the dominant lever — T30 carries R174 at 1.57%, and Harper's K174-retaining hybrids transmit at 17.9%/20.6% — **[corrected from]** the earlier K174R sequence reasoning), or run the reciprocal gain-of-function rescue |
| **Assembly failure** | p61/p65 are assembly-restricting chaperones (Satyanarayana et al. 2004) | No infectious construct | G1 feasibility screen before citrus work |

---

## 10. What we are NOT claiming

1. **No field release, at any stage.** This pre-registration covers greenhouse-only experiments on published isolates. Biocontainment claims remain conditional on mixed-infection management (Harper 2018 complementation) even after a PASS.
2. **No point-mutation precedent is asserted.** Stewart 2010 is a tailless-virion precedent (the truncated CPm is not incorporated into the virion at all — 0% immunogold labeling), not an assembly-sparing point mutation. A *point-mutational* transmission-off switch that spares assembly is undemonstrated in any plant virus, and this trial does not claim otherwise.
3. **No structural claim beyond prediction grade.** There is no CTV p61/p65 structure; any structural statement is AlphaFold-grade prediction at best and is labeled as such wherever it appears.
4. **No claim that the reciprocal (loss-of-function) direction is already established.** Only gain-of-function is published (§2.1); the necessity direction is what this trial tests.
5. **No claim that CPm is uninvolved in transmission.** The falsification is of CPm *sequence variation* as the determinant among these isolates (240/240 identity); Killiny 2016 identifies CPm as a necessary component of the retention complex. (And no chimera-claim misattribution: the LIYV/LCV CPm chimera data are Wang et al. 2021 — ~60% foreign retains foregut binding, the 41% C-terminal swap loses it — *not* Chen et al. 2011, which contains no chimeras.)
6. **No p33 residue-level claim.** The K-allele census (126 R / 4 K across 130 homologues) and the re-anchored ruling on residue 174 (§9) carry no design weight here; p33 enters the program, if at all, as a whole-gene Phase 2 swap.
7. **No platform or commercial claim.** Nothing here supports a "biocontainment by design" product statement; this document establishes, at most, a candidate biological phenotype in one isolate pair.

---

## 11. References (archive at `docs/literature/`)

1. Harper SJ, Killiny N, Tatineni S, Gowda S, Cowell SJ, Shilts T, Dawson WO. Sequence variation in two genes determines the efficacy of transmission of citrus tristeza virus by the brown citrus aphid. *Arch Virol.* 2016;161(12):3555–3559. doi:10.1007/s00705-016-3070-x. (Full PDF, verified verbatim — all six Fig. 1 denominators.)
2. Shilts T, et al. *Viruses.* 2020;12(10):1131. doi:10.3390/v12101131. (PMC7600554 full text.)
3. Killiny N, et al. *Appl Environ Microbiol.* 2016;82(21):6294–6302. doi:10.1128/AEM.01914-16. PMID 27520823. (Full PDF; page range corrected from the "82:6194" miscitation.)
4. Harper SJ, Cowell SJ, Dawson WO. Bottlenecks and complementation in the aphid transmission of citrus tristeza virus populations. *Arch Virol.* 2018;163(12):3373–3376. doi:10.1007/s00705-018-4009-1. (Abstract; 35.7% figure verified.)
5. Stewart LR, Medina V, Tian T, Turina M, Falk BW, Ng JC. A mutation in the Lettuce infectious yellows virus minor coat protein disrupts whitefly transmission but not in planta systemic movement. *J Virol.* 2010;84(23):12165–73. doi:10.1128/JVI.01192-10. (Full PDF; reversion detail verified.)
6. Wang et al. *J Gen Virol.* 2021;102(9):001652. doi:10.1099/jgv.0.001652. (True source of the CPm chimera data.)
7. Satyanarayana T, et al. *PNAS.* 2004;101(3):793–8. doi:10.1073/pnas.0307490100. (Assembly-restriction role of p61/p65; page range corrected.)
8. Aknadibossian V, et al. *PLoS Pathog.* 2025;21(11):e1013730. doi:10.1371/journal.ppat.1013730. (p33 viroporin; verified by direct fetch.)
9. Shilts T, Nehela Y, Killiny N. *Virology.* 2026;621:110928. doi:10.1016/j.virol.2026.110928. PMID 42061270. (Abstract only; p33 complement ~50% and "coordinated function of P33, P61, P65" claims; full text paywalled — cited at abstract confidence.)

---

## 12. Provenance of this design

Every numbered threshold, band, baseline, and construct in this document traces to the six-model Round 3–4 adversarial review record: `docs/peer_reviews_round3/CONSENSUS.md` (16 adopted corrections, applied), `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md` §B10 (corrected design claim set), `docs/CTV_ROUND3_SCORECARD.md` (per-claim grid), and the re-derived sequence work summarized in CONSENSUS §1.2/§1.11. Items the panel left unresolved and logged (e.g., the unretraced "17/90" figure from an earlier draft, withdrawn pending re-sourcing) play no role in this pre-registration.
