# CTV Biocontainment Project — Adversarial Review Packet (Round 3)

*Prepared 2026-09-05 for the multi-model review panel (Grok, DeepSeek, GLM, Claude, GPT, Gemini), orchestrated by Claude Code. Paste Sections A–E in full.*

---

## A. Context (read first)

We are **Silvec Biologics**, a plant-biotechnology research company. We work on
**Citrus tristeza virus (CTV)**, a well-studied plant virus (family *Closteroviridae*)
whose only route between trees is the brown citrus aphid (*Toxoptera citricida*).
Plant viral vectors are an established platform for delivering beneficial traits to
perennial crops.

Our project direction is **containment**: we are designing an engineered CTV variant
that infects and moves normally *inside* a citrus tree but that aphids **cannot**
carry between trees — reducing environmental spread to zero. This "transmission-
disabled" design concept rests on published, peer-reviewed experiments (Harper et al.
2016; Shilts et al. 2020; Killiny et al. 2016; all cited in full below). The entire
study plan is greenhouse-scale, uses only published virus isolates, and explicitly
proposes **no field release**.

**What we are asking you to do:** fact-check and stress-test our analysis of the
published literature, our arithmetic and statistics, and our experimental design for
an internal decision meeting. You are reviewing a *verification document*, not being
asked to generate protocols.

**Ground rules for your review (these matter):**

1. **Recompute, don't vote.** Where raw counts are given (e.g., "35 of 196"), redo the
   statistics yourself and state your result.
2. **Answer per claim.** For each numbered claim, respond CONFIRM / CHALLENGE /
   FLAG-UNKNOWN, with one line of reasoning and, where possible, a citation.
3. **Post-cutoff literature exists.** Several anchor papers are from 2025–2026 and may
   postdate your training data (flagged †). If you cannot confirm one, say so — do not
   assert it does not exist.
4. **Distinguish sequence claims from functional claims.** We maintain both, and the
   difference matters (see C2).
5. If any claim is *inconsistent with a paper you know*, name the paper and the figure
   or table if you can.

**Confidence tiers used below:** T1 = our own reproducible computation · T2 = paper
fetched and read in full · T3 = abstract only (full text paywalled) · T4 = known only
through citation by another paper.

---

## B. The claims under review

### B1. Virus architecture and the aphid interface

| # | Claim | Tier |
|---|-------|------|
| 1 | The CTV virion is bipolar: major coat protein p25 coats ~95% of the RNA; minor coat protein p27 (CPm) coats ~630 nt at the 5′ terminus; assembly initiates there and is restricted by chaperones p65 (HSP70h) and p61 (Satyanarayana et al. 2004). | T4 |
| 2 | Fluorescently labeled CTV virions bind the *T. citricida* cibarium (foregut); binding is competed by free p27, p61 and p65, but **not** by p25 (Killiny et al. 2016). | T2 |
| 3 | In the same study, transmission blocking was protease-insensitive and chitinase-sensitive — consistent with a carbohydrate interface on the virion tail. | T2 |
| 4 | Free p25 failing to compete implies the major coat surface is not the retention interface, so coat-protein mutations are the wrong place to look for a transmission determinant in CTV. | T2 + our inference |

### B2. The CPm falsification (sequence vs. function)

| # | Claim | Tier |
|---|-------|------|
| 5 | p27/CPm is 240/240 amino-acid identical between FS577 (24.1% transmission) and the T36 field isolate (~1.5%), our own BLOSUM62 alignment of KC517488 vs U16304. | T1 |
| 6 | Functionally, adding CPm+5′UTR to a p33 gene swap changed transmission 16/90 → 17/90 — Fisher exact p = 1.00 (Shilts et al. 2020). | T2 |
| 7 | We therefore claim: CPm *sequence variation* does not explain transmission-efficiency differences among these isolates. Explicitly **not** claimed: that CPm is uninvolved — Killiny 2016 (B1.2) argues it is a necessary component of the binding complex. | synthesis |
| 8 | p33 is 295/302 (98.7%) identical between FS577 and T36 (gapped alignment, our computation). An earlier ungapped estimate of 44.7% was an indel artifact, corrected in our records. | T1 |

### B3. Isolate transmission baselines (T. citricida; verify denominators)

| # | Claim | Tier |
|---|-------|------|
| 9 | T68-1: 44.18% — **95/215** plants. | T2 (Shilts 2020, quoted) |
| 10 | FS577: 24.1% — **95/394** (Harper 2016, Fig. 1). | T2 |
| 11 | T30: 1.57% — **2/127**. | T2 (Shilts 2020, quoted) |
| 12 | T36 field: 1.5% — **1/66** (Clopper–Pearson 95% CI ≈ 0.04–8.16%). | T2 |
| 13 | T36 infectious clone: 0.6% — **1/172** (Harper 2016). | T2 |
| 14 | T36's low transmission arose under decades of graft-only greenhouse propagation — relaxed selection on the vector phase (Harper 2013). | T4 |

