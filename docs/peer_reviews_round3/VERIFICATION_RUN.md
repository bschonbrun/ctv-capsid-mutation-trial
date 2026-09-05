# CTV Round-3 Packet — Executable Verification Run

*Run date: 2026-09-05 · script: `scripts/verify_all.py` (Python 3, stdlib only) · regenerate: `python3 scripts/verify_all.py` from the repo root.*

## Inputs

- GenBank: `data/sequences/ctv_genomes.gb` (130 records), `ctv_labeled_isolates.gb` (4 records: JQ965169, KC517488, AF260651, U16304), `ctv_t36_infectious_clones.gb` (2 records: AY170468, EU937521). CDS amino-acid sequences taken from each record's `/translation` qualifier.
- Accessions used: KC517488 (FS577); U16304 (T36); AY170468, EU937521 (T36 infectious clones); JQ965169 (T68-1); T36-lineage 302-aa p33 set: U16304, NC_001661, DQ272579, AY340974, OR192037.
- Expected values: `docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md` (round 3-4 corrections applied) + `docs/peer_reviews_round3/CONSENSUS.md`; CI expectations cross-checked against panel quotes in `docs/peer_reviews_round3/raw/` (Fable, Grok, GPT, Gemini, GLM recomputations).
- Methods: pairwise identity by direct comparison or hand-written Needleman-Wunsch (match +2, mismatch -1, linear gap -2); Fisher exact p by exact hypergeometric sum over all tables with fixed margins (integer arithmetic); Clopper-Pearson by 80-step bisection on the binomial CDF; zero-event bounds in closed form 1 - alpha^(1/n) (one-sided) and 1 - (alpha/2)^(1/n) (two-sided).

## Full run log

