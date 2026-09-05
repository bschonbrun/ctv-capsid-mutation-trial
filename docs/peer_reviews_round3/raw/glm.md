# Reviewer Response — CTV Biocontainment Packet (Round 3)

Reviewer: Claude (independent panel). I have recomputed all statistics from the raw counts given. Where a claim rests on a paper I cannot independently verify (including all 2025–2026† material), I say so rather than confirming or denying existence.

## Per-claim verdicts

**B1**

- **#1 — CONFIRM** — The bipolar architecture (p25 body, CPm tail over the 5′-terminal ~630 nt, assembly initiated at the 5′ end, restricted by HSP70h/p61) matches Satyanarayana et al. (2004) and the closterovirus literature. Minor caution: reported tail length has ranged ~600–700 nt across studies.
- **#2 — FLAG-UNKNOWN** — Consistent with what I recall of the Killiny group's foregut-binding work (CTV virions retained in the *T. citricida* cibarium/foregut, CPm-associated), but I cannot verify the specific competition-pattern details (p27/p61/p65 compete, p25 does not) from memory. No inconsistency with anything I know.
- **#3 — FLAG-UNKNOWN** — Same source; the protease-insensitive/chitinase-sensitive detail is exactly the kind of specific result I would need the full text for. Internal plausibility is good (glycan-mediated binding).
- **#4 — CHALLENGE (as stated)** — The inference is reasonable but stated too strongly. Free p25 failing to compete could reflect folding, oligomerization state, or avidity of the recombinant protein rather than absence of a p25 interface. It lowers the prior on p25 as the determinant; it doesn't exclude it. Also note p25 has known serology/structure literature — a surface change on p25 remains testable.

**B2**

- **#5 — FLAG-UNKNOWN** — Your T1 computation; I cannot independently re-align KC517488 vs U16304 from memory. Plausible (FS577 is a T68-genotype isolate and T36/T68 CPm identity is consistent with what I recall), but this is a load-bearing number — keep the alignment in the record.
- **#6 — CONFIRM** — 16/90 vs 17/90, Fisher exact p = 1.00 (both 17.8% vs 18.9%; p ≈ 0.999–1.0). Correct and correctly interpreted as a null result for adding CPm+5′UTR *on top of a p33 swap*.
- **#7 — CONFIRM** — This is the right distinction and the packet deserves credit for drawing it explicitly. CPm sequence variation not explanatory ≠ CPm not involved.
- **#8 — CHALLENGE (arithmetic)** — 295/302 = **97.7%**, not 98.7% (98.7% would be ~298/302). Trivial, but it's a T1 claim and it's wrong as written. The correction of the 44.7% ungapped artifact is itself sound methodology.

**B3**

- **#9 — CONFIRM** — 95/215 = 44.19%.
- **#10 — CONFIRM** — 95/394 = 24.11%.
- **#11 — CONFIRM** — 2/127 = 1.57%.
- **#12 — CONFIRM (CI)** — 1/66 = 1.52%; Clopper–Pearson 95% CI ≈ 0.04%–8.16%. I reproduce this. Note the upper bound is over 5× the point estimate — this denominator is very small.
- **#13 — CONFIRM** — 1/172 = 0.58% ≈ 0.6%.
- **#14 — FLAG-UNKNOWN** — Graft-only propagation relaxing vector-phase selection is a coherent hypothesis attributed to Harper 2013; I cannot verify, and it remains a plausible narrative rather than a demonstrated mechanism.

**Recomputation requested (B3):**
- 1/66: 95% CI ≈ **0.04–8.16%** (confirmed)
- 2/127: 95% CI ≈ **0.19–5.6%** (Clopper–Pearson)
- 95/215: 95% CI ≈ **37.7–50.8%** — the 44% estimate is itself imprecise at this n.
- Fold-differences: 24.1/0.6 = **40.2×** → "~40×" confirmed. 44.18/1.5 (where 1.5% = 1/66 = 1.515%) = **29.2×** — confirmed, but only because 1/66 was used as the denominator; against the "1.5%" rounded figure it's 29.5×. Fine either way, but state which T36 number is the denominator (field vs clone matters: 44.18/0.58 = 75×).

**B4**

- **#15–#20 — CONFIRM (arithmetic)** — 1/172=0.58%, 5/258=1.94%, 11/273=4.03%, 35/196=17.86%, 52/253=20.55%, 95/394=24.11%. All match stated values. Underlying counts are T2 and I cannot verify against the paper, but they are internally consistent and the gradient is coherent.
- **#21 — FLAG-UNKNOWN** — Consistent with Harper's design intent and with the swap series making interpretive sense, but "no significant difference" claims depend on test choice and multiplicity; I can't check the figure.
- **#22 — FLAG-UNKNOWN** — Quoted T2; cannot verify wording, but the quoted conclusion matches the data pattern in B4.

**B5**

