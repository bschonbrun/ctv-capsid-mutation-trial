# Peer Review — deepseek/deepseek-v4-pro

*Independent review of the CTV transmission brief. Generated 2026-09-05 06:50 PDT via OpenRouter. Tokens: 3238 in / 5994 out. 318s.*

---

(a) Logical soundness of the inference chain  
The overall logic moves from falsifying a simple CPm sequence hypothesis to implicating p33 and then speculatively extending to p61/p65. The chain is partially sound but contains leaps that outrun the available data.

**Step 1 (CPm falsification):** The argument is that FS577 and T36 field have identical CPm amino acid sequences (100% identity, 240/240 aa) yet show a ~16‑fold difference in transmission (24.1% vs 1.5%). Therefore, amino acid variation in CPm cannot be the sole determinant of transmission efficiency. This is logically valid as a falsification of a strictly sequence‑based hypothesis, provided the transmission difference is real and the identity is genuine. The conclusion that CPm alone does not explain the variance is reasonable.

**Step 2 (p33 swap):** If replacing p33 in a low‑transmitter background (T36) with the p33 from a high transmitter (T68-1) raises transmission from 1.5% to 17.8%, it is correct to infer that p33 is a causal contributor. However, the inference that “p33 explains most of the gap” overstates the case, because the gap to the high transmitter (44%) remains largely unexplained (17.8% vs. 44%). The chain implicitly treats p33 as the dominant factor, but it accounts for only a fraction of the total difference.

**Step 3 (need for p61/p65):** From the statement that a full 5′‑end swap (including p33, CPm, p61, p65, and the 5′‑UTR) reaches “23%”, the chain concludes that the extra 5.2 percentage points (23% minus 17.8%) prove additional contributions from p61/p65 or the UTR. This is a leap: the Harper 2016 data are not verified, denominators are unknown, the composition of the 5′‑end swap is not precisely defined in the brief (does it include p61, p65, both?), and 23% remains far below 44%. The step thus over‑interprets a modest, unconfirmed difference as evidence for specific gene involvement.

**Step 4 (K174 residue):** The observation that K174 correlates with highest transmission but the same residue in the T36 infectious clone (low transmission) and the R174 found in both a moderate (FS577) and a low (T30) transmitter leads logically to the conclusion that K174 is neither necessary nor sufficient. The chain correctly acknowledges this, but then still plans constructs around K174R, which is not supported by the data presented.

**Final inference (construct design for p33 K174R + p61/p65 variants):** The proposed constructs assume that p61 and p65 are critical, despite the evidence being indirect (an abstract and an under‑characterised 5′‑end swap). The chain therefore relies on weak confirmatory data and does not address alternative parsimonious explanations.

(b) Strength of evidence — rating of key claims  

- **Claim: CPm amino acid sequence does not explain transmission differences**  
  Rating: **Moderate**  
  Reasoning: The amino acid identity is strong, but the 24.1% for FS577 is reported without a denominator (no N). Even if N is assumed to be adequate, the comparison uses T36 field (1/66, 95% exact binomial CI 0.04%–7.7%), so the confidence interval for the 1.5% baseline is wide. While a Fisher test with a plausible N for FS577 would likely be significant, the absence of the denominator prevents definitive statistical confirmation. Additionally, identical protein sequence does not rule out differences in expression level, RNA secondary structure, or post‑translational modifications; thus the falsification applies narrowly to amino acid variation, not necessarily to CPm’s functional role.

- **Claim: p33 is a major transmission determinant (swap gives 17.8% transmission)**  
  Rating: **Strong**  
  Reasoning: Direct experimental manipulation (chimeric virus) and raw counts (16/90 vs. 1/66) allow a precise comparison. Exact binomial CIs: baseline 1/66 (0.04%–7.73%), p33‑swap 16/90 (10.7%–27.3%). These intervals do not overlap (lower bound 10.7% > upper bound 7.73%), confirming a statistically robust effect (Fisher exact test two‑tailed p ≈ 0.0002). The evidence firmly shows that p33 increases transmissibility from a very low baseline.

- **Claim: p33 alone is insufficient and p61/p65 are required for higher transmission**  
  Rating: **Weak**  
  Reasoning: The primary evidence—a 5′‑end swap reaching “23%”—comes from a paywalled, unverified source (Harper 2016) with unknown denominator and unknown composition (does the 5′‑end definitely include p61 and p65? The brief says “p65?, p61?”). The 5.2% difference relative to the p33‑only swap is small; if Harper’s N is, for example, 50, the 95% CI around 23% would be ~13%–36%, which fully overlaps with the p33‑swap CI (10.7%–27.3%), making the difference non‑significant. The Shilts 2026 abstract (paywalled, unseen) only states that P33, P61, and P65 are important, not that they are sufficient. No construct swapping precisely p61 and p65 alone or in combination with p33 has been tested. Therefore, the claim that p61/p65 are specifically required is unsupported by the supplied data.