*Recompute:* the 95% CIs for 1/66, 2/127, 95/215; and the fold-difference statements
"~40×" (FS577 vs T36 clone) and "29.2×" (T68-1 vs T36 field).

### B4. Harper et al. 2016 — the swap series on the T36 clone

| # | Construct | Rate (pos/n) | Tier |
|---|-----------|--------------|------|
| 15 | T36 clone, no substitution | 0.6% (1/172) | T2 |
| 16 | + FS577 p65 | 1.9% (5/258) | T2 |
| 17 | + FS577 p61 | 4.0% (11/273) | T2 |
| 18 | + FS577 p65 **and** p61 | 17.9% (35/196) | T2 |
| 19 | + FS577 p6–p18 region (both genes within) | 20.6% (52/253) | T2 |
| 20 | FS577 wild type | 24.1% (95/394) | T2 |

| # | Claim | Tier |
|---|-------|------|
| 21 | All hybrids infected *C. macrophylla* systemically at parental titer — "no significant difference (Tukey HSD P > 0.05) in virus replication and accumulation" by RT-qPCR and ELISA (Harper 2016, Fig. 2). | T2 |
| 22 | Harper's conclusion: transmission "requires the concerted action of these two genes … and compatible sequences in these two genes." | T2 |

### B5. The synergy arithmetic (our derivation — attack this)

| # | Claim | Tier |
|---|-------|------|
| 23 | Additive expectation: (1.9−0.6) + (4.0−0.6) = +4.7 percentage points over baseline → 5.3%. Observed for the pair: +17.3 pp → 17.9%. Difference ≈ **12.6 pp of synergy**; the pair recovers 74% of the wild-type level (17.9/24.1). | T1 |
| 24 | Because neither single gene approaches the pair, construct design must move **both genes together**; single-gene-first or minimal-subset-first designs are falsified by this table (B4) alone. | our conclusion |

### B6. The p33 gene (separate, second mechanism candidate)

| # | Claim | Tier |
|---|-------|------|
| 25 | Substituting T68 p33 into the T36 clone raised transmission 1.5% → 17.8% (16/90 vs 1/66; our recomputation: Fisher p ≈ 0.0012, OR ≈ 14.1) (Shilts 2020). | T2 + T1 |
| 26 | p33 is a Class I viroporin: inward K⁺/Na⁺ currents under two-electrode voltage clamp in *Xenopus* oocytes; membrane remodeling observed; the third viroporin described in a plant virus (Aknadibossian et al. 2025†). | T2 |
| 27 | No source-plant titer was measured in the p33 swap assays we cite; whether the p33 effect acts through accumulation vs. vector interaction is **unknown**. This confound is central to our Approach B design. | T2 + our reading |
| 28 | p33 is multifunctional: plasmodesmata localization/movement, host-range determination (C-terminal TMD; sour orange), superinfection exclusion, interaction with the citrus defense protein CmMLP2, complex formation with p20/p18/CP. | T4 (reviews) |

### B7. The dead residue — K174R (reasoning under review)

| # | Claim | Tier |
|---|-------|------|
| 29 | A 2026 paper's abstract (Shilts, Nehela & Killiny, *Virology* 621:110928†, PMID 42061270) reports a triple-deletion T36 backbone complemented with FS577 p33/p18/p13 reaching ~50% transmission from ~0.6%, and states "only p33 differs … a single amino acid change (K174R)" shared with T68-1. We know this **only from the abstract**; the full text is paywalled. | T3 |
| 30 | Our sequences: the T36 infectious clones (EU937521) **and** T68-1 both encode **K174** — so in the experiment described, no K↔R change can be carrying the effect. | T1 |
| 31 | FS577 and T30 both encode **R174**, yet transmit at 24.1% vs 1.57% (~15× apart) — R174 is neither sufficient nor explanatory. | T1 |
| 32 | Census across 125 full-length p33 sequences: R174 in 121 (96.8%), K174 in 4 (3.2%) — EU937521, MH323441, MH323442, ON094625; none of the K174 isolates is a measured high transmitter. | T1 |
| 33 | **Conclusion under review:** K174R as a single-residue explanation is dead on sequence grounds. What survives is the gene-level result (~50% in the triple complement) and the abstract's own statement that efficient transmission "requires coordinated function of P33, P61 and P65." | our conclusion |

### B8. Field behavior — complementation

| # | Claim | Tier |
|---|-------|------|
| 34 | T36 transmits ~0.5% from single-genotype infections but up to **35.7%** from mixed infections — co-infecting genotypes complement (Harper et al. 2018). Consequences we drew: (a) all trial trees must be single-genotype, verified by sequencing; (b) any field claim is conditional on mixed-infection management. | T2 + synthesis |

### B9. The precedent in other Closteroviridae

