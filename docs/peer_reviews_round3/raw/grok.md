I'll read the review packet in full first, then verify every claim against the cited sources before writing the panel review.Packet read. Next I’ll pull the repo’s source numbers and the cited papers so I can recompute the stats and check each claim against the literature.Primary papers and sequence files next — I’ll ignore other models’ reviews so this stays an independent check.Harper 2016 and Shilts 2020 match several rates; next I’ll recompute the stats and check sequences for the p61/p65 substitutions, K174, and the CPm claim.I’ll extract the protein translations and recompute the stats from the raw counts next.One more check: residue 174 across the local genome set, so the K174 census isn’t taken on trust.# Round 3 adversarial review (independent)

Recomputed from Harper 2016 (full PDF), Shilts 2020 (PMC7600554), Killiny 2016 (PMC5066346), local GenBank CDS translations, and the raw counts in the packet. I could not retrieve Shilts, Nehela & Killiny 2026 (*Virology* 621:110928, PMID 42061270) beyond the packet’s abstract quotation.

---

## B1. Virus architecture and the aphid interface

**1 — CONFIRM** — Satyanarayana et al. 2004: bipolar virion, CPm initiates at the 5′ end and is restricted to ~630 nt by HSP70h (p65) and p61; p25 coats the remainder (~95%). T4, but the paper is standard and consistent with Febres 1996 (CPm on a ~75–85 nm tip of a ~2000 nm particle).

**2 — CONFIRM** — Killiny et al. 2016 Figs. 2–4: GFP-virions localize to the *T. citricida* cibarium; free p27, p61 and p65 reduce binding; p25 (and L1/L2, p13, p18, p20, p23) do not.

**3 — CHALLENGE** — Protease-insensitive, chitinase-sensitive, and competed by GlcNAc oligomers: yes (Killiny 2016 Fig. 5). The packet calls this “transmission blocking.” The assay is **in vitro/in vivo binding**, not plant-to-plant transmission. T36 virions still bind the cibarium (Killiny Discussion), so docking ≠ transmission.

