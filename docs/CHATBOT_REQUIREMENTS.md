# Silvec Research Assistant — requirements (deferred build)

*Captured 2026-09-05. Build AFTER the research phase; unveiling to the team in
~1 month (target: ~2026-10-05). Not started — this file is the spec.*

## What it is

A chat + collaboration interface for Silvec researchers over this repository as the
knowledge base (corrected packet, consensus, pre-registration, docs/literature archive).
Ask questions, get answers with cited sources, add data, and (later) work together in
Slack.

## Confirmed decisions

- **New repo**, `ctv-research-assistant`, sibling of this docs repo. This repo stays
  docs-only and is the body of knowledge the chatbot reads.
- **Company/branding: Silvec Biologics** (not Carbonet — different company, no Carbonet
  naming or auth reuse).
- **Auth: later.** Clerk planned, but NOT via the existing hr-sync access module (that
  one belongs to a different context and user says it's no longer the reference). When we
  build: identify Silvec's access pattern first, then Clerk (`NEXT_PUBLIC_CLERK_*`), via
  the `clerk-auth` skill.
- **Order: web app first, Slack later.** Same Q&A engine, Slack bolt-on afterward.
- Anti-hallucination is contractual: answers cite only `docs/literature/` + packet +
  consensus; "not in the knowledge base" is a legal answer. Rationale:
  docs/peer_reviews_round3/PROVENANCE_1790.md (an invented citation rode two review
  rounds; never again).

## MVP scope (day-1 unveil)

1. Chat UI answering from an indexed copy of the KB (TF-IDF or embeddings; embeddings via
   OpenRouter if TF-IDF retrieval quality disappoints on the corpus).
2. Source rail: every answer lists the files/passages used.
3. "Add data" — researchers paste notes/data with a label; lands in a reviewed intake
   area (NOT auto-merged into the canon; corrections discipline applies — see playbook).
4. Wet-lab guardrail: refuses construct-optimization questions (verification corpus, not
   a design tool).

## Phase 2 (Slack)

Slack app wrapping the same retrieval/answer engine; channel = Q&A log.

## Ready when built

- `scripts/` here already contain the review-round machinery (round3/4/5 dispatch,
  fetch_literature) — reusable for the chatbot's "ask the panel" power feature if wanted.
- `.claude/skills/ai-research-panel/SKILL.md` for re-running the whole verification
  pipeline on new claims the chatbot surfaces.
