---
name: ai-research-panel
description: run a multi-model adversarial verification pipeline on a research claims packet — intake, panel, rebuttal, fetch-verification, corrections, proof layer
---

# AI Research Panel

Run the full adversarial verification pipeline described in
`docs/PLAYBOOK_AI_RESEARCH_VERIFICATION.md`. Read the playbook first if a phase is
unclear; this file is the operational checklist.

## Required inputs — verify before doing anything

1. A claims packet exists at a known path (template: `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md`).
2. Every checkable statement is a **numbered claim** (stable `#`) inside a grouped
   table with a **tier label**: T1 = own reproducible computation, T2 = full text
   read, T3 = abstract only, T4 = citation-of-a-citation.
3. The packet has: section A (context + ground rules), attack orders, open
   questions, explicit non-claims, a "Reviewer response format" section, and ONE
   core-decision proposition that seats score 1–10.
4. Every PMID/citation in the packet has been **fetched and title-matched** (see
   Phase 4). Model-recalled identifiers are wrong often enough that this is a gate,
   not a nicety.

If any check fails, stop and fix the packet first — an unnumbered or untiered packet
cannot produce a scorecard, rebuttal packet, or corrections log.

## Script templates

Adapt, never run as-is. Copy from `scripts/`:

- `round3_model.sh` — per-seat dispatch. Change: packet path, model IDs, keychain
  key names (`security find-generic-password -s <name> -w`), output dir. Known keys
  from the reference run: `anthropic-api-key`, `deepseek-cn-api-key`, `gemini-api-key`,
  `OPENROUTER_API_KEY`.
- `round4_model.sh` — rebuttal dispatch: seat's own round-3 review + its disputes-only
  prompt file.
- `round5_model.sh` — closure sign-off: own R3 review + R4 rebuttal + consensus +
  corrected packet; asks only RESOLVED/OPEN per hold, regressions introduced by
  corrections, final score.
- `fetch_literature.sh` — citation fetcher: PubMed `esearch`→`efetch` abstract,
  `elink` to PMCID, PMC fulltext XML (reject <20 KB stubs), publisher PDF fallback.
  Replace the `name|pmid` list.

Invariants to preserve when adapting: raw output + JSON metadata saved per seat;
empty response text = hard failure (`exit 1`); every CLI dispatch ends in
`</dev/null` (Codex blocks silently on stdin when detached); no API keys in files.

## Phase 1 — Assemble the panel (target: ≥5 seats, ≥4 vendors)

- Include at least one **agentic seat** that can read repo data files/PDFs mid-review
  (Grok CLI `--cwd`, or a native Claude Code subagent reading from disk).
- Dispatch the **identical packet** to all seats. Prompt header: "You are one
  reviewer on an independent multi-model adversarial panel. No other model has seen
  or answered this packet." + recompute order + response format. **No cross-talk.**
- Safety-filter routing: on refusal (`stop_reason: refusal`, "content flagged",
  `bio_policy`) do not reword-and-retry blindly — reroute: same model via
  **OpenRouter** (`openai/<model>`, `z-ai/<model>`), or as a **native Claude Code
  subagent** on the interactive channel. Log every refusal and reroute in the process
  appendix. Wrapper prompts do not pass content-keyed filters.
- Ollama/local fallback: verify models are actually installed first; empty output
  with exit 0 is the trap.

## Phase 2 — Review round

- Run `round3_model.sh <seat>` per seat (parallel background dispatches fine; CLIs
  need `</dev/null`).
- Collect `raw/<seat>.md`. Parse into the scorecard grid: one row per claim, one
  column per seat, cells C / X / ? plus recomputed values in a notes column
  (template: `docs/CTV_ROUND3_SCORECARD.md`).
- Require shown recomputations, not bare verdicts — a seat can CONFIRM with wrong
  arithmetic.

## Phase 3 — Rebuttal round

- Build per-seat dispute packets: only claims where the grid disagrees, containing
  opposing seats' recomputations under neutral labels (no vendor identities).
- Response format per disputed claim: **HOLD / CONCEDE** + the recomputation or
  citation. Dispatch via `round4_model.sh`.
- Update scores. Treat large concession cascades as seat-quality signal (a zero-
  challenge seat that concedes everything was measuring politeness).
- Log principled dissent as a minority report. Do NOT force consensus; do NOT
  adjudicate remaining disputes yourself — log them for Phase 4.

## Phase 4 — Ground truth by fetch

For every unresolved citation-grade dispute: **fetch the source; do not run another
model round.** Ladder: PubMed abstract → PMCID → PMC fulltext XML → publisher OA PDF
→ Europe PMC / OpenAlex → domain DBs (AlphaFold etc.) → repo's own primary files
(GenBank, PDFs). Archive under `docs/literature/<Citation>.{abstract.txt,fulltext.xml,pdf}`.
Verify each fetched PMID's title matches the citation. Upgrade the claim's tier in
the packet when the fetch resolves it (T3 → verified-by-fetch).

## Phase 5 — Corrections sweep

- Adopt panel-verified corrections **in place** in the packet, convention:
  `✗ old → ✓ corrected (source: consensus §n)`. Claim numbers stable; withdrawn arms
  marked withdrawn.
- Fabrication-grade errors: mark **unretraced**, trace the origin before deletion —
  unsourced numbers get re-cited from your own docs.
- Write `CONSENSUS.md` (adopted corrections, unresolved, confirmed-beyond-doubt,
  dissent, actions) and update the scorecard.
- **Sweep all derived docs**: decks, exec summaries, Q&A/knowledge base. `grep -r`
  every corrected figure across the repo (e.g. stale percentages, denominators,
  phantom numbers); fix or annotate each hit. Raw review archives stay untouched.

## Phase 6 — Proof layer

- Every surviving T1 claim gets an executable re-derivation script (stats from raw
  counts; alignments from data files).
- Headline statistics get Monte-Carlo robustness checks over violated assumptions
  (clustering/ICC, alternative null scales). Report what survives and what doesn't.
- Pre-registration additions from panel catches: boundary tie rules, power stated
  per contrast, unit-corrected budgets.
- Provenance audit: every number in the final packet traces to a fetched source on
  disk, an executable computation, or an explicit T3/T4/unretraced label.

## Verification discipline (hard rules)

1. **Recompute, don't vote.** A CLAIM verdict without the arithmetic shown is not a
   verdict.
2. **Fetch, don't re-vote.** Disputed citations close via primary sources only.
3. **Verify every PMID against its fetched title.**
4. Empty output = failure, always.
5. Refusals are routing problems, not verdicts — reroute and log.
6. Independence until the grid is built; disputes-only in rebuttal; identities stay
   neutral.

## Outputs contract

A run is complete only when all exist:

- `raw/<seat>.md` + `.meta.json` for every seat, every round
- Scorecard grid: all claims × all seats, no unscored cells, recomputations in notes
- `CONSENSUS.md`: adopted corrections (✗→✓), unresolved log, confirmed-beyond-doubt
  list, minority report if any, recommended actions
- Corrections applied in packet + every derived doc swept (grep-clean outside raw archives)
- `docs/literature/` archive for every fetched citation
- Proof layer: derivation scripts + robustness simulations + provenance audit note
