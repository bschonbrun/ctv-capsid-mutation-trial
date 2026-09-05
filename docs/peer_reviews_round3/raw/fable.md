# Claude (Fable 5.1) — Round 3 Review of CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md

Method note: literature claims checked against my training knowledge (cutoff Jan 2026; anything `†` beyond that flagged, not denied); the Harper 2016 PDF in this repo was read directly (all counts cross-checked against Fig. 1, Fig. 2, and body text); all statistics recomputed in exact arithmetic (Fisher by exact hypergeometric sum; Clopper–Pearson by bisection; power by normal approximation, validated against known values); all T1 sequence claims rederived *independently* from the repo's own GenBank files (ctv_genomes.gb, ctv_labeled_isolates.gb, ctv_t36_infectious_clones.gb) by re-parsing CDS translations and re-aligning.

## B1. Virus architecture and aphid interface

**1 — CONFIRM.** Satyanarayana et al. 2004 (PNAS 101:799) established the bipolar CTV virion and CPm-restricted ~630-nt 5′ assembly initiation with HSP70h/p61 involvement; Harper 2016 itself cites it (ref. 13) for exactly this. T4 tier is honest.

**2 — CONFIRM (moderate confidence on details).** Killiny et al. 2016 (Appl Environ Microbiol 82:6194; Harper ref. 10) showed labeled virions bind the *T. citricida* foregut and that recombinant CPm, p65 (HSP70h), and p61 compete the binding while p25 does not. Matches my recollection of the paper; I cannot re-veriphrase the individual competition numbers from memory, but the core claim (p25 fails to compete) is right.

**3 — CONFIRM with caveat.** The chitinase-sensitivity/carbohydrate-interface result is in Killiny 2016. Caveat: "transmission blocking was protease-insensitive" over-reads an in-vitro *binding* assay — the paper measured binding/transmission after virion treatments; the inference "carbohydrate interface on the tail" is the authors' interpretation, not a direct structural demonstration.

**4 — CONFIRM as labeled inference.** The inference is reasonable (free p25 non-competition argues the exposed major-coat surface is not the retention ligand), and it is correctly labeled as inference. Minor caveat: competition assays with free monomer do not fully exclude multivalent capsid-surface binding, but the direction of the conclusion stands.

## B2. CPm falsification

**5 — CONFIRM (recomputed).** My own parse of KC517488 (FS577) vs U16304 (T36 field): p27/CPm translations are both 240 aa and **240/240 identical**. Harper 2016 states the same ("the sequence of p27 is identical when comparing both isolates", p. 3557).

**6 — CONFIRM (recomputed).** Fisher exact, 16/90 vs 17/90: p = 1.0000.

**7 — CONFIRM.** Logically valid synthesis of claims 5+6 and correctly scoped (sequence variation ≠ involvement; Killiny says CPm is part of the binding complex).

**8 — CHALLENGE (minor, arithmetic only).** The percentage is right but the stated counts are internally inconsistent with it and with my alignment. My re-derivation (Needleman–Wunsch, KC517488 vs U16304): 303-column alignment, 299 identical, 1 gap → **98.7%**. The packet's "295/302" equals 97.7%, not 98.7%; 98.7% implies ~299/303 or 295/299 non-gap columns. Also "between FS577 and T36" needs disambiguation: vs the field isolate U16304 it is 98.7%; vs the lab references AY170468/EU937521 it is 99.7% (single difference). The 44.7% ungapped-artifact story reproduces (135/303 = 44.6%).

## B3. Baselines (recomputed)

**9 — confirm arithmetic (95/215 = 44.19%); FLAG on source.** Exact Clopper–Pearson 95% CI for 95/215: **37.4–51.1%**. I cannot verify Shilts 2020's denominators (no full text in repo); packet's T2 claim accepted as quoted.

**10 — CONFIRM.** Harper 2016 Fig. 1A: FS577-1-8 = 24.1% (95/394), verbatim from the PDF. 95% CI 20.0–28.6%.

**11 — CONFIRM arithmetic; FLAG source.** 2/127 = 1.575%; CI 0.19–5.57%. Source (Shilts 2020) unverifiable by me.

**12 — CONFIRM (recomputed).** 1/66: Clopper–Pearson 95% CI = **0.037–8.157%** — packet's 0.04–8.16% is exact. Note Harper 2016's own text gives a third T36 baseline, 0.5% (2/380); all three T36 estimates (0.5%, 1.5%, 0.6%) have mutually overlapping CIs.

**13 — CONFIRM.** Harper Fig. 1A: 0.6% (1/172); CI 0.01–3.20%.

