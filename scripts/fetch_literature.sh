#!/bin/bash
# Fetch every citation used in the round-3 packet into docs/literature/.
# Full text where open (PMC/PLoS), else the PubMed abstract. Run from repo root.
set -uo pipefail
OUT="docs/literature"
mkdir -p "$OUT"
EUTILS="https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

# name|pmid  (leave pmid empty to search by title)
cat <<'EOF' | while IFS='|' read -r NAME PMID; do
Harper2016|27173455
Shilts2020|33130124
Killiny2016|27208106
Harper2018|30353265
Satyanarayana2004|14718668
Shilts2026|42061270
Chen2011|21930903
Stewart2010|20943971
Wang2021CPmPlasticity|34494949
Aknadibossian2025|
EOF
  [ -z "$NAME" ] && continue
  echo "== $NAME"
  if [ -z "$PMID" ]; then
    # title search for Aknadibossian
    PMID=$(curl -sS --max-time 60 "$EUTILS/esearch.fcgi?db=pubmed&term=Aknadibossian+viroporin+p33+citrus&retmode=json" \
      | python3 -c 'import json,sys; ids=json.load(sys.stdin)["esearchresult"]["idlist"]; print(ids[0] if ids else "")')
  fi
  if [ -z "$PMID" ]; then echo "!! no PMID for $NAME"; continue; fi
  curl -sS --max-time 90 "$EUTILS/efetch.fcgi?db=pubmed&id=$PMID&rettype=abstract&retmode=text" > "$OUT/${NAME}.abstract.txt"
  # resolve PMCID
  PMCID=$(curl -sS --max-time 60 "$EUTILS/elink.fcgi?dbfrom=pubmed&db=pmc&id=$PMID&retmode=json" \
    | python3 -c 'import json,sys
try:
    d=json.load(sys.stdin)
    ls=d["linksets"][0].get("linksetdbs",[])
    for l in ls:
        if l.get("linkname")=="pubmed_pmc": print(l["links"][0]); break
except Exception: pass')
  if [ -n "$PMCID" ]; then
    curl -sS --max-time 120 "$EUTILS/efetch.fcgi?db=pmc&id=$PMCID&retmode=xml" > "$OUT/${NAME}.fulltext.xml"
    SZ=$(wc -c < "$OUT/${NAME}.fulltext.xml" | tr -d ' ')
    if [ "$SZ" -lt 20000 ]; then rm "$OUT/${NAME}.fulltext.xml"; echo "   PMC $PMCID too small, abstract only"; else echo "   PMC $PMCID fulltext $SZ bytes"; fi
  else
    echo "   no free full text (PMID $PMID) — abstract saved"
  fi
  sleep 1
done

# PLoS Pathogens full text for Aknadibossian 2025 (open access) if found above
if grep -q e1013730 "$OUT/Aknadibossian2025.abstract.txt" 2>/dev/null; then
  curl -sSL --max-time 120 "https://journals.plos.org/plospathogens/article/file?id=10.1371/journal.ppat.1013730&type=manuscript" -o "$OUT/Aknadibossian2025.fulltext.pdf"
  file "$OUT/Aknadibossian2025.fulltext.pdf" | grep -q PDF && echo "PLoS PDF saved" || { rm -f "$OUT/Aknadibossian2025.fulltext.pdf"; echo "PLoS PDF fetch failed"; }
fi
echo "DONE"; ls -la "$OUT"
