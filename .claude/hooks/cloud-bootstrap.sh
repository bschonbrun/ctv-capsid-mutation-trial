#!/usr/bin/env bash
# Claude Code Stack — cloud session bootstrap
#
# WHY: Claude Code *cloud* sessions (claude.ai/code on web + iOS) run in an
# ephemeral container. The repo is cloned fresh, but the user's laptop
# ~/.claude is NEVER synced up — so personal/global skills like /goodmorning
# and /carbonight are not discoverable. This script installs the stack into the
# container's ~/.claude at session start so they load on every surface.
#
# USED TWO WAYS (see docs/CLOUD.md):
#   1. As the ENVIRONMENT setup script (configured per-environment in the
#      Claude Code web UI). Then EVERY cloud session of EVERY repo gets the
#      stack, without committing anything into each project.
#   2. Copied into a single repo's .claude/hooks/ by /project-init and wired
#      to that repo's SessionStart hook, so that repo self-bootstraps the
#      stack in cloud with no per-environment config.
#
# It clones this repo, then runs the idempotent installer: install.sh
# --mode=merge backs up ~/.claude and deep-merges JSON (user wins on conflict),
# so re-runs are safe.
#
# 2026-08-29: there is NO DEFAULT SOURCE. The public scrubbed mirror this
# script used to default to was deleted (it auto-published every push for 37
# days; see ADR-036's superseded banner). Both CLAUDE_STACK_REPO and, for a
# private source, CLAUDE_STACK_REPO_TOKEN must be set on the environment.
# Unset means DEGRADED, and degraded is loud — see boot_status() below.
#
# The permanent fix is vendoring the stack into each repo so no credential is
# needed at all: docs/superpowers/specs/2026-08-29-vendored-stack-delivery-design.md
#
# REQUIRED ENV (until vendoring ships):
#   CLAUDE_STACK_REPO        e.g. github.com/get-lade/claude-code-stack.
#                            No default. Unset -> degraded session.
#   CLAUDE_STACK_REPO_TOKEN  required when the source is private (it is).
#                            Passed via GIT_ASKPASS, never in argv or
#                            .git/config. Never hardcode it.
# OPTIONAL ENV:
#   CLAUDE_STACK_REF         default: main
#   CLAUDE_STACK_TIER        default: 2
#
# EXIT POLICY: best-effort — it never hard-fails the cloud session. But it no
# longer fails QUIETLY: every failure path writes ~/.claude/.stack-boot-status.json
# and prints a banner to stdout, the SessionStart context channel.

set -uo pipefail

log() { printf '[stack-cloud-bootstrap] %s\n' "$*" >&2; }

# Only meaningful in the remote/cloud container. Local sessions install the
# stack themselves via ./scripts/install.sh, so this is a true no-op there.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Idempotency: two hooks may fire for the same session (the environment setup
# script and a repo's committed hook) — whichever lands first wins; the rest
# no-op on this marker.
MARKER="/tmp/.claude-stack-cloud-bootstrap.done"
# The idempotency marker above lives in /tmp, which the Bash sandbox grants the
# agent write access to (ADR-063 D4) — fine for "has bootstrap already run",
# useless as a security signal, because the agent can create or delete it. Any
# consumer deciding whether WRITES are permitted reads this attestation instead:
# it is under ~/.claude/state/attest/**, which both floors mark denyWrite, so a
# Bash-tool process cannot author or remove it (2026-08-24 scan, F27).
CLOUD_ATTEST_DIR="$HOME/.claude/state/attest"

# --- cloud-session attestation --------------------------------------------
# Stamped on EVERY remote invocation, before any of the early exits below, so
# a session that is already up to date is attested exactly like one that just
# installed. It used to be written only after a successful install, which left
# the up-to-date path unattested.
#
# The format is defined once, in scripts/lib/session-attest.sh — but this
# script is pasted into cloud environments standalone and runs before that
# file exists in the container, so it carries a copy of the writer.
# tests/test-cloud-bootstrap.sh proves the copy and the validator agree.
#
# session_owner is what makes the mark belong to THIS session rather than to
# this machine. v1 had no identity at all and outlived its session; v2 named
# the boot, and a boot is shared by every session between two reboots, so the
# next session on the same $HOME inherited a mark it never earned (panel r12
# and r14, docs/panel-2026-08-29/r{12,14}/p359-reviewer.md, both BLOCKING).
# The mark now names the harness process, and is valid only inside that
# process's tree — which no environment variable can fake.
ATTEST_TTL_SECONDS=43200

attest_boot_id() {
  id=''
  # Linux: the kernel hands out a fresh UUID at every boot.
  if [ -r /proc/sys/kernel/random/boot_id ]; then
    id="$(cat /proc/sys/kernel/random/boot_id 2>/dev/null | tr -cd 'a-f0-9-' || true)"
  fi
  # Everywhere with a POSIX ps: PID 1's start time. In a container that is the
  # container's own start, which is exactly the lifetime we want to bind to.
  [ -n "$id" ] || id="$(ps -o lstart= -p 1 2>/dev/null | tr -cd '0-9A-Za-z:' || true)"
  # macOS without ps.
  [ -n "$id" ] || id="$(sysctl -n kern.boottime 2>/dev/null | tr -cd '0-9,' || true)"
  # Last resort; minute resolution, which still separates two boots.
  [ -n "$id" ] || id="$(who -b 2>/dev/null | tr -cd '0-9A-Za-z:' || true)"
  [ -n "$id" ] || return 1
  printf '%s' "$id"
}

attest_proc_start() {
  ap_p="${1:-}"; ap_s=''
  case "$ap_p" in ''|*[!0-9]*) return 1 ;; esac
  if [ -r "/proc/$ap_p/stat" ]; then
    ap_s="$(sed 's/.*) //' "/proc/$ap_p/stat" 2>/dev/null | awk '{print $20}' | tr -cd '0-9' || true)"
  fi
  [ -n "$ap_s" ] || ap_s="$(ps -o lstart= -p "$ap_p" 2>/dev/null | tr -cd '0-9A-Za-z:' || true)"
  [ -n "$ap_s" ] || return 1
  printf '%s' "$ap_s"
}

