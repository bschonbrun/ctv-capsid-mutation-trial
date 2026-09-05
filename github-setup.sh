#!/bin/bash
# GitHub Repository Setup for CTV Transmission Biocontainment Trial
# Run this script to create and initialize the GitHub repo

set -e

REPO_NAME="ctv-capsid-mutation-trial"
GITHUB_USERNAME="your-github-username"  # EDIT THIS
VISIBILITY="private"  # Change to "public" if needed

echo "=========================================================================="
echo "CTV Transmission Biocontainment Trial — GitHub Setup"
echo "=========================================================================="
echo ""
echo "This script will:"
echo "  1. Create a new GitHub repository ($REPO_NAME)"
echo "  2. Initialize local git tracking"
echo "  3. Commit all documentation and code"
echo "  4. Push to GitHub"
echo ""

# Step 0: Verify gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "ERROR: GitHub CLI (gh) not found. Install it with:"
    echo "  brew install gh   (macOS)"
    echo "  winget install gh (Windows)"
    exit 1
fi

# Step 1: Verify authentication
echo "Checking GitHub authentication..."
gh auth status

echo ""
echo "=========================================================================="
echo "STEP 1: Create GitHub Repository"
echo "=========================================================================="
gh repo create $REPO_NAME \
    --$VISIBILITY \
    --description "Data-driven p33/p65/p61 mutation trial for CTV aphid transmission biocontainment" \
    --source=. \
    --remote=origin \
    --push

echo ""
echo "=========================================================================="
echo "STEP 2: Add Documentation & Data"
echo "=========================================================================="
echo "Creating directory structure..."

mkdir -p docs presentations qa_database data/{sequences,alignments} construct_design

echo "✓ Directories created"
echo ""
echo "Next: Download artifact files from Claude Science and place them:"
echo "  docs/01_Executive_Summary.md ← CTV_Transmission_Executive_Summary.txt"
echo "  docs/02_Hypothesis_Arc.md ← CTV_Process_Document_Learning_Arc.txt"
echo "  docs/03_Evidence_and_Verification.md ← FINAL_VERIFICATION_AUDIT.txt"
echo "  docs/04_Sources_and_Citations.md ← CTV_VERIFIED_BIBLIOGRAPHY.txt"
echo "  docs/05_Multi_Model_Review_Brief.md ← CTV_MULTIMODEL_REVIEW_BRIEF.txt"
echo "  presentations/CTV_Presentation_Hypothesis_Arc.pptx"
echo "  qa_database/CTV_QA_Knowledge_Base.json"
echo ""

echo "=========================================================================="
echo "STEP 3: Commit to GitHub"
echo "=========================================================================="
git add .
git commit -m "Initial commit: CTV transmission hypothesis documentation and verification"
git push origin main

echo ""
echo "=========================================================================="
echo "Setup Complete!"
echo "=========================================================================="
echo ""
echo "Your GitHub repo is ready at:"
echo "  https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
echo "Next steps:"
echo "  1. Share the GitHub URL with your team"
echo "  2. Add collaborators (Settings → Collaborators)"
echo "  3. Set up branch protection on main branch"
echo "  4. Create a Project board for construct design phases"
echo ""
