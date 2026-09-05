# CTV Round 3–4 — Panel Consensus

*Six-model adversarial review (Round 3) + rebuttal round (Round 4), run 2026-09-05.
Panel: Grok 4.6 · DeepSeek V4 Pro · GLM 5.3 · Fable 5.1 · GPT-6-astra · Gemini 3.1 Pro.
Raw reviews: `raw/` · dispute packets and rebuttals: `round4/` · per-claim grid: `../CTV_ROUND3_SCORECARD.md`.*

## Final confidence in the core decision
*(blinded, titer-controlled greenhouse necessity test of the paired p61+p65 swap)*

| Model | R3 → R4 |
|-------|---------|
| Grok 4.6 | 7 → **7** |
| DeepSeek V4 Pro | 7 → **7** |
| GLM 5.3 | 7 → **7.5** |
| Fable 5.1 | 8 → **8** |
| Gemini 3.1 Pro | 9 → **6** |
| GPT-6-astra | 2 → **2** (lone dissenter; see §4) |

**Panel read: the science survives; the document does not.** The Harper 2016 pair data
(verified verbatim against the PDF, all six denominators) support the greenhouse test, and
every recomputed statistic in B3–B5 checks out. But the packet contains one fabricated
citation-grade error (claim 6), one sequence error (claim 30), a 10× resource undercount
(claim 42/44), and several mislabeled baselines. Fix the document before the decision
meeting; the experiment itself keeps its green light at ~7/10.

## 1. Adopted corrections (✗ old → ✓ fix)

