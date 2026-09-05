# Contributing to CTV Transmission Biocontainment Trial

## Workflow

1. **Create a feature branch** for your work:
   ```bash
   git checkout -b feature/stage-0-constructs
   ```

2. **Commit with clear messages:**
   ```bash
   git commit -m "Stage 0: Design p33 K174R + p61/p65 construct library"
   ```

3. **Push and create a pull request** for team review.

4. **Link PRs to GitHub Issues** for tracking:
   ```
   Closes #5 (e.g., "Fetch Harper et al. 2016 full text")
   ```

## Document Standards

- **Technical docs:** Markdown (.md)
- **Data:** JSON for structured data, .gb for GenBank sequences
- **Presentations:** PPTX (always include speaker notes)
- **Code:** Python 3.13+, follow PEP 8, include docstrings

## Naming Conventions

- Branches: `feature/`, `bugfix/`, `docs/`, `stage-0/`, `stage-1/`, `stage-2/`
- Issues: Start with `[STAGE-0]`, `[STAGE-1]`, etc. for phase tracking
- Files: `CTV_` prefix for project-specific artifacts

## Code of Conduct

- Cite all data sources in commit messages and code comments
- Document assumptions about confidence levels (STRONG/MODERATE/WEAK)
- Link claims to primary literature when possible
- Update the README.md if adding major results

## Questions?

Open an issue with the `question` label or contact the research lead.