attest_ancestors() {
  aa_p="$$"; aa_hops=0
  while [ "$aa_hops" -lt 64 ]; do
    case "$aa_p" in ''|0|1) return 0 ;; esac
    aa_start="$(attest_proc_start "$aa_p")" || return 0
    printf '%s:%s\n' "$aa_p" "$aa_start"
    aa_p="$(ps -o ppid= -p "$aa_p" 2>/dev/null | tr -cd '0-9' || true)"
    aa_hops=$((aa_hops + 1))
  done
}

attest_is_ancestor() {
  ia_want="${1:-}"; ia_found=1
  [ -n "$ia_want" ] || return 1
  ia_list="$(attest_ancestors)"
  for ia_line in $ia_list; do
    [ "$ia_line" = "$ia_want" ] && { ia_found=0; break; }
  done
  return "$ia_found"
}

# CLAUDE_PID is a hint, not a credential: it counts only after the kernel
# confirms it names a live ancestor of this process.
attest_session_owner() {
  for so_cand in "${CLAUDE_PID:-}" "${CLAUDE_CODE_SESSION_PID:-}"; do
    case "$so_cand" in ''|*[!0-9]*) continue ;; esac
    so_start="$(attest_proc_start "$so_cand")" || continue
    attest_is_ancestor "$so_cand:$so_start" || continue
    printf '%s:%s' "$so_cand" "$so_start"
    return 0
  done
  so_list="$(attest_ancestors)"
  for so_line in $so_list; do
    so_pid="${so_line%%:*}"
    [ "$(ps -o comm= -p "$so_pid" 2>/dev/null | tr -d ' ' || true)" = "claude" ] || continue
    printf '%s' "$so_line"
    return 0
  done
  return 1
}

stamp_cloud_session() {
  # Failure paths deliberately remove NOTHING: marks are session-keyed files
  # (panel re-review r3) and any other file in the directory is another live
  # session's evidence, not this writer's to destroy. The validator removes
  # marks that can never be valid again.
  boot="$(attest_boot_id)" || {
    log "WARNING: no boot identity available; not attesting this session."
    return 0
  }
  owner="$(attest_session_owner)" || {
    log "WARNING: no session identity available; not attesting this session."
    return 0
  }
  now="$(date +%s)"
  # Session-keyed filename, a transcription of session-attest.sh's
  # attest_path_for: one mark file per owner, so a second session's stamp can
  # never replace this session's mark (panel re-review r3, blocking).
  mark="$CLOUD_ATTEST_DIR/cloud-session.$(printf '%s' "$owner" | tr -c 'A-Za-z0-9' '-').json"
  mkdir -p "$CLOUD_ATTEST_DIR" 2>/dev/null || return 0
  # Temp-file-and-rename, mirroring session-attest.sh's attest_write (panel
  # re-review B1): `>` truncates before it writes, so a concurrent validator
  # could read a torn file, classify it invalid, and unlink a live session's
  # mark for good. rename is atomic; a reader sees old bytes or new, never a
  # torn file. This inline copy must stay a transcription of attest_write.
  tmp="$(mktemp "$CLOUD_ATTEST_DIR/.cloud-session.XXXXXX" 2>/dev/null)" || return 0
  if printf '{"schema":"cloud-session/v3","attested_by":"cloud-bootstrap.sh","boot_id":"%s","session_owner":"%s","issued_at":%s,"expires_at":%s}\n' \
    "$boot" "$owner" "$now" "$((now + ATTEST_TTL_SECONDS))" > "$tmp" 2>/dev/null \
    && mv -f "$tmp" "$mark" 2>/dev/null; then
    return 0
  fi
  rm -f "$tmp" 2>/dev/null || true
}

stamp_cloud_session


STAMP="$HOME/.claude/.stack-install.json"
INSTALL_FAILED_FLAG="$HOME/.claude/.stack-install-failed"

# The .done marker records "a bootstrap finished"; it is NOT a lock, and two
# hooks firing for the same session (environment setup script + a repo's
# committed hook) can both observe no marker and race install.sh into the
# same ~/.claude (reviewer, round-12 blocking). mkdir is the lock: atomic on
# every POSIX filesystem. The loser exits quietly — the winner writes the
# status for both. A lock older than 15 minutes is a crashed holder and is
# reclaimed; a silently-never-running bootstrap is the disease this script
# exists to cure, so the stale case must not no-op forever.
# Scoped per-$HOME (reviewer, round-13 blocking): the two invocations that
# genuinely race — environment script + committed repo hook — share a HOME,
# while a concurrent bootstrap for a DIFFERENT user must not be silenced by
# this one's lock; it installs into a different ~/.claude entirely.
# cksum, not tr-sanitization: '/home/alice-dev' and '/home/alice_dev' would
# sanitize to one name and share a lock (reviewer, round-15 blocking).
# cksum is POSIX and collision-adequate for the handful of HOMEs one host
# ever has; the raw HOME stays out of the name so it needs no quoting rules.
LOCK_DIR="/tmp/.claude-stack-cloud-bootstrap.$(printf '%s' "$HOME" | cksum | tr -c 'A-Za-z0-9' '_').lock"
if mkdir "$LOCK_DIR" 2>/dev/null; then
  printf '%s' "$$" > "$LOCK_DIR/pid" 2>/dev/null || true
