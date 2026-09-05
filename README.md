# CTV Aphid Transmission Biocontainment Trial

## Overview
This repository documents the data-driven hypothesis development for disabling aphid transmission of Citrus tristeza virus (CTV) while preserving virion assembly and plant movement. 

**Principal Research Question:** Which viral gene(s) determine transmission efficiency by the brown citrus aphid (*Toxoptera citricida*)?

**Current Hypothesis:** p33 (silencing suppressor/viroporin) is the primary transmission determinant, acting in coordinated function with p65 and p61 (heat shock proteins).

## Key Findings
- **CPm hypothesis falsified**: Minor coat protein p27 is 100% identical between high-transmission (FS577, 24.1%) and low-transmission (T36, 1.5% in the Shilts clone assay; field 0.53%) isolates, yet transmission differs 16-fold. → CPm sequence variation does not explain phenotype.
- **p33 as primary driver**: Swapping p33 from T68-1 (44.18% transmission) into T36 background raises transmission 1.5% → 17.8%.
- **K174R adjudicated** (2026-09-05, `docs/peer_reviews_round3/CONSENSUS.md` corrections 2–3): verified sequences are T68-1 = R174, FS577 = R174, AY170468 = R174, T36 clone EU937521 = K174 — the 2026 abstract's K174R statement is consistent (FS577↔EU937521 differ at exactly R174K). But residue 174 is not the dominant lever: T30 (R174) transmits at 1.57%, and Harper's K174-retaining hybrids transmit at 17.9–20.6%.
- **Coordinated protein requirement**: Shilts et al. 2026 (Virology 621:110928) show efficient transmission requires p33+p61+p65 together.

## Repository Structure

```
├── README.md              (this file)
├── LICENSE                MIT
├── CONTRIBUTING.md        team workflow and review path
├── DOWNLOAD_CHECKLIST.md  provenance of the files in this repo
├── .gitignore
│
├── docs/                                     11 documents + README
│   ├── 01_Executive_Summary.md
│   ├── 02_Hypothesis_Arc.md
│   ├── 03_Evidence_and_Verification.md
│   ├── 04_Sources_and_Citations.md
│   ├── 05_Multi_Model_Review_Brief.md
│   ├── 06_Answers_To_Review_Questions.md
│   ├── 07_Sources_Update_And_Assessment.md
│   ├── 08_Team_Summary_And_Workflow.md
│   ├── 09_Literature_Review.md
│   ├── 10_p33_Viroporin_Mechanism.md
│   └── 11_Adversarial_Review_Pathways.md
│
├── presentations/
│   └── CTV_Presentation_Hypothesis_Arc.pptx        16 slides
│
├── qa_database/
│   ├── CTV_QA_Knowledge_Base.json                  22 Q&A pairs, sourced
│   └── CTV_QA_Knowledge_Base.txt                   same, terminal-readable
│
├── data/
│   ├── sequences/
│   │   ├── ctv_genomes.gb                          130 CTV records (4.9 MB)
│   │   ├── ctv_labeled_isolates.gb                 4 phenotype-labeled isolates
│   │   └── ctv_t36_infectious_clones.gb            AY170468, EU937521
│   └── alignments/
│       └── pairwise_protein_alignments.json        p25, p27, p33, p61, p65
│
└── construct_design/
    └── Stage_0_In_Silico_Planning.md               design gate; not yet executed
```

Each directory carries its own README describing what is in it and how to use it.

## Current Status

**Phase:** Literature review + hypothesis refinement (completed)  
**Next Phase:** Construct design (Stage 0, starting Week 1)  
**Timeline to POC:** 7–8 weeks (first wet-lab transmission assay)  
**Full screen:** 14–16 weeks (complete construct library)

## Key Papers Cited

| Paper | DOI | Status | Used For |
|-------|-----|--------|----------|
| Shilts et al. 2020 | 10.3390/v12101131 | ✓ Full text | Transmission phenotype, p33 swap data |
| Aknadibossian et al. 2025 | 10.1371/journal.ppat.1013730 | ✓ Full text | p33 viroporin mechanism |
| Shilts et al. 2026 | 10.1016/j.virol.2026.110928 | ⚠ Abstract only | p33+p61+p65 coordinated requirement |
| Harper et al. 2016 | 10.1007/s00705-016-3070-x | ⚠ Paywalled | 5′-end swap: 1.5% → 23% |

**Note:** All claims are verified with confidence tiers (STRONG/MODERATE/WEAK) in `docs/03_Evidence_and_Verification.md`.

## Team Members
- Bill Schonbrun (Research lead, strategy)
- [Add your team members]

## Peer Review Status

Adversarial review pathway: **Multi-model independent critique** via:
- Grok (xAI)
- GPT-6 (OpenAI)
- Claude (Anthropic)

Use `docs/05_Multi_Model_Review_Brief.md` to submit independent reviews.

## Getting Started

1. **For the team strategy session:** Read `docs/01_Executive_Summary.md` (5 min) then present `presentations/CTV_Presentation_Hypothesis_Arc.pptx` (15 min).

2. **For Q&A during session:** Use `qa_database/CTV_QA_Knowledge_Base.json` and `docs/03_Evidence_and_Verification.md`.

3. **For construct design:** Start with `construct_design/Stage_0_In_Silico_Planning.md`.

4. **For adversarial review:** Copy `docs/05_Multi_Model_Review_Brief.md` into your CLI tools (Grok, GPT-6, Claude).

## License
MIT — see `LICENSE`.

## Questions or Feedback?
Open an issue or contact the research team.
