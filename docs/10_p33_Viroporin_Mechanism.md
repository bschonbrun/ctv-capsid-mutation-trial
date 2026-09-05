# p33 Viroporin Mechanism and Testing Plan

*Source document: `CTV_p33_Viroporin_Mechanism_and_Testing_Plan.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
╔════════════════════════════════════════════════════════════════════════════════╗
║        MECHANISTIC BREAKTHROUGH: p33 IS A VIROPORIN (November 2025)            ║
║   Updated understanding changes how we think about p33 mutations               ║
╚════════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW DISCOVERY (PLOS Pathogens, November 24, 2025)
  Citation verified 2026-09-05 by round-3 panel (direct fetch): Aknadibossian
  et al. 2025, PLoS Pathog 21(11):e1013730, DOI 10.1371/journal.ppat.1013730
  — TEVC inward K+/Na+ currents, membrane remodeling; third plant-virus
  viroporin. (see docs/peer_reviews_round3/CONSENSUS.md)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTV p33 IS A VIROPORIN
══════════════════════

1. What is a viroporin?
   ────────────────────
   A viral protein that forms ion channels in host cell membranes. Examples:
   - M2 (influenza A virus) — one of the first identified, widely studied
   - E6 (coronavirus) — involved in virulence and host immune evasion
   
   Plant virus viroporins are RARE — only 3 known, and CTV p33 is one of them.

2. What was demonstrated?
   ────────────────────────
   
   a) STRUCTURAL: p33 has Class I viroporin transmembrane/cytoplasmic domains
      - Closely resembles known viroporin architecture
      - TMD (C-terminus) forms the ion channel; compatible with p33's known 
        membrane association
   
   b) FUNCTIONAL: Two-electrode voltage clamp in *Xenopus* oocytes
      - p33 induces strong inward K+ and Na+ currents at lowered potentials
      - Confirms p33 forms active ion channels
      - First plant virus viroporin validated electrophysiologically
   
   c) CELLULAR: Confocal + electron microscopy
      - p33 triggers extensive membrane remodeling (like other viroporins)
      - Forms membranous structures consistent with channel oligomerization
      - Localizes as expected (membrane-associated, not free)

3. Status
   ──────
   PEER-REVIEWED, PLOS Pathogens, November 24, 2025 — very recent but solid 
   evidence. This is NOT a hypothesis; this is measured electrophysiology.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY THIS CHANGES HOW WE THINK ABOUT p33 MUTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OLD HYPOTHESIS (pre-November 2025):
───────────────────────────────────
p33 is a multifunctional protein:
- Movement protein (localizes to plasmodesmata)
- Host range determinant (TMD necessary for sour orange infection)
- Superinfection suppressor (self-self interactions)
- Immune modulator (triggers CmMLP2)

Transmission role was INFERRED from Shilts 2020 (p33 swap experiment) but the 
MECHANISM was unknown. Was it:
  a) Direct interaction with vector receptors?
  b) Replication efficiency (indirect)?
  c) Plasmodesmata function / systemic spread?
  d) Something else?

NEW UNDERSTANDING (as of November 24, 2025):
──────────────────────────────────────────────

p33 is a VIROPORIN — a literal ion channel that:
- Alters host cell ion homeostasis (K+, Na+)
- Creates favorable membrane conditions for viral functions
- Triggers membrane reorganization for replication, movement, and assembly

IMPLICATIONS FOR TRANSMISSION:

Since p33 forms an ion channel in the plant PHLOEM sieve cells (where virus replicates):

1. Mutations affecting ion conductance → altered intracellular K+/Na+ balance
   → changes in cell turgor, plasmodesmata flow, phloem transport
   → potentially changes systemic movement efficiency
   → potentially changes virion assembly/stability

2. Ion channel function can affect replication (many viruses' viroporins do this)
   → change in viral titer
   → change in accumulation in phloem
   → change in aphid acquisition efficiency

3. The K174 residue identified by Shilts et al. 2026?
   ──────────────────────────────────────────
   K174R is in the CYTOPLASMIC domain (not the TMD), suggesting it may affect:
   - Channel gating/open probability
   - Oligomerization state
   - Protein-protein interactions (e.g., with replication complexes)
   
   This makes functional sense: a positively charged K→R substitution in a 
   channel domain is a classic way to tune ion channel activity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RISK ASSESSMENT FOR p33 MUTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GOOD NEWS:
──────────
✓ We're not targeting an essential assembly protein (p33 is not part of virion)
✓ p33 is already known to tolerate partial loss of function (TMD truncations viable)
✓ Viroporins are tunable — mutations can attenuate without completely blocking
✓ Ion channel mutations are well-characterized in other viruses
✓ Single-residue candidates (K174R) allow precise targeting

BAD NEWS / RISKS:
─────────────────
✗ p33 controls FOUR different host processes (movement, replication, immunity, 
  transmission). Changing ion conductance could affect ANY of them.
✗ A mutation that reduces transmission might ALSO reduce replication, leading to 
  a non-viable construct.
✗ Viroporin function is tightly tuned; too much disruption → no systemic infection 
  → can't test transmission (need systemic infection first).
✗ Ion channel mutations can have subtle pH/redox effects that manifest only 
  under stress (citrus vs. N. benthamiana may differ).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTING STRATEGY FOR p33 MUTATIONS (REVISED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 0: FUNCTIONAL SCREENING (Weeks 1–4)
═══════════════════════════════════════════

Objective: Identify candidates that reduce TRANSMISSION without impairing virion 
production or systemic movement.

Step 1: Mutagenesis Library
  ────────────────────────
  - Start with T36 infectious clone backbone (EU937521, low transmission 1.5%)
  - Create site-directed mutants targeting candidate residues:
    a) K174R (Shilts et al. 2026 identified residue — reverse from T36 to match T68-1/FS577)
    b) K174A (alternative: lose charge entirely)
    c) K174E (alternative: negative charge)
    d) Nearby residues (V117S, V262I, E264G from FS577 comparison)
    
  Also create:
    e) Control: WT T36
    f) Positive control: T36 with FS577 p33 (known to ↑ transmission)

Step 2: Protoplast Transfection (+ to ++)
  ──────────────────────────────────────
  For EACH mutant:
  - Transfect into citrus protoplasts (Succulent leaflet epithelial cells)
  - Measure 5 days post-transfection:
    * Viral titer (RT-qPCR)
    * Virion production (EM or immunoassay)
    * Viral protein accumulation (Western: p33, p65, p25, p20)
    * Cell viability / morphology (any gross pleiotropic effects?)
  
  GATES:
    ✓ KEEP if: titer ≥80% of WT, virions present, proteins detected
    ✗ DISCARD if: titer <50% WT, no virions, severely altered morphology

Step 3: Systemic Movement Test (N. benthamiana, +++)
  ───────────────────────────────────────────────────
  For viable mutants from Step 2:
  - Inoculate N. benthamiana leaves locally
  - Monitor for systemic spread by:
    * Weekly RT-qPCR from upper leaf tissue
    * ELISA titer (weeks 2, 3, 4)
  - Measure latency to systemic infection
  
  GATES:
    ✓ KEEP if: systemic infection achieved within 3 weeks, ≥10⁴ viral RNA copies/g tissue
    ✗ DISCARD if: no systemic infection, titer plateaus locally

  WHY THIS MATTERS:
  If a mutation cripples systemic movement, we can't test transmission (aphids 
  need systemic virus). This gate is about EFFICIENCY, not presence/absence.

STAGE 1: TRANSMISSION PHENOTYPING (Weeks 5–8, ONLY for STAGE 0 survivors)
══════════════════════════════════════════════════════════════════════════════

Objective: Measure aphid transmission efficiency for each viable candidate.

Setup:
  - Prepare systemically infected N. benthamiana plants
  - Use brown citrus aphid (Toxoptera citricida) or green peach aphid (if available)
  - Acquisition access period: 24 h (standard for semi-persistent viruses)
  - Test inoculation: 5 min per test plant, ≥10 aphids per plant
  - Test plants: citrus seedlings (sensitive hosts)
  
Data Collection:
  - Transmit from ≥3 independent plants per mutant
  - ≥5 test plants per source
  - Measure at 3 weeks (systemic infection expected)
  - Categorize by % transmission (0%, 1–10%, 10–50%, >50%)

DECISION GATES:
  ─────────────
  Hypothesis: If K174 is the key transmission residue, then:
  
  Prediction 1: T36 K174R (reversing toward T68-1) should INCREASE transmission
                Expected: 1.5% → 10–20% (reversal of 23-fold T30/FS577 gap)
  
  Prediction 2: T68-1 R174K (reversing toward T36) should DECREASE transmission
                Expected: 44% → 15–30%
  
  Prediction 3: FS577 R174K should DECREASE transmission
                Expected: 24% → 5–10%
  
  ✓ PASS if: ≥2 of 3 predictions confirmed with p-value <0.05 (Fisher's exact)
  ✗ FAIL if: <2 predictions, or K174 mutations show no significant shift

If PASS → proceed to citrus validation (Stage 2, optional)
If FAIL → pivot to p65+p61 dual-target approach OR broader AlphaFold-guided screening

STAGE 2 (OPTIONAL): CITRUS VALIDATION (Weeks 9–12)
════════════════════════════════════════════════

Only proceed if Stage 1 shows significant transmission reduction in N. benthamiana.

Setup:
  - Infiltrate N. benthamiana with leading candidate
  - Graft N. benthamiana to citrus rootstock (5–7 days for vascular union)
  - Test transmission from citrus → citrus using brown citrus aphid
  
Expectation:
  - If transmission mechanism is SAME in N. benthamiana and citrus: strong reduction
  - If transmission mechanism is HOST-DEPENDENT: may see recovery in citrus 
    (this would be important negative result)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPEN QUESTIONS DRIVING EXPERIMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q1: Does K174 affect channel gating or oligomerization?
    ──────────────────────────────────────────────────
    A: Unknown. But we can test:
    - Xenopus oocyte electrophysiology on K174 mutants (outside our scope, but 
      valuable if collaborators available)
    - Co-IP experiments: does K174R change p33-p20 interaction strength?
    - Membrane topology by glycosylation: does K174R change accessibility?

Q2: Is ion channel activity NECESSARY for transmission?
    ──────────────────────────────────────────────────
    A: Unknown, but testable:
    - A viroporin-ablating mutation (e.g., targeted TMD deletion) should BLOCK 
      transmission IF ion channel is the bottleneck
    - But TMD deletion might block movement, so results are hard to interpret

Q3: Why do T30 and FS577 differ 23-fold if both have R174?
    ────────────────────────────────────────────────────
    A: Multiple explanations:
    - Other p33 residues (V117S, V262I, E264G) also matter (epistasis)
    - Variations in p65/p61 (17 aa differences) may act synergistically
    - Background strain effects (T30 and FS577 differ at >100 other sites)
    
    Test by: Systematic substitution of ALL p33 variants from T30 into T36, 
    measure transmission to each. This is expensive but definitive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL RECOMMENDATION (September 5, 2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATH: p33 VIROPORIN MUTATIONS with K174 as primary target
═════════════════════════════════════════════════════════════

NOTE 2026-09-05, round-3 panel (see docs/peer_reviews_round3/CONSENSUS.md):
  - Residue-174 sequence assignments re-derived: T68-1(JQ965169) = R174,
    AY170468 = R174, EU937521 = K174; FS577 vs EU937521 p33 differ at
    exactly R174K (the K174R directions in Stages 0–1 above are consistent
    with these corrected sequences).
  - But residue 174 is a CANDIDATE, not an anchor: T30 (R174) transmits at
    1.57%, and Harper 2016's K174-retaining hybrids transmit at 17.9%/20.6%
    — it cannot be the dominant lever of the T36 phenotype.
  - Lead design is the paired p61+p65 swap (singles insufficient: p61 alone
    partially active p = 0.034 vs control; p65 alone not p = 0.41); only the
    gain-of-function direction is published — reciprocal loss-of-function
    swap untested; state that in the pre-registration.
  - Wherever this plan cites the 11-residue p61/p65 substitution set:
    11-vs-7 adjudication pending; the EU937521-validated 7-residue set is
    the default (4 of the 11 are AY170468-private — p61 D324G, E382D, I455V;
    p65 G227S).

CONFIDENCE LEVEL: MEDIUM-HIGH
─────────────────────────────
✓ Two recent papers (Shilts 2020, Shilts et al. 2026 identify p33 as transmission 
  determinant with K174R as a candidate
✓ November 2025 viroporin discovery provides mechanistic plausibility
✓ Sequence data show p33 differs between high/low transmitters; CPm does not
✗ K174R alone doesn't explain all transmission variance (T30/FS577 gap remains)
✗ Mechanism of HOW ion channel activity affects transmission is still unclear

TIMELINE:
─────────
- Stage 0 (viability screening): 3–4 weeks
- Stage 1 (transmission assays): 3–4 weeks  
- Stage 2 (citrus validation, optional): 3–4 weeks
- Total to first biocontainment proof-of-concept: ~7–8 weeks

SUCCESS CRITERIA:
─────────────────
- ≥1 p33 mutant reduces transmission to <0.5% (vs. T36 baseline 1.5%)
- Mutant maintains assembly + systemic movement (no pleiotropic loss of fitness)
- Effect is reproducible across ≥2 biological replicates
- Mechanism is consistent with viroporin ion channel role

FALLBACK OPTIONS (if Stage 1 fails):
────────────────────────────────────
1. Broader p33 screening: map all variable positions using AlphaFold to identify 
   surface-accessible channel residues
2. p65+p61 dual-target approach: 17 aa differences, structural proteins, may 
   affect transmission via virion stability
3. Combinatorial approach: p33 K174 + p65 variant together (epistatic effects)
4. Vector-specific screening: test whether mutations affect different aphid 
   species differently (Toxoptera vs. Aphis)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
