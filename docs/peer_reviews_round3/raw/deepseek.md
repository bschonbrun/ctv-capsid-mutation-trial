# — CONFIRM — CTV virions are bipolar; CPm coats the 5′ terminal ~630 nt and p65/p61 are involved in assembly. This matches Satyanarayana et al. 2004 and general closterovirus biology.

2 — CONFIRM — Killiny et al. 2016 supports binding of labeled CTV to the cibarium and competition by p27/p61/p65, not p25.

3 — CHALLENGE — Protease-insensitive/chitinase-sensitive binding implicates chitin in the aphid cuticle/foregut, not necessarily “a carbohydrate interface on the virion tail.” The virion proteins likely bind to a carbohydrate receptor; the wording over-infers.

4 — CONFIRM — Failure of free p25 to compete is evidence against the major coat surface being the retention interface, with the usual caveat that free-protein competition is not identical to intact-virion binding.

5 — CONFIRM — CPm is known to be highly conserved among CTV isolates; 240/240 identity between FS577 and T36 is plausible and not contradicted, though not independently recomputable from the packet.

6 — CONFIRM — 16/90 vs 17/90 gives Fisher exact p ≈ 1.00; the arithmetic is correct.

7 — CONFIRM — If CPm is sequence-identical, CPm sequence variation cannot explain the transmission difference; this does not conflict with CPm being functionally necessary.

8 — CONFIRM — 295/302 = 98.7%; the 44.7% ungapped estimate being an indel artifact is plausible. Exact alignment not independently recomputable, but no contradiction.

9 — CONFIRM — 95/215 = 44.19%, not 44.18% after standard rounding; trivial rounding issue.

10 — CONFIRM — 95/394 = 24.11%.

11 — CONFIRM — 2/127 = 1.57%.

12 — CONFIRM — Exact Clopper–Pearson 95% CI for 1/66 is approximately 0.04–8.16%; packet is correct.

13 — CONFIRM — 1/172 = 0.58%.

14 — CONFIRM — The relaxed-selection explanation for T36’s low transmission is plausible and widely cited; no contradiction known.

15 — CONFIRM — 1/172 = 0.6%.

16 — CONFIRM — 5/258 = 1.9%.

17 — CONFIRM — 11/273 = 4.0%.

18 — CONFIRM — 35/196 = 17.9%.

19 — CONFIRM — 52/253 = 20.6%.

20 — CONFIRM — 95/394 = 24.1%.

21 — CONFIRM — Harper et al. 2016 Fig. 2 supports no significant replication/accumulation difference; packet matches.

22 — CONFIRM — Harper’s conclusion emphasizes concerted p61/p65 action; packet wording is consistent.

23 — CONFIRM — Arithmetic: (1.9−0.6)+(4.0−0.6) = +4.7 pp; additive expectation 5.3%; observed 17.9%; synergy 12.6 pp; 17.9/24.1 = 74.3%.

24 — CHALLENGE — Harper’s table is a gain-of-function series on the low-transmitting T36 background. It does not directly test reciprocal loss-of-function on FS577. Therefore “single-gene-first is falsified by this table alone” overstates the evidence, even though the pair is strongly supported.

25 — CONFIRM — Recomputing 16/90 vs 1/66: OR = (16×65)/(1×74) = 14.05; two-sided Fisher exact p ≈ 0.0012. Packet arithmetic is correct.

26 — FLAG-UNKNOWN — Aknadibossian et al. 2025† is post-cutoff; I cannot confirm the viroporin claim from training data.

27 — FLAG-UNKNOWN — I cannot independently confirm the absence of source-plant titer measurements in the cited p33 swap assays without the full Shilts et al. 2020 methods. This should be verified; the confound is important.

28 — CONFIRM — p33 multifunctionality is supported by review-level literature: movement/plasmodesmata localization, host-range effects, superinfection exclusion, and interactions with p20/p18/CP.

29 — FLAG-UNKNOWN — The 2026† abstract is post-cutoff; I cannot confirm its existence or content.

