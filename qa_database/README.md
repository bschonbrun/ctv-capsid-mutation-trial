# Q&A Knowledge Base

Pre-answered questions about the project, each with its sources and a confidence
tier, for onboarding and for the team Q&A interface.

- `CTV_QA_Knowledge_Base.json` — machine-readable; the record for any tooling
- `CTV_QA_Knowledge_Base.txt` — same content, readable in a terminal

## Record shape

```json
{
  "id":    "Q01",
  "topic": "Hypothesis",
  "q":     "the question",
  "a":     "the answer",
  "src":   ["where the answer comes from"],
  "conf":  "confidence tier"
}
```

Topics covered: Hypothesis, Evidence, K174R, Caveats, Design, Process.

## Adding entries

Append to the JSON, keep the `id` sequence, and always populate `src` and
`conf`. An answer without a source is not usable here — the point of this file
is that anyone quoting it can trace the claim.
