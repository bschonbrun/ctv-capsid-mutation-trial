# Multi-Model Review Brief

*Source document: `CTV_MULTIMODEL_REVIEW_BRIEF.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
═══════════════════════════════════════════════════════════════════════════════
CTV TRANSMISSION BIOCONTAINMENT PROJECT
MULTI-MODEL INDEPENDENT REVIEW BRIEF
═══════════════════════════════════════════════════════════════════════════════

INSTRUCTIONS FOR REVIEWER (Run this in Grok, GPT-6, or Claude via CLI):

This brief is designed for INDEPENDENT review by three different models.
Do NOT consult other models' outputs before generating your own response.
Focus on reasoning quality, evidence strength, and missing confounds.

═══════════════════════════════════════════════════════════════════════════════
SECTION A: RESEARCH CONTEXT (For All Reviewers)
═══════════════════════════════════════════════════════════════════════════════

Team Goal: Identify which viral gene(s) determine how efficiently the brown 
           citrus aphid (Toxoptera citricida) transmits Citrus tristeza virus 
           (CTV), with the goal of disabling transmission via targeted mutations 
           while preserving virion assembly and plant-to-plant movement.

Initial Hypothesis: The minor coat protein CPm (p27) is the transmission 
                    determinant. Falsification data now suggest p33, p65, p61.

Research Timeline: 5 weeks of analysis completed; decision point is NOW 
                   (construct design). Must proceed in next 3 weeks.

═══════════════════════════════════════════════════════════════════════════════
SECTION B: EVIDENCE PRESENTED
═══════════════════════════════════════════════════════════════════════════════

B1. TRANSMISSION PHENOTYPE DATA (from Shilts et al. 2020, Viruses 12:1131)
    ────────────────────────────────────────────────────────────────────────

    T68-1 isolate:  44.18%  (95/215 brown citrus aphids transmitted virus)
    FS577 isolate:  24.1%   (measured, same-genotype T36 per GenBank)
    T30 isolate:    1.57%   (2/127 aphids)
    T36 clone:      1.5%    (1/66 aphids)
    [Corrected 2026-09-05, round-3 panel: 1/66 is Shilts's T36 *clone* arm
     (AY170468 backbone), mislabeled "T36 field" here; Harper's T36 field
     rate is 2/380 = 0.53% — see docs/peer_reviews_round3/CONSENSUS.md]

    Conclusion drawn: 16-fold difference in transmission between high (T68-1) 
                      and low (T36) transmitters.

B2. CPm HYPOTHESIS FALSIFICATION DATA (Own alignment)
    ────────────────────────────────────────────────────────────────────────

    Protein p27 (CPm, minor coat protein):
      • FS577 vs T36 field:     100% identical (240/240 amino acids)
      • Yet transmission differs by 16-fold (24.1% vs 1.5%)
      
    Conclusion: CPm sequence variation does NOT explain the transmission gap.

B3. p33 SWAP EXPERIMENT (Shilts et al. 2020, Table 2)
    ────────────────────────────────────────────────────────────────────────

    T36 baseline:                              1.5%  (1/66)
    T36 + p33 from T68-1:                     17.8%  (16/90)  [construct 35sT8]
    ~~T36 + p33 + CPm + 5′-UTR from T68-1:      18.9%  (17/90)~~  [WRONG — no
    such construct or 17/90 figure exists in Shilts 2020 (PMC7600554, verified
    by direct fetch). Real Table 2 data: 35sT8 (T36/T68-p33) 16/90; T36/T68
    5′-end 71/306 (23.2%); T36/T30 5′-end 0%.
    (corrected 2026-09-05, round-3 panel: see docs/peer_reviews_round3/CONSENSUS.md)]

    Conclusion: p33 alone drives ~17% transmission gain. The CPm *functional*
    falsification arm (17/90) is retracted pending re-sourcing; the CPm case
    now rests on sequence identity alone (p27 240/240 identical, B2).

B4. BROADER 5′-END SWAP (Harper et al. 2016, cited in Shilts 2020)
    ────────────────────────────────────────────────────────────────────────

    T36 baseline:                          1.5%
    T36 + full 5′-end of T68-1:           23%
    (This includes p33, CPm, 5′-UTR, p65?, p61?)

    Gap between p33 alone (17.8%) and full swap (23%) = 5.2% unaccounted for.
    Harper 2016 suggests the gap comes from p65/p61 or 5′-UTR context.
    NOTE: Original Harper paper not yet fetched (paywalled); denominators unknown.

B5. SEQUENCE DIVERGENCE AT POSITION 174 IN p33
    ────────────────────────────────────────────────────────────────────────

    T68-1 (44.18% transmission, JQ965169):   R174 (arginine)
    FS577 (24.1% transmission):              R174 (arginine)
    T36 infectious clone EU937521:           K174 (lysine)
    T36 clone arm backbone AY170468:         R174 (arginine)
    T36 field isolate U16304:                A174 (frameshift artifact in the
                                             302-aa frameshifted CDS; carries R
                                             at shifted position 173)
    T30 (1.57% transmission):                R174 (arginine)

    [Rows corrected 2026-09-05, round-3 panel: this table previously listed
     T68-1 as K174 — that was inverted. Re-derived from repo GenBank files,
     corroborated by two panel models: T68-1(JQ965169) = R174; AY170468 = R174;
     EU937521 = K174; FS577 vs EU937521 p33 differ at exactly R174K. The Shilts
     2026 abstract's K174R statement is consistent with these sequences.
     See docs/peer_reviews_round3/CONSENSUS.md]

    Observation: the R174K difference exists only between FS577 and the T36
                 infectious clone EU937521. FS577 and T30 share R174, yet
                 differ ~15-fold in transmission (24.1% vs 1.57%); and Harper
                 2016's K174-retaining hybrids transmit at 17.9%/20.6%.
                 Together these show residue 174 cannot be the dominant lever
                 of the T36 phenotype — the K174-correlation framing above
                 is retired.

B6. SHILTS ET AL. 2026 ABSTRACT (Virology 621:110928, paywalled)
    ────────────────────────────────────────────────────────────────────────

    Title: "Dissecting aphid transmission determinants in Citrus Tristeza Virus 
            using chimeric viruses and gene substitutions"
    
    Key quote from visible abstract:
    "Our findings highlight P33 as a critical viral protein in aphid-mediated 
     transmission and suggest that efficient transmissibility requires 
     coordinated function of multiple viral proteins, including P33, P61, 
     and P65."

    Status: Abstract only; full construct design and statistical analysis not read.

B7. p33 FUNCTIONAL DATA (Aknadibossian et al. 2025, PLoS Pathog
    21(11):e1013730, DOI 10.1371/journal.ppat.1013730 — citation verified by
    direct fetch; TEVC inward K+/Na+ currents, membrane remodeling; third
    plant-virus viroporin. corrected 2026-09-05, round-3 panel: see
    docs/peer_reviews_round3/CONSENSUS.md)
    ────────────────────────────────────────────────────────────────────────

    Finding: p33 is a Class I viroporin (ion channel).
    Evidence: Xenopus oocyte patch-clamp recordings show inward K+/Na+ currents.
              Localizes to ER and plasma membrane.
    Relevance: Viroporins can alter membrane stability, virion assembly,
               and virus-vector interactions.

═══════════════════════════════════════════════════════════════════════════════
SECTION C: INFERENCE CHAIN (What the researchers concluded)
═══════════════════════════════════════════════════════════════════════════════

STEP 1: CPm doesn't explain the variance → CPm sequence variation does not
        determine transmission (100% identical, 16-fold gap). NOTE 2026-09-05:
        the supporting functional arm (17/90 CPm construct) does not exist in
        Shilts 2020 — sequence identity is the sole basis pending re-sourcing.
STEP 2: p33 explains most of the gap → p33 swap: 17.8% vs 1.5% baseline
STEP 3: p33 alone insufficient for full gain → need p61 and/or p65
STEP 4: K174R residue 174 — RE-EVALUATED (corrected 2026-09-05, round-3 panel:
        see docs/peer_reviews_round3/CONSENSUS.md). K174 is NOT in T68-1
        (T68-1 = R174); EU937521 = K174; FS577↔EU937521 differ at exactly
        R174K. T30 (R174, 1.57%) plus Harper's K174-retaining hybrids
        (17.9%/20.6%) show residue 174 is not the dominant lever.
FINAL:  Plan constructs as paired p61+p65 swaps (both genes data-required;
        singles are insufficient: p61 alone partially active p = 0.034 vs
        control, p65 alone not p = 0.41; only the gain-of-function direction
        is published — the reciprocal loss-of-function swap is untested).
        p33 variants remain candidates, not anchored on K174R alone.

═══════════════════════════════════════════════════════════════════════════════
SECTION D: QUESTIONS FOR REVIEWER (Choose your lens)
═══════════════════════════════════════════════════════════════════════════════

AS A PLANT VIROLOGIST:
  1. Is the sequence-identity conclusion (CPm 100% → rules out CPm) logically sound?
     (Assumption: coding-sequence identity = no functional difference)
  
  2. The Shilts 2020 p33 swap shows 17.8% vs 1.5%. Is this difference
     statistically significant given the small denominators (90 and 66)?
     What's the Fisher exact test p-value? (16/90 vs 1/66)
  
  3. Harper 2016 quotes "1.5% to 23%" but without seeing the original data,
     how confident are you in that number? What would change your assessment
     if the denominators were 20 aphids vs 200?
  
  4. Is K174R actually NECESSARY for high transmission, or just CORRELATED?
     T30 has R174 and transmits poorly. What else differs between T30 and
     T68-1 that could explain T30's weakness?
  
  5. The claim "coordinated p33+p61+p65 required" — is this from methods or
     abstract-level speculation? If only the abstract is read, is this
     interpretation over-confident?


AS A QUANTITATIVE REVIEWER:
  1. Shilts 2020 reports T36 as 1/66 = 1.5%. What is the 95% binomial CI?
     (Answer: ~0.04% to 7.7%, very wide.) Does this really EXCLUDE T30's 1.57%?
  
  2. T68-1 at 95/215 = 44.18% ± ? (95% CI = ~37% to 51%). And T36 at 1.5%
     ± ? (CI = ~0.04% to 7.7%). Confidence intervals overlap? No, they don't
     overlap, so the 16-fold difference is robust. Correct?
  
  3. FS577 "24.1%" — where is the denominator? The text says "measured" but
     doesn't state N. Without N, is this comparable to Shilts 2020 numbers?
  
  4. Multiple comparison problem: The team tested CPm, then p33, then is now
     planning p33+p61, p33+p65, p61+p65, p33+p61+p65. That's 7 constructs.
     Are they correcting alpha for multiple testing, or is each test
     independent?
  
  5. Sample sizes in Shilts 2020 range from 66 to 215. Statistical power to
     detect a 10% difference in transmission is ~30–50%. Is that adequate
     for construct screening?


AS A RED-TEAM CRITIC (Find the logical holes):
  1. Circular reasoning check: Did the team FIRST falsify CPm, THEN search
     the literature for papers supporting p33? (If so, confirmation bias.)
     Or did they define the p33 hypothesis BEFORE running the CPm falsification?
  
  2. The Harper 2016 citation — is it in the references of papers you can
     read, or did they find it via Google and quote from Shilts 2020?
     (Unread secondary sources are weaker.)
  
  3. "Only p33 differs" between FS577 and T36 — is this claim limited to
     5 ORFs (p25, p33, p65, p61, p27) or is it a whole-genome claim?
     If restricted, did they check the other ~14 ORFs?
  
  4. The p33 swap gives 17.8%, full 5′-end gives 23%. The 5.2% gap is
     attributed to "p61 or p65 or 5′-UTR context." How many independent
     variables are in that list? If p61+p65+5′-UTR are all involved,
     are they additive, synergistic, or redundant?
  
  5. T30 transmission is 1.57% (with R174, like FS577 at 24.1%). This is a
     16-fold difference WITHIN the R174 genotype. Doesn't this suggest
     K174R is NOT the key driver? What OTHER differences between T30 and
     FS577 go unexamined?

═══════════════════════════════════════════════════════════════════════════════
SECTION E: SUBMISSION INSTRUCTIONS
═══════════════════════════════════════════════════════════════════════════════

For each model (Grok, GPT-6, Claude via your CLI):

1. Paste this entire brief into the model input.

2. Add this prompt:

   "You are reviewing the CTV transmission genetics inference chain above.
    The team has 3 weeks to decide whether to proceed with construct design.
    
    Provide independent, critical feedback on:
    a) Logical soundness of the inference steps (B1 → C, Final)
    b) Strength of evidence by category (strong/moderate/weak)
    c) Key confounds or alternative explanations not addressed
    d) What measurement or data would strengthen the case most
    e) One-sentence final assessment: Is the p33+p61+p65 hypothesis
       sufficiently supported to proceed with construct design? Why or why not?
    
    Be specific. Cite line numbers in the brief if referring to data."

3. Run independently in each model. Do NOT show each model the others' output.

4. Collect the three independent reviews.

5. Send to [your email or Claude Science channel] for compilation.

═══════════════════════════════════════════════════════════════════════════════
SECTION F: METADATA & PROVENANCE
═══════════════════════════════════════════════════════════════════════════════

Data sources cited:
  ✓ Shilts et al. 2020, Viruses 12(10):1131 — full text retrieved & verified
  ✓ Aknadibossian et al. 2025, PLoS Pathog 21(11):e1013730,
    DOI 10.1371/journal.ppat.1013730 — full text retrieved; citation verified
    by direct fetch (corrected 2026-09-05, round-3 panel:
    see docs/peer_reviews_round3/CONSENSUS.md)
  ✓ Shilts et al. 2026, Virology 621:110928 — abstract only (paywalled)
  ✓ Harper et al. 2016, Arch Virol 161:3555 — cited by Shilts 2020 (not fetched)

Own data:
  ✓ Sequence alignments (GenBank KC517488, U16304, JQ965169, AF260651, EU937521,
    AY170468) — reproducible, open source

═══════════════════════════════════════════════════════════════════════════════
```
