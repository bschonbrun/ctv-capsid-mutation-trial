#!/usr/bin/env bash
# scripts/vendored-install.sh — install the stack on a laptop from the signed
# vendored tree a product repo already carries. ADR-104.
#
#   vendored-install.sh [<repo-root>] [--tier N] [--allow-unsigned] [--dry-run]
#                       [-- <extra install.sh args>]
#
#   rc 0 installed (or --dry-run verified) · rc 1 verification failed ·
#   rc 2 usage / missing prerequisite · rc 3 the installer itself failed
#
# WHY THIS EXISTS: a laptop install used to mean cloning
# get-lade/claude-code-stack, which means a GitHub invite to a private repo,
# granted by hand, per teammate (queue #468). The product repo the teammate
# already works in carries a signed copy of the stack. This installs from
# that copy. No token, no network, no invite.
#
# WHY THE VERIFIER IS INLINE: the tree under test must never supply its own
# verifier — a tamperer would replace it first. So the trust root below is a
# literal, the digest is recomputed by this script's own code, and nothing
# under .claude/stack/ is sourced or executed until BOTH the signature and
# the digest have passed. Same rule, same reason, as
# templates/vendor/vendor-verify.yml. This is the fourth independent copy of
# the digest construction (vendor-stack.sh, vendor-verify.sh, the CI
# workflow, here); tests/test-vendored-install.sh pins them to agree.
set -uo pipefail
# EXPORTED, not merely assigned: `sort` in a child process would otherwise
# order by the caller's locale and the digest would differ across machines.
export LC_ALL=C

# ── Trust root ─────────────────────────────────────────────────────────────
# The release key minted 2026-09-01. Byte-identical to
# config/vendor-signing/allowed_signers and to the inlined copy in
# templates/vendor/vendor-verify.yml. Rotating the key means updating all
# three in one PR (ADR-104, trust model).
SIG_PRINCIPAL="stack-release@get-lade.com"
SIG_NAMESPACE="carbonet-stack-vendor@v1"
ALLOWED_SIGNERS_LINE='stack-release@get-lade.com namespaces="carbonet-stack-vendor@v1" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOtWXVpsOYVZ49RkCdOVDkVZvIWNIPvIGVnSUN5gv+Bp'

die()  { echo "vendored-install: $1" >&2; exit "${2:-2}"; }
warn() { echo "vendored-install: $1" >&2; }

ROOT=""; TIER=""; ALLOW_UNSIGNED=0; DRY_RUN=0; EXTRA=()
while [[ $# -gt 0 ]]; do
  case "$1" in
    --tier)           [[ $# -ge 2 ]] || die "--tier needs a value"; TIER="$2"; shift 2 ;;
    --tier=*)         TIER="${1#*=}"; shift ;;
    --allow-unsigned) ALLOW_UNSIGNED=1; shift ;;
    --dry-run)        DRY_RUN=1; shift ;;
    --help|-h)
      echo "usage: vendored-install.sh [<repo-root>] [--tier N] [--allow-unsigned] [--dry-run] [-- <install.sh args>]"
      exit 0 ;;
    --) shift; EXTRA=("$@"); break ;;
    -*) die "unrecognized option '$1'" ;;
    *)  [[ -z "$ROOT" ]] || die "give at most one repo root"; ROOT="$1"; shift ;;
  esac
done

# Default root: CLAUDE_PROJECT_DIR when a session set it, else the git
# toplevel of the working directory, else the working directory.
if [[ -z "$ROOT" ]]; then
  ROOT="${CLAUDE_PROJECT_DIR:-}"
  [[ -n "$ROOT" ]] || ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo "")"
  [[ -n "$ROOT" ]] || ROOT="$PWD"
fi
[[ -d "$ROOT" ]] || die "'$ROOT' is not a directory"
ROOT="$(cd "$ROOT" && pwd -P)" || die "could not resolve '$ROOT'"

STACK_DIR="$ROOT/.claude/stack"
PIN="$STACK_DIR/VENDOR.json"
SIG="$STACK_DIR/VENDOR.sig"

if [[ ! -d "$STACK_DIR" ]]; then
  cat >&2 <<EOF
vendored-install: no vendored stack at $STACK_DIR

This repo does not carry a vendored stack tree, so there is nothing to
install from. Either run this from inside a repo that does, or install the
old way from a checkout of the stack repo:

  bash <stack-checkout>/scripts/install.sh --tier=2
EOF
  exit 2
fi

command -v jq        >/dev/null 2>&1 || die "jq is required"
command -v ssh-keygen >/dev/null 2>&1 || die "ssh-keygen is required (it verifies the signature)"

sha256_of() {
  if command -v shasum >/dev/null 2>&1; then shasum -a 256 "$1" | cut -d' ' -f1
  else sha256sum "$1" | cut -d' ' -f1; fi
}