else
  # Reclaim only a PROVABLY dead holder: age alone would steal the lock
  # from a live install that is merely slow — a big clone on a cold cache
  # can exceed any fixed budget — and two install.sh runs interleaving
  # their merges is the exact race the lock exists to stop (reviewer,
  # round-14 blocking). No pid file (pre-crash write, or unwritable /tmp
  # entry) falls back to the age check.
  holder="$(cat "$LOCK_DIR/pid" 2>/dev/null || true)"
  case "$holder" in
    *[!0-9]*|'') holder="" ;;
  esac
  if [ -n "$holder" ] && kill -0 "$holder" 2>/dev/null; then
    log "another bootstrap invocation (pid $holder) holds the lock; letting it finish."
    exit 0
  fi
  lock_age="$(( $(date +%s) - $(stat -c %Y "$LOCK_DIR" 2>/dev/null || stat -f %m "$LOCK_DIR" 2>/dev/null || date +%s) ))"
  if [ -n "$holder" ] || [ "$lock_age" -gt 900 ]; then
    # Holder pid is dead, or no pid and the lock is old: crashed holder.
    # Reclaim via rename-to-grave, not rm+mkdir: two reclaimers doing
    # rm+mkdir can interleave so the second rm deletes the first's freshly
    # won lock and both run install.sh (reviewer, round-16 blocking). mv of
    # a directory is atomic — exactly one reclaimer's mv succeeds; the
    # loser's mv fails and it exits.
    # The reclaimer CLEANS and exits — it never installs (round-21,
    # blocking: two reclaimers could interleave so the second's mv stole
    # the first's freshly recreated lock and both ran install.sh; no
    # in-place recreate survives that interleaving). Cost: one extra
    # session start after a crashed bootstrap, which the next boot's clean
    # mkdir wins. Correctness over latency.
    grave="$LOCK_DIR.reclaimed.$$.$RANDOM"
    mv "$LOCK_DIR" "$grave" 2>/dev/null || exit 0
    rm -rf "$grave" 2>/dev/null
    log "cleared a crashed bootstrap's stale lock; the next session start installs."
    exit 0
  else
    log "another bootstrap invocation holds the lock; letting it finish."
    exit 0
  fi
fi
trap 'rm -rf "$LOCK_DIR" 2>/dev/null' EXIT

BOOT_STATUS="$HOME/.claude/.stack-boot-status.json"

# Record how this session got (or failed to get) the stack, and shout when it
# did not. Spec 2026-08-29-vendored-stack-delivery-design D1/D2.
#
# WHY THIS EXISTS: this script exits 0 on every failure path, by design — a
# cloud session must never be hard-failed. For a year that meant a session
# with no stack was indistinguishable from a working one: no skills, no
# hooks, no gates, and nothing said so. A session with no stack is not a
# degraded session, it is an UNENFORCED one, so it has to announce itself.
#
# stdout is the SessionStart hook's context channel (log() writes to stderr,
# which nobody reads), so the degraded banner goes to stdout deliberately.
# JSON-escape a value for safe embedding. $reason is built from $REPO/$REF,
# which an environment owner controls: a quote or backslash there would
# otherwise produce malformed JSON, and a consumer that cannot parse this file
# may read it as "nothing wrong" — reintroducing the exact silence this whole
# change exists to remove, one layer down.
# RFC 8259 forbids ALL raw control characters (U+0000-U+001F) in strings, not
# just the three that are conventionally escaped. Hand-rolled escaping missed
# that and produced unparseable status files -- and a consumer that cannot
# parse this file may read it as "nothing wrong", which is the very silence
# this change exists to remove. Prefer jq, which is correct by construction;
# the fallback deletes every C0 byte rather than pretending to escape them.
json_escape() {
  if command -v jq >/dev/null 2>&1; then
    printf '%s' "$1" | jq -Rs '.' | sed -e 's/^"//' -e 's/"$//'
  else
    printf '%s' "$1" | tr -d '\000-\037' | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'
  fi
}

# Last-resort scrub. This is a SAFETY NET, not the control: credentials are
# removed from $REPO once at ingestion (see strip_credential below), so by the
# time any message is built there is nothing left to scrub. It stays because a
# net costs nothing and two earlier attempts to make sink-side scrubbing THE
# control both shipped leaks -- each anchored on a scheme that had already been
# stripped, so the pattern never fired in the one case it existed for.
redact() {
  printf '%s' "$1" | sed -E \
    -e 's#[^/@[:space:]]*:[^/@[:space:]]+@#<redacted>@#g' \
    -e 's#[A-Za-z0-9_-]{16,}@#<redacted>@#g' \
    -e 's#([?&](access_token|token|password)=)[^&[:space:]]+#\1<redacted>#g'
}

boot_status() {
  # A vendored tree that failed verification and was skipped rides along on
  # every subsequent status, so the skip is never silent (round 16).
  set -- "$1" "$2${VENDOR_NOTE:-}" "${3:-}"
  state="$1"; reason="$(json_escape "$(redact "$2")")"; sha="$(json_escape "${3:-}")"
  mkdir -p "$HOME/.claude" 2>/dev/null || true
  # Temp-file-and-rename: a concurrent status consumer must never observe a
  # truncated, unparsable file (reviewer, non-blocking).
  _bs_tmp="$(mktemp "$HOME/.claude/.stack-boot-status.XXXXXX" 2>/dev/null)" || _bs_tmp=""
  if [ -n "$_bs_tmp" ] \
     && printf '{"schema":"stack-boot-status/v1","state":"%s","reason":"%s","source_sha":"%s","at":"%s"}\n' \
       "$state" "$reason" "$sha" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$_bs_tmp" 2>/dev/null \
     && mv -f "$_bs_tmp" "$BOOT_STATUS" 2>/dev/null; then
    :
  else
    rm -f "$_bs_tmp" 2>/dev/null
    # A status file we could not write is itself a problem worth saying aloud,
    # rather than swallowing (reviewer, non-blocking finding).
    log "WARNING: could not write $BOOT_STATUS"
  fi
  if [ "$state" = "degraded" ]; then
    # The banner must not overstate the outage: a /project-init'd repo carries
    # committed portable-core skills that work with no configuration, so
    # "no skills are active" is FALSE there — and an agent reading it would
    # skip workflows that are in fact present (prime, blocking). The sentinel
    # records the same distinction (scope=none|partial) so a merge check can
    # tell an unenforced session from a partially-enforced one.
    _bs_scope="none"
    if [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "${CLAUDE_PROJECT_DIR}/.claude/skills" ]; then
      _bs_scope="partial"
    fi
    # Sentinel a merge check can see without trusting the session to confess.
    # Only ever written inside a KNOWN project dir. It must not fall back to
    # "." — that writes into whatever directory the hook happens to run from,
    # which during this change's own tests was the stack repo itself.
    if [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "${CLAUDE_PROJECT_DIR}" ]; then
      mkdir -p "$CLAUDE_PROJECT_DIR/.claude/state" 2>/dev/null || true
      printf '%s\nscope=%s\n' "$(redact "$2")" "$_bs_scope" > "$CLAUDE_PROJECT_DIR/.claude/state/degraded" 2>/dev/null || true
    fi
    printf '⛔ NO STACK — degraded session — %s\n' "$(redact "$2")"
    if [ "$_bs_scope" = "partial" ]; then
      printf 'Only this repo'"'"'s committed portable-core skills are available. Global hooks, review gates, and subagents are NOT installed.\n'
    else
      printf 'No skills, no hooks, no review gates are active in this session.\n'
    fi
    printf 'Set CLAUDE_STACK_REPO and CLAUDE_STACK_REPO_TOKEN in this environment to restore it.\n'
  else
    # Any healthy state clears a sentinel left by an earlier failed boot.
    # This lives here, not at one call site, so every path that reaches a
    # healthy state clears it — including the marker short-circuit.
    if [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "${CLAUDE_PROJECT_DIR}" ]; then
      rm -f "$CLAUDE_PROJECT_DIR/.claude/state/degraded" 2>/dev/null || true
    fi
  fi
}

