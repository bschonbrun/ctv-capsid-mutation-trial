# Round-3 Adversarial Review — Scorecard (FILLED)

*Companion to `CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md`. One row per packet claim; one
column per model. C (confirm) / X (challenge) / ? (flag-unknown). Raw reviews:
`docs/peer_reviews_round3/raw/<model>.md`. Run: 2026-09-05.*

**Models:** grok-4.6 (Grok CLI) · deepseek-v4-pro (API) · glm-5.3 (OpenRouter) ·
claude-fable-5-1 (native subagent; API seat refused on bio filter) · gpt-6-astra
(Codex CLI) · gemini-3.1-pro-preview (API)

| # | Claim (short) | Tier | Gr | DS | GL | Cl | GP | Ge | Notes / recomputed values |
|---|----------------|:----:|:--:|:--:|:--:|:--:|:--:|:--:|---------------------------|
| 1 | Bipolar virion; p65/p61 restrict p27 to 5′ tail | T4 | C | C | C | C | ? | C | |
| 2 | Cibarium binding competed by p27/p61/p65, not p25 | T2 | C | C | ? | C | ? | C | GL couldn't verify details from memory |
| 3 | Protease-insensitive, chitinase-sensitive | T2 | X | X | ? | C | X | C | DS/Gr: wording over-infers (binds carbohydrate RECEPTOR on aphid, not "carbohydrate interface on virion tail") |
| 4 | p25 surface is not the retention interface | T2+inf | X | C | X | C | X | C | Gr/GL: free-monomer competition ≠ intact capsid; lowers prior, doesn't exclude |
| 5 | CPm 240/240 identical, FS577 vs T36 | T1 | C | C | ? | C | ? | ? | Cl re-derived independently: CONFIRMED |
| 6 | CPm+5′UTR adds nothing: 16/90 vs 17/90, p=1.00 | T2 | X | C | C | C | C | C | Fisher: Cl recomputed p=1.0000. Gr challenge = framing quibble, check text |
| 7 | Narrow falsification only (CPm still necessary) | synth | C | C | C | C | X | C | |
| 8 | p33 98.7% identity (gapped; earlier 44.7% was artifact) | T1 | X | C | X | X | X | ? | **3-way arithmetic catch**: 295/302 = 97.7%, not 98.7%. Cl: true is ~299/303=98.7%. DS confirmed with *wrong* math (98.7 for 295/302). Gr/GL caught the inconsistency |
| 9 | T68-1 44.18% (95/215) | T2 | C | C | C | C | X | C | Cl: CI 37.4–51.1%. DS: rounding 44.19 |
| 10 | FS577 24.1% (95/394) | T2 | C | C | C | C | C | C | Cl verified verbatim vs Harper PDF Fig 1A |
| 11 | T30 1.57% (2/127) | T2 | C | C | C | C | C | C | CI 0.19–5.57% (Cl) |
| 12 | T36 field 1.5% (1/66; CI 0.04–8.16%) | T2 | X | C | C | C | C | C | CI recompute: Cl exact 0.037–8.157 → packet exact. Gr challenge reason: see grok.md |
| 13 | T36 clone 0.6% (1/172) | T2 | C | C | C | C | C | C | CI 0.01–3.20% |
| 14 | Greenhouse drift origin (graft-only passage) | T4 | C | C | ? | C | X | C | Cl: better citation is Harper 2016 itself (p. 3558) |
| 15–20 | Harper hybrid table incl. pair 17.9% (35/196) | T2 | C | C | C | C | C | C | Cl: every denominator matches Harper Fig. 1 verbatim (PDF in repo) |
| 21 | No titer difference (Tukey HSD p>0.05) | T2 | X | C | ? | C | X | C | **Cl: quote exact BUT n=2–4 source plants/arm; "no difference" at that n is weak; same confound class as claim 27** |
| 22 | "Concerted action … compatible sequences" quote | T2 | C | C | ? | C | ? | C | Cl: faithful vs PDF p.3557-58 |
| 23 | Synergy ≈ 12.6 pp; pair = 74% of wild-type rescue | T1 | C | C | C | C | X | C | recompute: Cl 12.5 pp (unrounded), 74.1%; pair vs additive null binomial p≈3e-10 |
| 24 | Pair-together is mandatory design rule | ours | X | X | X | C | X | C | **attack order 1** — 3 challenges: (a) only gain-of-function direction is published; reciprocal LoF swap is inference; (b) singles aren't null (p61 alone p=0.034 vs control); (c) "falsified by this table alone" overstated |
| 25 | p33 swap 1.5%→17.8%; p≈0.0012, OR≈14.1 | T2+T1 | C | C | C | C | X | C | recompute: Cl Fisher p=0.00116, OR=14.05 exact match |
| 26 | p33 is Class I viroporin (K⁺/Na⁺, TEVC) | T2† | C | ? | ? | ? | ? | ? | 2025 paper †post-cutoff. **Gr confirmed it — from where? Probe in debate round** |
| 27 | p33 titer confound unmeasured | T2+read | X | ? | C | C | ? | C | **attack order 2** |
| 28 | p33 multifunctional (movement, host range, SIE, CmMLP2) | T4 | X | C | C | C | ? | C | |
| 29 | Shilts 2026 abstract: ~50%, "only p33 differs (K174R)" | T3 | ? | ? | ? | ? | ? | ? | abstract-only; no model could confirm existence — all correctly declined to deny |
| 30 | Both swap parents encode K174 → K174R impossible | T1 | X | ? | ? | X | ? | C | **attack order 3 — BIG CLASH: Cl re-derived from repo GenBank files → T68-1 = R174 not K174, FS577-vs-EU937521 differ at exactly R174K → packet claim false, abstract consistent. Ge confirmed packet. Gr challenged too** |
| 31 | FS577 & T30 both R174, 24.1% vs 1.57% | T1 | C | C | C | C | X | C | |
| 32 | Census: R174 96.8% (121/125), K174 3.2% | T1 | C | ? | C | C | ? | ? | Cl: 130 seqs parsed; 121 R + 4 K + **5 dropped 302-aa T36-lineage seqs whose homologous residue is R at pos 173** — numbering-offset trap cut against packet |
| 33 | Gene-level p33 result survives; residue story dead | ours | X | X | C | C | X | C | Cl: conclusion right, stated route wrong — re-anchor on claim 31 + Harper's K174-retaining hybrids at 17.9–20.6% |
| 34 | Complementation: 0.5% single vs 35.7% mixed | T2 | C | C | ? | ? | ? | C | none could verify 35.7% firsthand except via paper; design consequences accepted |
| 35 | LIYV CPm frameshift: 0% whitefly, assembly intact | T4 | C | C | ? | C | ? | C | Stewart 2010 |
| 36 | LIYV/LCV chimera boundary 60% vs 41% | T4 | ? | ? | ? | X | X | C | **Cl: percentages look reversed as written; restate vs Chen 2011 PNAS 108:16777** |
| 37 | GLRaV-3 foregut retention via CPm/HSP70h/p55 | T4 | X | C | ? | ? | ? | C | |
| 38 | No CPm point-mutant precedent claimed anywhere | — | C | C | C | C | X | C | |
| 39 | 11-substitution set re-derived (AY170468 numbering) | T1 | X | X | ? | C | ? | ? | **Cl re-derived: lists correct; BUT 4 of 11 (p61 D324G, E382D, I455V; p65 G227S) are AY170468-private — EU937521 (the clone Harper tested) matches FS577 there. Also notation direction reversed for the actual edit. 11-vs-7 must be adjudicated** |
| 40 | Assay = Harper protocol, blinded, titer-controlled | T2 | X | C | C | C | ? | C | Cl: matches Harper methods verbatim; blinding/per-plant titer are real improvements |
| 41 | Thresholds ≤5 / 5–15 / ≥15 pre-registered | ours | X | C | C | C | X | C | Cl: at n=250, CI ≈ ±3.5 pp → 5% boundary calls noisy but honestly coarse |
| 42 | Sizing: 0/200→1.5% etc. | T1 | X | X | X | X | X | C | **attack order 4 — 4/5 challenge: mixes one-sided and two-sided upper bounds (0/110: 2.69% 1-sided vs 3.30% 2-sided; 0/200: 1.49% vs 1.83%). 250/arm for 20% vs 1%: >99% power, fine** |
| 43 | n=90→14% power for 5 pp; ~934 for 80%; 30% FWER at 7 tests | T1 | C | X | X | C | X | C | recompute: Cl — 14% only at mid baseline (15→20%); at 1→6% it's 45% power, 80% needs ~211/arm. FWER 30.2% ✓ |
| 44 | ~20 weeks, ~$8–13K (planning estimates) | ours | ? | C | ? | ? | ? | C | unverifiable; gating structure accepted |
| 45 | "Biocontainment by design" platform framing | framing | ? | C | C | C | X | C | |