```
# Verification run — CTV round-3 packet recomputation

## Inputs
Files: data/sequences/ctv_genomes.gb, data/sequences/ctv_labeled_isolates.gb, data/sequences/ctv_t36_infectious_clones.gb
Accessions used: KC517488 (FS577), U16304 & AY170468 & EU937521 (T36), JQ965169 (T68-1); T36-lineage 302-aa p33 set: U16304, NC_001661, DQ272579, AY340974, OR192037

## 1a. CPm/p27 identity FS577 (KC517488) vs T36 (U16304)
lengths: FS577=240, U16304=240
identity: 240/240 = 100.0%  (gaps=0)

## 1b. p33 identity, FS577 (KC517488) vs T36 references
vs U16304: lengths FS577=303, U16304=302; identity 299/303 = 98.68% (gaps=1)
vs AY170468: lengths FS577=303, AY170468=303; identity 302/303 = 99.67% (gaps=0)
vs EU937521: lengths FS577=303, EU937521=303; identity 302/303 = 99.67% (gaps=0)

## 1c. p33 residue 174 (1-based) and T36-lineage homologous residue
EU937521 len=303 p33[174]=K
AY170468 len=303 p33[174]=R
KC517488 len=303 p33[174]=R
JQ965169 len=303 p33[174]=R
U16304 len=302 direct[173]=R aligned-to-FS577-174=R
NC_001661 len=302 direct[173]=R aligned-to-FS577-174=R
DQ272579 len=302 direct[173]=R aligned-to-FS577-174=R
AY340974 len=302 direct[173]=R aligned-to-FS577-174=R
OR192037 len=302 direct[173]=R aligned-to-FS577-174=R

## 1d. p61/p65 substitutions FS577 (KC517488) -> T36 clones
p61 vs AY170468: len ref=535 qry=535; 9 substitutions: S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G
p65 vs AY170468: len ref=594 qry=594; 2 substitutions: G227S, R496H
p61 vs EU937521: len ref=535 qry=535; 6 substitutions: S169N, I179T, T224A, M289T, S391G, D458G
p65 vs EU937521: len ref=594 qry=594; 1 substitution: R496H
total vs EU937521 (validated clone): 7 expected, 7 computed

## 2. Statistics from raw counts
Fisher 16/90 vs 1/66: two-sided p=0.001161  one-sided p=0.000691
odds ratio = 14.0541
Fisher 16/90 vs 1/172: two-sided p=1.772e-07  one-sided p=1.772e-07
Fisher pair vs pooled singles 35/196 vs 16/531: two-sided p=1.228e-10

Clopper-Pearson 95% CIs (bisection, two-sided):
  1/66: [0.038%, 8.155%]
  2/127: [0.191%, 5.573%]
  95/215: [37.437%, 51.098%]
  95/394: [19.969%, 28.648%]
  1/172: [0.015%, 3.197%]

Zero-event upper bounds (exact binomial):
  0/110: one-sided 95% upper = 2.687%  two-sided 95% upper = 3.298%
  0/200: one-sided 95% upper = 1.487%  two-sided 95% upper = 1.828%

fold FS577 vs T36 clone = (95/394)/(1/172) = 41.47x
fold T68-1 vs 1/66 (Shilts clone arm; packet's corrected note: mislabeled 'field' baseline) = 29.16x
fold T68-1 vs Harper field 2/380 (corrected baseline per claim-12 fix) = 83.95x
FWER 1-0.95^7 = 0.3017 (30.2%)
binomial P(X>=35 | n=196, p=0.053) = 2.999e-10

## 3. PASS/FAIL table
sec  check                                                computed                     expected               verdict
1a   CPm identity matches/L                               240/240                      240/240                PASS
1b   p33 identity vs U16304 (matches/L)                   299/303                      299/303                PASS
1b   p33 identity vs U16304 (%)                           98.6799                      98.68                  PASS
1b   p33 identity vs AY170468 (matches/L)                 302/303                                             INFO
1b   p33 identity vs AY170468 (%)                         99.67                        99.67                  PASS
1b   p33 identity vs EU937521 (matches/L)                 302/303                                             INFO
1b   p33 identity vs EU937521 (%)                         99.67                        99.67                  PASS
1c   EU937521 p33 residue 174                             K                            K                      PASS
1c   AY170468 p33 residue 174                             R                            R                      PASS
1c   KC517488 p33 residue 174                             R                            R                      PASS
1c   JQ965169 p33 residue 174                             R                            R                      PASS
1c   U16304 homologous (pos173) residue                   R                            R                      PASS
1c   NC_001661 homologous (pos173) residue                R                            R                      PASS
1c   DQ272579 homologous (pos173) residue                 R                            R                      PASS
1c   AY340974 homologous (pos173) residue                 R                            R                      PASS
1c   OR192037 homologous (pos173) residue                 R                            R                      PASS
1d   p61 subs vs AY170468                                 ['D324G', 'D458G', 'E382D', 'I179T', 'I455V', 'M289T', 'S169N', 'S391G', 'T224A'] ['D324G', 'D458G', 'E382D', 'I179T', 'I455V', 'M289T', 'S169N', 'S391G', 'T224A'] PASS
1d   p61 subs count vs AY170468                           9                            9                      PASS
1d   p65 subs vs AY170468                                 ['G227S', 'R496H']           ['G227S', 'R496H']     PASS
1d   p65 subs count vs AY170468                           2                            2                      PASS
1d   p61 subs vs EU937521                                 ['D458G', 'I179T', 'M289T', 'S169N', 'S391G', 'T224A'] ['D458G', 'I179T', 'M289T', 'S169N', 'S391G', 'T224A'] PASS
1d   p61 subs count vs EU937521                           6                            6                      PASS
1d   p65 subs vs EU937521                                 ['R496H']                    ['R496H']              PASS
1d   p65 subs count vs EU937521                           1                            1                      PASS
2    Fisher 16/90 vs 1/66 two-sided p                     0.00116056                   0.00116                PASS
2    OR 16/90 vs 1/66                                     14.0541                      14.05                  PASS
2    Fisher 16/90 vs 1/172 p (packet/consensus state ~3e-4) 1.77181e-07                  0.0003                 FAIL
2    Fisher 35/196 vs 16/531 p (no packet value)          1.22819e-10                                         INFO
2    CP lower 1/66                                        0.00038353                   0.00038                PASS
2    CP upper 1/66                                        0.0815523                    0.0816                 PASS
2    CP lower 2/127                                       0.00191288                   0.00191                PASS
2    CP upper 2/127                                       0.0557291                    0.0557                 PASS
2    CP lower 95/215                                      0.374368                     0.3744                 PASS
2    CP upper 95/215                                      0.510979                     0.511                  PASS
2    CP lower 95/394                                      0.199692                     0.2                    PASS
2    CP upper 95/394                                      0.286479                     0.286                  PASS
2    CP lower 1/172                                       0.000147186                  0.000147               PASS
2    CP upper 1/172                                       0.031966                     0.032                  PASS
2    0/110 one-sided upper                                0.0268664                    0.0269                 PASS
2    0/110 two-sided upper                                0.0329792                    0.033                  PASS
2    0/200 one-sided upper                                0.014867                     0.0149                 PASS
2    0/200 two-sided upper                                0.0182753                    0.0183                 PASS
2    fold FS577 vs T36 clone                              41.4721                      41.5                   PASS
2    fold T68-1 vs 1/66                                   29.1628                      29.16                  PASS
2    fold T68-1 vs 2/380 (correction)                     83.9535                      83.95                  PASS
2    FWER 7 tests                                         0.301663                     0.302                  PASS
2    binomial tail synergy                                2.99875e-10                  3e-10                  PASS

TOTAL: 43 PASS, 1 FAIL, 3 INFO
```

