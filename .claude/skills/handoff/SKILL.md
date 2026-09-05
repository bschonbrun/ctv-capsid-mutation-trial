---
name: handoff
description: Pointer only. Session close-out is /carbonight — it writes the handoff along with the tests, cost receipt, self-review, and lesson note. This stub exists so an old habit still lands somewhere sensible.
plain: >
  A pointer, not a tool: the real end-of-session wrap-up is /carbonight, which writes
  the handoff along with tests and a summary. Use it only out of old habit — it points
  you to the right command. You see a one-line redirect to /carbonight.
user-invocable: true
model-invocable: false
recommendable: false
tools: Bash
---

# /handoff

Run `session-close.sh handoff-redirect` and print exactly what it says.

If that script cannot be resolved, print this one line and stop:
`Session close-out is /carbonight. Run that.`