# The public mirror CarboNet-Nano/claude-code-stack-core was DELETED on
# 2026-08-29 (it auto-published every push for 37 days; see ADR-036 and the
# vendored-delivery spec). There is deliberately NO default source now:
# defaulting to a deleted repo produced three doomed clone attempts and then
# a silent stackless session. Unset means degraded, and degraded is loud.
REF="${CLAUDE_STACK_REF:-main}"
TIER="${CLAUDE_STACK_TIER:-2}"

# Evidence that a stack is PRESENTLY usable in this $HOME — not merely that
# an install once ran. The stamp alone proves a prior attempt; the skills
# tree is what a session actually loads (reviewer + prime, round-9
# blocking: verdicts here were computed from env vars and markers, never
# from the installed artifacts they claim to describe).
stack_present() {
  # A failed install.sh may leave a PARTIAL tree behind a valid-looking
  # stamp; the flag written on that path outlives the boot and vetoes the
  # artifact evidence until a later install succeeds (reviewer, round-10
  # blocking).
  [ ! -f "$INSTALL_FAILED_FLAG" ] || return 1
  [ -f "$STAMP" ] || return 1
  [ -d "$HOME/.claude/skills" ] || return 1
  [ -n "$(ls -A "$HOME/.claude/skills" 2>/dev/null)" ]
}

# D5 (vendored-stack spec, ADR-097 candidate) — vendored wins over clone,
# even when both are possible: the session already has permission to read
# the repo it is working in, so a stack committed INSIDE that repo needs no
# credential, no network, and no environment configuration. Deterministic
# too: a session reviewing a branch runs the stack version that branch
# pinned. The digest check is inlined rather than trusting the tree's own
# copy of vendor-verify.sh — a tamperer would replace the verifier first.
# SCOPE, stated honestly (reviewer, round 16): VENDOR.json lives beside the
# tree, so an actor who can rewrite the tree can recompute the digest and
# rewrite the pin too. This check catches CORRUPTION and DRIFT (interrupted
# bumps, merge damage, partial checkouts); defense against a repo-write
# attacker is D9's CODEOWNERS + signed-manifest + required CI check, phase
# 2 of the spec — and fleet rollout is gated on that phase.
# A mismatch never installs (D1).
VENDOR_DIR="${CLAUDE_PROJECT_DIR:-}/.claude/stack"

