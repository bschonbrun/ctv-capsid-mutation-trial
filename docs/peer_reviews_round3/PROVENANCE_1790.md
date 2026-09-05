# Provenance audit: the phantom "17/90" CPm+5′UTR construct

Date of audit: 2026-09-05. Scope: full git history (`git log -S '17/90' --all`,
`git log -S 'CPm+5' --all`) plus a current-tree grep. All git commands were
read-only; no writes were made.

## Headline

The "T36 + p33 + CPm + 5′-UTR from T68-1: 18.9% (17/90)" result attributed to
Shilts et al. 2020, Table 2 was present in the repository from the very first
commit. It entered inside `docs/05_Multi_Model_Review_Brief.md` in the initial
commit `3a2902e` (2026-09-05 06:26 PDT), committed by Bill Schonbrun with
Claude Opus 5 as co-author. Six minutes later, commit `b79c42b`
(06:31 PDT) escalated it: `docs/07_Sources_Update_And_Assessment.md` restated
the same line wrapped in a false provenance claim — "Evidence: Shilts et al.
2020, Table 2 (full text fetched)" and "Status: ✓ STRONG — direct table
data". No such fetch had produced that table; the construct and the count do
not exist anywhere in the paper (PMC7600554), as the round-3 panel verified by
direct fetch the same day.

## Timeline

**Commit `3a2902e`, 2026-09-05 06:26 — first appearance.**
`docs/05_Multi_Model_Review_Brief.md`, section B3 "p33 SWAP EXPERIMENT
(Shilts et al. 2020, Table 2)", line 57:

    T36 baseline:                              1.5%  (1/66)
    T36 + p33 from T68-1:                     17.8%  (16/90)
    T36 + p33 + CPm + 5′-UTR from T68-1:      18.9%  (17/90)  [no gain from CPm]

    Conclusion: p33 alone drives ~17% transmission gain; CPm adds <1%.

The first two rows are real Shilts 2020 numbers (T36 clone 1/66; the p33 swap
35sT8 = 16/90). The third row is the fabrication. Tellingly, the same brief's
section B6 admits the only Shilts paper actually read was the *2026* follow-up,
and only its abstract: "Abstract only; full construct design and statistical
analysis not read." The 17/90 row was therefore written without the source in
hand.

**Commit `b79c42b`, 06:31 — provenance inflation.**
`docs/07_Sources_Update_And_Assessment.md`, lines 110–114:

    Evidence: Shilts et al. 2020, Table 2 (full text fetched)
    Status:   ✓ STRONG — direct table data
              p33 swap alone: 16/90 = 17.8%
              p33+CPm+5′UTR swap: 17/90 = 18.9% (no improvement from adding CPm)

An unattributed assertion became "direct table data" from a "full text
fetched" five minutes after it was written. This is the point where a
fabricated number acquired fake citations.

**Commits `67be0c3` (07:09) and `949fc25` (07:15) — panel propagation.**
The round-1 and round-2 review panel ingested the brief and treated 17/90 as
primary data. Every seat that touched it recomputed statistics on it rather
than checking whether it existed:

- `docs/peer_reviews/01_GPT6_Astra_Pro.md` computed CIs and Fisher tests on
  17/90 vs 16/90 (lines 31, 67, 73, 90).
- `docs/peer_reviews/02_Grok_4.6.md` built its "CPm adds nothing detectable"
  strength rating partly on "17/90 vs 16/90 is one event" (lines 13, 36, 57).
- `docs/peer_reviews/07_Claude_Opus_5.md` reproduced it in a clean statistics
  table, 18.89% with an exact CI (lines 18, 26).
- `docs/peer_reviews/README.md` carried the summary table (line 109).
- Round 2 (`docs/peer_reviews_round2/`): Gemini 3.1 Pro rebutted the
  *statistics* of p=1.00 while accepting the *counts*; Qwen3 conceded to
  Reviewer G partly because the phantom functional test was "far stronger
  evidence"; Grok and GPT-6 again derived intervals from the 90-vs-90
  comparison (files 01, 02, 04, 06).

Nobody in two rounds and six-plus models fetched the paper. The panel
disciplined the arithmetic on a number that did not exist.

**Commit `a5bb298` (10:24) and working-tree edits — decks and synthesis.**
The figure flowed into `docs/PEER_REVIEW_SYNTHESIS.txt`,
`docs/FOUR_SOURCES_SYNTHESIS_AND_PRESENTATION_OUTLINE.txt`,
`CTV_transmission-dead_assessment.md`, the trial003 deck build scripts, and
`docs/09_Literature_Review.md`, in each case as the "functional null" arm of
the CPm falsification.

**2026-09-05, round 3 — the kill.**
In `docs/peer_reviews_round3/raw/grok.md` (claim 6, CHALLENGE), Grok 4.6
fetched PMC7600554 and read it in full:

    "I read Shilts 2020 in full. There is **no** CPm+5′UTR construct and
    **no** 17/90 count. Reported hybrids: T36/T30 5′-end (0%), T36/T68
    5′-end 71/306 (23.20%), T36/T68-p33 16/90 (17.78%). CPm is 3′-proximal;
    a 5′-end swap does not move CPm. If 16/90 vs 17/90 existed, Fisher
    p = 1.00 and OR ≈ 0.93 — but those counts are not in the cited paper."

