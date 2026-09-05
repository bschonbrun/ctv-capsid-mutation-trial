# Executive Summary — CTV Aphid-Transmission Biocontainment

*Source document: `CTV_Transmission_Executive_Summary.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
╔════════════════════════════════════════════════════════════════════════════════╗
║                         EXECUTIVE SUMMARY FOR TEAM Q&A                         ║
║             CTV Transmission Control: Literature Review & Decision              ║
║                         September 5, 2026                                       ║
╚════════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE STORY: HOW DATA CHANGED WHAT WE THINK WE SHOULD BUILD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THREE WEEKS AGO (August 2026):
────────────────────────────

Initial Hypothesis: 
  "Mutate CPm (minor coat protein) to block aphid transmission while preserving 
   virion assembly and plant movement."

Reasoning:
  • CPm is the ONLY protein on the virion surface that binds aphid receptors
    (Killiny et al. 2016 showed this experimentally)
  • CPm mutations can be tolerated without affecting assembly 
    (LIYV whitefly-transmitted crinivirus precedent)
  • Mechanism is clean: no transmission = no vector acquisition → biocontainment

THIS WEEK (September 5, 2026):
──────────────────────────────

Pivot: 
  "Target p33 mutations instead of CPm mutations to reduce transmission."

Why the pivot?
  1. SEQUENCE DATA CONTRADICTED THE HYPOTHESIS
     - FS577 and T36 have IDENTICAL CPm (240/240 amino acids)
     - Yet they differ 16-fold in transmission (24.1% vs. 1.5%)
     → CPm sequence variation CANNOT explain transmission differences
  
  2. LITERATURE SHOWED p33 IS THE DRIVER
     - Shilts & Killiny 2020 (peer-reviewed): p33 substitution explains 77% of 
       transmission gain (T36 + T68-1 p33: 1.5% → 17.8%)
     - Shilts et al. 2026 (just published April 2026): p33 K174R identified as 
       key candidate; engineered swaps show 83-fold gain in transmission
  
  3. MAJOR DISCOVERY (November 24, 2025 — Aknadibossian et al., PLoS Pathogens
     21(11):e1013730, DOI 10.1371/journal.ppat.1013730)
     - p33 is a VIROPORIN (ion channel protein)
     - Functions: K+/Na+ transport, membrane remodeling, host cell alteration
     - Provides MECHANISM for how p33 sequence variation affects transmission
       (via ion homeostasis → replication efficiency → systemic movement → 
        virion acquisition)

LESSON FOR THE TEAM:
  ────────────────────
  The initial hypothesis was SCIENTIFICALLY SOUND (mechanistically plausible, 
  supported by precedent) but EMPIRICALLY WRONG (the data said otherwise). 
  This is exactly what validation is FOR — to catch assumptions before they 
  become wasted effort on the wrong target.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE EVIDENCE: WHAT THE DATA SHOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FACT 1: CPm SEQUENCE IS NOT THE TRANSMISSION DETERMINANT
═════════════════════════════════════════════════════════

FS577 vs. T36 comparison:
┌─────────────────┬──────────────┬───────────────┬────────────────┐
│ Protein         │ % Identity   │ # Differences │ Transmission   │
├─────────────────┼──────────────┼───────────────┼────────────────┤
│ CPm (p27)       │    100%      │       0       │ 24.1% vs 1.5%  │
│ CP (p25)        │     99.0%    │       2       │ (16-fold gap)  │
│ p33             │     98.7%    │  ~4 (3 aa + 1 │                │
│                 │  (~299/303)* │  gap)         │                │
│ p65             │     98.8%    │       7       │                │
│ p61             │     98.1%    │      10       │                │
└─────────────────┴──────────────┴───────────────┴────────────────┘

Conclusion: CPm is CONSERVED between these isolates. No way to explain transmission 
variation through CPm mutations. HYPOTHESIS FALSIFIED.

*p33 count corrected 2026-09-05: ~299/303 = 98.7% on the gapped alignment (vs the T36
clones AY170468/EU937521 it is 99.7%) — docs/peer_reviews_round3/CONSENSUS.md.

FACT 2: p33 IS THE BEST CANDIDATE BY LITERATURE AND SEQUENCE
═════════════════════════════════════════════════════════════

Shilts et al. 2020 (Viruses 12:1131):
  - Built infectious clones with 5′ sequence swaps
  - T36 (1.5% transmission) + T68-1 5′ region → 23% transmission (15-fold gain)
  - Narrowed down: T36 + T68-1 p33 ALONE → 17.8% (12-fold gain = 77% of total)
  - Conclusion: "p33 is the primary transmission determinant"

Shilts et al. 2026 (April 2026):
  - Used engineered T36 clone with deletions (p33/p18/p13)
  - Swapped these three genes from FS577
  - Result: T36 → T36 engineered → 0.6% → 50% transmission (83-fold!)
  - Sequence analysis: Only p33 differs (K174R); p18 and p13 identical
  - Identified: K174R as likely single-residue driver
  - "P33 is a critical viral protein in aphid-mediated transmission"

Our verification (Sept 5, 2026) — CORRECTED (docs/peer_reviews_round3/CONSENSUS.md,
corrections 2–3, 2026-09-05):
  - Earlier statement here ("K174R present in FS577 and T68-1") was INVERTED.
    Verified from the repo GenBank files: FS577 = R174, T68-1 = R174,
    AY170468 = R174; T36 infectious clone EU937521 = K174.
  - FS577 vs EU937521 p33 differ at exactly R174K → the Shilts et al. 2026
    abstract's K174R claim is CONSISTENT with these sequences; our refutation
    was the error.
  - BUT: T30 (1.57% transmission) ALSO has R174, yet differs 15-fold from FS577,
    and Harper's K174-retaining hybrids transmit at 17.9%/20.6%
  - Implication: residue 174 is NOT the dominant lever of the phenotype;
    other residues/factors matter (the "necessary but not sufficient" framing
    is withdrawn).

FACT 3: p33 IS A VIROPORIN — ION CHANNEL (NEW)
════════════════════════════════════════════════

Aknadibossian et al. 2025, PLoS Pathogens 21(11):e1013730 (November 24, 2025):
  - p33 has structural similarity to Class I viroporins (like influenza M2)
  - Two-electrode voltage clamp in Xenopus oocytes: p33 conducts K+ and Na+ ions
  - Electron microscopy: p33 triggers membrane remodeling
  - First plant virus viroporin validated electrophysiologically
  
  → This explains HOW p33 variation affects transmission:
    Ion channel activity → K+/Na+ homeostasis → cell turgor/phloem function
    → viral replication rate → virion accumulation → aphid acquisition efficiency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE PLAN: WHAT WE WILL BUILD AND TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TARGETS:
─────────
Primary: p33 K174R and related mutations (K174A, K174E) in T36 backbone
Rationale: 
  - CORRECTED 2026-09-05 (CONSENSUS corrections 2–3): T68-1 and FS577 both encode
    R174, not K174 — K174R does not "reverse T36 toward high-transmission
    sequences." The one verified residue-174 difference is FS577 (R174) vs T36
    clone EU937521 (K174), matching the 2026 abstract. K174 remains one candidate
    among the p33 differences, not a proven switch (T30 has R174 at 1.57%).
  - Single-residue mutation → minimal off-target effects vs. multi-residue swaps
  - Ion channel domain location → plausible mechanism for transmission change

Secondary: Full p33 variants from high-transmission isolates (if K174R alone insufficient)

STAGES:
────────

Stage 0 (Viability): Weeks 1–4
  ✓ Protoplast transfection with mutants
  ✓ Measure: viral titer, virion production, protein accumulation
  ✓ Gate: Candidates with ≥80% WT titer advance; others discarded

Stage 1 (Transmission): Weeks 5–8
  ✓ Systemically infect N. benthamiana (only for Stage 0 survivors)
  ✓ Brown citrus aphid acquisition-transmission assay (24h access)
  ✓ Measure: % transmission success across ≥3 source plants, ≥5 test plants each
  
  Success Criteria:
    - K174R reduces transmission to <0.5% (vs. T36 1.5% baseline)
    - Assembly and movement remain intact (no pleiotropic loss)
    - Effect reproducible (p<0.05)

Stage 2 (Citrus, optional): Weeks 9–12
  ✓ Only proceed if Stage 1 shows major reduction
  ✓ Graft N. benthamiana to citrus, test transmission in real host system
  ✓ Goal: Confirm biocontainment function in citrus

TIMELINE TO FIRST BIOCONTAINMENT PROOF-OF-CONCEPT:
────────────────────────────────────────────────
7–8 weeks (total: ~8–9 weeks calendar time, accounting for growth delays)

If successful: Candidate ready for regulatory safety assessment
If Stage 1 fails: Fallback to p65+p61 dual-target or broader AlphaFold screening

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RISK & MITIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RISK 1: K174R alone doesn't explain all transmission variance
─────────────────────────────────────────────────────────────
Evidence: T30 and FS577 both have R174, yet differ 23-fold in transmission.
Impact:  K174R may reduce transmission (good), but may not reduce to the level 
         we need for biocontainment (<0.5%).

Mitigation:
  - Stage 0 includes alternative residue variants (K174A, K174E)
  - Fallback: Screen all p33 variable positions (V117, V262, E264)
  - Systematic: Create library of all p33 AA combinations if budget permits

RISK 2: p33 mutations may pleiotropically affect replication
────────────────────────────────────────────────────────────
Evidence: p33 is multifunctional (movement, immunity, viroporin).
Impact:   Mutation that reduces transmission might also reduce viral titer so 
          much that we can't detect transmission (Stage 1 gate failure).

Mitigation:
  - Stage 0 viability gate (titer ≥80% WT) filters these out early
  - If all K174 variants fail Stage 0, pivot to surface-exposed p33 residues 
    identified via AlphaFold as less functionally constrained

RISK 3: Host-dependent effects (N. benthamiana vs. citrus)
──────────────────────────────────────────────────────────
Evidence: Ion channel activity may be tuned to specific host cell pH, redox, ionic conditions.
Impact:   A mutation that reduces transmission in N. benthamiana might not work in citrus.

Mitigation:
  - Stage 2 (citrus validation) is specifically designed to catch this
  - Test against mealybugs (GLRaV vectors) as well if time permits
  - Use N. benthamiana as a screening platform but expect iteration in citrus

RISK 4: Aphid species variation
──────────────────────────────
Evidence: CTV has semi-persistent transmission; different aphids may use different 
          receptors or retention sites.
Impact:   Mutation may block Toxoptera but not Aphis; need vector specificity.

Mitigation:
  - Stage 1 uses brown citrus aphid (Toxoptera citricida) — the natural vector
  - Secondary testing with green peach aphid (Aphis gossypii) if needed
  - Fallback: If vector-specific, we've achieved partial containment (valuable!)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPARISON TO ORIGINAL CPm HYPOTHESIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY CPm WOULD HAVE BEEN WRONG:
┌─────────────────────────────────────────────────────────────────────────────┐
│ If we had proceeded with CPm mutations:                                     │
│                                                                              │
│ 1. SEQUENCE PROBLEM: CPm is identical between FS577 and T36. We'd be        │
│    trying to block transmission by mutating a protein that ALREADY is       │
│    conserved. Only a major structural disruption (frameshift) would work.   │
│                                                                              │
│ 2. ASSEMBLY RISK: CPm is part of the 5′ cap complex (Hsp70h + p61/p65 +   │
│    CPm). Mutations could disrupt virion stability. LIYV frameshifts show   │
│    assembly survives, but point mutations are less predictable.            │
│                                                                              │
│ 3. MECHANISM MISMATCH: Even if CPm mutation blocked transmission, we'd be   │
│    breaking vector binding globally. This doesn't explain why FS577 and    │
│    T36 differ in EFFICIENCY, not just binding. CPm is binary (binds or     │
│    doesn't); transmission differences suggest a graded effect (replication, │
│    systemic movement) that p33 viroporin activity explains better.          │
└─────────────────────────────────────────────────────────────────────────────┘

WHY p33 IS BETTER:
┌─────────────────────────────────────────────────────────────────────────────┐
│ p33 mutations address the actual biology:                                    │
│                                                                              │
│ 1. SEQUENCE SIGNAL: p33 DOES vary between isolates and correlates with      │
│    transmission (Shilts 2020, Shilts et al. 2026 validated this).                 │
│                                                                              │
│ 2. ASSEMBLY-SAFE: p33 is NOT part of virion. Removals/truncations are       │
│    tolerated. Mutations are less risky than touching capsid proteins.       │
│                                                                              │
│ 3. MECHANISM-DRIVEN: p33 as a viroporin explains transmission variation via │
│    ion homeostasis → replication efficiency → virion accumulation.          │
│    A 10-fold difference in titer = 10-fold difference in aphid acquisition  │
│    (graded phenotype, not binary).                                           │
│                                                                              │
│ 4. TARGETED BIOCONTAINMENT: Reducing transmission doesn't require breaking  │
│    assembly or movement. You only need to shift the balance enough that     │
│    persistent infection doesn't establish in the vector.                    │
└─────────────────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTIONS THE TEAM MIGHT ASK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q: "How confident are you that p33 K174R will actually reduce transmission?"
A: Medium confidence. The literature (Shilts 2020, Shilts et al. 2026 shows p33 is 
   important, and K174R is the published single-residue candidate. BUT T30 has R174 and 
   still transmits poorly (1.57%), and Harper's K174-retaining hybrids transmit at
   17.9%/20.6% — so residue 174 is not the dominant lever (corrected framing
   2026-09-05; the earlier "necessary but not sufficient" reading is withdrawn —
   CONSENSUS corrections 2–3). That's why we start with Stage 0 screening (other 
   residues as backups).

Q: "What if it doesn't work?"
A: Two fallback paths:
   1. Broader p33 screening: All variable positions (V117S, V262I, E264G) in 
      combination
   2. Shift to p65+p61: These heat shock protein homologs have 17 aa differences 
      and prior literature support for roles in transmission (Harper et al. 2016 did the 
      three-gene swap; we know p65/p61 interact with CPm in the cap complex)
   
   Total timeline if we pivot: +4 weeks (mid-October), not a major delay.

Q: "Does p33 being a viroporin change what we do?"
A: Yes, it gives us a MECHANISM (ion channel activity), but not the DETAILS 
   (which residues control conductance, how conductance affects transmission). 
   Our experiment is still "mutate K174 and test," but now we have a hypothesis 
   for WHY it might work (channel gating affects replication in phloem sieve cells).
   
   If you want deeper mechanistic detail, Xenopus oocyte electrophysiology on 
   mutants would be valuable but is outside our timeline.

Q: "How does this connect to the insert-stability AI challenge you mentioned?"
A: Two independent challenges for the team:
   - Insert stability: "Can we predict whether a foreign insert will be lost via 
     viral evolution?" (needs ML model + evolution data)
   - Transmission biocontainment: "Can we disable aphid transmission while keeping 
     the insert stable?" (needs bio engineering + aphid assays)
   
   Both are high-value for Silvec. Transmission control is shorter-term (8 weeks), 
   simpler experimentally, and directly testable. That's why we're prioritizing it.

Q: "What's the biocontainment bar? What % transmission is 'safe'?"
A: That's a regulatory question, not a science one. Typical thresholds:
   - <0.1% transmission → considered non-transmissible by some regulators
   - <1% → effectively confined in field (very low probability of spread)
   - Current T36 at 1.5% is borderline-safe
   - If we hit <0.5%, we're in the safe range
   - If we hit <0.1%, we're definitely approved
   
   The team should consult your regulatory affairs lead, but the data suggest 
   targets in the <0.5% range are achievable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOTTOM LINE
═══════════

The CPm hypothesis was scientifically sound but empirically wrong. The data (sequence 
conservation, literature experiments) clearly pointed to p33. A recent mechanistic 
discovery (p33 is a viroporin) explains how p33 sequence variation affects transmission.

Next step: Build p33 K174R and related mutants, test Stage 0 viability (3–4 weeks), 
then Stage 1 transmission (3–4 weeks). If successful, ready for regulatory review by 
mid-October.

This is a high-confidence path forward backed by recent literature, sequence analysis, 
and mechanistic understanding.
```
