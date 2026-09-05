#!/bin/bash
# Round-3 adversarial review dispatcher. Usage: round3_model.sh <model-key>
# model-key: grok | deepseek | glm | fable | gpt | gemini
# Output: docs/peer_reviews_round3/raw/<model-key>.md (+ .log on failure)
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
PACKET="$REPO/docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md"
OUTDIR="$REPO/docs/peer_reviews_round3/raw"
mkdir -p "$OUTDIR"
M="$1"
OUT="$OUTDIR/$M.md"

PROMPT_HDR='You are one reviewer on an independent multi-model adversarial panel. No other model has seen or answered this packet. Review the packet below completely, following its "Reviewer response format" section exactly: per-claim CONFIRM / CHALLENGE / FLAG-UNKNOWN with reasoning, a "What this packet got wrong overall" section, and a 1-10 confidence score for the core decision. Recompute statistics yourself where the packet asks. Do not ask questions; write the full review now.

---

'

case "$M" in
  grok)
    cd "$REPO"
    ~/.grok/bin/grok -p "${PROMPT_HDR}The packet is the file docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md — read it in full first, then write your complete review as your reply." -m grok-4.6 --cwd "$REPO" > "$OUT" 2> "$OUT.log" || { echo "grok failed; see $OUT.log"; exit 1; }
    ;;
  gpt)
    cd "$REPO"
    codex exec -m gpt-6-astra -s read-only "${PROMPT_HDR}The packet is the file docs/CTV_ROUND3_ADVERSARIAL_REVIEW_PACKET.md in this repo — read it in full first, then write your complete review as your final reply (do not write files)." > "$OUT.raw" 2> "$OUT.log" || { echo "codex failed; see $OUT.log"; exit 1; }
    # codex wraps output; extract the final agent message
    sed -n '/^codex$/,/^tokens used$/p' "$OUT.raw" | sed '1d;$d' > "$OUT"
    ;;
  fable|deepseek|gemini|glm)
    M="$M" python3 - "$PACKET" "$PROMPT_HDR" "$OUT" <<'PYEOF'
import json, os, subprocess, sys

packet_path, hdr, out = sys.argv[1], sys.argv[2], sys.argv[3]
model_key = os.environ["M"]
packet = open(packet_path).read()

def kc(name):
    return subprocess.run(["security", "find-generic-password", "-s", name, "-w"],
                          capture_output=True, text=True, check=True).stdout.strip()

if model_key == "fable":
    body = {"model": "claude-fable-5-1", "max_tokens": 16000,
            "messages": [{"role": "user", "content": hdr + packet}]}
    r = subprocess.run(["curl", "-sS", "--max-time", "540",
                        "https://api.anthropic.com/v1/messages",
                        "-H", "x-api-key: " + kc("anthropic-api-key"),
                        "-H", "anthropic-version: 2023-06-01",
                        "-H", "content-type: application/json",
                        "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    text = "".join(b.get("text", "") for b in d.get("content", []) if b.get("type") == "text")

elif model_key == "deepseek":
    body = {"model": "deepseek-v4-pro", "stream": False,
            "messages": [{"role": "user", "content": hdr + packet}]}
    r = subprocess.run(["curl", "-sS", "--max-time", "540",
                        "https://api.deepseek.com/chat/completions",
                        "-H", "Authorization: Bearer " + kc("deepseek-cn-api-key"),
                        "-H", "content-type: application/json",
                        "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    text = d["choices"][0]["message"]["content"]

elif model_key == "gemini":
    body = {"contents": [{"parts": [{"text": hdr + packet}]}],
            "generationConfig": {"maxOutputTokens": 16384}}
    r = subprocess.run(["curl", "-sS", "--max-time", "540",
                        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=" + kc("gemini-api-key"),
                        "-H", "content-type: application/json",
                        "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    parts = d["candidates"][0]["content"]["parts"]
    text = "".join(p.get("text", "") for p in parts)

elif model_key == "glm":
    body = {"model": "z-ai/glm-5.3",
            "messages": [{"role": "user", "content": hdr + packet}]}
    r = subprocess.run(["curl", "-sS", "--max-time", "540",
                        "https://openrouter.ai/api/v1/chat/completions",
                        "-H", "Authorization: Bearer " + kc("OPENROUTER_API_KEY"),
                        "-H", "content-type: application/json",
                        "-d", json.dumps(body)], capture_output=True, text=True)
    d = json.loads(r.stdout)
    text = d["choices"][0]["message"]["content"]

if not text.strip():
    sys.stderr.write("EMPTY/ERROR response:\n" + r.stdout[:2000] + "\n" + r.stderr[:1000] + "\n")
    sys.exit(1)
open(out, "w").write(text)
open(out + ".meta.json", "w").write(json.dumps(d))
PYEOF
    ;;
  *) echo "unknown model: $M"; exit 2 ;;
esac
echo "OK $M -> $OUT ($(wc -w < "$OUT" | tr -d ' ') words)"
