# Round-3 Adversarial Review — Scorecard

*Companion to `CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md`. One row per packet claim; one
column per model. Fill with C (confirm) / X (challenge) / ? (flag-unknown). Notes column
captures any recomputation that disagrees with the packet's numbers.*

**Models:** Grok · DeepSeek · GLM · Claude · GPT · Gemini

| # | Claim (short) | Tier | Gr | DS | GL | Cl | GP | Ge | Notes / recomputed values |
|---|----------------|:----:|:--:|:--:|:--:|:--:|:--:|:--:|---------------------------|
| 1 | Bipolar virion; p65/p61 restrict p27 to 5′ tail | T4 | | | | | | | |
| 2 | Cibarium binding competed by p27/p61/p65, not p25 | T2 | | | | | | | |
| 3 | Protease-insensitive, chitinase-sensitive | T2 | | | | | | | |
| 4 | p25 surface is not the retention interface | T2+inf | | | | | | | |
| 5 | CPm 240/240 identical, FS577 vs T36 | T1 | | | | | | | |
| 6 | CPm+5′UTR adds nothing: 16/90 vs 17/90, p=1.00 | T2 | | | | | | | Fisher: |
| 7 | Narrow falsification only (CPm still necessary) | synth | | | | | | | |
| 8 | p33 98.7% identity (gapped; earlier 44.7% was artifact) | T1 | | | | | | | |
| 9 | T68-1 44.18% (95/215) | T2 | | | | | | | |
| 10 | FS577 24.1% (95/394) | T2 | | | | | | | |
| 11 | T30 1.57% (2/127) | T2 | | | | | | | |
| 12 | T36 field 1.5% (1/66; CI 0.04–8.16%) | T2 | | | | | | | CI recompute: |
| 13 | T36 clone 0.6% (1/172) | T2 | | | | | | | |
| 14 | Greenhouse drift origin (graft-only passage) | T4 | | | | | | | |
| 15–20 | Harper hybrid table incl. pair 17.9% (35/196) | T2 | | | | | | | |
| 21 | No titer difference (Tukey HSD p>0.05), Figs | T2 | | | | | | | |
| 22 | "Concerted action … compatible sequences" quote | T2 | | | | | | | |
| 23 | Synergy ≈ 12.6 pp; pair = 74% of wild-type rescue | T1 | | | | | | | recompute: |
| 24 | Pair-together is mandatory design rule | ours | | | | | | | **attack order 1** |
| 25 | p33 swap 1.5%→17.8%; p≈0.0012, OR≈14.1 | T2+T1 | | | | | | | recompute: |
| 26 | p33 is Class I viroporin (K⁺/Na⁺, TEVC) | T2† | | | | | | | 2025 paper †post-cutoff |
| 27 | p33 titer confound unmeasured | T2+read | | | | | | | **attack order 2** |
| 28 | p33 multifunctional (movement, host range, SIE, CmMLP2) | T4 | | | | | | | |
| 29 | Shilts 2026 abstract: ~50%, "only p33 differs (K174R)" | T3 | | | | | | | abstract-only; do not deny existence |
| 30 | Both swap parents encode K174 → K174R impossible | T1 | | | | | | | **attack order 3** |
| 31 | FS577 & T30 both R174, 24.1% vs 1.57% | T1 | | | | | | | |
| 32 | Census: R174 96.8% (121/125), K174 3.2% | T1 | | | | | | | |
| 33 | Gene-level p33 result survives; residue story dead | ours | | | | | | | |
| 34 | Complementation: 0.5% single vs 35.7% mixed | T2 | | | | | | | |
| 35 | LIYV CPm frameshift: 0% whitefly, assembly intact | T4 | | | | | | | |
| 36 | LIYV/LCV chimera boundary 60% vs 41% | T4 | | | | | | | |
| 37 | GLRaV-3 foregut retention via CPm/HSP70h/p55 | T4 | | | | | | | |
| 38 | No CPm point-mutant precedent claimed anywhere | — | | | | | | | |
| 39 | 11-substitution set re-derived (AY170468 numbering) | T1 | | | | | | | spot-check one residue per model |
| 40 | Assay = Harper protocol, blinded, titer-controlled | T2 | | | | | | | |
| 41 | Thresholds ≤5 / 5–15 / ≥15 pre-registered | ours | | | | | | | |
| 42 | Sizing: 250–300 / 100–150 / 200; 0/200→1.5% | T1 | | | | | | | **attack order 4** recompute |
| 43 | n=90→14% power for 5 pp; ~934 for 80%; 30% FWER at 7 tests | T1 | | | | | | | recompute |
| 44 | ~20 weeks, ~$8–13K (planning estimates) | ours | | | | | | | plausibility check |
| 45 | "Biocontainment by design" platform framing | framing | | | | | | | overreach check |

## Aggregate

| Model | Overall CONFIRM / CHALLENGE count | Confidence in core decision (1–10) | "What this packet got wrong overall" (one line) |
|-------|----------------------------------|:----------------------------------:|------------------------------------------------|
| Grok | | | |
| DeepSeek | | | |
| GLM | | | |
| Claude | | | |
| GPT | | | |
| Gemini | | | |

## Rules for the orchestrator (Claude Code)

1. Each model gets the packet verbatim, alone — no cross-talk before Round 3 rebuttal.
2. Log responses claim-by-claim; any recomputation that differs from the packet goes in
   Notes with the model's value.
3. Disagreements between models on the same claim are logged, not resolved. Round 4
   (rebuttal) puts the disagreement back to the dissenting models.
4. Verdicts feed the corrections log in the repo (`corrections` convention: ✗ old → ✓ fix).
