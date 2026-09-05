# Round 2 — Adversarial Rebuttal — google/gemini-3.1-pro-preview

*This reviewer is **Reviewer D** in the anonymised dossier. It was shown all six round-1 reviews and asked to concede, withdraw, rebut, and re-rank. Generated 2026-09-05 07:03 PDT via OpenRouter. Tokens: 18835 in / 4224 out. 33s.*

---

**1. CONCEDED — where another reviewer beat me.**

*   **Reviewer B (and A, E)** beat me entirely on the fatal flaw of the K174 residue hypothesis. I correctly noted that T30 and FS577 contradict it because both have R174 but drastically different transmission rates. However, I completely missed the far more devastating fact sitting in Section B5: *The T36 infectious clone already encodes K174.* If the T36 baseline clone (1.5% transmission) already has K174, and the T68-1 donor also has K174, the 16.3-point jump in the p33 swap experiment *cannot possibly* be driven by introducing K174. This makes K174R a mathematical impossibility as the causal mutation.
*   **Reviewer G** beat me on the statistical illegitimacy of the 5.2% "gap" between the p33 swap and the full 5′-end swap. I argued that a 23% ceiling left 21% of the wild-type transmission unexplained, pointing to the 3′-end. Reviewer G correctly pointed out that subtracting 17.8% (Shilts 2020) from 23% (Harper 2016) is a cross-study subtraction with overlapping confidence intervals and ~14% statistical power. The 5.2% gap does not exist biologically; it is a statistical phantom. 

**2. WITHDRAWN — my own claims that do not survive.**

*   *Quote:* "Variables in the 3′-end (e.g., CP, p20, p23) are actively confounding the team's narrow genetic focus."
*   *Why I am dropping it:* I am withdrawing my confident assertion that the 3′-end holds the remaining ~21% of the transmission determinant. As Reviewer G highlighted, the 23% figure from Harper 2016 is unread, unverified, lacks a denominator, and cannot be cleanly compared to Shilts 2020. Because the 23% anchor is statistically invalid, my calculation of a "missing 21.18%" that *must* reside in the 3′-end commits the same cross-study subtraction error I criticised the authors for. 

**3. REBUTTED — criticisms by others that are wrong.**

*   **Reviewer G (and A)**: Reviewer G rates the evidence that "CPm coding variation does not drive the gap" as "Strong", citing the direct functional test: "p = 1.00 for CPm addition". This is bad statistics. The comparison is 16/90 (17.8%) vs 17/90 (18.9%). A two-tailed Fisher's exact test yields *p* = 1.00, but the 95% confidence interval for this difference ranges from roughly –10 to +12 percentage points. Failing to reject the null with *N* = 90 gives essentially zero power to detect a small or moderate contribution from CPm. Treating *p* = 1.00 in a severely underpowered test as "strong" proof of absence is factually wrong. 
*   **Reviewer G**: Reviewer G's final verdict is "Proceed to construct design — but on a corrected and much narrower plan" (specifically, a reciprocal swap of T36's p33 into T68-1). I strongly rebut this framing. The mandate is to evaluate if the *p33+p61+p65 hypothesis* is sufficiently supported to proceed with the planned construct design. Reviewer G admits p61/p65 is unsupported and K174R is flatly contradicted. You cannot answer "Yes, proceed" by inventing a completely different experimental design that is not on the table. The correct verdict is "No."

**4. SURVIVING FINDINGS — ranked.**

1.  **The K174 hypothesis is mathematically impossible.** [CHECKABLE]. The swap introduces T68-1 p33 into the T36 clone. Both already encode K174. The observed transmission gain (1.5% to 17.8%) cannot be driven by a residue that did not change. (Raised by A, B, E).
2.  **The p61/p65 requirement relies on a non-existent statistical gap.** [CHECKABLE]. Attributing a 5.2% transmission gap to p61/p65 by subtracting Shilts 2020 (17.8%, *N*=90) from Harper 2016 (23%, *N*=unknown) is statistically invalid due to overlapping CIs, unverified denominators, and cross-study variance. (Raised by B, E, G).
3.  **The 16-fold baseline gap is a miscalculation.** [CHECKABLE]. T68-1 (95/215 = 44.19%) vs T36 (1/66 = 1.52%) is a ~29.2-fold difference. The 16-fold metric comes from FS577 (24.1%) vs T36, but FS577 lacks a denominator and cannot be evaluated. (Raised by A, B).
4.  **Unmeasured viral titer confounds the entire p33 phenotype.** [JUDGEMENT]. p33 is a viroporin altering membrane stability. A p33 swap may simply increase source-plant viral titer or tissue tropism rather than directly altering virion-aphid vector binding. (Raised by B, D, G).
5.  **No reciprocal swap has been performed.** [JUDGEMENT]. Moving T68-1 into T36 shows p33 is permissive, but failing to put T36 p33 into T68-1 leaves it entirely unknown if p33 is the actual bottleneck in the high-transmitting wild type. (Raised by G).

**5. VERDICT AFTER REBUTTAL.**

**DO NOT PROCEED.** 

The proposed multi-construct design must be halted immediately because its lead target (K174R) is logically invalidated by the baseline clone already possessing K174, and the p61/p65 inclusion relies on an unpowered, cross-study subtraction error; the team must instead pull the unread primary papers and run titer-matched controls on the existing p33 chimera.
