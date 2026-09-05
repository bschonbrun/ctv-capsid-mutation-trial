# Verified Bibliography and Citation Audit

*Source document: `CTV_VERIFIED_BIBLIOGRAPHY.txt` — generated in the CTV transmission analysis session. Fixed-width layout preserved.*

```text
═══════════════════════════════════════════════════════════════════════════════
CTV APHID-TRANSMISSION PROJECT — VERIFIED BIBLIOGRAPHY
Every reference below was resolved against CrossRef on 2026-09-05.
Author lists, journals, volumes and DOIs are as returned by the publisher
record — not from recall. Retrieval status of the full text is stated per entry.
═══════════════════════════════════════════════════════════════════════════════

[R1]  Shilts T, El-Mohtar C, Dawson WO, Killiny N (2020)
      "Citrus tristeza virus P33 Protein Is Required for Efficient Transmission
      by the Aphid Aphis (Toxoptera) citricidus (Kirkaldy)"
      Viruses 12:1131.  DOI 10.3390/v12101131
      RETRIEVAL: full text fetched and quoted directly.
      SUPPLIES: transmission rates T68-1 44.18% (95/215), T30 1.57% (2/127),
      T36 1.5% (1/66); p33 swap raising T36 from 1.5% to 17.8% (16/90);
      the 0.6%->18% p65+p61 figure quoted from [R2].

[R2]  Harper SJ, Killiny N, Tatineni S, Gowda S, Cowell SJ, Shilts T,
      Dawson WO (2016)
      "Sequence variation in two genes determines the efficacy of transmission
      of citrus tristeza virus by the brown citrus aphid"
      Archives of Virology 161:3555-3559.  DOI 10.1007/s00705-016-3070-x
      RETRIEVAL: NOT fetched. Known only through the quotation of it in [R1].
      SUPPLIES: the p65+p61 two-gene result and the 0.6% T36 baseline.
      NOTE: this is the only genuine "Harper" paper in this project.

[R3]  Shilts T, Nehela Y, Killiny N (2026)
      "Dissecting aphid transmission determinants in Citrus Tristeza Virus
      using chimeric viruses and gene substitutions"
      Virology 621:110928.  DOI 10.1016/j.virol.2026.110928
      PubMed PMID 42061270.
      RETRIEVAL: paywalled; abstract obtained from PubMed. Full text NOT read.
      SUPPLIES: CTV-T36 delta-p33/p18/p13 backbone complemented with FS577
      counterparts reaching ~50% transmission from ~0.6%; p33 K174R as the sole
      differing residue; the conclusion that efficient transmission requires
      coordinated function of P33, P61 and P65.
      CORRECTION NOTICE: earlier drafts of this project's documents cited this
      paper as "Harper et al. 2026". Harper is not an author. 67 such
      misattributions were corrected on 2026-09-05.

[R4]  Aknadibossian V, Stokes C, Papke R, Teh H, Wang Y, Folimonova SY (2025)
      "The citrus tristeza virus p33 protein functions as a viroporin"
      PLOS Pathogens 21:e1013730.  DOI 10.1371/journal.ppat.1013730
      RETRIEVAL: full text fetched.
      SUPPLIES: p33 as a Class I viroporin; inward K+ and Na+ currents in
      Xenopus oocytes by two-electrode voltage clamp; membrane remodelling.

[R5]  Killiny N, Harper SJ, Alfaress S, El Mohtar C, Dawson WO (2016)
      "Minor Coat and Heat Shock Proteins Are Involved in the Binding of Citrus
      Tristeza Virus to the Foregut of Its Aphid Vector, Toxoptera citricida"
      Applied and Environmental Microbiology 82:6294-6302.
      DOI 10.1128/AEM.01914-16
      RETRIEVAL: full text fetched.
      SUPPLIES: CPm and HSP70-homologue involvement in aphid foregut binding.
      CORRECTION NOTICE: earlier drafts cited this as "Prado et al. 2016".
      Prado is not an author. 24 such misattributions were corrected
      on 2026-09-05.

───────────────────────────────────────────────────────────────────────────────
SEQUENCE RECORDS (GenBank, retrieved via NCBI E-utilities)
───────────────────────────────────────────────────────────────────────────────
  JQ965169   CTV T68-1        transmission 44.18% [R1]
  KC517488   CTV FS577        transmission 24.1%  [R1]
  AF260651   CTV T30          transmission 1.57%  [R1]
  U16304     CTV T36          field isolate; p33 reading frame differs from the
                              infectious clones — do not use for residue calls
  EU937521   CTV T36          infectious clone; carries K174 in p33
  AY170468   CTV T36          infectious clone
  Plus 124 further CTV genome records used for the residue-174 census.

───────────────────────────────────────────────────────────────────────────────
CLAIMS THAT HAVE NO CITATION AND ARE OURS ALONE
───────────────────────────────────────────────────────────────────────────────
  - p27/CPm identical 240/240 aa between FS577 and the T36 field isolate.
  - p33 98.7% identical (295/302) between the same pair.
  - Residue 174 census: R174 in 121/125 full-length p33 sequences (96.8%),
    K174 in 4/125 (3.2%) — EU937521, MH323441, MH323442, ON094625.
  These are outputs of our own Biopython alignments over GenBank records. They
  are reproducible from the artifacts in this project and are not peer reviewed.
═══════════════════════════════════════════════════════════════════════════════
```