- **#23 — CONFIRM (arithmetic) / CHALLENGE (framing)** — (1.9−0.6)+(4.0−0.6) = 4.7 pp; 0.6+4.7 = 5.3%; pair = 17.9% = +17.3 pp; excess = 12.6 pp; 17.9/24.1 = 74.2%. All correct. **But:** additivity of percentage points is a modeling choice; for proportions near 0/1, additivity on the log-odds or complementary-log scale is more defensible, and the single-gene effects (5/258, 11/273) are themselves noisy — 5/258 vs 1/172 gives Fisher p ≈ 0.23, so the "+1.3 pp" baseline increment is not even statistically resolved. The 12.6 pp "synergy" is real in magnitude but its precision is overstated.
- **#24 — CHALLENGE** — This is the packet's strongest claim and it overreaches. The table shows the pair outperforms singles *on the T36 clone backbone*; it does not falsify single-gene or minimal-subset designs in general — indeed **claim 25 (p33 alone: 1.5%→17.8%) is a direct counterexample within your own packet** to "single-gene-first designs are falsified." Reword to: "for the p61/p65 pair specifically, on this backbone, alleles must move together." Keep the design conclusion (move both) — reject the universal claim.

**B6**

- **#25 — CONFIRM (approximately)** — My recomputation: 16/90 = 17.8% vs 1/66 = 1.5%; Fisher exact p ≈ 0.0012–0.0016 (borderline of your 0.0012; consistent); OR = (16·65)/(74·1) = **14.05**, matches ~14.1. Caveat: the 1/66 control is tiny; CI on the OR is wide.
- **#26 — FLAG-UNKNOWN** — 2025† post-dates me; the viroporin characterization (Class I, TEVC currents, third plant-virus viroporin) is plausible given p33's known membrane/TMD biology but unverifiable by me. Do not treat my confirmation as independent.
- **#27 — CONFIRM (as reading)** — If no source-plant titer was measured in the p33 swap assays, the confound is real and, in my judgment, **underweighted in the packet's framing**. A replication/accumulation effect acting on source-plant viral load would produce exactly the observed pattern without any vector-interaction mechanism. This is the single most important open confound in B6.
- **#28 — CONFIRM** — p33 multifunctionality (plasmodesmatal localization, host range via C-terminal TMD, superinfection exclusion, CmMLP2 interaction) is well supported by the CTV literature (e.g., work from the Folimonova/Dawson groups). Note: a protein this multifunctional is a risky engineering handle.

**B7**

- **#29 — FLAG-UNKNOWN** — Abstract-only 2026† source, paywalled; I cannot confirm the triple-deletion/50% result or the K174R statement. The packet correctly self-labels T3.
- **#30 — FLAG-UNKNOWN** — Your T1 alignment says EU937521 and T68-1 both encode K174. If accurate, it directly contradicts the abstract. I cannot re-derive the alignment. **Critical check before killing this:** verify numbering convention — mature-protein vs polyprotein numbering, or an AUG-internal-initiation offset between accessions, could make "K174R" in the paper's frame correspond to a different position in your frame. You asked us to check U16304's frame; I cannot, but this is exactly where both could be right.
- **#31 — CONFIRM (logic)** — If FS577 and T30 both encode R174 at 24.1% vs 1.57%, R174 alone is clearly insufficient — the FS577/T30 contrast is a strong internal control regardless of the abstract question.
- **#32 — CONFIRM (arithmetic)** — 121/125 = 96.8%, 4/125 = 3.2%. Correct. Census composition unverifiable by me.
- **#33 — CONFIRM (with one softening)** — The sequence case against K174R as a single-residue determinant is sound *given your alignments are right*. But because #29–#30 contain a potential unresolved numbering contradiction, keep this as "dead pending a numbering-offset check," not fully closed. The surviving gene-level claim (p33+p61+p65 coordination) is the robust part.

**B8**

- **#34 — FLAG-UNKNOWN** — The 0.5% → 35.7% mixed-infection complementation figure is attributed T2 (Harper 2018) but I cannot verify it. If accurate, the design consequence (single-genotype trees, sequence-verified) is mandatory and correctly drawn. I flag only that complementation also threatens *containment logic itself* (see overall section).

**B9**

- **#35 — FLAG-UNKNOWN** — LIYV CPm frameshift abolishing whitefly transmission while preserving assembly/movement is consistent with the closterovirus literature (Chen et al. and Stewart et al. lines of work), but I can't verify the specific citation.
- **#36 — FLAG-UNKNOWN** — T4; unverifiable. The "plastic but bounded" framing is attractive but rests on a tier-4 chimera quantification.
- **#37 — FLAG-UNKNOWN** — GLRaV-3 mealybug foregut retention via CPm/HSP70h complex is plausible (the grapevine closterovirus literature supports foregut retention); "no mutation experiments" is a negative claim I cannot audit.
- **#38 — CONFIRM (as a non-claim)** — Correctly framed; I know of no demonstrated point mutation in a minor coat protein that abolishes transmission while sparing assembly in any virus. This is genuinely open.

**B10**

