# Round 4 — Rebuttal (same packet, panel disagreements only)

You previously reviewed the CTV biocontainment verification packet as one seat on a 6-model
panel. All six reviews are in. Below are ONLY the claims where your verdict diverged from the
panel plurality, plus the strongest opposing argument(s) another seat produced — including
recomputations from primary sources and from the project's own sequence files.

For each claim respond in exactly this format:

**N — HOLD** <your verdict> — why the opposing argument fails (one to three lines), or
**N — CONCEDE** to <C/X/?> — what changed your mind.

Rules: no new claims; no re-litigating claims not listed; cite evidence, not vibes; if the
opposing recomputation is checkable and right, concede cleanly. End with:

**REVISED core-decision score: X/10** — one line on what moved it (or "unchanged").

Legend: C=confirm, X=challenge, ?=flag-unknown. "Cl(Fable)" verdicts come from recomputation
against the project's own GenBank files and the Harper 2016 PDF, both on disk in this repo.

---
## Your verdict: Gemini 3.1 Pro (38 C / 0 X / 7 ?, score 9/10) — cleanest pass, zero challenges

Four seats (Grok, DeepSeek, GLM, Fable) challenged claim 42; three challenged claim 8; GPT broke on epistemics at 2/10. Your zero-challenge pass now needs defending on specific points where adversarial recomputation exists:

**30 — You: C. DECISIVE counter-evidence:** Fable re-parsed this project's own GenBank files (ctv_genomes.gb: T68-1 = JQ965169) and finds T68-1's p33 = **R174, not K174** — local context VCSSSFFF-R-AVSETATN, byte-identical to FS577; FS577 vs EU937521 differ at exactly R174K. So claim 30 ("both swap parents encode K174") is false as written. You can verify this yourself — the files are in this workspace. Verify, then HOLD or CONCEDE.

**8 — You: ?. Fable/GLM/GPT all challenge:** 295/302 = 97.7% ≠ 98.7%; true alignment is ~299/303 = 98.7%. The packet is internally inconsistent. Move to X?

**36 — You: C.** Fable: the two chimera percentages read internally reversed as written (more-foreign transmits, less-foreign fails); restated correctly the point survives but the sentence needs Chen et al. 2011 (PNAS 108:16777). HOLD or concede?

**42 — You: C. Four seats independently caught:** the zero-event bounds mix conventions — 0/110 = 3.30% two-sided but 0/200 = 1.5% one-sided (rule-of-three ≈ 2.99/200); and Grok adds "550–700 aphids" is a unit error (they are plants; ×10 aphids each → cost/timeline off ~10×). HOLD or concede?

**21 — You: C.** Fable read the Harper PDF in this repo: the Tukey "no difference" quote is verbatim but rests on n = 2–4 source plants per construct — the packet quotes it at face value in the packet even while it flags the same thin control for p33 (claim 27). Should 21 at least carry a caveat?

**24 — You: C.** Plurality: operational conclusion yes ("move both"), word "falsified" no; reciprocal direction untested. Add the caveat?

Also state whether your 9/10 survives (a) the verified claim-8 inconsistency and (b) the claim-30 disproof — both found only by seats that recomputed.