## Aggregate

| Model | C / X / ? | Confidence in core decision (1–10) | "What this packet got wrong overall" (one line) |
|-------|-----------|:----------------------------------:|------------------------------------------------|
| Grok 4.6 | 27 / 12 / 6 | **7→7/10** | R4: fetched Aknadibossian paper (claim 26 confirmed); found phantom 17/90 (claim 6), field/clone mislabels (12), Shilts titer Table 2 (27) |
| DeepSeek V4 Pro | 36 / 4 / 5 | **7→7/10** | R4: conceded 8/30/32/33; holds 24 (wording), 42 |
| GLM 5.3 | 28 / 4 / 13 | **7→7.5/10** | R4: conceded 4 and 30; holds 8/24/42/43 |
| Fable 5.1 | 33 / 4 / 8 | **8→8/10** | R4: claim-30 disproof unopposed; conceded "falsified" wording on 24; adopted 41 tie rule, 42 unit error |
| GPT-6-astra | 10 / 16 / 19 | **2→2/10** | R4: conceded 9, 38; holds 23/24/25/31/33 (epistemic not arithmetic — minority report) |
| Gemini 3.1 Pro | 38 / 0 / 7 | **9→6/10** | R4: conceded all six disputes shown (8, 21, 24, 30, 36, 42) — zero-challenge R3 pass did not survive rebuttal |

## Rules for the orchestrator (Claude Code)

1. Each model gets the packet verbatim, alone — no cross-talk before Round 3 rebuttal. ✓ done
2. Log responses claim-by-claim; any recomputation that differs from the packet goes in
   Notes with the model's value. ✓
3. Disagreements between models on the same claim are logged, not resolved. Round 4
   (rebuttal) puts the disagreement back to the dissenting models. → next
4. Verdicts feed the corrections log in the repo (`corrections` convention: ✗ old → ✓ fix).