# Structural availability check — CTV p61, p65 (HSP70h), p33, CPm/p27

**Date:** 2026-09-05
**Question:** Is there AlphaFold/AlphaFold-DB or PDB structural data for the CTV T36 proteins carrying the round-3 allele set (p61: S169N, I179T, T224A, M289T; p65: R496H; p33: K174R question)?
**Headline: essentially NOT AVAILABLE.** No AlphaFold-grade model exists in the AlphaFold DB for p61, p65, or CPm for any CTV isolate, and no closterovirus structure exists in the PDB for any of these proteins. The only model that exists at all (p33, BFVD/ColabFold) has pLDDT 34.5 and is unusable. The packet's "AlphaFold-grade at best" caveat stands; residue-mapping onto surfaces cannot be credibly done.

## Sources checked (2026-09-05)

- UniProt REST (`rest.uniprot.org`) — T36 isolate ORF entries located.
- AlphaFold Protein Structure Database API (`alphafold.ebi.ac.uk/api/prediction/<UniProtID>`), which aggregates DeepMind AF-DB plus community archives including BFVD (Big Fantastic Virus Database).
- RCSB PDB search API (`search.rcsb.org`), full-text + NCBI-taxonomy lineage (Closteroviridae, taxid 12160; CTV, taxid 12177).

## Per-protein results

| Protein | T36 UniProt ID | AlphaFold/BFVD model | pLDDT | Closest structural homolog | Caveat |
|---|---|---|---|---|---|
| **p61** (61-kDa, 535 aa) | Q66240 | **None.** Also none for non-T36 CTV p61 (B5THB0 probe: none) | — | **None.** p61 is tristeza-specific; no structural homolog of any kind | No fold to map S169N/I179T/T224A/M289T onto; positions would be guesses |
| **p65 / HSP70h** (594 aa) | Q66239 | **None.** Also none for BYV HSP70h (P37092 probe: none), LIYV, GLRaV-3 HSP70h | — | Generic HSP70 ATPase fold exists in PDB by the thousands (e.g. DnaK/HSPA1A), but only for the N-terminal ~380 aa; the closterovirus-specific C-terminal part (where position 496 sits) has no template | R496H falls in the divergent C-terminal/SBD-tail region; generic HSP70 templates cannot place it |
| **p33** (33-kDa, 302 aa frag.) | Q89539 | **One model exists, from BFVD (ColabFold v1.5.2)** — saved to `docs/literature/structures/BFVD-Q89539_CTV_p33_model_v2.cif` | **34.5** global; 90.8% of residues "very low" (<50); 0% very high | None in PDB for any closterovirus p33 | **Unusable** — pLDDT 34.5 is "may be disorder/failed fold"; per-residue pLDDT at position 174 = 37.7. Cannot support any structural claim about K174R |
| **CPm / p27** (27-kDa, 240 aa) | Q66241 | **None.** Also none for BYV CPm (Q08538) or GLRaV-2 CPm (O39856) | — | None. No closterovirus capsid/CPm structure exists in PDB (only CTV entry is the CP sequence, and even CTV CP Q00686 has no model) | No CPm fold anywhere; tail-assembly region unmapped |

## PDB cross-check (all Closteroviridae)

Taxonomy and full-text searches agree: the **entire Closteroviridae family has exactly ONE deposited protein structure — PDB 2CWO, the BYV p21 RNA-silencing suppressor (3.3 Å X-ray, 2005)** — and nothing for CP, CPm, HSP70h, p61, or p33. (A "beet yellows" full-text hit, 9CFN, is an xrRNA from an unrelated tombusvirus-like associated RNA; "leafroll" hits 7JJU/7RLM/7ULO/6SCO are Potato leafroll virus, a polerovirus — not homologous.)

## Numbering observations (matters for any future mapping)

- The UniProt T36 entries already carry the **variant** residues at the allele-set positions: p61 Q66240 has N169, T179, A224, T289; p65 Q66239 has H496. So the EU937521-validated set's numbering maps 1:1 onto these accessions' coordinates, but a "wild type" reference at these positions is a different sequence — anchor any structural work to a stated accession.
- **p33 K174R does not match Q89539 numbering**: position 174 in the T36 p33 fragment is alanine, and there is no lysine at or near 174 (positions 170-182 read FFFRAVSETATNE). The K174R numbering must come from a different isolate/accession — re-anchor before any 3D claim.

## Can the 11 substitutions be mapped to surfaces?

No — honestly, not with available data. To map a substitution to a surface you need a trustworthy 3D model of the protein, and none of the four proteins has one: p61, p65, and CPm have no model at all, and the single p33 model (BFVD, pLDDT 34.5) is well below the confidence floor (~70) where even backbone topology is considered plausible, let alone side-chain surface exposure. The one nominally-mappable residue, p65 R496, sits in the C-terminal third of HSP70h, outside the region where generic HSP70 templates carry homology, so even template-hopping will not place it. Residue-level structural guidance for the allele set — surface exposure, contact partners, epitope geometry — is currently impossible from public structural data. The review packet's "AlphaFold-grade at best" characterization of structural support remains accurate and should not be upgraded. (If structural guidance becomes load-bearing, the realistic path is running AlphaFold3/ColabFold fresh on the exact variant sequences — multimer for p61+p65+CPm with the CP, since these act as an assembly unit — not mining AF-DB/PDB, which demonstrably have nothing.)
