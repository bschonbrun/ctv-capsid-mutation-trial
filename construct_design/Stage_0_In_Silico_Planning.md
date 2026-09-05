# Stage 0 — In-Silico Planning

Status: **not started.** This is the gate a construct has to pass before any
material is ordered.

## Purpose

Stage 0 turns the current hypothesis into a ranked, falsifiable set of candidate
mutations, and states in advance what result would count as a failure. It is
finished when someone who disagrees with the hypothesis can read this directory
and say what outcome would change their mind.

## What Stage 0 has to produce

1. **A candidate site table.** Every position under consideration in p33, p61,
   and p65, with: residue identity in each of the four phenotype-labeled
   isolates, conservation across the 130-genome set, whether the position
   segregates with reported transmission, and the evidence tier behind its
   inclusion. Derived from `data/`, reproducible from `data/sequences/`.

2. **A ranking, with the ranking criterion written down first.** Not a list of
   interesting residues — an ordering, and the rule that produced it.

3. **A stated null result.** For each construct: what transmission efficiency,
   virion assembly, and systemic movement readout would mean the construct
   failed to test the hypothesis, as distinct from the hypothesis being wrong.

4. **A power estimate.** Transmission assays yield binary outcomes at low
   baseline rates. The number of aphids and plants per arm needed to detect the
   effect size we care about has to be computed before the design is fixed, not
   after an inconclusive result.

## Known constraints going in

- **K174R is a candidate, not a conclusion.** It is present in the highest
  transmitter (T68-1) and in infectious clone EU937521, absent in FS577 and in
  the U16304 field record. FS577 transmits at 24.1% without it, so it cannot be
  necessary for efficient transmission on its own. See
  `docs/03_Evidence_and_Verification.md`.

- **Single-gene constructs may not be informative.** Shilts et al. 2026 report
  that efficient transmission requires p33, p61, and p65 together. A p33-only
  mutant that fails to shift transmission does not by itself falsify a
  p33 role. Design the combinations alongside the singles, and say beforehand
  how each will be read.

- **The reported transmission percentages are not one experiment.** They come
  from separate studies with different aphid populations and cohort sizes. Ratios
  between them are not effect sizes. Any construct comparison needs its own
  internal controls run in the same assay.

- **Two viable target sets, not one.** p33 has the stronger functional
  literature; p61+p65 is a more compact and better-structurally-characterized
  set. Stage 0 should rank both rather than assume the p33 pivot settled it.

## Biosafety

CTV is a regulated plant pathogen. Institutional biosafety approval is a
precondition for ordering material or inoculating plants — not a step that
follows a finished design. Nothing in Stage 0 requires it; nothing after Stage 0
proceeds without it.

## Inputs

- `data/sequences/` — the genome and isolate records
- `data/alignments/pairwise_protein_alignments.json` — existing pairwise results
- `docs/09_Literature_Review.md` — p33 vs p61/p65 decision framework
- `docs/10_p33_Viroporin_Mechanism.md` — mechanistic model to be tested
- `docs/03_Evidence_and_Verification.md` — what is actually established

## Exit criterion

A ranked candidate table, a construct list with pre-registered readouts, and a
power estimate — reviewed by someone who did not write them.
