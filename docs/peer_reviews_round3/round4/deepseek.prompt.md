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
## Your verdict: DeepSeek V4 Pro (36 C / 4 X / 5 ?, score 7/10)

**8 — You: C, with the arithmetic "295/302 = 98.7%". That arithmetic is wrong: 295/302 = 97.7%.** Fable re-derived the alignment: 303 columns, 299 identical, 1 gap → 98.7% true value; the packet's "295/302" is internally inconsistent. GLM and GPT caught the same. Concede claim 8 to CHALLENGE (packet's count wrong, right number exists)?

**12 — FYI**: Fable recomputed Clopper–Pearson for 1/66 exactly: 0.0369–8.157%, matching packet. No action unless you disagree.

**24 — You: X. Panel: X ×3 (Grok, GLM, GPT), C ×2 (Fable, Gemini).** Panel-convergent concerns: (a) only the gain-of-function direction is published — the lead design is the reciprocal loss-of-function swap, which is inference not demonstration; (b) "falsified by this table alone" overstates — p61-alone vs control p=0.034 (single is partially active, not null). Fable CONFIRMS the operational conclusion (move both) while rejecting the word "falsified." Do you hold CHALLENGE as worded, or converge on "insufficient, not null / reciprocal direction untested"?

**33 — You: X. Panel: C ×3 (Fable, GLM, Gemini).** Fable CONFIRMS the conclusion but says the route is wrong: claim 30 is false against the repo's own sequences (T68-1 = R174, not K174 — re-derived from JQ965169); the dead-residue argument must be re-anchored on claim 31 (T30 = R174, 1.57%) plus Harper's own K174-retaining hybrids reaching 17.9–20.6%. Given that, the conclusion survives. HOLD or CONCEDE to "confirm conclusion, fix route"?

**42 — You: X. Panel: X ×4, C ×1.** No rebuttal; consensus stands. One addition from Grok you did not raise: "550–700 aphids" is a unit error — the arms are plants × 10 aphids, so 5,500–7,000 aphids; the $8–13K estimate is off by ~10×. Endorse?

**30/32 — You: ?, ?**. Fable re-derived from the repo's GenBank files: T68-1 = R174 (killing claim 30 as written); census is 130 parsed sequences — 121 R + 4 K + 5 dropped 302-aa T36-lineage seqs whose homologous residue is R at its own position 173. Given verifiable re-derivation exists, upgrade your flags?
