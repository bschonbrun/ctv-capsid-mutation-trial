
# ARTIFACT DOWNLOAD CHECKLIST FOR GITHUB UPLOAD

## Step 1: Download from Claude Science

Go to each artifact link below and download the file. Place it in the corresponding GitHub directory.

### docs/ directory

- [ ] CTV_Transmission_Executive_Summary.txt
      → Rename to: 01_Executive_Summary.md
      Artifact: fc065140-d46b-43c7-ad82-52d7cbc9a44f
      
- [ ] CTV_Process_Document_Learning_Arc.txt
      → Rename to: 02_Hypothesis_Arc.md
      
- [ ] FINAL_VERIFICATION_AUDIT.txt
      → Rename to: 03_Evidence_and_Verification.md
      Artifact: 8a766577-9e7a-446e-90fe-0098b1deb1b3
      
- [ ] CTV_SOURCES_UPDATE_AND_FINAL_ASSESSMENT.txt
      → Rename to: 04_Sources_and_Citations.md
      Artifact: b2f25e22-aeba-4a3b-8dae-86ed530ba327
      
- [ ] CTV_MULTIMODEL_REVIEW_BRIEF.txt
      → Rename to: 05_Multi_Model_Review_Brief.md
      Artifact: 555b0186-0c12-41c8-bd3b-0c280532ee4c

### presentations/ directory

- [ ] CTV_Presentation_Hypothesis_Arc.pptx
      → Keep filename as-is
      Artifact: b05228e5-a7a4-4e54-8eb5-d894137d158a
      
### qa_database/ directory

- [ ] CTV_QA_Knowledge_Base.json
      → Keep filename as-is
      Artifact: ecea69bf-c5d9-422f-8d7e-c41ae224b0d2

### data/sequences/ directory

- [ ] ctv_genomes.gb (130 full-length sequences)
      Retrieve from: prior session artifacts or re-fetch from NCBI
      
- [ ] ctv_t36_clones.gb (AY170468, EU937521)
      Retrieve from: GenBank

### data/alignments/ directory

- [ ] pairwise_alignments.json
      Retrieve from: handoff/pairwise_prot.json (created during analysis)

### construct_design/ directory

- [ ] TEAM_SUMMARY_COMPLETE_DELIVERABLES.txt
      → Rename to: Stage_0_In_Silico_Planning.md
      → Edit to .md format
      Artifact: b5843b6b-7edc-4ffd-970b-ea5c1043bb2f

## Step 2: Format Conversion (txt → md)

For files marked "(txt to .md)", open each in a text editor and:
1. Rename with .md extension
2. Replace horizontal lines:
   - Change: ═══════════...
   - To: `---`
3. Add markdown headers where needed:
   - Section titles → # Title
   - Subsections → ## Subtitle
4. Save

Alternatively, run this script:
```bash
cd docs/
for file in *.txt; do
  sed 's/═══════════.*/---/g' "$file" > "${file%.txt}.md"
  rm "$file"
done
```

## Step 3: Commit to Git

```bash
git add docs/ presentations/ qa_database/ data/
git commit -m "Add documentation, presentation, Q&A database, and sequence data"
git push origin main
```

## Step 4: GitHub Configuration (Optional)

1. Create a Project board for construct library phases
2. Add Issues for Stage 0, Stage 1, Stage 2
3. Set up branch protection rules on main
4. Add team members as collaborators

## Estimated Time
- Download + file organization: 5 minutes
- Format conversion: 5 minutes
- Git commit + push: 2 minutes
- Total: ~12 minutes

## Questions?
Refer to CONTRIBUTING.md in the repository root.
