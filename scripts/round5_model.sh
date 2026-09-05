#!/bin/bash
# Round-5 closure sign-off. Usage: round5_model.sh <grok|deepseek|glm|gpt|gemini>
# Sends corrected packet + consensus + the model's own R3 review and R4 rebuttal.
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
R3="$REPO/docs/peer_reviews_round3/raw"; R4="$REPO/docs/peer_reviews_round3/round4"
M="$1"; OUT="$R4/$M.round5.md"

INSTR='ROUND 5 — closure sign-off (final round, short).

The packet authors fixed the document per the panel consensus. Attached: (1) your Round-3 review, (2) your Round-4 rebuttal, (3) the consensus and corrections log. In docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md (this repo) the corrected claims now stand.

Answer ONLY:
1. For each of YOUR round-4 HOLDs: does the consensus/corrections resolve it? RESOLVED / OPEN — one line each.
2. Anything new the corrections BROKE (something that was right before and is now wrong)? Most important check.
3. FINAL core-decision sign-off score (1-10) for: green-light the blinded, titer-controlled greenhouse necessity test of the paired p61+p65 allele swap (7-allele EU937521 set as default, subject to the stated adjudication note).

Two sentences max per item beyond one line. This is a sign-off, not a new review.'

case "$M" in
  grok)
    cd "$REPO"
    ~/.grok/bin/grok -p "This is round 5 (closure) of the scientific review panel. Read in order: docs/peer_reviews_round3/raw/grok.md (your R3 review), docs/peer_reviews_round3/round4/grok.reply.md (your R4 rebuttal), docs/peer_reviews_round3/CONSENSUS.md (panel consensus + corrections), docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md (corrected packet — spot-check the changed claims). Then follow these instructions exactly:

$INSTR" -m grok-4.6 --cwd "$REPO" </dev/null > "$OUT" 2> "$OUT.log"
    echo "OK grok";;
  gpt|deepseek|glm|gemini)
    M="$M" python3 - "$R3" "$R4" "$REPO" <<'PYEOF'
import json, os, subprocess, sys
r3, r4, repo = sys.argv[1:4]
m = os.environ["M"]
instr = open(f"{r4}/../CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md") if False else None
parts = [
  "You are a seat on a 6-model scientific review panel (plant-virology literature verification, defensive biocontainment research, statistics and published-data checking only). Final closure round.",
  "=== YOUR ROUND-3 REVIEW ===", open(f"{r3}/{m}.md").read(),
  "=== YOUR ROUND-4 REBUTTAL ===", open(f"{r4}/{m}.reply.md").read() if m != "fable" and __import__("os").path.exists(f"{r4}/{m}.reply.md") else "",
  "=== PANEL CONSENSUS + CORRECTIONS ===", open(f"{repo}/docs/peer_reviews_round3/CONSENSUS.md").read(),
  "=== CORRECTED PACKET (changed claims) ===", open(f"{repo}/docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md").read()[-30000:],
]
instr_text = os.environ["INSTR"] if False else ""
msg = "\n\n".join(p for p in parts if p) + "\n\n=== INSTRUCTIONS ===\n\n" + sys.stdin.read() if False else "\n\n".join(p for p in parts if p)

def kc(name):
    return subprocess.run(["security", "find-generic-password", "-s", name, "-w"], capture_output=True, text=True, check=True).stdout.strip()

INSTR = """ROUND 5 — closure sign-off (final round, short).

The packet authors fixed the document per the panel consensus (see the consensus and the corrected packet above).

Answer ONLY:
1. For each of YOUR round-4 HOLDs: does the consensus/corrections resolve it? RESOLVED / OPEN — one line each.
2. Anything new the corrections BROKE (something that was right before and is now wrong)? Most important check.
3. FINAL core-decision sign-off score (1-10) for: green-light the blinded, titer-controlled greenhouse necessity test of the paired p61+p65 allele swap (7-allele EU937521 set as default, subject to the stated adjudication note).

Two sentences max per item. This is a sign-off, not a new review."""
msg += "\n\n" + INSTR

if m == "deepseek":
    body = {"model": "deepseek-v4-pro", "stream": False, "messages": [{"role": "user", "content": msg}]}
    r = subprocess.run(["curl","-sS","--max-time","900","https://api.deepseek.com/chat/completions","-H","Authorization: Bearer "+kc("deepseek-cn-api-key"),"-H","content-type: application/json","-d",json.dumps(body)], capture_output=True, text=True)
elif m == "gemini":
    body = {"contents":[{"parts":[{"text": msg}]}], "generationConfig":{"maxOutputTokens":8192}}
    r = subprocess.run(["curl","-sS","--max-time","900","https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key="+kc("gemini-api-key"),"-H","content-type: application/json","-d",json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    text = "".join(p.get("text","") for p in d["candidates"][0]["content"]["parts"])
    if not text.strip(): sys.stderr.write("ERR "+r.stdout[:800]); sys.exit(1)
    open(f"{r4}/gemini.round5.md","w").write(text); print("OK gemini"); sys.exit(0)
else:
    body = {"model": "openai/gpt-6-astra" if m=="gpt" else "z-ai/glm-5.3", "messages": [{"role":"user","content": msg}]}
    r = subprocess.run(["curl","-sS","--max-time","900","https://openrouter.ai/api/v1/chat/completions","-H","Authorization: Bearer "+kc("OPENROUTER_API_KEY"),"-H","content-type: application/json","-d",json.dumps(body)], capture_output=True, text=True)
d = json.loads(r.stdout)
text = (d.get("choices") or [{}])[0].get("message",{}).get("content")
if not text: sys.stderr.write("ERR "+r.stdout[:800]); sys.exit(1)
open(f"{r4}/{m}.round5.md","w").write(text)
print(f"OK {m}")
PYEOF
    ;;
  *) echo "unknown: $M"; exit 2 ;;
esac