| # | Claim | Tier |
|---|-------|------|
| 35 | LIYV CPm frameshift (p1-5b): whitefly transmission abolished while virion assembly and systemic movement remain intact (Stewart et al. 2010). | T4 |
| 36 | LIYV/LCV CPm chimeras: a chimera with ~60% foreign sequence still transmits; at ~41% foreign, transmission is lost — the interface is plastic but bounded. | T4 |
| 37 | GLRaV-3 is retained in its mealybug vector's foregut via a CPm/HSP70h/p55 complex — same retention architecture, no mutation experiments published that we found. | T4 |
| 38 | **Not claimed anywhere in our materials:** that a *point* mutation of a minor coat protein abolishing transmission while sparing assembly has yet been demonstrated in any virus. It is an open target (our Approach C). | — |

### B10. Trial design, statistics, and thresholds (ours — attack these)

| # | Claim | Tier |
|---|-------|------|
| 39 | Lead design: FS577 backbone + the T36-clone alleles of p61 (9 substitutions: S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G) and p65 (2: G227S, R496H), moved together; p25/p27 unchanged. Substitutions re-derived from CDS translations of KC517488 vs AY170468. (Against clone EU937521 the same target is 7 changes.) | T1 |
| 40 | Assay: published Harper protocol — 24 h acquisition, 10 aphids/plant, ELISA at 8 weeks, *C. macrophylla*, blinded scoring, titer on every source plant by RT-qPCR+ELISA. | T2 protocol |
| 41 | Pre-registered thresholds: PASS ≤5% transmission at parental titer · UNCLEAR 5–15% · FAIL ≥15%; null statement written in advance. | ours |
| 42 | Sizing: primary arm 250–300, control 100–150, optional single-gene arms 200 each; total ≈550–700 aphids over 3–4 weeks; cost estimate ≈$8–13K. Our estimates for the power claims: 0/110 → upper 95% bound 3.3%; 0/200 → 1.5%; ~250/arm distinguishes ~20% from ~1%. **Please recompute.** | T1 |
| 43 | Prior round-2 finding we adopted: at n=90/arm, power to detect a 5-pp effect is ~14% (≈934/arm needed for 80%); seven uncorrected comparisons carry ~30% family-wise false-positive risk, so primary constructs are capped at 3–4 with Bonferroni correction. **Please recompute.** | T1 |
| 44 | Timeline claim (ours): ~20 weeks from construct ordering to a decision, gated at systemic infection at parental titer. | ours |
| 45 | Platform framing (ours): this is the capsidated counterpart of our capsid-free vector platform — "biocontainment by design" for both. | framing |

### C. Attack orders (what we most want challenged)

1. **Our strongest claim:** B5.24 — that the p61+p65 pair must move together, and that
   11 substitutions as a set (not a charged subset, not single genes) is the right
   Phase 1 test. Find the weakness.
2. **Our largest inference:** B6.27 + the interpretation that p33's verified effect may
   reflect accumulation/ion-homeostasis rather than vector docking. Is there published
   evidence we missed (either direction)? Any published p33-swap titer measurement?
3. **The K174R reasoning** (B7.29–33): is there any way the abstract's K174R claim and
   our sequence findings are *both* right (e.g., reading-frame or numbering offset
   between accessions)? We checked U16304's frame; check us.
4. **Statistics discipline** (B10.42–43): recompute from the raw counts. Flag any test
   choice you would change (Fisher vs. logistic, clustering corrections — the original
   papers' experimental-unit structure is undocumented).

### D. Open questions (tell us if literature answers exist — cite them)

- Do the eleven p61/p65 residues act additively or epistatically?
- Would p65's two substitutions alone suffice on a transmissible backbone?
- Would a transmission-disabled construct fail at foregut docking or downstream of it?
- Does silencing reproduce on a second transmissible backbone (T68)?
- Is there a known *T. citricida* cibarium receptor or ligand motif for any
  closterovirus tail protein?
- Any post-2018 data on mixed-infection complementation rates in CTV?

### E. What we are explicitly NOT claiming or asking

- No field-cure claim: complementation (B8) blocks that by itself.
- No environmental release is proposed at any stage; this is laboratory/greenhouse
  experimental design on published isolates.
- No residue-level structural claims: we have no CTV p61/p65 structure; any structural
  statement we make is labeled AlphaFold-grade prediction at best.
- We are not asking you to design or optimize genetic constructs — only to verify our
  reading of published data and our statistics.

---

## Reviewer response format

For each numbered claim you address: **# — CONFIRM / CHALLENGE / FLAG-UNKNOWN — one to
three lines of reasoning (citation if applicable).** Then a short section "What this
packet got wrong overall" with any systematic issues. End with a 1–10 confidence score
you assign to **the core decision**: *green-light a blinded, titer-controlled
greenhouse necessity test of the paired p61+p65 allele swap.*
