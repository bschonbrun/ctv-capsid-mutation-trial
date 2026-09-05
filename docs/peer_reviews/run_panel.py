import json, os, subprocess, sys, time, pathlib
from concurrent.futures import ThreadPoolExecutor
import urllib.request

REPO = pathlib.Path("/Users/bill_schonbrun/Claude/Science/Capsid Mutation/ctv-capsid-mutation-trial")
BRIEF = (REPO / "docs/05_Multi_Model_Review_Brief.md").read_text()
OUT = REPO / "docs/peer_reviews"; OUT.mkdir(parents=True, exist_ok=True)

KEY = subprocess.run(["security","find-generic-password","-s","OPENROUTER_API_KEY","-w"],
                     capture_output=True, text=True).stdout.strip()
assert KEY, "no OpenRouter key in keychain"

MODELS = [
    ("01_GPT6_Astra_Pro",   "openai/gpt-6-astra-pro"),
    ("02_Grok_4.6",         "x-ai/grok-4.6"),
    ("03_Claude_Fable_5.1", "anthropic/claude-fable-5.1"),
    ("04_Gemini_3.1_Pro",   "google/gemini-3.1-pro-preview"),
    ("05_DeepSeek_V4_Pro",  "deepseek/deepseek-v4-pro"),
    ("06_Qwen3_Max_Thinking","qwen/qwen3-max-thinking"),
]

SYSTEM = ("You are an independent scientific peer reviewer with expertise in plant virology, "
          "vector biology, and quantitative experimental design. Be rigorous and specific. "
          "Cite the exact numbers in the brief when you critique them. Do not flatter.")

TASK = """Review the research brief below as an independent peer reviewer.

Address these five areas, each as its own section:
(a) Logical soundness of the inference chain
(b) Strength of evidence — rate each key claim strong / moderate / weak, with reasoning
(c) Key confounds or alternative explanations the team has missed
(d) The single measurement that would most strengthen (or break) the case
(e) Final verdict: proceed to construct design now, or not? Why?

Be concrete about sample sizes, statistical power, and confidence intervals where the
brief gives raw counts. Flag any inference that outruns its data.

--- BRIEF ---
""" + BRIEF

def call(name, model):
    body = json.dumps({
        "model": model,
        "messages": [{"role":"system","content":SYSTEM},{"role":"user","content":TASK}],
        "max_tokens": 6000,
    }).encode()
    req = urllib.request.Request("https://openrouter.ai/api/v1/chat/completions", data=body,
        headers={"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"})
    t0 = time.time()
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            d = json.load(r)
        txt = d["choices"][0]["message"]["content"]
        u = d.get("usage", {})
        hdr = (f"# Peer Review — {model}\n\n"
               f"*Independent review of the CTV transmission brief. "
               f"Generated {time.strftime('%Y-%m-%d %H:%M %Z')} via OpenRouter. "
               f"Tokens: {u.get('prompt_tokens','?')} in / {u.get('completion_tokens','?')} out. "
               f"{time.time()-t0:.0f}s.*\n\n---\n\n")
        (OUT / f"{name}.md").write_text(hdr + txt + "\n")
        return name, "ok", u.get("prompt_tokens",0), u.get("completion_tokens",0), len(txt.split())
    except Exception as e:
        err = getattr(e, "read", lambda: b"")()
        return name, f"FAIL {e} {err[:300]}", 0, 0, 0

with ThreadPoolExecutor(max_workers=6) as ex:
    for r in ex.map(lambda a: call(*a), MODELS):
        print(f"{r[0]:26} {r[1][:120]:<10} in={r[2]} out={r[3]} words={r[4]}", flush=True)
