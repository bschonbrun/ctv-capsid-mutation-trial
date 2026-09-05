# Transmission-dead CTV — Executive Summary

**Prepared for the Silvec team · Hypothesis trial 003 · September 2026**

## The question

Can a capsid be mutated so the virion still self-assembles and moves through the
plant, but becomes incompatible with its insect vector — ending plant-to-plant
transmission? First trial: deactivate aphid transmission of Citrus tristeza virus.

## The finding

**In CTV, the answer is not a coat-protein mutation.** The vector interface is the
virion's tail complex — p27 (minor coat) plus the chaperones p65 and p61 that place it
— not the p25 body the aphid never reads. The lead construct moves **nine p61
substitutions and two p65 substitutions from the poorly transmitted T36 isolate into
the transmissible FS577 backbone**. Gain-of-function for this pair is published and
re-verified (singles 1.9%/4.0%, pair 17.9%, wild type 24.1%); titer and plant movement
are untouched by it (RT-qPCR identical, every hybrid systemic). The loss-of-function
direction — the product question — has simply never been run.

## Why it's credible

- **Nature built the prototype.** Greenhouse T36: systemic, full titer, 0.6%
  transmission (1/172). Decades of graft passage, not engineering.
- **The gate is mapped.** Harper 2016: the pair restores 17.9% with ~12.6 points of
  synergy — together or not at all.
- **The mechanism is separable from fitness.** Equal accumulation, 30-fold
  transmission difference → the defect lives at the aphid interface.
- **The docking site is assayable in days.** Killiny 2016: free p27/p61/p65 — not p25 —
  compete cibarium binding.
- **The split phenotype exists in the family.** LIYV minor-coat mutant: moves in the
  plant, dead to its whitefly.

## The method claim (the session's second result)

Five wrong answers (CPm, K174R, the charged subset, single-gene-first, the titer
story) were killed on the record before any cost a construct — by a 130-genome
census, a six-model adversarial consortium across two rounds, retrieval of the primary
papers, and re-derivation of every residue from GenBank. Platform lesson, as the team
experienced it: hosted frontier models repeatedly refused the core design questions;
open-weight models (DeepSeek, Kimi, Grok) carried the work, and Grok produced the
winning direction. Operating rule: **a portfolio of models, routed by task — never a
single vendor gating a research question.**

## The approaches

- **A · The knockout (lead).** FS577 + T36 p61+p65. Prediction: ≤5% transmission at
  parental titer. Largest verified effect, published protocol, pre-registered pass line.
- **B · The viroporin arm (parallel).** FS577 + T36 p33 whole gene, titer-matched
  (RT-qPCR — donor titer was previously checked by DAS-ELISA only), with
  the missing reciprocal registered. Prices the accumulation-based mechanism.
- **C · The true capsid mutant (later).** p27 point edits aimed by A's residue map —
  the literal original question, worth having, gated on evidence.

They share one protocol and predict *different measurements* — the season adjudicates.

## The plan and the ask

Twenty weeks, ~$8–13K total, ~550–700 plant assays (≈5,500–7,000 aphid transfers at
10/plant — the earlier "aphids" figure was a ~10× undercount, and cost/timeline are
flagged for re-estimation before pre-registration; `docs/peer_reviews_round3/CONSENSUS.md`, 2026-09-05), pass line ≤5% pre-registered; the gate
(sequence-verified systemic infection at parental titer) comes before the expense. All
Stage 0 in-silico work is complete. **This week we need five answers from records**:
backbone-clone access (FS577/T68), aphid colony + baseline, containment route, citrus
host for validation, and cohort cost. One scientist, one afternoon. If yes: align and
freeze constructs next week; verdict by week twenty. Either outcome is written down in
advance — a pass sends us to the residue map and citrus validation; a registered null
frees us to the p27 map without a wasted season.

*Full detail: `Silvec_transmission-dead_CTV_hypothesis_trial003.pptx` (54 slides) and
`CTV_transmission-dead_assessment.md`. This document and the decks describe laboratory
experiments only; nothing proposes environmental release.*
