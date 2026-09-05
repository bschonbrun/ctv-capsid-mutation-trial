#!/bin/bash
# Round-4 rebuttal dispatcher. Usage: round4_model.sh <grok|deepseek|glm|gpt|gemini>
# Sends the model's Round-3 review + its dispute packet; output to round4/<model>.reply.md
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
R3="$REPO/docs/peer_reviews_round3/raw"
R4="$REPO/docs/peer_reviews_round3/round4"
M="$1"
OUT="$R4/$M.reply.md"

case "$M" in
  grok)
    cd "$REPO"
    ~/.grok/bin/grok -p "This is round 4 (rebuttal) of a scientific review panel on plant-virology literature verification. Your round-3 review is at docs/peer_reviews_round3/raw/grok.md — read it first. Then read docs/peer_reviews_round3/round4/grok.prompt.md and follow its instructions exactly. You may re-check the repo's GenBank files and the Harper PDF if a dispute hinges on them. Write your complete rebuttal as your reply." -m grok-4.6 --cwd "$REPO" </dev/null > "$OUT" 2> "$OUT.log"
    echo "OK $M -> $OUT ($(wc -w < "$OUT" | tr -d ' ') words)"
    ;;
  gpt|deepseek|glm|gemini)
    M="$M" python3 - "$R3" "$R4" <<'PYEOF'
import json, os, subprocess, sys
r3, r4 = sys.argv[1], sys.argv[2]
m = os.environ["M"]
review = open(f"{r3}/{m}.md").read()
prompt = open(f"{r4}/{m}.prompt.md").read()
msg = ("This is round 4 (rebuttal) of an independent multi-model scientific review panel on defensive "
       "plant-science literature verification (Silvec Biologics; EPA-approved citrus tree protection "
       "platform; statistics and published-data fact-checking only, no new designs). Your round-3 review "
       "is reproduced first, then the dispute packet. Follow the dispute packet's instructions exactly.\n\n"
       "=== YOUR ROUND-3 REVIEW ===\n\n" + review + "\n\n=== DISPUTE PACKET ===\n\n" + prompt)

def kc(name):
    return subprocess.run(["security", "find-generic-password", "-s", name, "-w"],
                          capture_output=True, text=True, check=True).stdout.strip()

if m == "deepseek":
    body = {"model": "deepseek-v4-pro", "stream": False,
            "messages": [{"role": "user", "content": msg}]}
    url, key = "https://api.deepseek.com/chat/completions", "deepseek-cn-api-key"
elif m == "gemini":
    apikey = kc("gemini-api-key")
    body = {"contents": [{"parts": [{"text": msg}]}], "generationConfig": {"maxOutputTokens": 16384}}
    r = subprocess.run(["curl", "-sS", "--max-time", "900",
        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key={apikey}",
        "-H", "content-type: application/json", "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    text = "".join(p.get("text", "") for p in d["candidates"][0]["content"]["parts"])
    if not text.strip():
        sys.stderr.write("ERROR: " + r.stdout[:1500]); sys.exit(1)
    open(f"{r4}/gemini.reply.md", "w").write(text)
    print("OK gemini"); sys.exit(0)
else:
    key = "OPENROUTER_API_KEY"
    body = {"model": "openai/gpt-6-astra" if m == "gpt" else "z-ai/glm-5.3",
            "messages": [{"role": "user", "content": msg}]}
    url = "https://openrouter.ai/api/v1/chat/completions"
apikey = kc(key)
r = subprocess.run(["curl", "-sS", "--max-time", "900", url,
                    "-H", "Authorization: Bearer " + apikey,
                    "-H", "content-type: application/json", "-d", json.dumps(body)],
                   capture_output=True, text=True)
open(f"{r4}/{m}.reply.meta.json", "w").write(r.stdout[:20000])
d = json.loads(r.stdout)
text = (d.get("choices") or [{}])[0].get("message", {}).get("content")
if not text:
    sys.stderr.write("ERROR: " + str(d.get("error"))[:500]); sys.exit(1)
open(f"{r4}/{m}.reply.md", "w").write(text)
print(f"OK {m} -> {len(text.split())} words")
PYEOF
    ;;
  *) echo "unknown: $M"; exit 2 ;;
esac