## Result table

| Sec | Check | Computed | Expected | Verdict |
|-----|-------|----------|----------|---------|
| 1a | CPm identity matches/L | 240/240 | 240/240 | **PASS** |
| 1b | p33 identity vs U16304 (matches/L) | 299/303 | 299/303 | **PASS** |
| 1b | p33 identity vs U16304 (%) | 98.6799 | 98.68 | **PASS** |
| 1b | p33 identity vs AY170468 (matches/L) | 302/303 | — | **INFO** |
| 1b | p33 identity vs AY170468 (%) | 99.67 | 99.67 | **PASS** |
| 1b | p33 identity vs EU937521 (matches/L) | 302/303 | — | **INFO** |
| 1b | p33 identity vs EU937521 (%) | 99.67 | 99.67 | **PASS** |
| 1c | EU937521 p33 residue 174 | K | K | **PASS** |
| 1c | AY170468 p33 residue 174 | R | R | **PASS** |
| 1c | KC517488 p33 residue 174 | R | R | **PASS** |
| 1c | JQ965169 p33 residue 174 | R | R | **PASS** |
| 1c | U16304 homologous (pos173) residue | R | R | **PASS** |
| 1c | NC_001661 homologous (pos173) residue | R | R | **PASS** |
| 1c | DQ272579 homologous (pos173) residue | R | R | **PASS** |
| 1c | AY340974 homologous (pos173) residue | R | R | **PASS** |
| 1c | OR192037 homologous (pos173) residue | R | R | **PASS** |
| 1d | p61 subs vs AY170468 | ['D324G', 'D458G', 'E382D', 'I179T', 'I455V', 'M289T', 'S169N', 'S391G', 'T224A'] | ['D324G', 'D458G', 'E382D', 'I179T', 'I455V', 'M289T', 'S169N', 'S391G', 'T224A'] | **PASS** |
| 1d | p61 subs count vs AY170468 | 9 | 9 | **PASS** |
| 1d | p65 subs vs AY170468 | ['G227S', 'R496H'] | ['G227S', 'R496H'] | **PASS** |
| 1d | p65 subs count vs AY170468 | 2 | 2 | **PASS** |
| 1d | p61 subs vs EU937521 | ['D458G', 'I179T', 'M289T', 'S169N', 'S391G', 'T224A'] | ['D458G', 'I179T', 'M289T', 'S169N', 'S391G', 'T224A'] | **PASS** |
| 1d | p61 subs count vs EU937521 | 6 | 6 | **PASS** |
| 1d | p65 subs vs EU937521 | ['R496H'] | ['R496H'] | **PASS** |
| 1d | p65 subs count vs EU937521 | 1 | 1 | **PASS** |
| 2 | Fisher 16/90 vs 1/66 two-sided p | 0.00116056 | 0.00116 | **PASS** |
| 2 | OR 16/90 vs 1/66 | 14.0541 | 14.05 | **PASS** |
| 2 | Fisher 16/90 vs 1/172 p (packet/consensus state ~3e-4) | 1.77181e-07 | 0.0003 | **FAIL** |
| 2 | Fisher 35/196 vs 16/531 p (no packet value) | 1.22819e-10 | — | **INFO** |
| 2 | CP lower 1/66 | 0.00038353 | 0.00038 | **PASS** |
| 2 | CP upper 1/66 | 0.0815523 | 0.0816 | **PASS** |
| 2 | CP lower 2/127 | 0.00191288 | 0.00191 | **PASS** |
| 2 | CP upper 2/127 | 0.0557291 | 0.0557 | **PASS** |
| 2 | CP lower 95/215 | 0.374368 | 0.3744 | **PASS** |
| 2 | CP upper 95/215 | 0.510979 | 0.511 | **PASS** |
| 2 | CP lower 95/394 | 0.199692 | 0.2 | **PASS** |
| 2 | CP upper 95/394 | 0.286479 | 0.286 | **PASS** |
| 2 | CP lower 1/172 | 0.000147186 | 0.000147 | **PASS** |
| 2 | CP upper 1/172 | 0.031966 | 0.032 | **PASS** |
| 2 | 0/110 one-sided upper | 0.0268664 | 0.0269 | **PASS** |
| 2 | 0/110 two-sided upper | 0.0329792 | 0.033 | **PASS** |
| 2 | 0/200 one-sided upper | 0.014867 | 0.0149 | **PASS** |
| 2 | 0/200 two-sided upper | 0.0182753 | 0.0183 | **PASS** |
| 2 | fold FS577 vs T36 clone | 41.4721 | 41.5 | **PASS** |
| 2 | fold T68-1 vs 1/66 | 29.1628 | 29.16 | **PASS** |
| 2 | fold T68-1 vs 2/380 (correction) | 83.9535 | 83.95 | **PASS** |
| 2 | FWER 7 tests | 0.301663 | 0.302 | **PASS** |
| 2 | binomial tail synergy | 2.99875e-10 | 3e-10 | **PASS** |

**Totals: 43 PASS · 1 FAIL · 3 INFO (computed-only, no packet value).**

## Mismatches and adjudication

- **Fisher exact 16/90 vs 1/172 — the packet/consensus value ~3e-4 is wrong; the script's 1.77e-7 is right.** Both one- and two-sided exact hypergeometric sums give p = 1.772e-7; they coincide here because the observed table's exact-tie partner is unreachable under these margins (the far tail beyond x=16 contributes nothing until x=17, the table maximum given m1=17). Cross-checks: Pearson chi2 p = 8.1e-8, Yates-corrected p = 3.3e-7, log-OR Wald p = 5.2e-4 — no standard test lands at 3e-4. The figure originated in the Fable seat's round-3 recomputation (`raw/fable.md`, claim 25) and propagated to CONSENSUS.md §3 and the packet appendix ('both p33-swap p-values … 3×10⁻⁴') and round4/fable.reply.md without being re-derived. Consequence: none for the science — the corrected value is *more* significant, so claim 25's 'decisive on either baseline' stands strengthened. Fix the document: replace 3×10⁻⁴ with ≈1.8×10⁻⁷ (two-sided exact Fisher) everywhere it appears.
