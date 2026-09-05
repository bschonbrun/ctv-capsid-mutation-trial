# Round 2 — Adversarial Rebuttal — deepseek/deepseek-v4-pro

*This reviewer is **Reviewer E** in the anonymised dossier. It was shown all six round-1 reviews and asked to concede, withdraw, rebut, and re-rank. Generated 2026-09-05 07:06 PDT via OpenRouter. Tokens: 16812 in / 8436 out. 180s.*

---

**1. CONCEDED — where another reviewer beat me.**  
Reviewer G (supported by Reviewer B) beat me on the full force of the K174 falsification. I noted that the T36 clone carries K174 and that the swap introduces a T68‑1 p33 that is also K174, but I underweighted the direct implication: because donor and recipient share the same residue at position 174, the 17.8 % transmission gain in the p33‑swap experiment **cannot** be due to K174R. My round‑1 review treated this as a confound complicating interpretation; Reviewers G and B correctly assert it is an outright contradiction of the K174R hypothesis. I also concede to Reviewer G’s concrete power analysis of the 5.2‑percentage‑point “gap” — with n ≈ 90/arm the power to distinguish 17.8 % from 23 % is about 14 %, requiring roughly 950 aphids/arm for adequate power. I merely noted the uncertainty qualitatively, so their numerical substantiation is stronger. Finally, I concede that the most decisive single experiment is the reciprocal swap (T36 p33 → T68‑1), not the triple‑swap pilot I originally proposed, because the reciprocal swap tests whether p33 is causal in the high‑transmitting background rather than only permissive in T36.

**2. WITHDRAWN — my own claims that do not survive.**  
- *“Fisher exact test two‑tailed p ≈ 0.0002”* for the p33‑swap vs. T36 baseline: This is wrong; the correct two‑tailed p from the 2×2 table (1/66 vs 16/90) is **0.0012** (as shown by Reviewers A and G). I withdraw my value entirely.  
- *“CPm amino acid sequence does not explain transmission differences — rating: Moderate”*: My rating hinged on the missing FS577 denominator. The direct functional comparison (p33 alone 17.8 % vs p33+CPm+5′‑UTR 18.9 %, p = 1.00) provides a control within the same study, showing no detectable CPm contribution. The evidence rating rises to **Strong** for the claim that CPm addition does not increase transmission above p33 alone. I withdraw the moderate rating.  
- *“The single most strengthening measurement would be the triple‑swap (p33+p61+p65) transmission rate”*: I withdraw this in favour of the reciprocal swap advocated by Reviewer G, which is a more parsimonious and falsification‑oriented test.

**3. REBUTTED — criticisms by others that are wrong.**  
Reviewer F claimed that overlapping 95 % CIs for T36 (0.04–7.7 %) and T30 (∼0.2–5.6 %) undermine the “stable low‑transmission phenotype” and therefore the brief’s 16‑fold difference is not robust. This misreads the brief. The comparison of interest is high‑transmitter T68‑1 (44.18 %) against low‑transmitters T36 and T30 (~1.5 %); no claim was made that T36 and T30 differ from each other. Their overlapping CIs are consistent with both being low, making the class stable. The criticism therefore fails.

**4. SURVIVING FINDINGS — ranked.**  
1. **K174 residue is not a causal determinant and the proposed K174R construct is contradicted by the provided data.**  
   The T36 infectious clone (EU937521) encodes K174 yet transmits at 1.5 %; the p33‑swap from T68‑1 (also K174) raises transmission to 17.8 %, so the gain cannot be attributed to residue 174. Additionally, T30 and FS577 both carry R174 but differ ~15‑fold. *CHECKABLE* (residue identities are explicit). Raised by B, D, E, G.

2. **The 5.2‑percentage‑point residual used to implicate p61/p65 is statistically indistinguishable from noise.**  
   Harper 2016’s 23 % has no known denominator and is cross‑study; the 95 % CI for the p33‑only swap (10.5–27.3 %) substantially overlaps any reasonable CI for 23 %. Power to detect a 5.2‑point difference at n ≈ 90/arm is ~14 %. *CHECKABLE* by arithmetic on the brief’s numbers. Raised by A, B, E, G.

3. **Viral titre (source‑plant burden) was not measured, so the observed transmission differences could reflect systemic fitness rather than aphid‑specific interactions.**  
   p33 is a viroporin; chimeras may alter accumulation, phloem loading, or virion yield. Absence of titre normalisation is a verifiable gap in the evidence. *JUDGEMENT about the confound, but the absence is CHECKABLE*. Raised by B, D, E, G.

4. **The reciprocal swap (T36 p33 → T68‑1) is missing.**  
   All current swaps move T68‑1 sequence into T36; without testing whether replacing p33 in the high‑transmitter background abolishes transmission, p33’s role is not established as causal rather than permissive. *JUDGEMENT on the most critical missing experiment, but its absence is a verifiable gap*. Raised by G, E.

5. **Fold‑change arithmetic is inconsistent: T68‑1 vs T36 is ≈44.19/1.52 ≈ 29‑fold, not 16‑fold; the 16‑fold figure belongs to FS577 vs T36.**  
   *CHECKABLE* by division. Raised by A, B.

6. **Key evidence (Harper 2016 full paper, Shilts 2026 beyond abstract) remains unread and second‑hand; the 23 % figure and the “coordinated function” statement are unverified.**  
   *CHECKABLE* (source status is explicit in the brief). Raised by A, B, D, E, G.

7. **Multiple‑construct screening is proposed without pre‑specification, multiplicity correction, or adequate power; current N (66–90) yields low power for differences ≤10 percentage points.**  
   *CHECKABLE* via standard power calculations. Raised by A, E, G.

**5. VERDICT AFTER REBUTTAL.**  
My round‑1 verdict has shifted from a flat “do not proceed to the full design as sketched” to a conditional **proceed with a restructured construct set that drops K174R from the lead, treats p61/p65 as exploratory screening, and crucially adds the reciprocal swap (T36 p33 → T68‑1) with adequate replication**; the p33 effect is real and actionable, but the original plan’s residue fixation and speculative multi‑gene commitment would squander the three‑week window.
