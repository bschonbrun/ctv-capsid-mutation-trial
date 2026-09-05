# Hypothesis Arc — CPm Falsification and the p33 Pivot

*Source document: `CTV_Process_Document_Learning_Arc.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
═══════════════════════════════════════════════════════════════════════════════
CTV APHID-TRANSMISSION BIOCONTAINMENT PROJECT
PROCESS DOCUMENT: THE LEARNING ARC
═══════════════════════════════════════════════════════════════════════════════

This document traces the actual workflow and decision points that led us from the
initial hypothesis (CPm mutations) through data collection, challenge/falsification,
to the revised direction (p33 mutations). It is a learning resource for how to work
with AI on biology problems: when to push back, how to validate, when to pivot.

═══════════════════════════════════════════════════════════════════════════════
PHASE 1: PROBLEM FRAMING (Session Start, Week 0)
═══════════════════════════════════════════════════════════════════════════════

USER INPUT (from Silvec team):
  "What mutation(s) to a capsid still makes a functional virion with respect to
   self-assembly and internal plant movement but would make it incompatible to an
   insect vector and thereby disable plant-to-plant movement?"
   
  SPECIFIC VIRUS: Citrus tristeza virus (CTV), vector: Toxoptera citricida (brown
  citrus aphid)

INITIAL FRAMING BY USER:
  • Virion = genome (RNA) + protein shell (capsid)
  • Capsid required for: (a) virion protection outside plant, (b) movement within plant
  • Goal: Disable vector transmission while preserving intra-plant movement
  • This requires understanding the specific protein-vector interaction

KEY INSIGHT USER PROVIDED:
  "There is a very specific interaction between the capsid and the insect's mouth/gut
   that allows for transmission. The CTV virion and aphid have essentially developed
   a synergistic relationship."
  
IMPLICATION FOR RESEARCH:
  Must identify which capsid protein(s) interact with the vector, and which mutations
  would disrupt that interaction without destroying virion assembly or plant movement.

═══════════════════════════════════════════════════════════════════════════════
PHASE 2: INITIAL HYPOTHESIS GENERATION (Weeks 1-2)
═══════════════════════════════════════════════════════════════════════════════

QUESTION POSED BY AI:
  "Which capsid protein is the vector-recognition ligand?"
  
INITIAL HYPOTHESIS (prior sessions):
  CPm (p27, minor coat protein) — the hypothesis was that CPm is the vector-binding
  determinant, based on literature showing CPm has carbohydrate-binding domains that
  interact with insect stylets.

REASONING:
  • Killiny et al. 2016: CPm contains carbohydrate-binding domains
  • CPm is exposed on virion surface, positioned for vector interaction
  • CPm phylogenetic variation correlates with vector specificity in some viruses
  → Therefore: CPm sequence variation likely determines aphid-transmission specificity

THIS HYPOTHESIS HAD CLEAR APPEAL:
  ✓ Mechanistically plausible (carbohydrate binding domain)
  ✓ Supported by precedent in other viruses
  ✓ Target is a single, small protein (240 aa) → easier to engineer
  ✓ Previous CPm-focused presentation deck created based on this hypothesis

═══════════════════════════════════════════════════════════════════════════════
PHASE 3: DATA COLLECTION (Weeks 3-5)
═══════════════════════════════════════════════════════════════════════════════

CHALLENGE FROM USER:
  "Is that actually a data-driven hypothesis, or just a plan for testing?"
  
  This prompted a pivot to: collect sequence data and compare isolates with
  known transmission phenotypes.

DATA GATHERING WORKFLOW:

  STEP 1: Retrieve reference isolates with measured transmission efficiency
  ────────────────────────────────────────────────────────────────────────
  • Downloaded 130+ CTV genomes from NCBI GenBank
  • Identified four isolates with published transmission data:
    - T68-1 (JQ965169): 44.18% transmission (high)
    - FS577 (KC517488): 24.1% transmission (medium)
    - T30 (AF260651): 1.57% transmission (low)
    - T36 field isolate (U16304): 1.5% transmission (baseline/lowest)
      [CORRECTED 2026-09-05 — CONSENSUS correction 4: the 1.5% (1/66) figure is
       Shilts's T36 CLONE arm (AY170468 backbone), not the field isolate;
       Harper's T36 field rate is 2/380 = 0.53%]
  
  REASONING: If CPm is the transmission determinant, CPm sequences should differ
  systematically between high-transmitters (T68-1, FS577) and low-transmitters
  (T30, T36).

  STEP 2: Extract CPm sequences and perform pairwise alignment
  ───────────────────────────────────────────────────────────
  • Used Biopython Bio.SeqIO to extract CDS features from GenBank
  • Extracted p27 (CPm) from all four isolates
  • Performed global pairwise alignment using Bio.Align.PairwiseAligner
  • Scoring: BLOSUM62 matrix, standard gap penalties
  
  RESULTS:
    T68-1 vs T36:        98.3% identity, 4 aa differences
    FS577 vs T36:        100% identity, 0 aa differences ← KEY FINDING
    T30 vs T36:          98.8% identity, 3 aa differences
    T68-1 vs FS577:      98.3% identity, 4 aa differences

  STEP 3: Challenge the hypothesis
  ────────────────────────────────
  OBSERVATION: FS577 and T36 field isolate are **identical** in CPm (240/240 aa),
  yet they differ **16-fold in transmission efficiency** (24.1% vs 1.5%).
  [CORRECTED 2026-09-05 — CONSENSUS correction 4: the 1.5% (1/66) is the Shilts
   T36 clone arm; the T36 field rate is 0.53% (2/380, Harper) — the CPm-identity
   conclusion is unchanged either way]
  
  LOGICAL CONSEQUENCE:
    If CPm_FS577 = CPm_T36 (same sequence)
    AND TX_FS577 ≠ TX_T36 (different transmission)
    THEN CPm sequence variation ∄ the sole determinant of transmission difference
  
  This falsifies the initial CPm hypothesis.

═══════════════════════════════════════════════════════════════════════════════
PHASE 4: HYPOTHESIS REVISION (Week 6)
═══════════════════════════════════════════════════════════════════════════════

USER GUIDANCE:
  "Show your initial hypothesis, what data you just got, and why you're pivoting,
   along with what I did to get you to pivot. That's the learning loop."
  
  This established that the deliverable should show:
    (a) Initial hypothesis (CPm)
    (b) Falsifying data (100% CPm identity, 16-fold transmission difference)
    (c) Why it failed (logical inference)
    (d) The process of deciding what to test next

PIVOTING TO: p33 as the primary transmission determinant

EVIDENCE FOR PIVOT:
  1. Literature: Shilts & Killiny 2020 (Viruses 12:1131)
     • T36 + T68-1 p33 (swapped): transmission 1.5% → 17.8%
     • T36 + T68-1 5'-end (including p33): transmission 1.5% → 23%
     • Inference: p33 accounts for ~77% of the transmission gain
  
  2. Sequence data (from our 130-genome census):
     • p33 differs between high and low transmitters
     • p33 is not identical like CPm
     • Multiple candidate amino acid positions show variation
  
  3. Mechanistic plausibility:
     • p33 is multifunctional: replication suppressor, movement protein, RNA
       stability enhancer
     • p33 is membrane-associated, positioned for cell-cell signaling
     • Precedent: other suppressor proteins affect transmission in plant viruses

DECISION FRAMEWORK:
  ✗ CPm: identical between high/low transmitters → cannot explain difference
  ✓ p33: differs between high/low transmitters → consistent with role as determinant
  ✓ Literature supports p33 as driver of transmission variation
  ✓ p33 is multifunctional → plausible mechanism for vector interaction

═══════════════════════════════════════════════════════════════════════════════
PHASE 5: HYPOTHESIS VALIDATION VIA LITERATURE (Week 7)
═══════════════════════════════════════════════════════════════════════════════

NEW QUESTION: "Are we the only ones looking at p33, or have others tried this?"

USER REQUEST:
  "Find any additional information out there on those 2 approaches [CPm vs p33]
   and if any others have tried them, what they've found and anything that might
   change our approach."

LITERATURE SEARCH STRATEGY:
  • Query 1: "p33 protein Closteroviridae multifunctional replication suppressor"
    → Found: viroporin discovery paper (PLOS Pathogens 2025)
  
  • Query 2: "viral protein suppression RNA silencing CTV p33 mechanism"
    → Found: Multiple papers on p33's role in silencing suppression and movement
  
  • Query 3: "Citrus tristeza virus p33 K174R aphid transmission"
    → Found: Shilts et al. 2026 (Virology, S0042682226001431)
  
  • Query 4: "Grapevine leafroll virus helicase CP virion assembly transmission"
    → Found: Precedents in other closteroviruses (GLRaV-3, etc.)

KEY FINDING: p33 VIROPORIN DISCOVERY (PLOS Pathogens 2025)
  ────────────────────────────────────────────────────────
  Title: "The citrus tristeza virus p33 protein functions as a viroporin"
  [CITATION VERIFIED 2026-09-05 — CONSENSUS correction 9: Aknadibossian et al.
   2025, PLoS Pathogens 21(11):e1013730, DOI 10.1371/journal.ppat.1013730]
  
  • p33 has Class I viroporin architecture (transmembrane + cytoplasmic domains)
  • Induces K+ and Na+ currents in Xenopus oocytes (two-electrode voltage clamp)
  • Triggers membrane remodeling
  • SIGNIFICANCE: Provides mechanistic explanation for how p33 could affect
    viral replication rate, RNA stability, and ultimately transmission efficiency
  
  IMPLICATION: p33 mutations might not just affect vector binding, but ion
  homeostasis → affecting viral fitness → affecting transmission

SECONDARY FINDING: Shilts et al. 2026 (Virology)
  ────────────────────────────────────────────────
  Title: "Dissecting aphid transmission determinants in Citrus Tristeza Virus
          using chimeric viruses and gene substitutions"
  
  Experimental design:
    • Created CTV-T36 backbone with triple deletion: Δp33 Δp18 Δp13
    • Complemented with FS577 versions of these three genes
    • Result: transmission increased from ~0.6% to up to 50%
  
  Key finding:
    • Among the three complemented genes, ONLY p33 differs (K174R mutation)
      [VERIFIED CONSISTENT 2026-09-05 — CONSENSUS correction 2: T36 clone
       EU937521 = K174, FS577 = R174; they differ at exactly R174K. But residue
       174 is NOT the dominant lever: T30 (R174) transmits at 1.57% and Harper's
       K174-retaining hybrids at 17.9%/20.6% — correction 3]
    • Conclusion: "Efficient aphid transmission likely requires coordinated roles
      of p33, p61, and p65"
  
  IMPLICATION: p33 is THE main driver, but p61+p65 are necessary co-factors
  (not fallback options)

═══════════════════════════════════════════════════════════════════════════════
PHASE 6: VALIDATION CHALLENGE & CITATION DISCIPLINE (Week 8)
═══════════════════════════════════════════════════════════════════════════════

USER QUESTION #1: "Have you created the full body of work that can be reviewed?"
  ANSWER: Partially. Five documents exist but they lack proper citation rigor.

USER QUESTION #2: "Did you update the presentation with all the new information?"
  ANSWER: No. The old CPm-focused presentation needs to be rebuilt.

USER QUESTION #3: "Did you cite your sources?"
  ANSWER: Inconsistently. I cited Shilts 2020 and Killiny et al. 2016 2016 from fetched full
  texts, but I wrote "Shilts et al. 2026" into multiple documents before verifying
  it actually existed or fetching it. This is a discipline failure.

USER QUESTION #4: "Are there any sources, or ways, to provide peer review?"
  ANSWER: Attempted adversarial review via LLM (three independent skeptical
  reviewers) but the system refused the request. Manual domain-expert review is
  the path forward.

KEY LEARNING: SOURCE EVERY NUMBER AT POINT OF USE
  ─────────────────────────────────────────────
  The error pattern:
    (1) Tool outputs a number (K174R appears in EU937521)
    (2) I write it into a document as a claim ("K174R is THE mutation")
    (3) I cite a paper I haven't fetched yet ("Shilts et al. 2026")
    (4) User asks "did you cite sources?" → only then do I discover the gap
    (5) I retroactively search for and find the paper
  
  CORRECT WORKFLOW:
    (1) Fetch the source first
    (2) Verify the specific claim in the fetched text
    (3) THEN write it into a document with inline citation
    (4) If claim doesn't appear in fetched text, mark as [INFERRED] or [NEEDS CHECK]

═══════════════════════════════════════════════════════════════════════════════
PHASE 7: RIGOROUS VERIFICATION (Week 8-9, Current)
═══════════════════════════════════════════════════════════════════════════════

CURRENT TASK: Audit all claims, classify them by verification status, and identify
gaps before presenting to the team.

VERIFICATION FRAMEWORK:
  [VERIFIED via fetch]    = Directly from fetched full text
  [VERIFIED via tool]     = From own code/computation
  [INFERRED via logic]    = Derived from verified sources
  [NEEDS MANUAL CHECK]    = Requires wet-lab or expert validation
  [CITED but unfetched]   = Paper exists (found) but not yet fetched
  [ERROR - CORRECTED]     = Claim I made that was wrong; here's the fix

RESULTS OF AUDIT:

  STRONG (Fetched, directly quoted):
    ✓ CPm is 100% identical between FS577 and T36 (our alignment)
    ✓ Shilts 2020: p33 swap raises transmission from 1.5% to 17.8%
    ✓ p33 is a viroporin (PLOS Pathogens 2025, fetched)
    ✓ p33 induces K+/Na+ currents (PLOS Pathogens 2025, fetched)

  MODERATE (Paper found via search, not yet full-text fetched):
    ⚠ Shilts et al. 2026: 50% transmission via p33 complementation
    ⚠ Shilts et al. 2026: K174R is the key residue
    ⚠ Shilts et al. 2026: Coordinated p33+p61+p65 required

  WEAK (Transmission % values, need lab validation):
    ✗ T68-1 = 44.18%, FS577 = 24.1%, T30 = 1.57%, T36 = 1.5%

NEW INSIGHT FROM RESIDUE 174 CENSUS:
  ────────────────────────────────────
  Examined all 125 full-length p33 sequences in our 130-genome corpus:
    • R174: 121 sequences (96.8%) — the "wild-type" state
    • K174: 4 sequences (3.2%) — the "rare" variant
    • Isolates with K174: EU937521, MH323441, MH323442, ON094625
  
  REFERENCE ISOLATES:
    • T68-1 (44% tx): R174 (not K174)
    • FS577 (24% tx): R174 (not K174)
    • T30 (1.57% tx): R174 (not K174)
  
  PROBLEM: If K174R is "THE mutation" for high transmission, why do the actual
  high-transmitters (T68-1, FS577) have R174 (the wild-type)?
  
  RESOLUTION [CORRECTED 2026-09-05 — CONSENSUS corrections 2–3]: the round-3
  re-alignment confirms T68-1 = R174, AY170468 = R174, and the T36 infectious
  clone EU937521 = K174; FS577 vs EU937521 differ at exactly R174K, so the
  2026 abstract's K174R statement is consistent with the verified sequences.
  The earlier "necessary but not sufficient" framing (and the guess that T36
  "naturally lacks" K174) is withdrawn. The switch reading fails on phenotype:
  T30 (R174) transmits at 1.57%, and Harper's K174-retaining hybrids transmit
  at 17.9%/20.6% — residue 174 is not the dominant lever; the transmission
  gain came from the coordinated p33+p61+p65 complementation.
  
  IMPLICATION FOR DESIGN:
    Not: "Install K174R and transmission will go up"
    But: "p33 sequence variation is one component of a coordinated p33+p61+p65
         strategy; test the combined effect"

═══════════════════════════════════════════════════════════════════════════════
PHASE 8: DECISION POINT FOR THE TEAM (Week 9, Today)
═══════════════════════════════════════════════════════════════════════════════

STATUS OF EVIDENCE:

  FOR p33 as the primary target:
    ✓ CPm is ruled out (identical between high and low transmitters)
    ✓ Literature (Shilts 2020) shows p33 drives ~77% of transmission gain
    ✓ Viroporin discovery (PLOS 2025) provides mechanism
    ✓ Precedent (Shilts et al. 2026: p33 mutations experimentally validated
    ✓ Sequence census shows p33 varies between isolates

  AGAINST p33 as a simple single-target:
    ✗ K174R is rare (3.2% in nature)
    ✗ High-transmitters (T68-1, FS577) have R174, not K174
    ✗ Shilts et al. 2026 paper emphasizes coordinated p33+p61+p65, not p33 alone

  RECOMMENDATION:
    Design experiments to test p33 mutations (K174 as a starting point, based on
    Shilts et al. 2026 precedent) WITH coordinated p61 and p65 mutations. This is the
    mechanism the literature supports.

═══════════════════════════════════════════════════════════════════════════════
KEY PROCESS INSIGHTS FOR FUTURE AI-ASSISTED RESEARCH
═══════════════════════════════════════════════════════════════════════════════

1. START WITH FALSIFIABLE HYPOTHESES
   Initial CPm hypothesis was testable: compare sequences of high vs low
   transmitters. When data contradicted it, we pivoted cleanly.

2. COLLECT DATA BEFORE COMMITTING TO A DIRECTION
   Rather than "design experiments to test CPm mutations," we first asked
   "does CPm vary between transmitters?" The answer determined our direction.

3. ALWAYS FETCH SOURCES BEFORE CITING THEM
   Error pattern: write claim → cite paper → later discover paper not fetched
   Correct pattern: fetch paper → verify claim → write with inline citation

4. MARK INFERENTIAL LEAPS EXPLICITLY
   Distinguish [VERIFIED via fetch] from [INFERRED via logic] from [NEEDS CHECK].
   This helps the team decide where validation is needed before wet-lab work.

5. USE SEQUENCE DATA AS A REALITY CHECK
   When literature says "K174R is critical," check: do high-transmitters have K174?
   (Answer: no, they have R174.) This revealed that the literature finding is more
   nuanced than the headlines suggest.

6. LEVERAGE MECHANISTIC DISCOVERY, NOT JUST SEQUENCE VARIATION
   The viroporin discovery (ion channel function) provided a mechanism for how p33
   could affect transmission beyond simple protein-protein binding. This expanded
   our model from "CPm binds the vector" to "p33 affects ion homeostasis → RNA
   stability → transmission."

7. CHALLENGE YOUR OWN OUTPUTS
   When asked "is this data-driven or just a plan?", that prompted a shift from
   "we will test CPm" to "we did test CPm and it failed." The rigor came from
   questioning the hypothesis, not from complexity.

═══════════════════════════════════════════════════════════════════════════════
DELIVERABLES READY FOR TEAM
═══════════════════════════════════════════════════════════════════════════════

1. CTV_Citation_Audit_and_Verification.txt
   → Every claim classified by verification status
   → Gap analysis: which claims need manual/experimental validation?

2. CTV_Process_Document.txt (this file)
   → The learning arc: hypothesis → data → pivot → validation
   → Methodology for working with AI on research problems

3. CTV_Transmission_Executive_Summary.txt (UPDATED)
   → 5-minute overview of the CPm hypothesis, falsifying data, new direction

4. CTV_p33_Mechanism_and_Testing_Plan.txt (UPDATED)
   → Detailed mechanism (viroporin), candidate mutations, 12-week testing timeline
   → Decision gates and contingencies

5. CTV_Revised_Presentation.pptx (BUILDING)
   → Slide 1-3: Problem statement and initial CPm hypothesis
   → Slide 4-5: Falsifying data (CPm identity analysis)
   → Slide 6-8: Literature discovery (Shilts 2020, viroporin paper)
   → Slide 9-12: New direction (p33), mechanism, testing plan
   → Appendix: Citation audit, sequence data, decision framework

═══════════════════════════════════════════════════════════════════════════════
```
