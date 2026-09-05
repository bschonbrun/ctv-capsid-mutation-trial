# Data

## `sequences/`

GenBank records retrieved from NCBI Nucleotide.

| File | Contents |
|---|---|
| `ctv_genomes.gb` | 130 CTV genome records (~4.9 MB) |
| `ctv_labeled_isolates.gb` | The four isolates with published transmission efficiency by *Aphis (Toxoptera) citricida* |
| `ctv_t36_infectious_clones.gb` | T36 infectious clone sequences |

Isolates in `ctv_labeled_isolates.gb`, with reported transmission efficiency:

| Isolate | Accession | Transmission |
|---|---|---|
| T68-1 | JQ965169 | 44.18% |
| FS577 | KC517488 | 24.1% |
| T30 | AF260651 | 1.57% |
| T36 (field) | U16304 | 1.5% |

T36 infectious clones: AY170468, EU937521. The clone sequence differs from the
U16304 field record at codon 174 of p33 — this matters, and the audit document
in `docs/` explains why.

**Percentages are as reported in their source publications.** They come from
different experiments with different aphid populations and cohort sizes; they
are not measurements from a single controlled comparison. See the caveats
section of `docs/03_Evidence_and_Verification.md` before treating any ratio
between them as an effect size.

## `alignments/`

`pairwise_protein_alignments.json` — global gapped pairwise alignments
(Biopython `PairwiseAligner`, BLOSUM62) between isolate pairs for p25 (CP),
p27 (CPm), p33, p61, and p65. Per pair: percent identity, substitution count,
and the specific residue changes.

The central result: FS577 and the T36 field isolate differ 16-fold in reported
transmission, yet their p27 (CPm) proteins are identical at all 240 positions.
That is what falsified the CPm hypothesis. Regenerate from `sequences/` — the
method is described in `docs/02_Hypothesis_Arc.md`.
