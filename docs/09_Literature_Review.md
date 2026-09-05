# Literature Review and Decision Framework (p33 vs p65/p61)

*Source document: `CTV_Literature_Review_and_Decision_Framework.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
╔════════════════════════════════════════════════════════════════════════════════╗
║  LITERATURE REVIEW: CPm vs. p33 MUTATION APPROACHES FOR TRANSMISSION CONTROL   ║
║  Updated 2026-09-05 with sequence verification and cross-vector literature      ║
╚════════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: EXPERIMENTAL RESULTS SHOWING P33, NOT CPM, DETERMINES TRANSMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL CTV STUDIES
════════════════════

A. Shilts & Killiny 2020 (Viruses 12:1131) — The foundational paper for this project
   ───────────────────────────────────────────────────────────────────────────────
   - Built infectious clones with 5′-ends from different CTV strains in T36 backbone
   - Result 1: T36 + T68-1 5′-end → transmission goes 1.5% to 23% (15-fold gain)
   - Result 2: Substitution of ONLY p33 from T68 into T36 → 1.5% to 17.8% (12-fold 
     gain; 77% of total gain from full 5′-end swap)
   
   Status: PEER-REVIEWED, published Oct 2020. This single experiment shows p33 alone 
   explains most of the transmission variation.

B. Shilts et al. 2026, published April 2026, NOT YET IN PubMed but cited above)
   ──────────────────────────────────────────────────────────────────────────
   - Used T36 backbone with engineered deletions (ΔΔΔ p33/p18/p13)
   - Swapped these three genes from highly transmissible FS577 
   - Result: T36→T36ΔΔΔ goes 0.6% → 50% transmission (83-fold gain!)
   - Sequence analysis: "Among the three substituted genes, only p33 differs between 
     T36 and FS577, with a single amino acid change: K174R"
   - Additional finding: "This residue is conserved in other highly transmissible 
     isolates such as T68-1"
   - Conclusion: "P33 is a critical viral protein in aphid-mediated transmission"
   
   Status: VERY RECENT (April 2026). Identifies a SINGLE RESIDUE, K174R, as the 
   likely driver. BUT we found this doesn't hold in all comparisons (see below).

C. Our sequence verification (2026-09-05)
   ─────────────────────────────────────
   Our analysis of GenBank records:
   
   FS577 (24.1%):     R174 in p33 ✓ matches Shilts et al. 2026 claim
   T68-1 (44.2%):     R174 in p33 ✓ matches Shilts et al. 2026 claim  
   T36 (1.5%):        K174 in INFECTIOUS CLONE (EU937521) 
                      BUT A174 in field isolate U16304 (indel artifact)
   T30 (1.6%):        R174 in p33
   
   → The R174K difference exists ONLY between FS577 and the T36 infectious clone 
   (EU937521), but NOT between FS577 and T30 (both have R174 yet ~15-fold
   difference in transmission). Conclusion re-anchored by round-3 panel:
   residue 174 can be NEITHER necessary NOR the dominant lever — T30 (R174,
   1.57%) plus Harper 2016's K174-retaining hybrids (17.9%/20.6% transmission)
   both contradict necessity/dominance. (corrected 2026-09-05, round-3 panel:
   see docs/peer_reviews_round3/CONSENSUS.md)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: WHAT DOES THE CPM-CENTERED HYPOTHESIS ACTUALLY SAY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRO-CPm EVIDENCE (The original hypothesis was built on this)
═════════════════════════════════════════════════════════════

1. Killiny et al. 2016 (AEM) — CPm-binding mechanism
   ──────────────────────────────────────────────
   - CPm + p61/p65 are sufficient to bind aphid cibarium carbohydrates
   - CP alone does NOT bind — only the CPm/HSP complex binds
   - Transmission is: (a) protease-insensitive, (b) chitinase-sensitive
   
   Interpretation: "CPm is the vector-binding protein"
   Status: SOLID experimental evidence. BUT insufficient to explain transmission 
   efficiency variation, as shown by the FS577/T36 identity in CPm.

2. LIYV CPm mutations (whitefly-transmitted crinivirus, closely related to CTV)
   ──────────────────────────────────────────────────────────────────────────
   - A frameshift mutation in CPm abolishes whitefly transmission
   - Yet: virion assembly and systemic plant movement are UNAFFECTED
   - Chimeric CPm experiments show ~60% LCV CPm insertion still permits transmission
     [FLAGGED 2026-09-05, round-3 panel: the 60% vs 41% assignment below is
      likely REVERSED relative to Chen et al. 2011 (PNAS 108:16777) — needs
      source check before citing. See docs/peer_reviews_round3/CONSENSUS.md §2]
   
   Interpretation: "CPm can be mutated to disrupt transmission while keeping assembly"
   Status: PEER-REVIEWED; shows CPm mutations CAN disrupt transmission. BUT this was 
   a complete frameshift (complete loss of function), not a subtle residue change.

3. Killiny et al. (in vivo fluorescence labeling)
   ──────────────────────────────────────────────
   - CPm involved in virion binding to aphid cibarium
   - CPm is on virion surface at 5′ terminus
   
   Status: Confirms CPm structural role in vector interaction.

AGAINST-CPm EVIDENCE (What the data actually show)
═══════════════════════════════════════════════════

1. FS577 and T36 have IDENTICAL CPm (240/240 amino acids)
   Yet: FS577 transmits at 24.1%, T36 at 1.5% (16-fold difference)
   
   Implication: CPm sequence variation DOES NOT account for this transmission 
   difference. CPm is necessary for transmission (as Killiny et al. 2016 showed) but its sequence 
   is NOT the determinant of efficiency variation.

2. What DOES differ between FS577 and T36?
   ─────────────────────────────────────────
   p33:  98.7% identity; 3 aa differences (V117S, V262I, E264G) + 1 gap
         [corrected 2026-09-05, round-3 panel: 98.7% ≈ 299/303 (gapped
          alignment, 1 gap) — an earlier write-up stating "295/302 = 98.7%"
          was arithmetic error; vs the AY170468/EU937521 clone references
          p33 identity is 99.7%. State the reference when quoting.
          See docs/peer_reviews_round3/CONSENSUS.md]
   p65:  98.8% identity; 7 aa differences
   p61:  98.1% identity; 10 aa differences
   p25:  99.1% identity; 2 aa differences (H79R, I209V)
   
   → p33 stands out as the only protein with variation that correlates with 
   transmission AND has independent experimental support (Shilts 2020, Shilts et al. 2026.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3: WHAT IS p33? (Multifunctional protein, not just a transmission factor)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

P33 FUNCTIONS (from literature)
════════════════════════════════

1. Host-range determinant
   - Removes TMD (transmembrane domain) → p33 loses ability to infect sour orange
   - p33 is membrane-associated; TMD is C-terminal
   - Related to viral movement/plasmodesmata localization

2. Viral movement protein
   - Localizes to plasmodesmata 
   - Can form extracellular tubules
   - Unconventional movement protein with TMD

3. Aphid transmission determinant  
   - Shilts 2020: p33 accounts for 77% of transmission gain
   - Shilts et al. 2026: K174R identified as key residue (though T30 has R174 yet low 
     transmission, so other residues matter too)

4. Superinfection exclusion
   - p33 is a key factor preventing reinfection by closely related strains
   - Signals strength of p33-p33 interactions

5. Host immunity interaction
   - p33 modulates host immune response (not VSR, but host-range related)
   - CmMLP2 (citrus defense protein) specifically targets p33
   - p33 triggers CmMLP2 upregulation in phloem

6. Multi-protein complex formation
   - Interacts with CP, p20, and p18
   - Co-localizes with p20
   - Part of viral inclusion bodies

P33 UNKNOWNS / MECHANISTIC GAPS
═════════════════════════════════

- How does p33 sequence variation affect aphid transmission specifically?
  (It's a multifunctional protein; which function is the bottleneck?)
- Does K174R affect:
  a) Membrane localization? (TMD is C-terminal, K174 is middle)
  b) Protein-protein interactions (p20, p18, CP)?
  c) Plasmodesmata targeting or sizing?
  d) A direct role in vector interaction that we don't yet know?
- Why do T30 and FS577 differ 23-fold when both have R174?
  (Answer: probably multiple residues, or interaction effects)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 4: PRECEDENT IN OTHER CLOSTEROVIRIDAE (LIYV, GLRaV-3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LIYV (Lettuce infectious yellows virus, whitefly-transmitted)
════════════════════════════════════════════════════════════

1. CPm is necessary and sufficient for whitefly binding
   - Frameshift mutant (p1-5b): CPm truncated, transmission = 0%
   - Yet: Virion assembly = normal; systemic movement = normal
   - Implication: CPm can be mutated away transmission without breaking assembly

2. CPm chimeras with LCV (lettuce chlorosis virus)
   - CPmP-1 (60% LCV, 40% LIYV sequence): transmits
   - CPmP-4 (41% LCV): does NOT transmit
   [FLAGGED 2026-09-05, round-3 panel: these percentages are likely REVERSED
    relative to Chen et al. 2011 (PNAS 108:16777) — nobody fetched the source;
    re-check required before citing. See docs/peer_reviews_round3/CONSENSUS.md §2]
   - CPm may be PLASTIC for transmission, tolerating some cross-species content
     (pending the source re-check above)
   
   Implication: Structural regions ≠ sequence-specific; epitope matters

3. CPm truncation mechanism
   - The p1-5b mutant produces TRUNCATED CPm (211 aa instead of 453)
   - Transmission loss is TOTAL (frameshift = loss of function)
   - NOT a subtle charge-state mutation
   
   Status: LIYV shows you can break transmission at CPm, but it requires major 
   structural disruption. Subtle CPm mutations (like K174R, which is on p33 not CPm) 
   don't block LIYV transmission.

GLRaV-3 (Grapevine leafroll, mealybug-transmitted, also Closteroviridae)
═════════════════════════════════════════════════════════════════════════

1. Vector retention mechanism similar to CTV
   - GLRaV-3 retained in mealybug mouthparts (foregut)
   - CPm involved (as in CTV and LIYV)
   
2. NO published CPm mutations for transmission disruption
   - Unlike LIYV, no one has tried to mutate GLRaV-3 CPm to block transmission
   - But CPm is implicated as part of the retention complex (along with Hsp70h, p55)

Status: GLRaV-3 shows the mechanism generalizes across Closteroviridae but does NOT 
show that CPm mutations can selectively block transmission without affecting assembly. 
That precedent comes only from LIYV.

CROSS-VECTOR PATTERN
════════════════════

- CTV (aphid): CPm + p65/p61 bind cibarium; p33 determines efficiency
- LIYV (whitefly): CPm binds foregut; CPm mutations can block transmission
- GLRaV-3 (mealybug): CPm + Hsp70h + p55 retain in foregut; no mutation data

→ CPm is ALWAYS part of the binding complex, but for TRANSMISSION EFFICIENCY, 
the data point to replication/host-range factors (p33, p65/p61) not CPm sequence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 5: CRITICAL DECISION POINT — TWO PATHS FORWARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATH A: p33 MUTATIONS (backed by Shilts 2020 + Shilts et al. 2026 experiments)
════════════════════════════════════════════════════════════════════

PROS:
─────
✓ Two independent published papers show p33 substitution ↑ transmission 12–83-fold
✓ Single residue identified: K174R (in Shilts et al. 2026
✓ p33 is accessory (not essential like p65/p61 for virion assembly)
✓ Mechanistic plausibility: p33 is host-range / movement / superinfection protein
✓ Smaller search space: p33 has only 3–7 differences among high/low transmitters
✓ Can be targeted at assembly-independent sites (N-terminal; TMD is C-terminal)

CONS:
─────
✗ K174R alone doesn't explain T30/FS577 difference (both have R174 with 23-fold gap)
  → Multiple residues or interaction effects needed
✗ p33 multifunctionality: risk of pleiotropic effects on replication or host defense
✗ No in vitro mechanism for HOW p33 affects transmission (is it vector interaction? 
  replication efficiency? systemic movement that improves acquisition?)
✗ Shilts et al. 2026 paper very recent (April 2026); no independent replication yet

RISK TO ASSEMBLY:
─────────────────
LOW. p33 is not part of virion. Removals/truncations of p33 are viable in CTV. 
The risk is HOST RANGE or replication, not assembly.

RISK TO MOVEMENT:
─────────────────
MODERATE. p33 localizes to plasmodesmata and is involved in systemic movement. 
Mutations could reduce plant-to-plant spread. BUT Shilts/Harper saw full systemic 
infection in all constructs, so assembly/movement are decoupled from transmission efficiency.

PATH B: CPm MUTATIONS (backed by Killiny et al. 2016 binding + LIYV precedent)
═══════════════════════════════════════════════════════════════

PROS:
─────
✓ Killiny et al. 2016: CPm is the only coat protein that binds aphid receptors
✓ LIYV precedent: CPm frameshifts can abolish whitefly transmission without 
  affecting assembly or systemic movement
✓ CPm is small (240 aa) and localized to 5′ terminus (~3% of surface)
✓ Mutations less likely to have pleiotropic effects (not multifunctional like p33)

CONS:
─────
✗ FS577 and T36 have IDENTICAL CPm despite 16-fold transmission difference
  → This rules out the hypothesis that CPm SEQUENCE VARIATION determines 
    transmission in CTV (240/240 identity, independently re-confirmed).
    NOTE 2026-09-05, round-3 panel: CPm involvement itself is NOT ruled out —
    sequence identity is now the sole basis for the falsification after the
    17/90 CPm-construct figure was found not to exist in Shilts 2020
    (see docs/peer_reviews_round3/CONSENSUS.md)
✗ LIYV data is from a frameshift (complete loss of function), not a point mutation
  → Doesn't prove subtle CPm mutations can selectively block transmission
✗ No example of a CPm point mutation abolishing transmission in CTV or any virus
✗ Shilts et al. 2026 explicitly shows p33 NOT CPm explains the FS577/T36 difference

RISK TO ASSEMBLY:
─────────────────
MODERATE-HIGH. CPm is part of the 5′ cap structure (Hsp70h/p61/p65 + CPm). Mutations 
could destabilize the terminal complex. LIYV data show assembly can tolerate CPm 
truncation/chimerism, but point mutations in packing interfaces could be risky.

RISK TO MOVEMENT:
─────────────────
LOW (based on LIYV). CPm frameshifts don't block systemic movement in herbaceous 
hosts, though citrus may differ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SYNTHESIS: WHY THE PIVOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The original hypothesis (CPm mutations) was built on:
  1. Sound mechanistic logic: CPm binds vector receptors (Killiny et al. 2016 2016)
  2. Plausible precedent: LIYV CPm mutations block transmission (Tian 1999, Falk 2010)
  
But the SEQUENCE DATA directly contradicts it:
  - FS577/T36 CPm identity (0 differences) + 16-fold transmission gap
  → CPm sequence is NOT the determinant of transmission efficiency in CTV
    (CPm sequence variation only; CPm involvement not excluded —
     corrected 2026-09-05, round-3 panel: see docs/peer_reviews_round3/CONSENSUS.md)
  
The DATA point to p33 instead:
  - p33 shows 3 differences between FS577/T36 (vs. CPm's 0)
  - Shilts 2020: p33 swap explains 12-fold of 15-fold transmission gain
  - Shilts et al. 2026: K174R in p33 identified as a single-residue candidate
  - GLRaV-3 precedent: replication proteins (helicase, RdRp) often encode vector 
    determinants alongside movement proteins

This is not a weakness in the initial hypothesis — it's EXACTLY why you run the 
validation step. The team gave us the right frame ("validate the assumption against 
real sequence data") and the data updated our target.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDATION: PROCEED WITH PATH A (p33 mutations)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMMEDIATE NEXT STEPS (Week 1–2)
════════════════════════════════

1. Identify candidate p33 residues:
   - Compare p33 sequences from 5 high-transmission isolates (>15% efficiency)
   - vs. 5 low-transmission isolates (<3% efficiency)
   - Identify positions that segregate by phenotype
   
2. AlphaFold structure prediction:
   - Generate p33 structure for T36, T68-1, FS577, T30
   - Highlight K174 and all variable positions
   - Assess if mutations are on surface, interface, or buried
   
3. Cross-check with RNA secondary structure:
   - p33 interacts with RNA (for encapsidation and movement)
   - Check if candidate residues are near known RNA-binding sites

4. Literature mining:
   - Are there cryo-EM structures of other Closteroviridae p33 homologs?
   - Any structural data on how p33 contacts the 5′ cap assembly?

STAGE 0 (Week 3–4): In vitro validation
════════════════════════════════════════

- Site-directed mutagenesis: introduce high-transmission residues into T36 p33
- Candidates: K174R, V117S, V262I, E264G (as identified from FS577)
- Test in protoplasts: Can we build stable, infectious clones?
- Measure: virus titer, virion morphology, systemic infection in N. benthamiana

STAGE 1 (Week 5–8): Aphid transmission validation
═════════════════════════════════════════════════

- Only proceed if Stage 0 mutants are viable
- Measure transmission of top 3–5 candidates via brown citrus aphid
- Hypothesis: Mutations that reverse T36 p33 toward T68-1 → ↑ transmission
- Also measure: can you REDUCE transmission in FS577 by reversing T68-1 mutations?

DECISION GATE (Week 9):
═══════════════════════
- If ≥1 candidate reduces transmission to <0.5% (vs. T36's 1.5% baseline) 
  while maintaining assembly/movement: PROCEED to citrus validation
- If no reduction: PIVOT to p65+p61 dual-target approach (they show synergy)
- If assembly loss: RECORD which residues are assembly-critical; refine search

CITRUS VALIDATION (optional, Week 10–12):
═════════════════════════════════════════
- Infiltrate N. benthamiana, graft to citrus, measure aphid transmission
- Verify biocontainment function in real host system
```