- **Claim: K174 (or K174R) is a candidate key residue in p33**  
  Rating: **Weak**  
  Reasoning: K174 appears in the highest transmitter (T68-1, 44.18%) but also in a T36 infectious clone that presumably transits at the low baseline (the same clone background used in the swap experiments gave 1.5%). FS577 with R174 transmits at 24.1%, while T30 with the same R174 transmits at only 1.57% (2/127, CI 0.36%–5.5%, practically identical to T36). Thus the residue correlates poorly, and the brief itself notes that other factors must differ between FS577 and T30. The evidence does not indicate that K174 is a determinant; it is merely an associated sequence feature.

(c) Key confounds or alternative explanations the team has missed  

1. **Other viral genes outside the 5′ region:** CTV encodes ~12 ORFs, yet the investigation has focused solely on the 5′‑proximal genes (p33, p65, p61, CPm, and the UTR). Major coat protein p25, RNA silencing suppressors (p20, p23), and other proteins (p13, p18, etc.) could be important for aphid transmission or virion stability. No whole‑genome comparison between high and low transmitters has been presented, and chimeric constructs have not substituted regions beyond the 5′‑end. The failure of any chimera to exceed 23% strongly suggests that critical determinants lie elsewhere.

2. **Confound from the T36 field isolate vs. infectious clone:** The baseline (1.5%) is from T36 field isolate U16304, which contains a frameshift artifact (A174) in p33. However, the chimeric virus experiments use the T36 infectious clone (EU937521) that carries a functional p33 with K174. The transmission rate of this clone without swaps is reported as 1/66 (1.5%), but it is not certain whether the clone’s p33 is fully active or whether other differences between the clone and field isolate affect baseline transmission. Furthermore, the clone’s p33 already contains K174, which is the residue suggested to be important—yet it does not confer high transmission. This undermines the importance of K174 and complicates interpretation of the swap experiments (the “gain” from introducing T68-1 p33 could be due to differences other than residue 174).

3. **Unverified Harper 2016 data:** The 23% figure is a secondary citation with no denominator. If the sample size is small, the true transmission of that chimera could be much lower or much higher, and the 5.2% gap could be noise. This leaves the contribution of p61, p65, or the UTR entirely unquantified.

4. **Possible cis‑acting RNA elements:** The brief considers the 5′‑UTR as a potential contributor, but the discussion focuses on proteins. RNA sequences in the 5′‑UTR or even elsewhere could be essential for packaging or aphid acquisition. The chimeric swaps often include both the ORF and flanking non‑coding regions; the observed effects could therefore be due to RNA rather than protein.

5. **No correction for multiple comparisons and power issues:** The plan to test multiple constructs (p33 K174R, p61, p65 combinations) implies many pairwise comparisons. The sample sizes of earlier experiments (N = 66 to 215) provide only limited power to detect moderate differences (e.g., a 10% absolute increase). The team has not discussed pre‑planned power analyses or adjustments for multiplicity, raising the risk of false positives and inefficient use of resources.

6. **The T30 paradox not resolved:** T30 and FS577 both have R174, yet transmission differs ~15‑fold. The team acknowledges this but does not investigate the genetic basis of this difference. Without understanding why T30 is so low despite having the same residue at position 174, any focus on K174 is premature. The causes of T30’s poor transmission could include mutations in other genes that are equally relevant to the overall mechanism.

(d) Single measurement that would most strengthen (or break) the case  

**The single most decisive measurement is the transmission rate of a chimeric T36 virus carrying precisely the p33, p61, and p65 ORFs (and nothing else) from the high‑transmitter T68-1, measured with a sample size of ≥150 aphids per group, alongside a T68-1 positive control and the T36 wild‑type control.**  

This experiment directly tests the hypothesis that the combination of these three genes is sufficient to recapitulate high transmission. If the triple‑swap virus yields a transmission rate close to T68-1’s 44% (e.g., >35%, with a 95% CI excluding the p33‑only value), the case for p33+p61+p65 as the core determinants would be strongly supported. Conversely, if transmission remains at or below ~20%, the hypothesis is decisively weakened, and the search would need to expand to other genomic regions. Knowing this result before committing to a panel of site‑directed mutants (e.g., K174R) would prevent wasted effort on marginally relevant constructs.

(e) Final verdict: proceed to construct design now, or not?  

**Do not proceed to the full construct design as sketched (p33 K174R + variants of p61, p65).** The evidence that p61 and p65 are specifically required is far too weak—it rests on an unverified secondary source and an abstract, while the p33‑only swap already leaves a large transmission gap. Furthermore, the focus on K174 is not justified given the contradictory sequence data and the low transmission of the T36 clone that already possesses K174.  

Instead, the team should first **carry out a focused pilot experiment with a minimal set of chimeras** (at least p33 alone, p33+p61, p33+p65, and the full triple p33+p61+p65, all from T68-1 into T36) using robust sample sizes (≥150 aphids per construct) and confirm the transmission levels with binomial confidence intervals. Only if the triple combination shows a sizable, statistically significant transmission increase over the p33‑only construct (e.g., ≥25 percentage points) should the team proceed to design additional constructs for fine‑mapping and residue testing. With the current three‑week deadline, a pilot of this scale is feasible and would provide the necessary deciding data.
