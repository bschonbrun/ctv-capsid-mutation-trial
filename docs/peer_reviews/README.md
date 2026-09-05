# Independent Peer Reviews — CTV Transmission Brief

Round 1 of 2. These are **independent** reviews: each model saw only
`docs/05_Multi_Model_Review_Brief.md` and the same task prompt, and none saw any
other model's output. The adversarial round-robin (round 2), where reviewers
rebut each other, will land in a separate directory so that criticisms which
survived rebuttal can be weighted differently from ones that were abandoned.

Generated 2026-09-05.

## Reviewers

| File | Model | Lab | Words |
|---|---|---|---|
| `01_GPT6_Astra_Pro.md` | openai/gpt-6-astra-pro | OpenAI | 1,711 |
| `02_Grok_4.6.md` | x-ai/grok-4.6 | xAI | 1,558 |
| `03_Claude_Fable_5.1.md` | — | — | **not produced (see below)** |
| `04_Gemini_3.1_Pro.md` | google/gemini-3.1-pro-preview | Google | 778 |
| `05_DeepSeek_V4_Pro.md` | deepseek/deepseek-v4-pro | DeepSeek | 1,718 |
| `06_Qwen3_Max_Thinking.md` | qwen/qwen3-max-thinking | Alibaba | 841 |
| `07_Claude_Opus_5.md` | claude-opus-5 | Anthropic | 1,660 |

Five models were reached through OpenRouter; `07` was written in the Claude Code
session that ran the panel, from the brief only, before its author read any other
review.

## Framing — identical across all reviewers

Every model received the **same** system prompt and the **same** task prompt. No
model was given a different lens, persona, or emphasis. The brief's own
Section D offers three optional lenses (virologist / quantitative / red-team);
none of them were assigned — each reviewer chose its own emphasis freely. Treat
all six as having seen the same input.

The one exception is documented below and produced no output.

## Claude Fable 5.1 — refused, no review produced

Fable 5.1 declined the task on both routes attempted:

1. Via OpenRouter with the standard prompt — returned `finish_reason:
   content_filter`, empty body.
2. Via the Anthropic API directly, with an added line stating this is
   agricultural biocontainment research aimed at stopping a citrus crop
   pathogen — returned `stop_reason: refusal`, empty body.

No third attempt was made. This is the model's own safety judgment on a brief
about disabling viral transmission, not a configuration error, and it is
recorded here rather than worked around. **Fable 5.1 contributes nothing to the
findings below and should not be counted as a silent abstention or as agreement.**

## How to read six-model agreement

Agreement here is **not** six independent confirmations. These models share
training corpora and share failure modes, so convergence is closer to one
confirmation with unknown redundancy. Two kinds of agreement should be weighted
very differently:

- **Checkable against the brief** — e.g. "FS577 has no denominator", "Harper 2016
  is unread", "T30 and FS577 both carry R174 yet differ 15-fold". These are
  properties of the document. Agreement is informative because each reviewer
  verified the same fact independently, and any one of them alone would be
  sufficient.
- **Judgment calls** — e.g. "proceed" vs "do not proceed". Agreement is weak
  evidence, because shared priors produce shared verdicts. Report these as
  positions held, not as a vote tally.

## Round-1 signal (provisional — pending round 2)

**Checkable findings, raised independently by multiple reviewers:**

- FS577's 24.1% has **no denominator** anywhere in the brief, so it cannot enter
  any comparison — and it currently anchors the CPm falsification (B2).
- The **5.2% gap** in B4 subtracts a Shilts 2020 number from a Harper 2016 number.
  Different studies, different aphid cohorts, and Harper 2016 is stated in the
  brief itself to be unread with unknown denominators. The subtraction is not
  valid, and it is the sole justification for the p61/p65 arms.
- **K174R is contradicted by the brief's own data.** T30 and FS577 both carry
  R174 and differ ~15-fold. Separately, the T36 infectious clone EU937521 already
  encodes K174 and still transmits at 1.5% — so K174 is present in a poor
  transmitter. The T36 field A174 row is flagged in the brief as a frameshift
  artifact, i.e. a sequencing error, and should not be tabulated as a residue.
- **Shilts 2026 is abstract-only.** The "coordinated p33+p61+p65" claim in C/Step 3
  rests on an abstract's phrasing, repeating the Harper 2016 pattern.
- **Power is far below what the plan assumes.** Computed from the brief's own
  counts: separating 17.8% from 23.0% at n = 90/arm has **14% power**; 80% power
  needs roughly **950 aphids per arm**. Seven constructs at uncorrected α = 0.05
  carry a ~30% chance of at least one spurious hit.

**Judgment call — verdicts (report as positions, not a tally):**

Five reviewers said do **not** proceed with the construct plan *as specified*
(K174R + p61/p65 combinatorics). One (`07`) said proceed, on an explicitly
narrowed plan: drop K174R from the lead construct, demote p61/p65 to exploratory,
and add the reciprocal swap. Read carefully, these positions differ less than
the labels suggest — no reviewer defended the stated plan, and the disagreement
is about whether a corrected plan can be designed inside the three-week window.

**Statistics recomputed from the brief's counts** (exact Fisher, Clopper–Pearson;
full working in `07_Claude_Opus_5.md`):

| Group | Count | Rate | 95% CI |
|---|---|---|---|
| T68-1 | 95/215 | 44.19% | 37.44 – 51.10% |
| FS577 | ?/? | 24.10% | not computable |
| T30 | 2/127 | 1.57% | 0.19 – 5.57% |
| T36 field | 1/66 | 1.52% | 0.04 – 8.16% |
| T36 + p33 | 16/90 | 17.78% | 10.52 – 27.26% |
| T36 + p33 + CPm + 5′UTR | 17/90 | 18.89% | 11.41 – 28.51% |

p33 swap vs T36: Fisher p = **0.0012**. Adding CPm to p33: p = **1.00**.
T30 vs T36 field: p = **1.00**.

## Reproducing this

Runner: `docs/peer_reviews/run_panel.py`. Requires an OpenRouter key in the
macOS keychain under `OPENROUTER_API_KEY`. Round-1 cost ≈ $1.30, dominated by
gpt-6-astra-pro.