30 — FLAG-UNKNOWN — This is a critical sequence assertion, and it directly conflicts with the abstract’s reported “shared with T68-1” K174R claim. I cannot independently verify EU937521/T68-1 residue 174 from the packet; a numbering or accession offset remains possible.

31 — CONFIRM — If FS577 and T30 both encode R174, then R174 cannot be sufficient: 24.1/1.57 ≈ 15.3×. This logic holds conditional on the sequence premise.

32 — FLAG-UNKNOWN — The 125-sequence census cannot be independently verified from the packet.

33 — CHALLENGE — The gene-level result may survive, but “K174R as a single-residue explanation is dead on sequence grounds” is premature until the direct conflict between the packet’s K174 assignment for T68-1 and the abstract’s “shared with T68-1” is resolved, including possible numbering/frame offsets.

34 — CONFIRM — Mixed-infection complementation is known; the consequences—single-genotype trial trees and sequencing—are appropriate.

35 — CONFIRM — LIYV CPm frameshift abolishing whitefly transmission while preserving systemic movement is consistent with published closterovirus literature.

36 — FLAG-UNKNOWN — The exact LIYV/LCV chimera thresholds (~60% vs ~41% foreign sequence) are T4 and not independently verifiable.

37 — CONFIRM — GLRaV-3 mealybug foregut retention via a CPm/HSP70h/p55 complex is plausible and consistent with known closterovirus retention architecture.

38 — CONFIRM — The packet does not claim a point-mutation precedent; this is internally consistent.

39 — CHALLENGE — There is an accession inconsistency: the listed 11 p61/p65 substitutions are versus AY170468, but the parenthetical says the same target is 7 changes against EU937521. If the actual construct uses EU937521, the listed 11 changes do not unambiguously define the construct.

40 — CONFIRM — The protocol matches the published Harper design and includes blinding, titer controls, and ELISA/RT-qPCR.

41 — CONFIRM — Pre-registered PASS/UNCLEAR/FAIL thresholds are internally clear.

42 — CHALLENGE — The upper-bound calculations mix definitions: 0/110 gives 2.69% one-sided 95% or 3.30% two-sided 95%; 0/200 gives 1.49% one-sided 95% or 1.83% two-sided 95%. The packet’s “3.3%” and “1.5%” use different confidence definitions. The 250/arm statement for 20% vs 1% has >99% power, so that part is fine.

43 — CHALLENGE — FWER for seven uncorrected α=0.05 tests: 1 − 0.95⁷ = 30.2%, correct. But the power/sample-size claim “5-pp effect” is under-specified: 14% power at n=90/arm and ≈934/arm for 80% matches a 5-pp difference near 15–20%, not a general 5-pp effect.

44 — CONFIRM — Timeline is plausible as an internal estimate.

45 — CONFIRM — This is framing, not a factual claim.

## What this packet got wrong overall

The packet’s arithmetic is mostly sound, but it has several systematic weaknesses.

First, the strongest design claim—that the p61+p65 pair must move together—is overextended. Harper et al. 2016 is a gain-of-function series on a low-transmitting T36 background; it does not directly show that reciprocal single-gene substitutions on FS577 would fail. The pair is a good candidate, but “single-gene-first designs are falsified by this table alone” is too strong.

Second, the K174R rebuttal depends on sequence claims that are both unverifiable in the packet and in direct tension with the abstract it cites. The packet may be right, but it has not fully ruled out numbering or accession offsets.

Third, there is an accession ambiguity in the lead construct: 11 substitutions versus AY170468 but only 7 versus EU937521. The construct’s actual change set must be defined against a single donor accession.

Fourth, the sample-size section mixes one-sided and two-sided upper bounds and leaves the “5-pp effect” baseline unspecified.

Finally, the chitinase/protease result is interpreted as pointing to a carbohydrate interface on the virion tail; more likely it points to chitin on the aphid cuticle.

Confidence score for the core decision: **7/10**