1. **Claim 6 — phantom construct (worst error).** ✗ "adding CPm+5′UTR to a p33 swap changed
   transmission 16/90 → 17/90 (Shilts 2020)" → ✓ **No such construct or 17/90 exists in
   Shilts 2020 (PMC7600554, verified by direct fetch).** Actual data: 35sT8 (T36/T68-p33)
   16/90; T36/T68 5′-end 71/306 (23.2%); T36/T30 5′-end 0%. Consequence: claim 7's
   *functional* arm is gone — the CPm-falsification case now rests on claim 5 alone
   (240/240 identity, confirmed by Fable's independent alignment). Find where 17/90 came
   from before it propagates.
2. **Claim 30 — K174R inverted.** ✗ "T36 clones and T68-1 both encode K174" → ✓
   **T68-1 (JQ965169) = R174; AY170468 = R174; EU937521 = K174; FS577 vs EU937521 p33
   differ at exactly R174K** (re-derived from repo GenBank files by Fable, corroborated by
   Grok; DeepSeek/GLM/Gemini conceded). The 2026 abstract's K174R statement is consistent
   with these sequences; the packet's refutation is the error.
3. **Claim 33 — conclusion survives, route replaced.** ✓ anchor on claim 31 (T30 = R174,
   1.57%) + Harper's own K174-retaining hybrids at 17.9%/20.6%: residue 174 cannot be the
   dominant lever of the T36 phenotype.
4. **Claim 12 — baseline mislabeled.** ✗ "T36 field 1.5% (1/66)" → ✓ 1/66 is Shilts's T36
   **clone** arm (AY170468 backbone); Harper's T36 field rate is 2/380 = 0.53%. Check every
   downstream use of the "field" baseline.
5. **Claim 27 — titer confound overstated.** ✗ "no source-plant titer was measured" → ✓
   Shilts 2020 Table 2 reports DAS-ELISA on donor plants (OD 3.36 / 3.41 / 3.50, same Tukey
   letter); they explicitly reject a titer explanation. Genuine gap = RT-qPCR only. This
   *weakens* the accumulation-confound reading of the p33 effect (attack order 2).
6. **Claim 42 — stats + units.** ✗ mixed CI conventions → ✓ state one convention (0/110:
   2.69% one-sided / 3.30% two-sided; 0/200: 1.49% / 1.83%). ✗ "550–700 aphids" → ✓
   **550–700 plants × 10 aphids = 5,500–7,000 aphids** — claim 44's cost ($8–13K) and
   ~20-week timeline are built on a ~10× undercount. Re-estimate before pre-registration.
7. **Claim 8 — arithmetic.** ✗ "295/302 = 98.7%" (it is 97.7%) → ✓ ~**299/303 = 98.7%**
   (gapped alignment, 1 gap; Fable). Also specify reference: vs AY170468/EU937521 it's 99.7%.
8. **Claim 24 — wording.** ✗ "single-gene-first designs falsified" → ✓ "singles are
   *insufficient* (p61 alone partially active, p = 0.034 vs control; p65 alone not, p = 0.41);
   moving both genes is data-required." Add: only the gain-of-function direction is published;
   the reciprocal loss-of-function swap (the actual lead design) is an inference, worth
   stating in the pre-registration.
9. **Claim 26 — confirmed by fetch.** Aknadibossian et al. 2025, *PLoS Pathogens*
   21(11):e1013730, DOI 10.1371/journal.ppat.1013730 — p33 viroporin claim verified
   (TEVC, inward K⁺/Na⁺ currents, membrane remodeling; third plant-virus viroporin).
10. **Claim 21 — underpowered null.** Quote is verbatim but Tukey HSD ran on n = 2–4 source
    plants/arm; face-value citation is misleading next to the claim-27 critique. Flag it.
11. **Claim 39 — allele set ambiguity.** Substitution lists confirmed, but: notation is
    FS577→T36 (reverse signs for the actual edit); and 4 of the 11 residues (p61 D324G,
    E382D, I455V; p65 G227S) are AY170468-private — the validated clone EU937521 matches
    **FS577** there. Adjudicate 11-vs-7 *before* construct ordering; default to the
    validated 7.
12. **Claim 40 — misattribution.** Blinding is the packet's addition; Harper published no
    blinding. Cite Harper for the assay mechanics only.
13. **Claim 41 — boundary tie rule.** Thresholds touch at exactly 5% and 15% (GPT's catch).
    Pre-register a tie rule (boundary value → more conservative band).
14. **Claim 43 — baseline-dependent power.** 14% power / ~934-per-arm holds only at a
    mid-scale baseline (15→20%); at the decision-relevant 1→6% contrast, n=90 gives ~45%
    and 80% needs ~211/arm. State the contrast for every power number.
15. **Claim 32 — census normalization.** 121 R + 4 K = 125; the 5 dropped 302-aa
    T36-lineage sequences (U16304, NC_001661, DQ272579, AY340974, OR192037) carry R at
    their shifted position 173. Corrected homologous census: 126 R / 4 K / 130.
16. **Claim 3 — over-read.** The Killiny data are a *binding* assay; T36 virions still bind
    the cibarium. "Carbohydrate interface on the tail" is the authors' interpretation —
    docking ≠ transmission.

## 2. Unresolved (logged, not adjudicated)

- **Claim 36 — RESOLVED by fetch (2026-09-05).** The chimera data are **Wang et al. 2021,
  J Gen Virol 102(9):001652** (PMC full text downloaded), not Chen 2011 (that paper has no
  chimeras). The packet's numbers were RIGHT: CPmP-1 at 60% LCV sequence retains foregut
  binding; CPmP-2/3/4 (46/51/41% — the 41% swap covers C-terminal residues 261–442) do
  not. Key nuance: retention is determined by *which part* is foreign (positional), not
  the overall fraction — "plastic but bounded" survives with this reading.
- **Claim 34 — RESOLVED by fetch (2026-09-05).** Verified against the published record:
  Harper et al. 2018 (Arch Virol 163:3373–3376, "Bottlenecks and complementation…")
  reports T36 transmission ~0.5% alone rising to **35.7%** in genotype mixtures. Confirmed.
- **Killiny 2016 citation detail:** packet's/secondary refs say AEM 82:6194; the verified
  record is **AEM 82(21):6294–6302** (doi 10.1128/AEM.01914-16, PMID 27520823).
- **Claim 29 — upgraded T3→verified abstract.** PMID 42061270 fetched from PubMed; the
  abstract matches the packet's quotation verbatim (~50% from ~0.6%; "only p33 differs…
  K174R"; "coordinated function of P33, P61, P65"). Consistent with corrected sequences.
- **Literature archive:** all nine core citations now under `docs/literature/` — full
  texts where open (Shilts 2020, Wang 2021, Aknadibossian 2025 as PMC XML; Harper 2016 PDF
  at repo root; **Killiny 2016 and Stewart 2010 as full PDFs**, pulled after this
  consensus was first written), abstracts for the paywalled/rest.

## Claims 2, 3, 35 — full-text verification (Killiny 2016 and Stewart 2010 PDFs, 2026-09-05)

**Claim 2 — CONFIRMED by full text.** Killiny 2016 Fig 4: free p27, p65, p61 each
significantly reduced labeled-virion binding to excised foreguts; L1, L2, p25, p23, p20,
p18, p13 did not. *New, design-relevant detail:* the competing proteins were expressed
from **T68-1** cDNA and the labeled virions were **T36** — cross-isolate competition
works, so the binding interface is conserved across isolates with 40× different
transmission rates. Binding competence alone cannot explain the T36 phenotype.

**Claim 3 — CONFIRMED with the panel's wording fix vindicated.** Fig 5A: pronase E,
proteinase K, trypsin — no effect on binding; chitinase — dose-dependent reduction. The
paper's frame: CTV virion proteins bind the **N-acetylglucosamine moieties of the aphid
cuticular surface** (carbohydrate on the *insect* side) — exactly the DeepSeek/Grok
wording challenge from round 3. The packet's "carbohydrate interface on the virion tail"
is backwards as written. Also: the assay is a **binding** assay (fluorescence on dissected
foreguts), never transmission — claim 3 must not say "transmission blocking."

**Key strategic reading of Killiny 2016 (new):** T36 virions bind the cibarium normally
("virions of this strain (T36) bound to the cibarium … at least, there is no correlation
with lack of retention and poor transmissibility"). This is the first direct evidence on
open question D #3: **T36's low transmission is not a foregut-docking defect** — the
failure is downstream of binding. A transmission-disabled design should therefore not
rely solely on binding-disruption; the p61/p65 pair swap acts somewhere after docking (or
via acquisition/retention strength differences not visible in this assay).

**Claim 35 — CONFIRMED, with two design-relevant nuances.** Stewart 2010: p1-5b (CPm
frameshift, 211/453 aa) — virions assemble, move systemically, **0/24 transmitted vs
17/24 for the restored-CPm mutant** at matched/​higher virion titers. Nuances: (a) the
truncated CPm is **not incorporated into the virion at all** (0% immunogold labeling) —
this is a *tailless-virion* precedent, so the "assembly-sparing point mutation" target
(claim 38) is indeed still open, as the packet says. (b) **Compensatory frameshift
revertants restoring CPm appeared by ~3 months post-inoculation** — genetic escape is
observed in the wild for exactly this class of mutation. The transmission-disabled design
must carry a stability/reversion monitoring plan; cite this.

**Extra mini-correction (citation):** Killiny 2016 real pages = AEM 82(21):6294–6302; any
doc saying "82:6194" is wrong. Satyanarayana 2004 = PNAS 101:793–8 (not 799).
- **Claims 9/11** — T68-1 (95/215) and T30 (2/127) denominators quoted from Shilts 2020;
  now corroborated by the PMC fetch (both appear verbatim), upgrading both to confirmed.
- **11-vs-7 allele set** — engineering decision, see correction 11.
- **Plant-level clustering** — the experimental unit is the plant, not the aphid batch;
  no legacy paper reports it. Pre-specify cluster-aware analysis (GLMM / plant random
  effect). Headline synergy survives plausible ICC (p ≈ 3×10⁻⁵ at ρ = 0.2); small-margin
  claims (p61-alone, nominal p = 0.034) do not.

## 3. What the panel confirmed beyond doubt

- All Harper 2016 Fig. 1 counts (six denominators, verbatim from PDF).
- CPm 240/240 identity FS577 vs T36 (independent re-alignment).
- Synergy: 12.5 pp super-additive, pair recovers 74% of WT; binomial p ≈ 3×10⁻¹⁰ vs
  additive null; robust to Bliss scale and to plausible clustering.
- Both p33-swap p-values (0.00116 vs 1/66; **1.8×10⁻⁷ vs 1/172** — an earlier panel round
  said 3×10⁻⁴; the exact Fisher, machine-recomputed in scripts/verify_all.py, is 1.77×10⁻⁷;
  directionally strengthens claim 25); OR 14.05.
- Both substitution lists (9 + 2 vs AY170468; 7 vs EU937521).
- FWER 30.2% for 7 uncorrected tests → cap constructs, Bonferroni.

## 4. Dissent on record (GPT-6-astra, 2/10)

GPT held X on 23/24/25/31/33 after rebuttal. Its holds are epistemological, not
arithmetical: it rejects binomial/Fisher significance computed against an *estimated*
null, requires equivalence margins for titer claims, and reads "necessity" as unproven by
any published table. The panel's rebuttals: the recomputations are from raw counts, any
control choice gives decisive p, and the green-light is for an experiment — precisely
because necessity is not yet proven. Its two genuine contributions (claim-41 boundary
overlap; power-underspecification in 43) were adopted by the panel. Log it as a minority
report: it is reviewing the *document's* justification, not the experiment's rationale.

## 5. Recommended actions before the internal decision meeting

1. Re-source or delete claim 6 / 17/90 (fabrication-grade; trace origin).
2. Rewrite B7 (K174R) per corrections 2–3.
3. Re-cost + re-time claims 42/44 with plants-vs-aphids fixed (roughly 10× aphid budget).
4. Adjudicate the 11-vs-7 allele set against EU937521; write it into pre-registration.
5. Add tie rule (41), state baselines (43), cluster-aware analysis plan (§2), blinding
   as a new Methods item (40), titer language per correction 5.
6. Re-run the corrected packet past the panel only if the 17/90 origin changes claim 7.
