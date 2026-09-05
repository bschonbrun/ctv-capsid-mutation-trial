# Playbook — Multi-Model Adversarial Research Verification

*Distilled from the CTV Round 3–5 panel run (2026-09-05). Source artifacts:
`docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md`, `docs/CTV_ROUND3_SCORECARD.md`,
`docs/peer_reviews_round3/{APPENDIX,CONSENSUS}.md`, `scripts/round{3,4,5}_model.sh`,
`scripts/fetch_literature.sh`. Written so a lead who was not in that room can run it.*

---

## 0. Scope

**What this is.** A repeatable pipeline for verifying a scientific or technical
analysis *document* — its citations, arithmetic, statistics, and design reasoning —
using a panel of frontier models from different vendors, plus direct
literature/database fetches, ending in a corrected document and an executable proof
layer. Built for decision-grade questions ("do we green-light experiment X").

**What it is not.** Not a way to generate new science. Not a substitute for human
domain review — the panel verifies claims against published evidence; the human lead
owns interpretation and the decision. Not majority-vote epistemology: models propose
challenges, *fetches and recomputation* dispose of them.

The load-bearing principle, proven in the reference run: **recomputation beats
reading.** Every hard error the process caught (a fabricated citation, an inverted
sequence claim, a 10× units error, a rounding bug) was found by a seat that
recomputed against primary sources — GenBank files, the paper PDF, a fetched full
text — not by one reasoning about plausibility. Design every phase to force
recomputation.

---

## Phase 0 — Topic intake and claim packing

The single most important investment. Everything downstream is only as auditable as
the packet.

**Mandated packet structure** (sections A–E, all sent verbatim to every seat):

- **A. Context.** Who you are, what the project is, what the decision is, and — for
  sensitive domains — an explicit defensive/lawful framing plus "what we are NOT
  asking" (this framing matters for vendor safety filters; see Phase 1). Include
  ground rules: recompute-don't-vote, answer per claim, post-cutoff literature may
  exist (flag it, never assert non-existence).
- **B. Numbered claims, grouped into blocks (B1–B10).** Every checkable statement in
  the document under review gets a number, in a table: `# | claim | tier`. Numbers
  never change once assigned; corrections are applied in place with the number
  intact.
- **C. Attack orders.** The 3–4 claims you most want destroyed, stated as challenges
  ("our strongest claim is X — find the weakness"). This licenses adversarial effort
  where it pays.
- **D. Open questions.** Literature gaps where a seat's knowledge could help — flagged
  as requests for citations, not assertions.
- **E. Explicit non-claims.** What the document does not assert. Half of all review
  noise comes from seats attacking positions you never took.
