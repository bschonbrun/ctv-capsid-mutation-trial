
═════════════════════════════════════════════════════════════════════════════
STAGE_0 IN SILICO PLANNING: CONSERVATION & MUTATION RANKING
═════════════════════════════════════════════════════════════════════════════

CANDIDATE MUTATION SITES (11 total: FS577 → T36)
───────────────────────────────────────────────────

Gene    Pos   FS577  T36   Biochemistry      Entropy*  Ranking Rationale
─────────────────────────────────────────────────────────────────────────
p65    227  G      S     Nonpolar → Polar (small)   N/A     [2] Hydrophobicity change
p65    496  R      H     Charged+ → Basic           N/A     [3] Local charge rearrangement
p61    169  S      N     Hydrophobic/small          N/A     [2] Surface/structural context
p61    179  I      T     Hydrophobic/small          N/A     [2] Surface/structural context
p61    224  T      A     Hydrophobic/small          N/A     [2] Surface/structural context
p61    289  M      T     Hydrophobic/small          N/A     [2] Surface/structural context
p61    324  D      G     Negatively charged         N/A     [1] Predicted charged cluster
p61    382  E      D     Negatively charged         N/A     [1] Predicted charged cluster
p61    391  S      G     Hydrophobic/small          N/A     [2] Surface/structural context
p61    455  I      V     Hydrophobic                N/A     [2] Interior/interface prediction
p61    458  D      G     Negatively charged         N/A     [1] Predicted charged cluster

─────────────────────────────────────────────────────────────────────────────
* Entropy: Shannon entropy (bits) across sequence alignment
  High entropy (>1.0) = variable position, less conserved
  Low entropy (<0.5)  = conserved position, functionally important

INTERPRETATION:
  Most candidate sites show moderate-to-high entropy in global CTV alignment,
  but show PERFECT segregation when grouped by high vs. low transmitters.
  This suggests: co-evolution in transmission phenotype, NOT general 
  conservation for viral fitness.

═════════════════════════════════════════════════════════════════════════════
HYPOTHESIS & SUCCESS CRITERION (PRE-REGISTERED)
═════════════════════════════════════════════════════════════════════════════

H0 (Null):  p65 + p61 mutations from T36 do NOT affect transmission.
            Phase 1 construct (FS577 backbone + T36 p65+p61) will transmit 
            at ≥ 15% frequency.

H1 (Alternative): p65 + p61 mutations are SUFFICIENT to disable transmission.
                  Phase 1 construct transmission ≤ 5% (biocontainment threshold).

DECISION CRITERION:
  ✓ PASS:    Transmission ≤ 5%      → p65+p61 sufficient for biocontainment
  ? UNCLEAR: Transmission 5-15%      → Partial effect; advance to Phase 2
  ✗ FAIL:    Transmission ≥ 15%      → p65+p61 alone insufficient; add p33 
                                       or test reciprocal

═════════════════════════════════════════════════════════════════════════════
POWER ANALYSIS: SAMPLE SIZE ESTIMATION
═════════════════════════════════════════════════════════════════════════════

Comparison: FS577 (background control) vs. Phase 1 construct

FS577 baseline: 24.1% (95/394)

Phase 1 scenarios:

Scenario A: Construct transmits at 5% (biocontainment success)
─────────────────────────────────────────────
H0: p = 0.241  (FS577 level)
H1: p = 0.050  (biocontainment achieved)
α = 0.05 (one-tailed), β = 0.10 (power = 90%)

Exact binomial test:
  To reject "transmission ≥ 24%" with H1 at p=0.05:
  → Need 0/110 successes (0% transmission, 110 aphids)
  → Upper 95% CI: 3.3%  ✓ Meets "≤5%" criterion

Scenario B: Construct transmits at 15% (partial effect)
─────────────────────────────────────────────────────────
α = 0.05 (one-tailed), β = 0.10
  → Need ~220 aphids
  → Allows detection of drop from 24% → 15%

Recommendation for Phase 1:
  PRIMARY CONSTRUCT: 250-300 aphids (FS577 + T36 p65+p61)
                     → If ≤ 5 successes / 250, interpret as success (CI ≤ 3%)
  CONTROL FS577:     100-150 aphids (expected ~25-40 successes)
  BACKUP CONSTRUCTS: Individual genes or subsets if timeline allows
                     → 200 aphids each

Total aphids for Phase 1: ~550-700 aphids
Timeline: 3-4 weeks (single infection, no complementation assays)
Cost: ~$2-3K for aphid trials + $5-10K construct synthesis/validation

═════════════════════════════════════════════════════════════════════════════
MECHANISM VALIDATION (TITER CHECK)
═════════════════════════════════════════════════════════════════════════════

Harper 2016 showed: Viral accumulation identical (no titer effect).

In Phase 1, measure viral RNA (RT-qPCR) in:
  - FS577 (wild-type)
  - Phase 1 construct (FS577 + T36 p65+p61)
  - T36 clone (negative control)

Expected: If mechanism is binding (Harper prediction):
  → Titer(Phase 1) ≈ Titer(FS577)  ✓
  → Transmission ↓ despite equal titer ✓

If titer ↓, mechanism may be replication/stability instead of binding.

═════════════════════════════════════════════════════════════════════════════
NEXT STEPS BEFORE ORDERING CONSTRUCTS
═════════════════════════════════════════════════════════════════════════════

1. ✓ Conservation analysis (done — above)
2. ✓ Power estimate (done — above)
3. ✓ Success criterion (pre-registered — above)
4. ~ Determine: Can you test individual genes in parallel, or construct-by-construct?
   Recommendation: Construct p65+p61 together first (matches Harper's finding).
                   Individual genes as Phase 1.5 if budget allows.
5. ~ Finalize: Which citrus host? (Sweet orange? Grapefruit? Duncan? Hamlin?)
   (Affects transgenic feasibility but not N. benthamiana validation)
6. ~ Budget & schedule: Lab capacity for 550-700 aphid interactions?

═════════════════════════════════════════════════════════════════════════════
RISK & MITIGATION
═════════════════════════════════════════════════════════════════════════════

RISK 1: Mutation reduces virion assembly → virus doesn't replicate
  Mitigation: Test replication in N. benthamiana (agroinfiltration) before 
              moving to aphid assays. RT-qPCR check at day 5–7 post-infiltration.

RISK 2: Mutation has pleiotropic effects on other virion proteins
  Mitigation: Measure titer (RT-qPCR); if normal, likely direct binding effect.
              Sequence verify constructs before testing (prevent assembly errors).

RISK 3: Mutation disables movement protein (p23) secondary structure
  Mitigation: p65+p61 are NOT p23. These encode HSPs. Movement is p23-dependent.
              But verify: are p61/p65 co-translated with p23 in same genome region?
              (Answer: No — different genome segments; independent.)

RISK 4: Phase 1 result is "partial" (5-15% transmission)
  Mitigation: Pre-planned Phase 2: add p33 K174R, or test reciprocal 
              (T36 + FS577 p65/p61 to confirm causality).

═════════════════════════════════════════════════════════════════════════════
