# Answer: Capsid Mutations for a Vector-Incompatible Virion — First Trial on CTV

**From:** Claude
**To:** CTV research group
**Re:** the original question — *what mutation(s) to a capsid keep a functional
virion (self-assembly + internal plant movement) while making it incompatible
to an insect vector, disabling plant-to-plant movement; first trial: deactivate
aphid transmission of Citrus tristeza virus*
**Companion documents:** `docs/01`–`11`, `construct_design/Stage_0_In_Silico_Planning.md`,
approach brief (`CTV_vector_incompatible_virion_approach.docx`),
`presentations/Silvec_transmission-dead_CTV_hypothesis_trial002.pptx`

---

## 1. Direct answer

In CTV the answer is **not a mutation in a capsid protein at all**. The particle
is bipolar: the major coat protein p25 (CP) coats ~95% of the genome, and the
minor coat protein p27 (CPm) coats ~630 nt at the 5′ end, where assembly is
initiated and restricted by two chaperones, p65 (HSP70h) and p61
(Satyanarayana et al. 2004). Aphid retention of CTV virions at the *Toxoptera
citricida* cibarium is competed by **free p27, p61 and p65 — not by p25**
(Killiny et al. 2016). The vector interface is the tail complex, not the coat.

The first-trial mutation set is therefore the **T36-clone alleles of p61 and
p65, transplanted together** into a transmissible backbone:

| Protein | Substitutions (FS577 → T36 clone, AY170468 numbering) | Count |
|---|---|---|
| p61 | S169N, I179T, T224A, M289T, D324G, E382D, S391G, I455V, D458G | 9 |
| p65 | G227S, R496H | 2 |
| p27 (CPm) | none — identical between the isolates | 0 |
| p25 (CP) | none — leave wild type | 0 |

**Both genes move together.** Harper et al. (2016) showed this in the gain
direction: either gene alone restores only 1.9–4.0% transmission to the T36
clone; both together restore 17.9% (vs 24.1% wild-type FS577). The pair is
co-evolved.

## 2. Why these leave assembly and in-plant movement functional

This is the part of the question that is already experimentally answered:

- Every Harper et al. (2016) hybrid infected *C. macrophylla* systemically, with
  **no titer difference among constructs by RT-qPCR or ELISA** — assembly and
  systemic movement were untouched by the allele swaps.
- The T36 greenhouse isolate itself is the existence proof: it infects, moves
  systemically, and produces virions at normal titer while transmitting at 0.6%
  (1/172 plants; Harper et al. 2016).
- The phenotype arose naturally under graft-only passage (Harper 2013), so it is
  biologically real rather than a lethal truncation.

## 3. The experiment that settles it is the *necessity* direction

Harper et al. (2016) ran the gain direction (FS577 alleles → T36 clone). The
biocontainment question needs the inverse, never published: **T36-clone alleles
of p61+p65 into a transmissible backbone (FS577 or T68).**

Trial 1 design:

- **Constructs:** transmissible parent; + T36 p61 alone; + T36 p65 alone; + both.
  Minimum to kill the hypothesis is two constructs (parent, + both).
- **Pre-registered fail criteria:** any titer drop vs parent (assembly/movement
  defect — a construct failure, not a mechanism answer); silenced-construct
  transmission above ~5% at parental titer.
- **Assay:** the published Harper protocol — 24 h acquisition on titred source
  flush, 10 *T. citricida* per seedling, ELISA at 8 weeks; clone identity blinded
  from scorers; ~250 plants per arm distinguishes ~1% from ~20%.
- **Single-genotype infections only.** Co-infecting genotypes complement:
  greenhouse T36 transmits at up to 35.7% from mixed infections vs ~0.5% alone
  (Harper et al. 2018). This is the single largest confounder and is controllable
  by design.

## 4. Mechanism — where I differ from the DeepSeek response

DeepSeek's example response predicts the effect acts through *virion tail
stability / phloem titer* rather than direct aphid binding, reasoning that the
11 residues are scattered rather than clustered in one surface patch.

That prediction is at odds with the two papers that bear on it:

1. **Titer is already excluded as sufficient explanation.** Harper et al. (2016)
   measured no titer difference between the poorly and highly transmitting
   hybrids. If acquisition were titer-limited, the swap series should not have
   moved transmission 30-fold at equal titer.
2. **There is direct binding evidence.** Killiny et al. (2016) showed fluorescently
   labeled CTV virions bind the *T. citricida* cibarium, and that binding is
   competed by free p27, p61 and p65. The working mechanism is therefore a
   docking/retention defect at the foregut, not a virion-abundance defect.

The discriminator, if needed: purified-virion binding assay on dissected cibaria
(Killiny protocol). A transmission-dead mutant that still binds = post-docking
failure; one that fails to bind = docking failure. Both are vector-incompatible
for the biocontainment purpose; they differ in what phase 2 must engineer.