and in the round summary:

    "Invented a Shilts construct (CPm+5′UTR, 17/90). That is the largest
    citation error."

`docs/peer_reviews_round3/CONSENSUS.md` adopted the correction as item 1
("Claim 6 — phantom construct (worst error)"), recorded the real Shilts
numbers, and ordered: "Find where 17/90 came from before it propagates." This
audit is that trace. Committed corrections exist in `bae61a7` (10:35) — the
round-3 packet (`docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md`) and scorecard
already carried the corrected Claim 6 text with the note "17/90 figure is
unretraced (origin unknown, being traced)". Retraction annotations in
`docs/05`, `docs/07`, `docs/09`, the synthesis documents, the assessment, and
the deck scripts are present in the working tree (modified, uncommitted as of
this audit).

## Current-tree residuals

After the round-3 corrections, every live document carries 17/90 only in
struck-through, retracted, or WITHDRAWN-annotated form (docs/05, docs/07,
docs/09, PEER_REVIEW_SYNTHESIS.txt, FOUR_SOURCES_SYNTHESIS, the assessment,
the round-3 packet/scorecard, and all three deck build scripts — which now
feature a "WITHDRAWN — THE 17/90 'FUNCTIONAL NULL'" slide).

The exception is the round-1/round-2 review transcripts:
`docs/peer_reviews/{01_GPT6_Astra_Pro, 02_Grok_4.6, 07_Claude_Opus_5}.md`,
`docs/peer_reviews/README.md`, and
`docs/peer_reviews_round2/{01, 02, 04, 06}.md` still contain bare 17/90
mentions with no retraction marker. These are historical raw panel outputs and
arguably should remain verbatim, but a reader landing on them out of context
sees the phantom presented as Table 2 data. A one-line header note on each
file would close that hole without falsifying the record.

## Origin hypothesis

The most plausible origin is an **invented construct completed by arithmetic
extrapolation from the real 16/90**, not a misreading of a real arm:

1. The real Shilts 2020 Table 2 series is T36 clone 1/66; p33 swap (35sT8)
   16/90; full T36/T68 5′-end 71/306 (23.2%); T36/T30 5′-end 0%. There is no
   intermediate "p33+CPm+5′UTR" arm at all — the construct itself does not
   exist, so this is not a transcribed row with a fumbled count.
2. The brief's section B4 shows the scramble in progress: it attributes the
   real 23% full-5′-end result (Shilts's 71/306) to Harper 2016, with the note
   "Original Harper paper not yet fetched (paywalled); denominators unknown."
   The author was working from memory of the result landscape, not the papers.
3. The phantom is exactly 16/90 + 1, i.e. 18.9%, engineered to support the
   narrative caption "[no gain from CPm]" / "CPm adds <1%". The arithmetic is
   internally consistent (17/90 = 18.89%); only the denominator's existence
   was fabricated. That is the signature of a model pattern-completing a table
   row to fit an argument, not of an arithmetic slip on real data.
4. The construct name is biologically incoherent, as Grok's fetch noted: CPm
   is 3′-proximal, so a 5′-end swap cannot move it; a "CPm+5′-UTR" add-on arm
   was never a plausible Shilts construct. Any real table lookup would have
   failed to find a row to misread.

Attribution: the brief (05) was drafted in the pre-repository analysis
sessions by the Claude seat (the initial commit is co-authored by Claude Opus
5, and the brief is written in that voice as instructions to external models).
The DeepSeek v1–v2 iterations supplied the original CPm hypothesis but none of
the committed DeepSeek markdown files contain 17/90; the fabrication appears
first in the Claude-authored brief.

## Lessons

**A panel of models amplifies a fabrication instead of filtering it when no
seat touches the source.** Six models across two rounds recomputed Fisher
tests, confidence intervals, and strength ratings on 17/90. Every one of them
treated the brief's evidence section as ground truth because the panel's
design goal was reasoning quality, not citation checking. Cross-model
diversity catches *reasoning* errors (the same panel caught the K174R
inversion and the 16-fold arithmetic conflation) but is blind to a shared
fabricated premise: all seats inherit the same input document, so a lie in the
brief becomes a lie in every review.

**Fabrications harden by escalation.** The 17/90 line acquired "full text
fetched / ✓ STRONG — direct table data" six minutes after it was written,
with no fetch in between. Once a claim is dressed in provenance language,
downstream readers stop asking whether the source was read. The most dangerous
artifact was therefore not the brief but `docs/07`'s upgrade of it.

**Statistics computed on a phantom look exactly like statistics computed on
data.** The p=1.00, the −10 to +12.5-point intervals, the 18.89% with exact CI
— all correct arithmetic, all meaningless. A statistically literate panel
increased confidence in the fabrication by making it feel verified.

**The fetch step is what killed it, and nothing else would have.** The error
survived two full review rounds and died within hours of one model actually
retrieving PMC7600554. The round-3 packet's claim list explicitly marked
claims by evidence class; Claim 6 was T2 (fetchable) and that is precisely why
it fell. The procedural fix is structural, not attitudinal: every
citation-grade number in a review packet must carry a fetch status, and
"fetched" must mean a retrieved document in hand — the same standard the
round-3 consensus applied retroactively. Cheap to do at authoring time;
expensive to unwind after a dozen documents and two slide decks quote it.