# #506 — the signature is REQUIRED here, exactly as on the laptop (ADR-104
# D3/D4). The digest alone proves the tree matches its pin; only the
# signature proves the pin came from the release key, and a branch with
# write access can rewrite both tree and pin. The trust root is a literal,
# byte-identical to config/vendor-signing/allowed_signers, the laptop entry
# point, and templates/vendor/vendor-verify.yml — rotating the key means
# updating all four in one PR; tests/test-vendor-stack.sh pins them to
# agree. Nothing under the tree is sourced before this passes.
# CLAUDE_STACK_ALLOW_UNSIGNED_VENDORED=true tolerates a MISSING VENDOR.sig
# for testing an unreleased tree (the cloud twin of --allow-unsigned) and is
# loud about it; a signature that is present but wrong is refused regardless.
VENDOR_SIG_PRINCIPAL="stack-release@get-lade.com"
VENDOR_SIG_NAMESPACE="carbonet-stack-vendor@v1"
VENDOR_ALLOWED_SIGNERS_LINE='stack-release@get-lade.com namespaces="carbonet-stack-vendor@v1" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOtWXVpsOYVZ49RkCdOVDkVZvIWNIPvIGVnSUN5gv+Bp'
VENDOR_SIG_WHY=""
vendored_signature_ok() {
  local pin="$VENDOR_DIR/VENDOR.json" sig="$VENDOR_DIR/VENDOR.sig" signers
  [ -f "$pin" ] && [ ! -L "$pin" ] || { VENDOR_SIG_WHY="VENDOR.json missing or a symlink"; return 1; }
  if [ ! -e "$sig" ] && [ ! -L "$sig" ]; then
    if [ "${CLAUDE_STACK_ALLOW_UNSIGNED_VENDORED:-}" = "true" ]; then
      log "WARNING: no VENDOR.sig and CLAUDE_STACK_ALLOW_UNSIGNED_VENDORED=true — this tree is whatever the branch committed; nothing vouches for it. Testing only (ADR-104 D4)."
      return 0
    fi
    VENDOR_SIG_WHY="unsigned: no VENDOR.sig"; return 1
  fi
  [ -f "$sig" ] && [ ! -L "$sig" ] || { VENDOR_SIG_WHY="signature file is a symlink"; return 1; }
  command -v ssh-keygen >/dev/null 2>&1 || { VENDOR_SIG_WHY="ssh-keygen missing, signature cannot be checked"; return 1; }
  signers="$(mktemp)" || { VENDOR_SIG_WHY="mktemp failed"; return 1; }
  printf '%s\n' "$VENDOR_ALLOWED_SIGNERS_LINE" > "$signers"
  if ssh-keygen -Y verify -f "$signers" -I "$VENDOR_SIG_PRINCIPAL" -n "$VENDOR_SIG_NAMESPACE" \
       -s "$sig" < "$pin" >/dev/null 2>&1; then
    rm -f "$signers"; return 0
  fi
  rm -f "$signers"
  VENDOR_SIG_WHY="signature invalid: not signed by the stack release key"; return 1
}
# Pin reads work WITHOUT jq (round-20 blocking: a cloud image lacking jq
# must not lose the keyless offline path). jq when present, else the same
# sed shape installed_sha already uses on the machine-written pin.
vendor_pin_field() {
  if command -v jq >/dev/null 2>&1; then
    jq -r ".$1 // empty" "$VENDOR_DIR/VENDOR.json" 2>/dev/null
  else
    sed -n 's/.*"'"$1"'"[[:space:]]*:[[:space:]]*"\{0,1\}\([^",}]*\)"\{0,1\}.*/\1/p' "$VENDOR_DIR/VENDOR.json" 2>/dev/null | head -1
  fi
}
vendored_digest_ok() {
  # LC_ALL=C for the whole computation: `sort` order is locale-dependent,
  # and the digest was built under C — without this pin, a legitimately
  # vendored repo boots degraded on any machine with a different locale
  # (prime, round-16 blocking).
  # Not `local LC_ALL=C` — that reaches no child process. Every
  # locale-sensitive child below is env-prefixed explicitly.
  [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "$VENDOR_DIR" ] || return 1
  [ -f "$VENDOR_DIR/VENDOR.json" ] && [ ! -L "$VENDOR_DIR/VENDOR.json" ] || return 1
  # A symlink anywhere in the tree is tamper: find -type f skips them, so
  # an added symlink would dodge the digest (round-20 blocking).
  [ -z "$(cd "$VENDOR_DIR" && find . -type l | head -1)" ] || return 1
  local want got list f
  want="$(vendor_pin_field tree_digest)"
  case "$want" in *[!0-9a-f]*|'') return 1 ;; esac
  [ "${#want}" -eq 64 ] || return 1
  # The tier participates in the digest (meta line), so the pin's tier
  # cannot be swapped without breaking verification; -path (not -name) so a
  # nested file named VENDOR.json is digested like any other (round 18).
  local vtier_d
  vtier_d="$(vendor_pin_field tier)"
  case "$vtier_d" in ''|*[!0-9]*) return 1 ;; esac
  list="$(mktemp)" || return 1
  printf 'meta:tier=%s\n' "$vtier_d" > "$list"
  # VENDOR.sig (the D9 phase-2 detached signature) sits beside the pin and,
  # like the pin, never participates in the digest — without this exclusion
  # every SIGNED tree read as tampered and booted degraded (caught by the
  # 2026-09-01 end-to-end birth test).
  ( cd "$VENDOR_DIR" && find . -type f ! -path './VENDOR.json' ! -path './VENDOR.sig' | sed 's|^\./||' | LC_ALL=C sort ) | while IFS= read -r f; do
    if command -v shasum >/dev/null 2>&1; then
      printf '%s:%s\n' "$f" "$(shasum -a 256 "$VENDOR_DIR/$f" | cut -d' ' -f1)"
    else
      printf '%s:%s\n' "$f" "$(sha256sum "$VENDOR_DIR/$f" | cut -d' ' -f1)"
    fi
  done >> "$list"
  if command -v shasum >/dev/null 2>&1; then got="$(shasum -a 256 "$list" | cut -d' ' -f1)"
  else got="$(sha256sum "$list" | cut -d' ' -f1)"; fi
  rm -f "$list"
  [ "$got" = "$want" ]
}

# OPT-IN (architecture-critic, round-19 blocking): the environment owner
# (who already controls CLAUDE_STACK_REPO and the token) flips this on per
# environment. It was the ONLY defense while the vendored path was
# digest-only — any branch that merely ADDED .claude/stack/ would have
# become the session's hooks and installer. Since #506 the signature check
# above is the defense; the switch stays as the owner's say over what a
# cloud environment boots from. Dropping it is a fleet-wide settings change
# and a separate step (ADR-104, consequences).
if [ "${CLAUDE_STACK_ALLOW_VENDORED:-}" != "true" ] && [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "$VENDOR_DIR" ]; then
  log "vendored tree present but CLAUDE_STACK_ALLOW_VENDORED is not 'true' — ignoring it (pre-D9 safety default)."