- **#39 — FLAG-UNKNOWN** — T1 derivation; I cannot re-derive the 11 substitutions. Internal inconsistency note: 9+2 = 11 for the stated backbone but 7 against EU937521 — worth a one-line explanation in the record (which backbone is the design reference?).
- **#40 — CONFIRM (as protocol match)** — Consistent with the Harper protocol as described elsewhere in the packet; the addition of per-plant titer measurement addresses the #27 confound and is the single best design improvement in the packet.
- **#41 — CONFIRM** — Reasonable pre-registration; thresholds are disjoint and decision-relevant.
- **#42 — CHALLENGE (one number) / CONFIRM (rest)** — Recomputation: 0/110 exact upper 95% bound = −ln(0.05)/110 = **2.72%** (rule of three: 3/110 = 2.73%). Your stated **3.3% is wrong** — 3.3% corresponds to n≈91. 0/200 → **1.5%** confirmed. ~250/arm distinguishing 20% from 1%: yes, trivially — power exceeds 99% for that contrast; the harder zone is 5% vs 10%, where ~430/arm is needed for 80% power.
- **#43 — CHALLENGE (under-specification)** — Family-wise: 1−0.95⁷ = **30.2%** — confirmed. The n=90 power ≈ 14% and n≈934/arm figures are baseline-dependent and the packet never states the baseline: for 15%→20%, required n/arm ≈ 900 (consistent with 934); for 5%→10%, ≈430; for 1.5%→6.5%, much less. State the contrast explicitly or the power claim is unfalsifiable. The cap at 3–4 primary constructs with Bonferroni is sound.
- **#44 — FLAG-UNKNOWN** — Timeline is yours; nothing to verify, but 20 weeks assumes zero construct-rebuild iteration, which the gating condition implicitly anticipates.
- **#45 — CONFIRM (framing)** — Fine as framing; no factual content to dispute.

## What this packet got wrong overall

1. **One arithmetic error:** #8 (295/302 = 97.7%, not 98.7%) and #42 (0/110 upper bound is 2.7%, not 3.3%). Both trivial, but both are T1 claims presented as recomputed-and-checked.
2. **Overreach in the strongest claim (#24):** "single-gene-first designs are falsified by this table alone" is contradicted by the p33 result in your own packet (#25). The table falsifies *single-gene p61/p65 designs on the T36 backbone*; nothing more.
3. **Percentage-point additivity (#23):** the synergy computation is arithmetically right but assumes additivity on the probability scale, and its components (especially the 1/172 baseline and 5/258 single-gene point) carry enough noise that the "12.6 pp of synergy" precision is illusory. Report it with CIs.
4. **Unresolved K174R numbering risk (#29–30):** the packet asserts a contradiction with a 2026 abstract while acknowledging it has read only the abstract. A numbering/frame offset is a live reconciliation and should be closed (or explicitly ruled out with shown alignments) before calling the residue "dead" in a decision meeting.
5. **The complementation result cuts against the product concept, and the packet underplays it:** if mixed infections rescue T36 transmission to 35.7% (#34), then a transmission-disabled construct deployed anywhere near wild-type CTV is one aphid away from rescue by complementation. This doesn't affect the *greenhouse necessity test* under review, but it should headline the risk register for any eventual deployment claim.
6. **Power claims without stated contrasts (#43):** 14%/934-arm numbers are meaningless without the baseline and effect contrast; fix before the meeting.
7. **Tier hygiene is good overall** — the packet is unusually disciplined about sequence-vs-function and T3/T4 labeling. Its main residual weakness is treating its own T1 computations as self-verifying; two of them (above) contained errors.

## Answers to the attack orders (brief)

- **Attack 1 (#24):** weakness found — internal counterexample (p33) and scope restriction needed; the design conclusion (move both genes) still stands.
- **Attack 2 (#27):** no published p33-swap titer measurement known to me; the confound stands as unknown and is correctly central. Your titer-on-every-source-plant design (#40) is the right mitigation.
- **Attack 3 (K174R):** yes, both can be right via numbering offset between accessions (polyprotein vs mature numbering, internal-start annotation). I cannot check U16304's frame myself; do it with shown alignments before closing.
- **Attack 4:** recomputed above; change Fisher to nothing (it's fine for 2×2s at these counts) but pre-specify the test and address clustering (aphids per plant, plant as experimental unit) — with 10 aphids/plant the plant, not the aphid, is the unit, and the papers' unit structure is undocumented, as you note.

## Confidence score for the core decision

**Green-light a blinded, titer-controlled greenhouse necessity test of the paired p61+p65 allele swap:**

**7 / 10.**

The design is well-powered for its stated contrast, correctly blinded, titer-controlled (closing the #27 confound), capped in multiplicity, and justified by a coherent and internally consistent published data table whose arithmetic I reproduced. Points off: the underlying construct-level counts are T2 and not independently verified by me; the p61/p65 synergy precision is overstated; the K174R contradiction is asserted from an abstract-only read; and the complementation result (#34) means even a successful containment result is conditional on single-genotype management in any future context. None of these blocks a greenhouse, no-release necessity test.