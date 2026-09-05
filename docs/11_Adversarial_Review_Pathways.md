# Adversarial Review — Attempt Log and Available Pathways

*Source document: `CTV_ADVERSARIAL_REVIEW_ATTEMPT_AND_ALTERNATIVES.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
═══════════════════════════════════════════════════════════════════════════════
CTV TRANSMISSION BIOCONTAINMENT PROJECT
ADVERSARIAL REVIEW PATHWAY — ATTEMPT & ALTERNATIVES
═══════════════════════════════════════════════════════════════════════════════

QUESTION 4 ANSWER: Are there sources or ways to provide peer review?

═══════════════════════════════════════════════════════════════════════════════
A. INTERNAL LLM-BASED REVIEW (Attempted This Turn)
═══════════════════════════════════════════════════════════════════════════════

Requested three independent reviews of evidence quality and inference:
  1. Plant virologist expert (Closteroviridae, transmission, JVI reviewer)
  2. Quantitative reviewer (statistics, confidence intervals, power)
  3. Red-team critic (find circular reasoning, unread sources, overselling)

Status: DECLINED by safety filters (refusal on all three instances)

Reason: Model considers critique of biological research evidence framed as
        adversarial review to be outside its guardrails, even when restricted
        to reasoning quality rather than experimental design.

Alternative: Manual peer review (see below).

═══════════════════════════════════════════════════════════════════════════════
B. MANUAL PEER REVIEW PATHWAY (Recommended)
═══════════════════════════════════════════════════════════════════════════════

For a team decision like this, human peer review is the standard and most
credible path. Recommended reviewers:

1. SUBJECT-MATTER EXPERT (plant virology, insect transmission)
   Examples: Anne Kalinowski's group or contact; authors of Shilts 2020/2026;
            anyone published on closterovirus transmission mechanisms
   What they check:
     • Is the sequence-identity conclusion (CPm identical → rules out CPm) valid?
     • Are the swap experiments (Shilts 2020 p33 swap, Harper 2016 p65/p61 swap) 
       being interpreted correctly from abstract/quotation?
     • Are there known transmission factors NOT measured here (capsid
       conformation, RNA stability, polyubiquitin context)?
     • Is K174R actually necessary for efficient transmission or just
       correlated? (T30 has R174 but transmits poorly—what else differs?)
     • Is the claim of "coordinated p33+p61+p65 function" supported by the
       abstract alone, or is that overselling?

2. METHODOLOGY EXPERT (comparative genomics, phylogenetics)
   Examples: evolutionary biologist, population geneticist, bioinformatician
   What they check:
     • Is the 125-sequence p33 census (R174 96.8%, K174 3.2%) representative?
       [corrected 2026-09-05, round-3 panel: census was 125 = 121 R + 4 K
        after dropping five 302-aa T36-lineage sequences (U16304, NC_001661,
        DQ272579, AY340974, OR192037) that carry R at their shifted position
        173 — normalized homologous census is 126 R / 4 K / 130
        (96.9% R, 3.1% K). See docs/peer_reviews_round3/CONSENSUS.md]
       (Is it biased toward particular geographic regions, years, host species?)
     • Does the alignment of "16-fold transmission gap between FS577 and T36"
       really depend on only three amino acids across five ORFs? (Have
       recombination or sequencing error been ruled out?)
     • The claim "only p33 differs" between the FS577-FS577-T36 triple mutant
       and T36 parent — is this verified? (Did you check p18/p13 in the actual
       sequence or just GenBank annotations?)

3. STATISTICAL REVIEWER
   Examples: biostatistician, epidemiologist with plant pathology background
   What they check:
     • Shilts 2020 transmission rates: 95/215 (44%) vs 1/66 (1.5%) — given
       the small denominators, what are the 95% binomial confidence intervals?
       Does T36 transmission = 1.5% [0.04%, 7.7%] really exclude T68-1 at
       44%? (Yes, but the precision is low.)
     • Is 17.8% (16/90 in the p33 swap) significantly different from 1.5%
       (1/66 baseline)? (p < 0.001 by Fisher, but N is still small.)
     • The Harper 2016 quotation: "0.6% → 18%" — in what N? No denominator
       given. Impossible to assess.

4. PROJECT ADVISOR (Silvec virology or biological containment expert)
   What they check:
     • Is the construct hierarchy (singles, pairs, triple) based on prior
       literature precedent (yes—mimics Shilts 2026) or ad-hoc? (Prior art
       supports it.)
     • Is disabling transmission via multiple coordinated mutations
       actually the right strategy for biocontainment, or is there a simpler
       dominant-negative mutation? (Depends on downstream targets; worth
       discussing with team.)
     • What's the mutation stability risk? (If you disable transmission but
       the mutation is unstable under viral replication, it will revert.)

═══════════════════════════════════════════════════════════════════════════════
C. EXTERNAL DATA VALIDATION (No-Cost Check)
═══════════════════════════════════════════════════════════════════════════════

PubMed/GenBank cross-check:
  ✓ Shilts 2020 text (full fetch): verified ✓
  ✓ Shilts 2026 abstract: verified ✓
  ✓ Aknadibossian 2025: verified ✓
  ? Harper 2016 (known only via quotation in Shilts 2020): FETCH THE FULL TEXT
  ? Killiny papers on transmission: pull full texts to verify "0.6% baseline"

Sequence validation:
  ✓ FS577 and T36 p27 100% identical (own alignment): reproducible ✓
  ✓ T30 and FS577 differ by only 22 aa across 5 ORFs: reproducible ✓
  ? K174R discrepancy in T36 infectious clones (AY170468 vs EU937521): VERIFY
    by downloading and re-aligning
    [RESOLVED 2026-09-05, round-3 panel: re-derived from repo GenBank files —
     AY170468 = R174, EU937521 = K174; earlier packet claim that "both encode
     K174" was inverted; T68-1 (JQ965169) = R174; FS577 vs EU937521 p33
     differ at exactly R174K. See docs/peer_reviews_round3/CONSENSUS.md]

═══════════════════════════════════════════════════════════════════════════════
D. SUMMARY: STRENGTH OF EVIDENCE BY CATEGORY
═══════════════════════════════════════════════════════════════════════════════

STRONGEST (Full-text fetched, methods visible):
  • CPm hypothesis falsified (FS577 vs T36 p27 100% identical) ✓
  • p33 is a viroporin (Aknadibossian et al. 2025) ✓
  • Shilts 2020 p33 swap experiment (16/90 = 17.8% vs baseline 1/66 = 1.5%) ✓

MODERATE (Abstract, methods partially known, quotes from readable papers):
  • Shilts 2026 claim that "coordinated p33+p61+p65 required" (abstract only)
  • K174R is one of the differing residues (verified vs GenBank:
    FS577 vs EU937521 differ at exactly R174K)

WEAKEST (Known only through quotation in paper; original source not read):
  • Harper 2016 "p65/p61 swap → 0.6% to 18%" (no denominators) 
  • Killiny et al. baseline "0.6%" transmission
  • The pairing of residue 174 with high transmission
    [corrected 2026-09-05, round-3 panel: the parenthetical here was inverted —
     T68-1 does NOT have K174 (T68-1 = R174, JQ965169); EU937521 = K174.
     Dead-lever conclusion re-anchored on T30 (R174, 1.57%) + Harper's
     K174-retaining hybrids (17.9%/20.6%). See docs/peer_reviews_round3/CONSENSUS.md]

═══════════════════════════════════════════════════════════════════════════════
E. RECOMMENDED NEXT STEPS BEFORE TEAM PRESENTATION
═══════════════════════════════════════════════════════════════════════════════

1. Fetch and read Harper et al. 2016 full text (Arch Virol 161:3555)
2. Fetch Killiny et al. papers that establish the 0.6% T36 baseline
3. Fetch Tatineni 2010 if accessible (CPm encapsidation parameters)
4. Re-verify K174R in your T36 infectious clones against GenBank
   [DONE 2026-09-05, round-3 panel: AY170468 = R174, EU937521 = K174 —
    see docs/peer_reviews_round3/CONSENSUS.md]
5. Send the CTV_Presentation_Hypothesis_Arc.pptx to one virologist in your
   network for 48-hour review with marked-up feedback
6. Mark claims in the presentation by confidence level:
   [STRONG] — both full texts read and methods understood
   [MODERATE] — abstract or partial methods available
   [INFERRED] — based on alignment/bioinformatics, not yet wet-lab validated
   [WORKING HYPOTHESIS] — requires experimental test

═══════════════════════════════════════════════════════════════════════════════
F. ANSWERING THE FOUR ORIGINAL QUESTIONS (FINAL TALLY)
═══════════════════════════════════════════════════════════════════════════════

1. ✓ Full body of work created for Q&A review?
   YES — 8 documents + 1 deck + 1 QA knowledge base = comprehensive package

2. ? Presentations updated with new info?
   PARTIALLY — attributed correctly now; would benefit from
   confidence-level markup per section E above

3. ? Sources cited?
   MOSTLY — 91 misattributions corrected; one unread source (Harper 2016)
   remains; bibliography verified via CrossRef

4. ? Peer review or adversarial check available?
   NO (LLM blocked) → PIVOT TO → manual pathway recommended above

Next: Distribute the marked deck to a virologist for 48-hour review.
═══════════════════════════════════════════════════════════════════════════════
```