**14 — CONFIRM, but the better citation is Harper 2016 itself**, which states T36 was graft-propagated under greenhouse conditions for >30 years and that "the absence of selection for transmission has allowed T36 to accumulate mutations" (p. 3558). Harper 2013 supports the framing but the direct statement is in the 2016 paper.

*Fold recomputation:* FS577 vs T36 clone: 24.1/0.581 = **41.5× raw, 40.2× on rounded rates** — "~40×" fine. T68-1 vs T36 field: (95/215)/(1/66) = **29.16×** — "29.2×" fine.

## B4. Harper 2016 swap series — verified against the PDF in this repo

**15–20 — ALL CONFIRM, exact.** Fig. 1: T36 clone 0.6% (1/172); +p65 1.9% (5/258); +p61 4.0% (11/273); +p65+p61 17.9% (35/196); p6–p18 20.6% (52/253); FS577 24.1% (95/394). Every denominator in the packet matches the figure verbatim.

**21 — CONFIRM the quote; FLAG the evidence strength.** "No significant difference (Tukey HSD P > 0.05) in virus replication and accumulation" is verbatim (p. 3557), for RT-qPCR and ELISA. But Fig. 2 shows **n = 2–4 source plants per construct** (p65 arm: 2 plants; p65-p61 arm: 2 plants), and the authors themselves call ELISA "non-linear… at best an approximation." "No significant difference" at n=2–4/group is a very weak titer-control claim — the packet quotes it at face value. This matters because it is the same confound class the packet (correctly) flags in claim 27 for the p33 work; the p61/p65 literature control is thinner than its phrase implies. (The packet's own design — titer on *every* source plant — is the right fix.)

**22 — CONFIRM.** Harper's text: aphid transmission "requires the concerted action of these two genes through an unknown mechanism, and further, that this requires compatible sequences in these two genes." The packet's ellipsized quote is faithful.

## B5. Synergy arithmetic

**23 — CONFIRM (recomputed).** Additive-null on the percentage scale: singles 1.938% and 4.029% over a 0.581% base → expected 5.39%; observed 17.86%; synergy ≈ **12.5 pp** (packet: 12.6 pp using rounded rates — fine); pair/WT = 17.86/24.11 = **74.1%** ✓. Statistical reality check the packet didn't run: observed pair vs the 5.3% additive null, binomial P(X≥35 | n=196, p=0.053) ≈ 3×10⁻¹⁰; pair vs pooled singles (16/531) Fisher p ≈ 1.2×10⁻¹⁰. Robust to the independence-scale choice too: Bliss/multiplicative expectation is 5.8%, barely different. The synergy is real and large.

**24 — CONFIRM with a scope caveat.** The table does support "both genes together": neither single approaches the pair (my Fisher: pair vs p61-alone p=9.9×10⁻⁷; vs p65-alone p=3×10⁻⁹). Two caveats: (a) "single-gene-first… falsified" is stronger than the data — a single gene is *insufficient for the recovery goal*, not null (p61 alone over control: 11/273 vs 1/172, p = 0.034; p65 alone vs control: p = 0.41); (b) the deeper weakness — see Attack order 1: Harper demonstrates the *gain-of-function* direction only. Nothing in B4 tests the reciprocal swap that the lead design actually is.

## B6. p33

**25 — CONFIRM (recomputed).** 16/90 vs 1/66: Fisher p = 0.00116 ✓, OR = 14.05 ✓. Caveat on baseline choice: the swap was on the T36-clone background, for which the packet's own claim 13 gives 1/172 — using that baseline gives p ≈ 3×10⁻⁴; conclusion unchanged either way. Also note 16/90 (17.8%) with T68 p33 sits well below T68-1 WT at 44% — i.e., p33 alone recovers only ~40% of the T68 phenotype, which is itself an argument *for* the packet's multi-gene framing.

**26 — FLAG-UNKNOWN.** Aknadibossian et al. 2025 postdates my training; I cannot confirm or deny the viroporin report. Prior literature (p33 membrane association/topology work from the Folimonova group) is at least directionally consistent.

**27 — CONFIRM.** No titer measurement in the p33 swap assays, as stated; the confound is real and is the same thinness noted for claim 21. The packet's planned per-source-plant titering addresses it.

**28 — CONFIRM (review level).** p33's multifunctionality (plasmodesmata, host-range/sour-orange via C-terminal TMD, superinfection exclusion, CmMLP2 interaction, p20/p18/CP complex) is standard review content (Folimonova; Dawson et al.). T4 tier appropriate.

## B7. K174R — the packet's weakest section (one real error, self-correcting)

I re-derived every sequence fact here from the repo's GenBank files.

**29 — FLAG-UNKNOWN (existence), CONFIRM (internal consistency).** I cannot confirm the 2026 abstract (PMID 42061270). But its content is exactly sequence-consistent with the repo's own data — see 30.

**30 — CHALLENGE (the packet is wrong here, against its own data).** EU937521 p33 = K174: confirmed. But **T68-1 (JQ965169) p33 = R174, not K174** — local context VCSSSFFF**R**AVSETATN, byte-identical to FS577 around the residue. The claim "T36 clones AND T68-1 both encode K174" is false for T68-1. Consequently the stated rationale — "no K↔R change can be carrying the effect" — is also false as written: my alignment shows FS577 vs EU937521 p33 differ at **exactly one residue, R174K**; complementing the T36 clone with FS577 p33 introduces precisely the K174→R174 change, and R174 is indeed "shared with T68-1" as the abstract says. The abstract and the repo sequences are mutually consistent; the packet's premise is the outlier.

**31 — CONFIRM (recomputed).** FS577 = R174, T30 = R174, yet 24.1% vs 1.57% (24.1/1.57 = 15.4×). R174 is not sufficient. This — not claim 30 — is the load-bearing argument, and it survives fully.

**32 — CONFIRM in substance, FLAG on method.** My census across all 130 p33 translations in the repo: **R174 in 121, K174 in 4** (EU937521, MH323441, MH323442, ON094625 — exactly the packet's four accessions) — **plus 5 sequences my naive position-174 read calls 'A'** (U16304, NC_001661, DQ272579, AY340974, OR192037). Those 5 are the 302-aa T36-reference-lineage proteins with a one-codon deletion upstream of 174; their homologous residue is R (their own position 173). So: the packet's 121/4 split reproduces, but its "of 125" silently drops the 5 shifted sequences rather than alignment-normalizing them (corrected homologous census: 126 R / 4 K / 130). This is precisely the numbering-offset trap attack order #3 asked reviewers to probe — and it cuts the *opposite* way here, not in the packet's favor. Conclusion unaffected; method note needed.

**33 — CONFIRM the conclusion; REJECT the stated route.** K174R-as-single-explanation is indeed dead, but on these grounds: (a) claim 31 (R174 neither sufficient nor explanatory — T30); (b) claim 32 (K174 restricted to 3 field isolates + the clone, none measured high transmitters); and (c) an argument the packet never makes and should: **Harper's own p65-p61 and p6–p18 hybrids retain the clone's K174 p33 and reach 17.9% and 20.6%** — K174 demonstrably does not block ~18–21% transmission, so residue 174 cannot be the dominant lever of the T36 phenotype. The abstract's single-residue *highlight* may still be true as a contributor within the triple complement; the gene-level conclusion ("coordinated function of P33, P61, P65") stands and is concordant with everything verified here.

## B8. Complementation

**34 — FLAG-UNKNOWN on the number; CONFIRM on the logic.** I cannot verify Harper et al. 2018's 35.7% mixed-infection figure (not in repo, and details beyond my recall). The two design consequences (single-genotype trees verified by sequencing; field claims conditional on mixed-infection management) are sound and appropriately conservative regardless of the exact value. Note also this creates an *internal* assay risk worth pre-registering: single-genotype verification of *source inoculum plants* is as important as of field trees, since complementation inside the source plant would contaminate the necessity test itself.

## B9. Other Closteroviridae

**35 — CONFIRM.** Stewart et al. 2010 (J Virol 84:12165; Harper ref. 18), LIYV CPm mutation abolishing whitefly transmission while sparing systemic movement — title and finding match the claim.

**36 — FLAG (likely misstated as written).** The chimera work is Chen et al. 2011 (PNAS 108:16777; Harper ref. 12) — LIYV/LCV CPm swaps with virion-retention readouts. But the packet's sentence reads backwards: a chimera with ~60% foreign sequence transmitting while one with *less* foreign sequence (~41%) fails is internally odd; the real paper's point (interface plastic but bounded) survives, but the percentages need re-checking against the source and restating.

**37 — FLAG-UNKNOWN.** GLRaV-3 foregut retention in mealybugs with CPm/HSP70h involvement is plausible from ampelovirus literature, but I cannot confirm the specific CPm/HSP70h/p55 complex claim or the absence of published mutation experiments.

**38 — CONFIRM (as a non-claim).** Correctly framed: a transmission-abolishing, assembly-sparing *point* mutation in a minor coat protein is an open target; LIYV's precedent (claim 35) is the closest, and even that was not validated as a routine point-mutation route in CTV.

## B10. Design, statistics, thresholds (recomputed)

**39 — CONFIRM (recomputed from CDS translations).** KC517488 vs AY170468: p61 = exactly the 9 listed substitutions (S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G); p65 = exactly the 2 listed (G227S, R496H); vs EU937521: 7 changes (6 p61 + R496H), as stated. Three flags: (a) notation direction — the listed letters are FS577→T36; on an FS577 backbone installing T36 alleles the actual edits are the *reverse* (N169S, T179I, …); minor but will mislead a construct order. (b) **Reference ambiguity is the real issue**: 4 of the 11 planned edits (p61 D324G, E382D, I455V; p65 G227S) distinguish FS577 from AY170468 but are positions where the experimentally validated clone EU937521 matches *FS577* — i.e., they are AY170468-private residues, not part of the genotype Harper tested. Decide before building whether the target allele set is the 7 (EU937521, validated) or the 11 (AY170468); I would default to the validated 7 and note that AY170468 vs EU937521 differ from *each other* at these positions. (c) Harper's own text is internally inconsistent on counts ("nine in p61 and seven in p65", p. 3556, vs "seven and five", p. 3558, p61/p65 respectively) — because Harper counted T36 residues absent from the strain consensus (incl. U16304), not pairwise FS577-vs-clone differences; the packet's derivation is the reproducible one.

**40 — CONFIRM.** Matches Harper's methods verbatim (24-h acquisition, batches of 10 aphids/plant, six-week-old *C. macrophylla*, ELISA at 8 weeks). Blinding and per-plant titering are the packet's additions — genuine improvements over the published protocol.

**41 — CONFIRM with a note.** Pre-registered thresholds and a pre-written null are good discipline. Sampling note: at n=250/arm a true 8–10% rate has a 95% CI of roughly ±3.5 pp, so PASS/UNCLEAR boundary calls near 5% will be noisy; the bands are coarse but honestly declared in advance, which is the point.

**42 — CHALLENGE (details), CONFIRM (thrust).** Recomputed upper 95% bounds for zero observed transmissions: 0/110 → **2.69% one-sided / 3.30% two-sided** (packet's 3.3% uses the two-sided convention); 0/200 → **1.49% one-sided / 1.83% two-sided** (packet's 1.5% uses the *one-sided* convention). The two sentence-mates mix conventions — pick one (one-sided is defensible for a certification bound, but say so). "~250/arm distinguishes ~20% from ~1%": recomputed power ≈ 1.000 at two-sided α=.05 (and ≈0.999 even for 20% vs 5%); CONFIRM.

**43 — CONFIRM approximately, but baseline-dependent and unstated.** My recomputation: a 5-pp contrast at n=90/arm has power ~14% *only at a mid-scale baseline* (15%→20%: 14.2%, n≈906/arm for 80% — close to the packet's 934, the delta is test/approximation choice). For the decision-relevant low-baseline contrasts the numbers are kinder: 1%→6% gives power 45% at n=90 and needs only ~211/arm for 80%. The claim is right for the baseline they presumably used, but doesn't say which. FWER: 1−0.95⁷ = **30.2%** ✓ (under independence).

**44 — FLAG-UNKNOWN.** Timeline is an estimate, not a verifiable claim; no external check exists. The gating structure (infection-at-titer before transmission arms) is sound.

**45 — Not a factual claim; no objection.**

## Attack orders, answered

**1 (Strongest claim — move both genes together, 11-residue set):** Three weaknesses. (a) **Directionality**: Harper 2016 demonstrates only gain-of-function (FS577 alleles into T36). The lead design is the reciprocal loss-of-function swap (T36 alleles into FS577). Symmetric epistasis is plausible — co-evolved-interface logic cuts both ways — but it is an inference from one direction, and 74% recovery at the pair means the pair is not even the full FS577 phenotype. (b) **Allele-set ambiguity** (see claim 39 flag b): 11 vs 7 depending on reference; 4 of the 11 are AY170468-private. The "set, not subset" design rests on the unvalidated assumption that the AY170468 extras are neutral alongside — testable, but currently free. (c) "Falsified by this table alone" is rhetorically above the evidence (singles are partially active, p61-alone p=0.034); "insufficient, therefore move both" is the defensible phrasing and the same operational conclusion.

**2 (p33 confound):** I found no published p33-swap source-titer measurement, and nothing contradicting the accumulation-vs-docking ambiguity. Two adjacent observations: Harper's own titer controls are thin (n=2–4 plants, claims-section flag on #21), so the *pair* literature shares a weaker form of the same confound; and the p33-swap ceiling (17.8% vs T68-1 WT 44%) plus the pair ceiling (17.9% vs 24.1%) suggest neither single mechanism fully captures the WT phenotype — consistent with the packet's reading and with testing p33 separately rather than assuming.

**3 (K174R — can abstract and sequences both be right?):** Yes — and the packet misread its own data. See claims 30–32: FS577-vs-EU937521 p33 differ at exactly R174K; T68-1 is R174 like FS577; the abstract's "K174R shared with T68-1" is sequence-plausible verbatim. Frame check: all four key proteins (EU937521, KC517488, JQ965169, AF260651) are single 303-aa CDS translations — no frame or offset issue; the 302-aa T36 references shift by one codon *upstream* of 174 but that does not rescue claim 30. What remains dead is single-residue *explanatoriness*, via T30 (R174, 1.57%) and via Harper's K174-retaining hybrids at ~18–21% — the packet should re-anchor claim 33 on those, not on a false T68-1 assertion.

**4 (Statistics discipline):** Fisher is the right primary test for these 2×2s; logistic regression adds little at these margins unless covariates (titer per source plant) enter — where a logistic or GLMM with plant-level random effects is *required*, because the real experimental unit is the plant/batch (10 aphids per plant, shared source plants), and all legacy counts are reported pooled. Sensitivity check on the headline contrast: pair (35/196) vs pooled singles is z=6.95 naive; at ICC ρ=0.2 with m=10 (design effect 2.8) it is still p≈3×10⁻⁵ — the p61/p65 synergy conclusion is robust to plausible clustering, but small-margin claims (e.g., p61-single vs control, nominal p=0.034) would not survive even modest ICC. For the planned trial: treat plant, not aphid-recipient-batch, as the unit of inference; randomize many source plants; pre-specify a cluster-aware analysis. Also fix the one-sided/two-sided inconsistency in claim 42 and state the baseline for every power number (claim 43).

## What this packet got wrong overall

1. **B7.30 is factually wrong against its own sequence files** (T68-1 = R174, not K174), and its stated anti-K174R rationale is inverted — the rescue (claims 31–32 plus Harper's K174-retaining hybrids) leads to the same conclusion but must be re-derived.
2. **Census silently swallowed a numbering artifact** (five 302-aa T36-lineage sequences; literal-174 = A vs homologous R) — the exact trap the packet asked reviewers to check. Counts: 130 parsed, packet reported 125.
3. **Two numeric slips**: mixed CI conventions in claim 42 (3.3% two-sided vs 1.5% one-sided in adjacent clauses); claim 8's "295/302" ≠ 98.7% (it is ~299/303).
4. **Claim 43's power figures are correct only for an unstated mid-scale baseline**; at the decision-relevant 1%→6% contrast the same n=90 gives ~45% power and 80% power needs ~211/arm, not 934.
5. **Claim 21's titer-control quote is thinner than quoted** (Tukey on n=2–4 plants/arm; non-linear ELISA) — the packet's own design fixes this, but the literature anchor should be flagged as weak.
6. **Claim 36's chimera percentages appear internally reversed** as written; restate against Chen 2011.
7. **The design's central move (reciprocal loss-of-function swap) is an inference, not a demonstrated symmetry**, and the lead construct's allele set (11 vs 7) depends on an unadjudicated reference choice between AY170468 and the validated clone EU937521.

Everything else recomputed exactly: all Harper Fig. 1 counts, both sets of CIs, folds (29.2×, ~40×), both Fisher p-values (0.00116; 1.0000), OR 14.05, synergy ≈12.5 pp and 74% recovery, FWER 30.2%, CPm 240/240 identity, p33 98.7% identity, and both substitution lists (9+2 vs AY170468; 7 vs EU937521).

## Confidence score — core decision (green-light the blinded, titer-controlled greenhouse necessity test of the paired p61+p65 allele swap)

**8/10.** The decision rests on directly verified counts (Harper Fig. 1, all six denominators), recomputed statistics that all check out, and sequence claims I independently re-derived with only one internal error that cuts against (not for) the packet's case. Two points withheld: the reciprocal-direction inference is untested (the test itself is exactly the right way to test it — cheap, pre-registered, fail-safe), and the 11-vs-7 allele-set ambiguity plus plant-level clustering must be resolved in the pre-registration before construct ordering. With those two items settled, I'd score 9.