**4 — CHALLENGE** — Free p25 not competing means the **major** coat surface is not the retention interface. It does **not** put “coat-protein mutations” off the table. CPm **is** a coat protein; LIYV CPm is a demonstrated transmission determinant (Stewart 2010; Chen et al. 2011). The valid inference is: don’t start with p25. CPm remains a legitimate Approach C target (the packet says this later at #38, then contradicts it here).

---

## B2. The CPm falsification

**5 — CONFIRM** — KC517488 vs U16304 p27 translations: 240/240 identical. Also 240/240 vs AY170468. (EU937521/FS2-2 differs by T108A; that record is not the T36 field isolate.)

**6 — CHALLENGE** — I read Shilts 2020 in full. There is **no** CPm+5′UTR construct and **no** 17/90 count. Reported hybrids: T36/T30 5′-end (0%), T36/T68 5′-end 71/306 (23.20%), T36/T68-p33 16/90 (17.78%). CPm is 3′-proximal; a 5′-end swap does not move CPm. If 16/90 vs 17/90 existed, Fisher *p* = 1.00 and OR ≈ 0.93 — but those counts are not in the cited paper. n = 90 vs 90 also has essentially no power against a small CPm effect.

**7 — CONFIRM** (sequence half) / **CHALLENGE** (as written) — CPm sequence does not explain FS577 vs T36 (or T36-clone) transmission. Killiny still implicates CPm as a binding-complex component. Do not hang that on the phantom 16/90 vs 17/90 result.

**8 — CHALLENGE** — Gapped FS577 vs U16304 p33: 3 substitutions (V117S, V262I, E264G) + 1 gap → **299/303 = 98.68%**, matching the JSON. **295/302 = 97.68%**, not 98.7%. The indel-artifact correction is real; the fraction is wrong. Vs the actual infectious clone AY170468, p33 differs by **one** residue (V262I), 302/303 = 99.67%.

---

## B3. Isolate transmission baselines

**9 — CONFIRM** — Shilts 2020: 95/215 = 44.19%. My Clopper–Pearson 95% CI **37.44–51.10%**.

**10 — CONFIRM** — Harper 2016: 95/394 = 24.11% (they print “24%”). CI **19.97–28.65%**.

**11 — CONFIRM** — Shilts 2020: 2/127 = 1.57%. CI **0.19–5.57%**.

**12 — CHALLENGE** — 1/66 = 1.52%, CI **0.038–8.16%** (packet CI is right). Shilts measured **their T36 infectious clone**, not a field isolate. Harper’s T36 **field** rate is **2/380 = 0.53%** (CI 0.06–1.89%). The packet labels 1/66 as “field.”

**13 — CONFIRM** — Harper 2016: 1/172 = 0.58% (printed 0.6%). CI **0.015–3.20%**.

**14 — CONFIRM** (T4) — Harper 2013 and Harper 2016: T36 graft-propagated ~30–40 years; Garnsey pers. comm. of a drop from ~40–50% to ~1%. Narrative, not a controlled time series.

**Recomputed folds:** FS577 vs T36 clone **(95/394)/(1/172) = 41.5×** (~40× on rounded percents). T68-1 vs Shilts 1/66 **(95/215)/(1/66) = 29.16×** (packet 29.2×). Fine.

---

## B4. Harper 2016 swap series

**15 — CONFIRM** — 1/172.

**16 — CONFIRM** — 5/258 = 1.94% (printed 2% / packet 1.9%). **Fisher vs clone: OR = 3.38, *p* = 0.41 — not significant.** Harper’s “significantly increased” overstates p65-alone.

**17 — CONFIRM** — 11/273 = 4.03%. Fisher vs clone OR = 7.18, ** *p* = 0.034** (dies under Bonferroni).

**18 — CONFIRM** — 35/196 = 17.86%. Vs clone OR = 37.2, *p* = 1.3×10⁻⁹. Vs p61 *p* = 9.9×10⁻⁷; vs p65 *p* = 3.0×10⁻⁹. Vs FS577 95/394: OR = 0.68, ** *p* = 0.092** — statistically compatible with WT.

**19 — CONFIRM** — 52/253 = 20.55% (printed 21%). Vs pair 35/196: OR = 1.19, *p* = 0.55 — no extra signal in the p6–p18 interval beyond p61+p65.

**20 — CONFIRM** — 95/394.

**21 — CHALLENGE** (strength) — Harper states Tukey HSD *P* > 0.05 (Fig. 2). n = **2–4 plants/construct**. ELISA is called non-linear in the same paper. “Parental titer” is underpowered, not demonstrated with precision. Directionally reassuring; not a tight negative.

**22 — CONFIRM** — Quote matches Harper 2016: concerted action and “compatible sequences in these two genes.”

---

## B5. Synergy arithmetic

**23 — CONFIRM** (arithmetic) / **CHALLENGE** (null) — Exact: baseline 0.581%, p65 +1.357 pp, p61 +3.448 pp, additive expectation **5.39%**, observed 17.86%, synergy **12.47 pp**, pair/WT = **0.741**. Rounded 12.6 pp / 74% is fine. Probability-scale additivity is a weak null; on the logit scale expected pair ≈ 12.4% vs observed 17.9% — still synergistic, smaller. Interaction is in the **counts**, not only in the pp story.

**24 — CHALLENGE** — Pair ≫ singles on a **T36 (gain-of-function)** backbone is real. It does **not** falsify single-gene arms, does **not** prove the reciprocal (FS577 → T36 alleles, loss-of-function), and does **not** identify **11 residues** as the causal set. Harper swapped **whole genes**. p65-alone was not even significant. Shilts 2020 already recovered 17.8% by moving **p33** without touching p61/p65 — on a different donor (T68). “Must move both genes together” is the right **Phase 1 primary arm**, not a proof that residue subsets or other genes are dead.

---

## B6. p33

**25 — CONFIRM** — 16/90 vs 1/66: Fisher two-sided ** *p* = 0.00116**, OR = **14.05**. CIs 10.52–27.26% vs 0.038–8.16% do not overlap. Baseline is Shilts’s T36, not Harper’s 1/172.

**26 — CONFIRM** — Aknadibossian et al. 2025, *PLoS Pathog.* 21:e1013730: Class I-like architecture, TEVC inward K⁺/Na⁺ currents in *Xenopus* oocytes, membrane remodeling, third reported plant-virus viroporin.

**27 — CHALLENGE** — “No source-plant titer was measured” is false. Shilts 2020 **Table 2**: DAS-ELISA on the same donor plants; 35sT8 OD 3.36 vs T36 3.41 vs T68 3.50, Tukey same letter. They explicitly reject a titer explanation. Remaining gap: ELISA is semi-quantitative; **no RT-qPCR** on the p33-swap series (unlike Harper Fig. 2). I found no published p33-swap RT-qPCR. Viroporin/ion-homeostasis as the *transmission* mechanism is still a hypothesis, not a demonstrated alternative to vector interaction.

**28 — CHALLENGE** (one clause) — PD/tubules (Bak & Folimonova 2015), host-range TMD (Tatineni et al. 2011), SIE (Folimonova), CmMLP2: yes, T4. Complex is with **CP/p20/p23** (Dao et al., as cited by Shilts), **not p18**.

---

## B7. K174R

**29 — FLAG-UNKNOWN** — I could not fetch PMID 42061270 / *Virology* 621:110928. Do not treat the paper as non-existent. ~50%, triple-deletion complement, and the K174R sentence are known here **only** from the packet’s abstract quote (T3, as labeled).

**30 — CHALLENGE** — Translations, 1-indexed position 174 in the 303-aa frame:

| Accession | What it is | p33-174 |
|---|---|---|
| JQ965169 | T68-1 | **R** |
| KC517488 | FS577 | **R** |
| AY170468 | T36 **infectious clone** (Satyanarayana/Dawson) | **R** |
| EU937521 | T36-strain isolate **FS2-2** (Weng et al.), not the clone | **K** |
| AF260651 | T30 | **R** |
| U16304 | T36 field, **302 aa** | ungapped 174 = **A** (indel offset; gapped residue is R) |

T68-1 is **not** K174. EU937521 is **not** “the T36 infectious clone.” AY170468 (the clone Shilts and Harper actually used) is R174, identical to FS577 at 174; the only FS577 vs AY170468 p33 change is **V262I**. If the 2026 paper used a K174 backbone (FS2-2/EU937521-like) complemented with FS577 p33 (R174), the abstract’s K174R **and** “shared with T68-1” can both be right. The packet inverted T68-1 and mislabeled EU937521, then used that inversion to declare K↔R impossible.

**31 — CONFIRM** — FS577 R174, T30 R174, 24.11% vs 1.57% ≈ **15.3×**. Residue 174 is not sufficient. This is the part of the kill-shot that survives.

**32 — CONFIRM** (list) / **CHALLENGE** (n) — Local 130 p33 CDS: K174 **exactly** those four accessions (EU937521, MH323441, MH323442, ON094625). 303-aa set: **120 R / 4 K of 124** (96.8% / 3.2%). Packet’s 121/125 is off by one. None of the four K174 records is a measured high transmitter. T68-1 is R174, so “K174 correlates with high transmission” is backwards.

**33 — CHALLENGE** — Gene-level ~50% (if the abstract is accurate) and “coordinated P33, P61, P65” can stand. “K174R is dead on sequence grounds” is **too strong** given claim 30’s errors. What is dead: K174R as a **sufficient, natural high-transmission allele**. What is not dead: a K→R change on a K174 backbone as the 2026 complement’s p33 difference.

---

## B8. Complementation

**34 — CONFIRM** — Harper, Cowell & Dawson 2018 abstract: T36 ~0.5% alone, up to **35.7%** in mixed infection. (a) single-genotype verified trees and (b) no field-containment claim without mixed-infection control follow directly. I found no post-2018 quantitative update of those rates.

---

## B9. Closteroviridae precedent

**35 — CONFIRM** — Stewart et al. 2010 *J. Virol.*: LIYV CPm frameshift (p1-5b) abolishes whitefly transmission; systemic movement and virions remain. Truncation, not a point mutant.

**36 — FLAG-UNKNOWN** — Qiao/Ng 2021 *J. Gen. Virol.* (chimeric LIYV/LCV CPm, plasticity) exists. I could not verify the **~60% / ~41% foreign-sequence** cutoffs from accessible text.

**37 — CHALLENGE** — GLRaV-3 virions localize to mealybug cibarium/stylets (Prator et al. 2020); HSP70h/p55/CPm/CP are virion proteins. That is **not** a demonstrated CPm/HSP70h/p55 **binding complex** analogous to Killiny’s competition assay. Cid et al. 2007 even argued a circulative route in *Planococcus citri*. “Same retention architecture” is analogy. No published GLRaV-3 transmission-knockout mutants that I found: that clause is fair.

**38 — CONFIRM** — A **point** mutant in a minor coat protein that kills transmission and spares assembly is still an open target. LIYV is a frameshift/truncation.

---

## B10. Trial design

**39 — CHALLENGE** — Vs **AY170468**, p61 **9** (S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G) and p65 **2** (G227S, R496H): **confirmed**. Vs EU937521: 6+1 = 7, as stated — but EU937521 is FS2-2, not the clone to match. **p27 vs AY170468 is unchanged; p25 is not** (I209V). Harper swapped whole genes, not these 11 residues. Synonymous/UTR differences travel with a gene swap and are invisible in this list.

**40 — CHALLENGE** — Harper: 24 h AAP, **10 aphids/plant**, ELISA 8 weeks, *C. macrophylla* **as recipient**. Shilts: **5–7 aphids/plant**, Mexican lime recipients. Packet mixes them. “Blinded scoring, titer on every source plant by RT-qPCR+ELISA” is **your** upgrade, not Harper as published. Keep it; don’t cite it as Harper.

**41 — CHALLENGE** — Pre-registration is good. **PASS ≤5%** is not T36-like (clone 0.6%, field 0.5–1.5%). 5% is still ~8× the clone and in T30 territory. FAIL ≥15% is near the pair/p33-swap phenotype. Mixed-infection complementation (#34) can unwind a PASS in anything but a single-genotype greenhouse. Write the null as “pair is necessary on this backbone at this n,” not “biocontainment achieved.”

**42 — CHALLENGE** — **0/110** two-sided CP upper **3.30%** (packet 3.3%). **0/200** two-sided CP **1.83%**, not 1.5% (1.5% is the rule of three / one-sided ~1.49%). n ≈ 250/arm to separate ~20% from ~1%: power ≈ 1.00; ~40/arm already gives 80% for 20% vs 1%. **“550–700 aphids”** is a unit error: 550–700 **plants** × 10 aphids = 5,500–7,000 aphids. Cost/timeline built on “aphids” will be off by ~10×.

**43 — CONFIRM** (with n tweak) — Two-sample 20% vs 15% (5 pp): n = 90/arm power **14.2%**; n for 80% ≈ **906** (packet 934; formula-dependent). Seven independent α = 0.05 tests: FWER = **30.2%**. Cap primary arms at 3–4 with Bonferroni: sound. Use **plant** as the unit but plan for **source-plant clustering** (Shilts: 5 donors/treatment; Harper titer n = 2–4). Fisher on pooled plants overstates precision. Prefer a mixed/logistic model with source plant as a random effect; pre-specify that, don’t retrofit.

**44 — FLAG-UNKNOWN** — 20 weeks is a management claim. ELISA at 8 weeks is in the protocol; agro/N. benthamiana → bark-flap → citrus systemic infection plus construct synthesis can blow that gate. Not a literature fact.

**45 — FLAG-UNKNOWN** — Platform framing, not a testable claim.

---

## Attack orders (C)

**C1 (pair must move together; 11 residues as Phase 1).** Weakness: Harper = whole-gene, gain-of-function, T36 backbone. Your trial = 11 residues, loss-of-function, FS577 backbone. Two untested inferences stacked. p65-alone was non-significant; p33 (T68) recovers ~18% without p61/p65. **Right experiment: reciprocal whole-gene pair on FS577, blinded, titer-controlled.** Residue dissection is Phase 2. Within T36-strain, p33 is nearly identical (V262I) and p27 is identical, so p61+p65 is still the correct **gene-level** lever for FS577 vs T36-clone.

**C2 (p33 may be accumulation/ion homeostasis).** Missed evidence **against** “no titer”: Shilts Table 2 ELISA, no OD difference. Missed evidence **for** a non-docking step: Killiny — T36 already binds the cibarium. No published p33-swap RT-qPCR found. Aknadibossian shows a viroporin; it does not show that viroporin activity **is** the transmission phenotype. Keep Approach B; drop “titer was never measured.”

**C3 (K174R vs sequences).** Yes, there is a way both are right: **numbering/isolate mix-up.** U16304 is 302 aa (ungapped 174 is not the homologous residue). AY170468 (clone) = R174; EU937521 (FS2-2) = K174. T68-1 = R174, same as FS577. The abstract’s K174R is coherent only on a **K174 backbone**. The packet’s “both are K, therefore no K↔R” is a sequence error, not a numbering offset in U16304’s frame that you already checked.

**C4 (statistics).** Fisher on pooled plants is what the source papers did; keep it as a pre-specified primary **and** add a clustered analysis. Do not treat p65-alone as a positive control of “a small single-gene effect” — it was not significant. 0/200 bound: report 1.83% (CP) or label 1.5% as rule-of-three. Power ~14% / ~900 per arm for a 5 pp effect is right; that 5 pp is **not** the contrast this trial is powered for (20% vs 1% needs ~40/arm).

---

## Open questions (D)

| Question | Literature answer? |
|---|---|
| 11 residues additive vs epistatic? | **No.** Harper is whole-gene. |
| p65’s two substitutions enough on a transmissible backbone? | **No.** p65-alone on T36 was 5/258, n.s. Reciprocal unknown. |
| Fail at docking or downstream? | **Partial.** Killiny: T36 still docks; poor transmission is not “no cibarium binding.” No published receptor protein. Interface looks like **chitin/GlcNAc**, not a named protein receptor. |
| Reproduce on T68 backbone? | **No published test.** |
| *T. citricida* cibarium receptor / ligand motif? | **None identified.** Killiny: sugar moieties, not protease-sensitive protein. |
| Post-2018 mixed-infection rates? | **None found** that replace Harper 2018’s 0.5% → 35.7%. |

---

## What this packet got wrong overall

1. **Invented a Shilts construct (CPm+5′UTR, 17/90).** That is the largest citation error. CPm sequence-falsification still holds from 240/240 identity; it does not need a phantom 2×2.

2. **K174R sequence story is inverted.** T68-1 = R174; the real T36 clone (AY170468) = R174; EU937521 is FS2-2 with K174. The 2026 abstract can be internally consistent; the packet’s “both encode K, so no K↔R” cannot.

3. **T36 “field” vs clone labels are scrambled** (1/66 is Shilts’s clone; Harper field is 2/380). Two baselines (0.6% and 1.5%) are both real and must not be used interchangeably.

4. **Over-claimed p65-alone and titer-identity.** p65 vs clone *p* = 0.41. Harper Tukey on n = 2–4 is a gesture. Shilts **did** ELISA the p33 donors.

5. **Stacked inference: whole-gene synergy → 11-residue necessity on the opposite backbone.** Phase 1 should be Harper’s pair, reversed, on FS577. The 11-site list is a CDS diff vs AY170468, not a functional map. p25 is not identical (I209V).

6. **Unit error (aphids vs plants)** and mixed Harper/Shilts protocols will break costing, power, and comparability.

7. **PASS ≤5% is not containment.** Complementation (#34) already forbids a field-cure reading; the packet says so in E and then lets the threshold language drift toward “biocontainment by design” (#45).

What it got **right**, and this is the load-bearing piece: within the T36 strain, CPm does not explain the FS577 vs clone gap; p61+p65 together recover most of it at matched ELISA/qPCR as published; p33 is a **separate** T68-donor lever; K174R is not a natural high-transmission switch; the greenhouse necessity test should be paired, blinded, and titer-controlled.

---

## Core decision

**Green-light a blinded, titer-controlled greenhouse necessity test of the paired p61+p65 swap — as whole-gene alleles (FS577 backbone × AY170468 p61+p65), not as an 11-residue oracle.**

Conditions: primary contrast = pair vs FS577 WT vs T36 clone; optional single-gene arms are secondary and underpowered for small effects; every source plant RT-qPCR+ELISA; plants (not aphids) as the n; clustered analysis pre-specified; PASS/FAIL written as a **necessity** result, not containment; p33 left to Approach B; no K174R in Phase 1.

**Confidence: 7 / 10.**

The Harper pair effect is large and I recomputed it. Reciprocal loss-of-function, residue vs gene, and mixed-infection complementation are the residual risks; they are why the experiment is worth running, not why it should wait.