fi
if [ "${CLAUDE_STACK_ALLOW_VENDORED:-}" = "true" ] && [ -n "${CLAUDE_PROJECT_DIR:-}" ] && [ -d "$VENDOR_DIR" ]; then
  if ! vendored_signature_ok; then
    # Signature first, before a single file under the tree is digested or
    # read: an unsigned or mis-signed pin is not a tree we look inside. Same
    # fall-through as a digest failure (never seize the boot path), with the
    # WHY carried into the status so the fix is obvious.
    log "WARNING: vendored stack present but its signature did not verify ($VENDOR_SIG_WHY) — ignoring it; trying the clone path."
    VENDOR_NOTE=" (a vendored tree is present but failed verification and was ignored: $VENDOR_SIG_WHY)"
  elif vendored_digest_ok; then
    vtier="$(vendor_pin_field tier)"
    case "$vtier" in ''|*[!0-9]*) vtier=2 ;; esac
    vsha="$(vendor_pin_field source_sha)"
    log "vendored stack verified; installing tier $vtier offline (no network, no credential)..."
    if bash "$VENDOR_DIR/scripts/install.sh" --tier="$vtier" --skip-requirements; then
      rm -f "$INSTALL_FAILED_FLAG" 2>/dev/null
      : > "$MARKER"
      # Re-stamp so the mark's expiry tracks the install that just happened
      # rather than whenever this session first fired a bootstrap hook.
      stamp_cloud_session
      boot_status vendored "installed tier $vtier from the repo's vendored stack" "$vsha"
      # Same tail as the clone success path (prime, round-19 blocking: a
      # vendored boot must not silently drop the critic-CLI setup that
      # every other successful boot performs).
      VENDORED_BOOT_OK=1
    else
      # A verified tree whose INSTALL fails must not seize the boot path
      # any more than an unverifiable one: fall through to the clone path
      # with the note riding along (round-18 prime F1 — the two failures
      # have the identical consequence). The failure flag still records
      # the partial install for later boots.
      : > "$INSTALL_FAILED_FLAG" 2>/dev/null || true
      log "WARNING: vendored install.sh exited non-zero — trying the clone path."
      VENDOR_NOTE=" (vendored stack verified but its install failed; clone path attempted)"
    fi
  else
    # A vendored tree that fails verification is never installed — but it
    # must not SEIZE the boot path either (architecture-critic, round-16
    # blocking): an interrupted bump, a merge conflict, or a missing jq would
    # otherwise turn a repo with a perfectly working clone config into a
    # degraded session. Fall through to Paths A/B, loudly, and carry the
    # note into whatever status those paths write.
    log "WARNING: vendored stack present but failed verification — ignoring it; trying the clone path."
    VENDOR_NOTE=" (a vendored tree is present but failed verification and was ignored)"
  fi
fi

# A successful vendored boot skips the entire clone machinery and rejoins
# the shared tail (critic-CLI setup) below — parity with the clone path.
if [ "${VENDORED_BOOT_OK:-}" != "1" ]; then

if [ -z "${CLAUDE_STACK_REPO:-}" ]; then
  if stack_present; then
    # A stack from an earlier boot is installed and loads fine; the only
    # thing missing is a source to refresh FROM. Calling this "NO STACK"
    # would be false on the SessionStart channel and would flag an enforced
    # session as unenforced to any sentinel consumer (prime, blocking).
    log "no CLAUDE_STACK_REPO set; previously installed stack found — updates disabled this session."
    boot_status cloned "no stack source configured; running the previously installed stack (cannot refresh)"
    exit 0
  fi
  log "no CLAUDE_STACK_REPO set and no vendored stack present."
  boot_status degraded "no stack source configured for this environment"
  exit 0
fi
REPO="$CLAUDE_STACK_REPO"

# Trim surrounding whitespace first: a trailing newline or space is routine
# when pasting into a cloud environment's variable field, and the validator
# below rejects it as a disallowed character — while telling the operator the
# value cannot be shown. A whole class of support calls for one trim.
REPO="${REPO#"${REPO%%[![:space:]]*}"}"
REPO="${REPO%"${REPO##*[![:space:]]}"}"

# Strip any scheme the caller supplied so we control the auth method.
REPO="${REPO#https://}"
REPO="${REPO#http://}"
REPO="${REPO%.git}"

# Credential handling. FOUR review rounds found a leak here. Rounds 1-3 each
# enumerated the shapes a secret might arrive in -- userinfo before an "@",
# then a query string, then a fragment -- and each time a shape without those
# characters slipped past: a bare token as the whole value, a token as a path
# segment, a percent-encoded "@". Enumerating bad shapes is unbounded and lost
# four times.
#
# So the test is inverted. A source is host[:port]/org/repo and nothing else.
# Anything that is not that shape is REJECTED -- not stripped, not repaired.
# A bare token, a token in a path, "%40", a query string, an SCP-style
# "git@host:path" all simply fail to be a valid address, without this code
# needing to recognise any of them as secrets.
#
# The rejected value is NEVER echoed. It may BE the secret, so there is no
# safe way to quote it back, and every previous round's leak was a message
# printing a value someone thought had been cleaned.
is_valid_source() {
  case "$1" in
    *[!A-Za-z0-9._:/-]*) return 1 ;;   # only address characters
    */*) : ;;                          # must have at least one path segment
    *) return 1 ;;
  esac
  case "$1" in
    /*|*/) return 1 ;;                 # no leading or trailing slash
    *//*) return 1 ;;                  # no empty segment
  esac
  # A ":" is legal only as host:port with a NUMERIC port. "host:ghp_xxx/repo"
  # is not an address, and letting it through hands a token-shaped segment to
  # the URL builder (reviewer, blocking).
  local hostport="${1%%/*}"
  case "$hostport" in
    *:*)
      case "${hostport%%:*}" in *:*) return 1 ;; esac   # at most one colon
      case "${hostport#*:}" in ''|*[!0-9]*) return 1 ;; esac
      ;;
  esac
  case "${1#*/}" in *:*) return 1 ;; esac               # no colon after host
  return 0
}

if ! is_valid_source "$REPO"; then
  log "ERROR: CLAUDE_STACK_REPO is not a valid source address."
  log "       Expected host[:port]/org/repo -- for example"
  log "       github.com/get-lade/claude-code-stack."
  log "       The value is NOT shown here: if it contains a credential,"
  log "       printing it is how the credential escapes. Nothing was used."
  log "       Put tokens in CLAUDE_STACK_REPO_TOKEN, which is passed to git"
  log "       via GIT_ASKPASS and never appears in a command line."
  boot_status degraded "CLAUDE_STACK_REPO is not a valid host/org/repo address"
  exit 0
fi