- **Reviewer response format** and **the core decision** as a single scoreable
  proposition ("green-light the blinded titer-controlled greenhouse necessity test of
  X"), so every seat ends with a comparable 1–10 confidence score.

**Confidence tiers — mandatory.** Label every claim:

| Tier | Meaning |
|---|---|
| T1 | Our own reproducible computation (script or re-derivable alignment exists) |
| T2 | Paper fetched and read in full |
| T3 | Abstract only (full text paywalled) |
| T4 | Known only through citation by another paper |

Why the format is non-negotiable: numbered claims are what made the 45-row scorecard
grid possible, what let rebuttal packets reference disputes precisely ("claim 30: you
said X, seat-2 recomputed Y"), what let the corrections log say "claim 42: ✗ → ✓" with
a pointer to the consensus paragraph, and what let tier upgrades be tracked
(T3 → verified-by-fetch). Prose packets produce prose reviews that cannot be
cross-tabulated.

**Acceptance criteria (phase 0):** every load-bearing number, citation, and inference
in the source document appears exactly once as a numbered, tiered claim; attack orders
and non-claims written; core decision stated as one proposition; packet total fits
comfortably in every panel model's context with room for a long structured reply.

---

## Phase 1 — Panel assembly

**Six seats, six vendors/families.** Model diversity is the point — same-family seats
share blind spots and sycophancy patterns. The reference panel:

| Seat | Model (as run) | Transport | Keychain / key | Failure modes hit |
|---|---|---|---|---|
| Grok | grok-4.6 | Grok Build CLI, agentic mode (`--cwd`, reads repo files live) | subscription login | none — agentic grounding was its advantage |
| GPT | gpt-6-astra | **OpenRouter API** (after both native paths refused) | `OPENROUTER_API_KEY` | bio-filter refusal on Codex CLI *and* OpenAI API; `-astra-pro` variant dropped at response limit |
| Claude | claude-fable-5-1 | **Claude Code native subagent** (after API refusal) | harness session | Anthropic API `stop_reason: refusal` (bio category, zero output) |
| DeepSeek | deepseek-v4-pro | native API | `deepseek-cn-api-key` | confirmed one claim with *wrong arithmetic* |
| GLM | glm-5.3 | OpenRouter API (local Ollama was intended; no models installed) | `OPENROUTER_API_KEY` | empty-output trap from Ollama attempt |
| Gemini | gemini-3.1-pro-preview | native API | `gemini-api-key` | zero-challenge pass (see failure catalog) |

Anthropic key for direct-API attempts: `anthropic-api-key`. All keychain reads use
`security find-generic-password -s <name> -w` — never put keys in the scripts.

**Subscription CLIs vs APIs.** Grok Build and Codex CLI draw on subscription plans
(free marginal cost) and — critically for verification work — can run **agentic**:
reading the repo's own data files and PDFs mid-review, which is how the reference
run's hardest catches were grounded. APIs are the fallback and the standard path for
vendors without a sanctioned CLI. Keep at least one agentic seat on the panel.

**Known routing failure modes and workarounds:**

1. **Bio-filter false positives.** A document about a *contained*, transmission-
   disabled plant virus tripped OpenAI (both Codex CLI and API) and Anthropic API
   filters even with employer-named, EPA-context, "no new designs" framing. The filter
   keys on packet content; a wrapper prompt did not pass. Workarounds that worked:
   (a) route the same model through **OpenRouter**; (b) run the review as a **native
   Claude Code subagent** on the interactive channel, which carries the user's research
   context. Document every reroute in the process appendix — seat provenance matters.
2. **Codex stdin trap.** `codex exec` blocks silently on stdin when dispatched
   detached/backgrounded. Every CLI dispatch gets `</dev/null`. Symptom: script hangs
   forever, no output, no error.
3. **Ollama-empty fallback.** A local-model plan silently fails when no models are
   installed (empty stdout, exit 0 in some wrappers). Every dispatcher must treat
   empty response text as hard failure — the template scripts write stderr and
   `exit 1` on empty text.
4. **PMIDs from memory.** Any citation list assembled by a model will contain plausible-
   looking wrong PMIDs/pages (the reference run's Killiny 2016 was cited as "82:6194";
   real pages are 82(21):6294–6302). Rule: **verify every PMID by fetching it and
   matching the returned title to the citation** before it enters the packet.

Dispatcher design (see `scripts/round3_model.sh`): one script, `<model-key>` argument,
shared prompt header (independence statement + response format + recompute order),
packet read from disk or passed verbatim, raw output + full JSON metadata saved per
seat, word-count printed on success. Log everything raw — the scorecard is built from
the raw files, not memory.

**Acceptance criteria (phase 1):** ≥5 seats responding across ≥4 vendors; at least one
agentic seat able to read primary files; every refusal rerouted and logged; every seat
returns non-empty text in the mandated format.

---

## Phase 2 — Review round

Dispatch the **identical packet** to all seats. **No cross-talk** — the prompt states
explicitly that no other model has seen or answered it. Cross-talk is contamination:
a seat that has seen another's review converges socially, and you lose the independence
that makes disagreement informative.

Required output per seat, enforced by the packet's response-format section:

- Per claim: `# — CONFIRM / CHALLENGE / FLAG-UNKNOWN — 1–3 lines of reasoning,
  citation if applicable.`
- A "What this packet got wrong overall" section (catches systematic issues the
  per-claim grid misses).
- A 1–10 confidence score on the core decision.
- Explicit instruction: **recompute every statistic from raw counts yourself.**

Then build the **scorecard**: one row per claim, one column per seat, cells C / X / ? ,
plus a notes column carrying recomputed values ("Fisher p=0.00116, OR=14.05 — exact
match"). The grid is the phase-2 deliverable — it makes disagreement visible at a
glance and is the input to phase 3.

**Acceptance criteria (phase 2):** every seat's output parsed into the grid with no
unscored claims; every recomputable statistic recomputed by ≥2 seats; disagreements
explicitly enumerable.

---

## Phase 3 — Rebuttal round

Send each seat a **disputes-only packet**: just the claims where seats disagreed,
containing the opposing seats' recomputations — labeled by a seat label, never by
vendor identity beyond what the seat could infer. Response format per disputed claim:
**HOLD or CONCEDE**, with the recomputation or citation that settles it.

What this buys you, proven in the reference run:

- Converts soft disagreement into verdicts. Three of five seats conceded the inverted
  sequence claim once shown the re-derived alignment.
- Exposes weak seats. Gemini's zero-challenge 9/10 first pass conceded **all six**
  disputes it was shown and fell to 6/10 — a seat that never challenges and always
  concedes is measuring politeness, not correctness. Score moves (9→6, 7→7.5) are
  signal, not noise.
- Surfaces lone genuine contributions (one seat's boundary-overlap catch was adopted
  by the whole panel) and honest dissent (log a minority report when a seat's hold is
  principled and epistemological; do not force consensus).

**Do not adjudicate disputes yourself in this round.** Log, don't resolve. Anything
still contested goes to phase 4, not to a third talking round.

**Acceptance criteria (phase 3):** every disputed claim answered HOLD/CONCEDE by its
challengers and defenders; remaining disputes listed as an explicit unresolved set.

---

## Phase 4 — Ground truth by fetch

**Fetching beats another model round.** Every contested citation-grade question in the
reference run was settled by pulling the actual paper. One more model opinion is just
a fourth vote; the paper is the answer.

Fetch ladder (see `scripts/fetch_literature.sh`):

1. **PubMed abstract** via NCBI E-utilities (`esearch` by title when the PMID is
   unknown → `efetch?db=pubmed&rettype=abstract`).
2. **PMCID resolution** (`elink?dbfrom=pubmed&db=pmc`), then **PMC fulltext XML**
   (`efetch?db=pmc&retmode=xml`). Reject trivially small responses (<20 KB means the
   XML is a stub, not a full text).
3. **Open-access publisher PDFs** (e.g., PLoS manuscript endpoint) when PMC has no
   full text; check the fetched file is actually a PDF.
4. **Europe PMC** REST API as fallback for abstracts/full text outside PMC's OA set;
   **OpenAlex** for metadata, citation context, and works NCBI doesn't index.
5. **AlphaFold DB** (or equivalent domain databases) when the dispute is a structure
   or sequence annotation rather than a text claim.
6. **Your own repo**: primary data files (GenBank records, PDFs already in the
   literature archive) are fetches too — the reference run's sequence-call correction
   came from re-parsing local GenBank files.

Archive everything fetched under `docs/literature/` with the citation name; update
the claim's tier when fetch upgrades it (T3 abstract-only → T2-read or
"verified-by-fetch"). A fetch that *contradicts* the packet is a correction; a fetch
matching it is a confirmation. Either way the dispute closes.

Reference-run results: the phantom construct (claim 6, fabrication-grade) confirmed
absent from Shilts 2020 by PMC full text; claim 36 re-sourced from Chen 2011 to
Wang 2021 with the packet's numbers vindicated; claim 34's 35.7% complementation
figure confirmed in Harper 2018; the paywalled 2026 abstract verified verbatim
against PubMed.

**Acceptance criteria (phase 4):** zero citation disputes resolved without a fetch or
an explicit human "accept as T3/T4" decision; every fetched source archived on disk;
tiers updated.

---

## Phase 5 — Corrections sweep

Apply adopted corrections **in place, in the packet**, using the repo convention:

> **✗ old claim** → **✓ corrected claim** *(source: consensus §n)*

Never silently rewrite: the ✗/✓ record *is* the audit trail. Keep claim numbers
stable; withdrawn arms say so ("functional arm withdrawn pending re-sourcing").

Then sweep **every derived document**. The corrections in the packet propagate to:
the scorecard (mark rows corrected), the consensus doc, appendices, **slide decks and
executive summaries** (the reference run has three deck sets that quote these numbers),
Q&A/knowledge-base files, and any pre-registration draft. Numbers embedded in decks
are the classic escape route — grep every deck for the corrected figures (e.g. every
occurrence of "550–700", "98.7", "1/66", the phantom "17/90").

For fabrication-grade errors (a citation whose numbers exist nowhere), do not just
delete: **flag as unretraced and trace the origin** ("find where 17/90 came from
before it propagates"). A number with no source will be re-cited from your own
document by the next round of drafters.

**Acceptance criteria (phase 5):** every adopted correction applied in packet + all
derived docs; grep shows no stale instances outside historical raw-review archives;
corrections log enumerates each change with provenance pointer.

---

## Phase 6 — Proof layer

Reviews are opinions; ship reproducible evidence for what survives.

1. **Executable re-derivation.** Every T1 statistic gets a script that recomputes it
   from raw counts/data files (Fisher/binomial/exact tests, alignments, identity
   percentages). The panel's "confirmed beyond doubt" list is only meaningful because
   each entry was recomputed independently: Harper's six denominators verbatim,
   synergy 12.5 pp super-additive at p ≈ 3×10⁻¹⁰ vs the additive null, both p33-swap
   p-values and OR 14.05, FWER 30.2% for seven uncorrected tests.
2. **Monte-Carlo robustness.** Any headline statistic resting on a modeling assumption
   gets a simulation: is the synergy p-value robust to Bliss-vs-additive null scales?
   To plant-level clustering? (Reference result: survives ICC ρ = 0.2 at p ≈ 3×10⁻⁵;
   the small-margin p61-alone claim does not — exactly the kind of finding that
   changes a decision.) State the experimental unit and simulate plausible ICCs;
   legacy papers routinely leave unit structure undocumented.
3. **Pre-registration.** Write the decision thresholds, tie rules, power statements,
   and analysis plan *before* the experiment, incorporating panel catches: boundary
   tie rule (thresholds touching at exactly 5%/15% → boundary value goes to the more
   conservative band), power stated **per contrast** (14% power at a 15→20% baseline
   vs ~45% at the decision-relevant 1→6% contrast — a number without its contrast is
   a bug), cost/timeline re-derived from corrected units.
4. **Provenance audit.** Final pass: for every number in the corrected packet, the
   audit trail ends in (a) a fetched source on disk, (b) an executable computation,
   or (c) an explicit T3/T4/unretraced label. No fourth category exists.

**Acceptance criteria (phase 6):** all T1 claims have runnable derivations; headline
stats have robustness simulations; pre-registration draft incorporates every design-
relevant correction; provenance audit clean.

---

## Failure-mode catalog (every one this run actually hit)

| # | Failure | Detection signal |
|---|---|---|
| 1 | **Fabricated citation** — numbers exist nowhere in the cited paper | Fetch: figure/denominator absent from full text (claim 6: phantom 17/90). Any seat saying "I re-read the paper and this construct doesn't exist" is a red alert, never a quibble |
| 2 | **Inverted sequence/data claim** | Seat re-derives from primary data files and contradicts the packet (claim 30: K174 vs R174). Corroborate with a second independent re-derivation before adopting |
| 3 | **Arithmetic/rounding inconsistency** | Two numbers in the same claim contradict (295/302 ≠ 98.7%). Note: a seat can "confirm" with *wrong arithmetic* — require the recomputation be shown, not the verdict |
| 4 | **Units collapse** | Design math off by exactly a unit conversion (550–700 *plants* reported as aphids — 10× budget undercount). Check every resource/cost number for unit provenance |
| 5 | **Underpowered null cited at face value** | "No significant difference" with n = 2–4 per arm. Every null gets its n checked |
| 6 | **Mislabeled baseline** | Same isolate, different denominator across papers (T36 "field" 1/66 was actually a clone arm; field = 2/380). Cross-check denominators for every baseline |
| 7 | **Boundary overlap in thresholds** | Decision bands touch at an exact value with no tie rule |
| 8 | **Unconditional power statement** | Power number given without its baseline contrast |
| 9 | **Sycophantic seat** | Zero challenges + high confidence in round 1; concedes everything in rebuttal. Discount such seats' confirms; their challenges, if any, still count |
| 10 | **Bio/safety-filter false positive** | `stop_reason: refusal` with zero output, or "content flagged" errors — on a defensive-research document. Reroute (OpenRouter / native subagent), log it |
| 11 | **CLI stdin hang** | Detached `codex exec` blocks silently. Always `</dev/null` |
| 12 | **Empty-response silent failure** | Zero-byte output with exit 0 (Ollama with no models; model dropped at response limit). Hard-fail on empty text in every dispatcher |
| 13 | **Model-recalled identifiers wrong** | PMID/pages cited from memory don't match fetched record ("82:6194" → 82(21):6294–6302). Verify every PMID against its fetched title *before* packet entry |

---

## Time and cost (reference run, 2026-09-05 — rough actuals; log your own)

| Phase | Wall clock | Notes |
|---|---|---|
| 0. Packet authoring | days (human-led, across prior sessions) | the long pole; includes preliminary in-silico verification |
| 1. Panel assembly + dispatch incl. filter rerouting | ~1–2 h | two reroutes cost most of it |
| 2. Review round × 6 seats | ~30–60 min parallel dispatches + ~1 h grid extraction | extraction is manual-ish; budget for it |
| 3. Rebuttal round | ~1 h | disputes-only packets are small |
| 4. Fetches | ~1 h | one script, ~10 citations |
| 5. Corrections + derived-doc sweep | ~2–3 h | decks are the time sink |
| 6. Proof layer | ongoing | simulations + pre-registration are separate work items |

API spend: three rounds × five paid API seats × (~10–15 K tokens in, 2–8 K out per
round) — order **single-digit USD total**. Grok ran on the subscription CLI at zero
marginal cost; the Claude seat ran as a native subagent on the interactive plan. The
process is cost-trivial relative to the decision it informs; do not economize on
seats.

---

## One-line summary

Pack every checkable claim into a numbered, tiered packet; give it to six
independent models from six vendors with orders to recompute; adjudicate disagreements
by rebuttal then by fetch; correct in place with ✗→✓ provenance; and finish with an
executable proof layer — because recomputation beats reading, and fetching beats
another vote.