[[ -f "$PIN" && ! -L "$PIN" ]] || die "VENDOR.json missing (or a symlink) — refusing" 1

# ── 1. Signature ───────────────────────────────────────────────────────────
# First, because it authenticates the pin and the pin authenticates the tree.
if [[ -f "$SIG" ]]; then
  [[ ! -L "$SIG" ]] || die "VENDOR.sig is a symlink — refusing" 1
  SIGNERS="$(mktemp)" || die "mktemp failed"
  trap 'rm -f "${SIGNERS:-}" "${DIGEST_INPUT:-}"' EXIT
  printf '%s\n' "$ALLOWED_SIGNERS_LINE" > "$SIGNERS"
  if ! ssh-keygen -Y verify -f "$SIGNERS" -I "$SIG_PRINCIPAL" \
       -n "$SIG_NAMESPACE" -s "$SIG" < "$PIN" >/dev/null 2>&1; then
    die "SIGNATURE INVALID — this pin was not signed by the stack release key. Refusing to install." 1
  fi
elif [[ "$ALLOW_UNSIGNED" -eq 1 ]]; then
  warn "WARNING: no VENDOR.sig and --allow-unsigned was passed. This tree is"
  warn "         whatever the branch committed — nothing vouches for it. Never"
  warn "         use this outside testing (ADR-104 D4)."
else
  die "VENDOR.sig is missing — an unsigned vendored tree is never installed on a laptop (ADR-104 D4). Pass --allow-unsigned only when testing an unreleased tree." 1
fi

# ── 2. Digest ──────────────────────────────────────────────────────────────
want="$(jq -r '.tree_digest // empty' "$PIN")"
[[ "$want" =~ ^[0-9a-f]{64}$ ]] || die "pin has no valid tree_digest — failing closed" 1
vtier="$(jq -r '.tier // empty' "$PIN")"
case "$vtier" in ''|*[!0-9]*) die "pin has no valid tier — failing closed" 1 ;; esac

# Symlinks are refused outright: `find -type f` skips them, so an ADDED
# symlink would dodge the digest entirely.
if [[ -n "$(cd "$STACK_DIR" && find . -type l | head -1)" ]]; then
  die "the vendored tree contains a symlink — refusing (symlinks are never vendored)" 1
fi

DIGEST_INPUT="$(mktemp)" || die "mktemp failed"
trap 'rm -f "${SIGNERS:-}" "${DIGEST_INPUT:-}"' EXIT
{
  printf 'meta:tier=%s\n' "$vtier"
  ( cd "$STACK_DIR" && find . -type f ! -path './VENDOR.json' ! -path './VENDOR.sig' | sed 's|^\./||' | sort ) \
    | while IFS= read -r f; do
        printf '%s:%s\n' "$f" "$(sha256_of "$STACK_DIR/$f")"
      done
} > "$DIGEST_INPUT"
got="$(sha256_of "$DIGEST_INPUT")"
if [[ "$got" != "$want" ]]; then
  echo "vendored-install: TREE DIGEST MISMATCH — the vendored stack does not match its pin." >&2
  echo "  pinned:   $want" >&2
  echo "  computed: $got" >&2
  echo "  A modified, deleted, or ADDED file all cause this. Refusing to install." >&2
  exit 1
fi

INSTALLER="$STACK_DIR/scripts/install.sh"
[[ -f "$INSTALLER" ]] || die "the verified tree has no scripts/install.sh — it was vendored wrong" 1

[[ -n "$TIER" ]] || TIER="$vtier"
case "$TIER" in ''|*[!0-9]*) die "--tier must be a number" ;; esac

SRC_SHA="$(jq -r '.source_sha // "unknown"' "$PIN")"
echo "vendored-install: verified $(jq -r '.file_count' "$PIN") files, stack $SRC_SHA, from $ROOT"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo "vendored-install: --dry-run — verification passed, nothing installed."
  exit 0
fi

# ── 3. Install ─────────────────────────────────────────────────────────────
# STACK_VENDORED_ROOT tells install.sh where the tree came from; install.sh
# independently detects the vendored shape from the pin beside it, so this is
# provenance for the stamp, never the trust decision (ADR-104 D5).
echo "vendored-install: installing tier $TIER (offline — no network, no credential)..."
STACK_VENDORED_ROOT="$ROOT" bash "$INSTALLER" --tier="$TIER" --skip-requirements ${EXTRA[@]+"${EXTRA[@]}"}
rc=$?
if [[ "$rc" -ne 0 ]]; then
  echo "vendored-install: the installer exited $rc — the stack may be partially installed." >&2
  exit 3
fi

cat <<EOF

vendored-install: done. Tier $TIER is live from this repo's vendored stack.

This laptop does NOT auto-update (ADR-104 D6) — there is no clone to fetch
from. To pick up a newer stack: pull this repo, then run this command again.
EOF
exit 0