# What messages are allowed to say: NOTHING from the operator's value.
#
# SIX review rounds found a leak here. Round 6 confirmed the previous change
# closed all thirteen earlier shapes -- and then showed the remaining hole is
# not closable by a better grammar: an AWS access key id
# (the AWS docs sample key id, "AKIA...EXAMPLE") and a Slack bot token are BOTH valid hostnames.
# Letters, digits, hyphens, no dot. Any rule tight enough to exclude them
# also excludes a legitimate single-label internal host like "gitserver".
#
# The previous commit claimed "there is no shape a secret can take that makes
# it printable". That was wrong, and the reviewer was right to call it out.
#
# So the design's own principle is extended rather than patched again. The
# PATH was already never printed, because a token in the org position is a
# valid org name. The HOST has exactly the same property. So the host is not
# printed either.
#
# What replaces it: a short fingerprint. The same source always produces the
# same code, so an operator can tell two environments apart, confirm a change
# took effect, or match a log line to a config -- without the literal value
# ever being written down. A fingerprint cannot be reversed into the secret.
source_fingerprint() {
  # SALTED. An unsalted 8-hex code is a 32-bit offline oracle: anyone who
  # reads a status file can hash candidate secret-shaped values and confirm
  # the configured one (reviewer, round-12 blocking). The salt is random,
  # per-machine, 0600, and never printed, so the code still identifies a
  # source ON THIS MACHINE (stable across boots) while being useless to
  # verify guesses off it.
  local h salt saltfile="$HOME/.claude/state/.source-fp-salt"
  salt="$(cat "$saltfile" 2>/dev/null || true)"
  if [ -z "$salt" ]; then
    mkdir -p "$(dirname "$saltfile")" 2>/dev/null
    salt="$(head -c 16 /dev/urandom 2>/dev/null | od -An -tx1 2>/dev/null | tr -d ' \n')"
    if [ -n "$salt" ]; then
      ( umask 077; printf '%s' "$salt" > "$saltfile" 2>/dev/null ) || salt=""
    fi
  fi
  if [ -n "$salt" ]; then
    if command -v shasum >/dev/null 2>&1; then
      h="$(printf '%s:%s' "$salt" "$1" | shasum -a 256 2>/dev/null | cut -c1-8)"
    elif command -v sha256sum >/dev/null 2>&1; then
      h="$(printf '%s:%s' "$salt" "$1" | sha256sum 2>/dev/null | cut -c1-8)"
    fi
  fi
  if [ -n "${h:-}" ]; then
    printf 'the configured source [%s]' "$h"
  else
    # No salt persisted (unwritable state dir) — an unsalted code would be
    # an oracle, so identify nothing rather than leak 32 bits.
    printf 'the configured source'
  fi
}

REPO_SAFE="$(source_fingerprint "$REPO")"

# The marker was originally documented as "once per container boot", on the
# assumption that /tmp is boot-scoped. It is not, on every cloud host: where
# /tmp survives a container restart, the marker outlives the install it
# describes and the stack silently freezes at whatever ref it was first
# installed from. Observed 2026-07-26 — a container still running a 4-day-old
# install, with a marker and an install stamp both dated to the original boot,
# while three upstream fixes to the installed hooks had landed since.
#
# So the marker alone no longer authorizes a skip. When one is present, ask the
# remote what `$REF` points at now and compare it to what is actually installed.
# One `ls-remote` (no clone) decides it.
#
# Fail-safe in both directions: no stamp, no `git`, or an unreachable remote all
# mean "cannot prove staleness" and honor the marker, so a network-blocked
# environment behaves exactly as it does today. Only a *positive* mismatch —
# a readable stamp and a readable remote sha that differ — re-runs the install.
installed_sha() {
  [ -f "$STAMP" ] || return 1
  if command -v jq >/dev/null 2>&1; then
    jq -r '.source_sha // empty' "$STAMP" 2>/dev/null
  else
    sed -n 's/.*"source_sha"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$STAMP" 2>/dev/null | head -1
  fi
}

TMP="$(mktemp -d)"
ASKPASS="$(mktemp)"
cleanup() { rm -rf "$TMP" "$ASKPASS" "$LOCK_DIR"; }
trap cleanup EXIT

# The source is private since 2026-08-29, so a token is expected. It is passed
# via GIT_ASKPASS so it stays OUT of argv and .git/config: the username
# (x-access-token) lives in the URL and git asks the helper only for the
# password. A tokenless clone is still attempted — it is the right behaviour if
# a source is ever public again — and simply fails loudly if it cannot read.
if [ -n "${CLAUDE_STACK_REPO_TOKEN:-}" ]; then
  export CLAUDE_STACK_REPO_TOKEN
  printf '#!/bin/sh\nexec printf "%%s" "$CLAUDE_STACK_REPO_TOKEN"\n' > "$ASKPASS"
  chmod +x "$ASKPASS"
  export GIT_ASKPASS="$ASKPASS"
  clone_url="https://x-access-token@${REPO}.git"
else
  clone_url="https://${REPO}.git"
fi

# The operator's value never reaches argv (reviewer, blocking). The grammar
# above cannot tell a legitimate org from a token-shaped one — this script's
# own history says enumerating secret shapes loses — so no grammar decides
# what is safe to put in a command line. Instead git is handed a fixed
# placeholder on argv and the real URL through a config FILE in a private
# HOME (url.<real>.insteadOf=<placeholder>), which `ps` cannot see.
#
# A config file under a swapped $HOME, not GIT_CONFIG_COUNT/KEY_n/VALUE_n:
# those env vars only exist since git 2.31 and OLDER GITS IGNORE THEM
# SILENTLY, which would turn every clone into three DNS failures against the
# placeholder and a "check your network policy" misdiagnosis (prime, round-9
# blocking). ~/.gitconfig has been read by every git ever shipped.
# /etc/gitconfig is deliberately KEPT (no GIT_CONFIG_NOSYSTEM): it is
# root-owned — not writable by the actor this shield defends against — and
# environments rely on it for proxies and private CAs; discarding it broke
# otherwise-reachable clones (reviewer, round-11 blocking). GIT_ASKPASS
# still applies (absolute path, HOME-independent).
# Bonus: the clone's .git/config records the placeholder, not the value.
GIT_URL_ARG="https://claude-stack-source.invalid/stack.git"
GIT_HOME="$TMP/githome"
mkdir -p "$GIT_HOME"
printf '[url "%s"]\n\tinsteadOf = %s\n' "$clone_url" "$GIT_URL_ARG" > "$GIT_HOME/.gitconfig"
git_src() {
  HOME="$GIT_HOME" XDG_CONFIG_HOME="$GIT_HOME/.config" "$@"
}

