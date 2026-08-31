# Reconciliation log

What each pass of `/update-commands` changed, newest first. The version in the heading is the
Claude Code build the page was verified against; it should match `version` in
`data/00-meta.js` and the reconciled-against line in `CLAUDE.md`.

---

## 2.1.251 — 2026-08-31

Verified against the local `2.1.251` binary, `claude --help`, `/docs/en/commands`,
`/docs/en/interactive-mode`, and `/docs/en/sessions`.

**Removed**

- `/sessions` — not a command in any source. Replaced in the card by `/tasks`, which is what
  that row actually described (background subagents and shells).

**Changed**

- `/verify` — kept. Absent from `claude --help` and not enabled on this account, but present
  in the bundled-skill slug block and documented. Description corrected to correctness /
  coverage / performance.
- `/status` — was "login, active subagents, and background task list"; it shows model, effort
  level, session directory, and account info. The background list is `/tasks`.
- `Ctrl+T` — was "task list panel"; it toggles Claude's to-do checklist, explicitly not the
  background-task view.
- `data/00-meta.js` version 2.1.246 → 2.1.251.

**Restructured**

- New card `data/02-sessions.js` built from `/docs/en/sessions`: resume entry points, session
  picker keys, naming, branch/fork, export and transcript storage.
- `data/01-slash-session.js` → "Slash — Context & Output"; `/resume`, `/rename`, `/branch`,
  `/export` moved to the sessions card.
- `data/08-cli-flags.js` lost `-c`, `-r`, `-n`, `--fork-session`, `--from-pr` to the same
  card; its "Session Start" group is now "Launch".
- Data files renumbered so the `NN-` prefix still matches `<script>` order in `index.html`.

**Open questions for the next pass**

- `Ctrl+L`: the binary's Chat binding map has `"ctrl+l":"chat:clearInput"`, while
  `/docs/en/interactive-mode` documents it as "Redraw screen". The card follows the docs.
  Worth re-checking whether the binding or the doc moved.