Also note two corrections to the DeepSeek document: the Harper 2016 citation
is **Arch Virol 161:3555–3559** (not 3559–3563), and assigning the p61
substitutions to an "ATPase domain" is a structural speculation, not an
annotation — no CTV p61 structure exists; residue localization claims should be
labeled as AlphaFold-grade predictions at best until modeled.

## 5. On a minimal subset (DeepSeek §2.2)

DeepSeek proposes prioritizing the three acidic-residue changes
(p61 D324G + E382D + D458G) on electrostatics logic. Reasonable as a *phase 2*
subset, but phase 1 should stay pair-first:

- The only publication-grade fact is that the **pair** of genes matters; no
  residue-level data exists for CTV. Starting from a predicted charged subset
  risks a false null that re-opens the whole question.
- Harper 2013's separate count (nine p61, three p65 nonsynonymous changes
  between greenhouse and field T36-like isolates) differs from the
  AY170468-based list — another reason to anchor mutagenesis to the clone
  sequence actually tested, and to re-derive the substitution table from
  GenBank (KC517488 × AY170468) rather than from prose.
- Once necessity is confirmed, blocks then singles (per
  `construct_design/Stage_0_In_Silico_Planning.md`) resolve the map.

## 6. Phase 2 (the literal capsid mutation)

If a true CPm point mutant is wanted — the question as literally posed — no
published CTV p27 residue is known to kill aphid transmission while sparing
assembly. The LIYV minor-CP frameshift (systemic in plant, whitefly-dead;
Stewart et al. 2010) is the only existence proof, and it is a truncation in a
different genus. A CTV phase-2 map should: align CPm across strains and
closteroviruses, prioritize surface/variable/positively selected sites (e.g.,
positive selection at CPm codon 9; Wu et al. 2015), make non-conservative single
substitutions rather than truncations, and keep transmissible p61/p65 alleles so
a CPm effect is not confounded by the T36 chaperone background.

## 7. Caveats carried from the record

- **p33 is a third factor.** T68 p33 raises T36 transmission (Shilts et al.
  2020). Trial 1 ignores it because Harper recovered ~wild-type rates with
  p61+p65 alone; if residual transmission remains, add T36 p33 as trial 1b.
- **Complementation in the field.** A knockout planted into a tree already
  carrying a transmissible strain may still move (Harper et al. 2018). Field
  claims require single-genotype conditions.
- This document designs laboratory experiments only; it does not propose
  environmental release of a modified virus.

---

## References

1. Harper SJ, Killiny N, Tatineni S, Gowda S, Cowell SJ, Shilts T, Dawson WO.
   2016. Sequence variation in two genes determines the efficacy of transmission
   of citrus tristeza virus by the brown citrus aphid. *Arch Virol*
   161:3555–3559. doi:10.1007/s00705-016-3070-x
2. Killiny N, Harper SJ, Alfaress S, El-Mohtar C, Dawson WO. 2016. Minor coat
   and heat-shock proteins are involved in binding of citrus tristeza virus to
   the foregut of its aphid vector, *Toxoptera citricida*. *Appl Environ
   Microbiol* 82:6294–6302. doi:10.1128/AEM.01914-16
3. Satyanarayana T, Gowda S, Ayllón MA, Dawson WO. 2004. Closterovirus bipolar
   virion: evidence for initiation of assembly by minor coat protein and its
   restriction to the genomic RNA 5′ region. *PNAS* 101:799–804.
   doi:10.1073/pnas.0307747100
4. Harper SJ. 2013. Citrus tristeza virus: evolution of complex and varied
   genotypic groups. *Front Microbiol* 4:93. doi:10.3389/fmicb.2013.00093
5. Harper SJ, Cowell SJ, Dawson WO. 2018. Bottlenecks and complementation in the
   aphid transmission of citrus tristeza virus populations. *Arch Virol*
   163:3373–3376. doi:10.1007/s00705-018-4009-1
6. Shilts T, El-Mohtar C, Dawson WO, Killiny N. 2020. Citrus tristeza virus P33
   protein is required for efficient transmission by the aphid *Aphis
   (Toxoptera) citricidus*. *Viruses* 12:1131. doi:10.3390/v12101131
7. Stewart LR, Medina V, Tian T, Turina M, Falk BW, Ng JC. 2010. A mutation in
   the lettuce infectious yellows virus minor coat protein disrupts whitefly
   transmission but not in planta systemic movement. *J Virol* 84:12165–12173.
   doi:10.1128/JVI.01192-10
8. Wu GW et al. 2015. Genetic diversity and evolution of two capsid protein
   genes of citrus tristeza virus isolates from China. *Arch Virol* 160:787–794.
9. Peremyslov VV et al. 2004. Complex molecular architecture of beet yellows
   virus particles. *PNAS* 101:5030–5035.
10. Sequences: FS577 genome GenBank KC517488; T36 infectious clone 947R GenBank
    AY170468; T36 type isolate GenBank U16304.