# Runs after clone_url so the staleness probe uses the same credential the
# clone would, rather than silently failing closed on a private repo.
if [ -f "$MARKER" ]; then
  have="$(installed_sha || true)"
  if [ -z "$have" ] || ! stack_present; then
    # No install stamp — or a stamp with no skills tree behind it — means
    # the marker proves nothing about this session: /tmp is shared, so
    # another hook (or another $HOME on the same host) may have set it, and
    # a stamp proves only a prior install ATTEMPT, not that the stack is
    # presently usable (reviewer, round-9 blocking). Install.
    log "marker present but no usable stack in this HOME — installing anyway."
  elif ! command -v git >/dev/null 2>&1; then
    # The skills tree is present and loads; only staleness is unknowable.
    boot_status cloned "installed stack present (marker; git unavailable, staleness unverified)" "$have"
    exit 0
  else
    want="$(GIT_TERMINAL_PROMPT=0 git_src git ls-remote "$GIT_URL_ARG" "$REF" 2>/dev/null | awk 'NR==1{print $1}')"
    if [ "$want" = "$have" ]; then
      # A healthy short-circuit is still a healthy boot. Previously this exited
      # without touching either the status file or a `degraded` sentinel left by
      # an EARLIER failed boot, so a working session could keep presenting as
      # broken (reviewer, blocking). Refresh both.
      boot_status cloned "already installed at $REF (marker short-circuit, verified)" "$have"
      exit 0
    fi
    if [ -z "$want" ]; then
      # ls-remote failed — network policy, revoked token, deleted repo. The
      # skills tree is present in this HOME (stack_present held above), so
      # the marker is honored (fail-safe for network-blocked environments),
      # but "up to date" and "could not verify" are different states and the
      # status file must not conflate them (reviewer, blocking; prime N5).
      boot_status cloned "installed stack present at $REF (marker; remote unverifiable)" "$have"
      exit 0
    fi
    log "installed stack is ${have:0:7}, $REF is now ${want:0:7} — refreshing."
  fi
fi

attempt=0
max=3
delay=2
until GIT_TERMINAL_PROMPT=0 \
      git_src git clone --depth 1 --branch "$REF" "$GIT_URL_ARG" "$TMP/stack" >/dev/null 2>&1; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge "$max" ]; then
    log "WARNING: could not clone $REPO_SAFE (ref $REF) after $max attempts."
    log "Check the environment's network policy allows GitHub."
    if stack_present; then
      # The clone touched nothing: whatever stack was installed before is
      # intact and will load. Printing NO STACK here would be false, and
      # whether it was printed used to depend on whether ls-remote happened
      # to succeed before the clone failed — not a meaningful distinction
      # (prime, round-10 blocking). The update failure still gets said.
      boot_status cloned "could not fetch the update; running the previously installed stack"
    else
      boot_status degraded "could not clone from $REPO_SAFE (ref $REF) after $max attempts"
    fi
    exit 0
  fi
  log "clone attempt $attempt failed; retrying in ${delay}s..."
  sleep "$delay"
  delay=$((delay * 2))
done

log "cloned from $REPO_SAFE (ref $REF); installing tier $TIER into ~/.claude (merge mode)..."
cloned_sha="$(git -C "$TMP/stack" rev-parse HEAD 2>/dev/null || echo "")"
# The clone is done; the token has no business in the installer's process tree
# or in anything it spawns.
unset CLAUDE_STACK_REPO_TOKEN GIT_ASKPASS
if bash "$TMP/stack/scripts/install.sh" --tier="$TIER" --skip-requirements; then
  log "stack tier $TIER installed. Custom skills/commands are now available."
  rm -f "$INSTALL_FAILED_FLAG" 2>/dev/null
  : > "$MARKER"
  # Re-stamp so the mark's expiry tracks the install that just happened
  # rather than whenever this session first fired a bootstrap hook.
  stamp_cloud_session
  boot_status cloned "installed tier $TIER from $REPO_SAFE (ref $REF)" "$cloned_sha"
else
  # A partial install is not a success. Previously this logged to stderr and
  # continued, so a half-installed stack presented exactly like a whole one.
  # The flag outlives this boot: whatever install.sh left behind must not be
  # read as a usable stack by a later boot's stack_present (reviewer,
  # round-10 blocking). Only a subsequent SUCCESSFUL install clears it.
  : > "$INSTALL_FAILED_FLAG" 2>/dev/null || true
  log "WARNING: install.sh exited non-zero; some stack pieces may be missing."
  boot_status degraded "install.sh failed for tier $TIER from $REPO_SAFE (ref $REF)" "$cloned_sha"
fi

fi  # end of the non-vendored (clone) machinery

# --- External-model critic CLIs (Codex / Gemini) ---------------------------
# reviewer/security-auditor/product-critic reach GPT-5.5 via the `codex` CLI;
# red-team/architecture-critic/historian reach Gemini via the `gemini` CLI.
# Cloud containers don't preinstall these, but the API keys are typically set
# as ENVIRONMENT VARIABLES (the intended cloud mechanism — see docs/CLOUD.md).
# Install each CLI when its key is present so the critic gate runs natively
# instead of relying on each agent's runtime fallback. Best-effort: a failure
# here never blocks the session, and the agents still have their fallbacks.
install_critic_cli() {
  key_name="$1"; pkg="$2"; bin="$3"
  if [ -z "$(printenv "$key_name" 2>/dev/null)" ]; then
    return 0
  fi
  if command -v "$bin" >/dev/null 2>&1; then
    log "$bin already on PATH; skipping $pkg install."
    return 0
  fi
  if ! command -v npm >/dev/null 2>&1; then
    log "WARNING: $key_name is set but npm is absent; cannot install $pkg. Agents will fall back at runtime."
    return 0
  fi
  log "$key_name present → installing $pkg ..."
  if npm i -g "$pkg" >/dev/null 2>&1; then
    log "$pkg installed ($bin available)."
  else
    log "WARNING: 'npm i -g $pkg' failed. Agents will fall back at runtime."
  fi
}

install_critic_cli OPENAI_API_KEY @openai/codex codex
install_critic_cli GEMINI_API_KEY @google/gemini-cli gemini

