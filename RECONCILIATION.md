# Reconciliation log

What each pass of `/update-commands` changed, newest first. The version in the heading is the
Claude Code build the page was verified against; it should match `version` in
`data/00-meta.js` and the reconciled-against line in `CLAUDE.md`.

---

## 2.1.281 — 2026-09-24

Full pass, 2.1.251 → 2.1.281. Verified against the local `2.1.281` binary, `claude --help` and
subcommand helps, and `/docs/en/{commands,interactive-mode,cli-reference,sessions,skills,remote-control,model-config}`.

**Fixed (was wrong)**

- `--allowedTools` — was "Restrict tools"; it auto-approves matching tools. Restricting is `--tools`, now added.
- `/verify` — it builds and runs the app to confirm a change, not a correctness/coverage/perf check.
- `/simplify` — applies its fixes, not just suggests.
- `/security-review` — reviews the branch diff vs origin's default branch; takes no PR/path target.
- `/status` — opens Settings on the Status tab (version, model, account, connectivity).
- `/rewind 3` example dropped — the command takes no argument in either source.
- `Ctrl+W` — deletes back to whitespace, not one word.
- `--debug` — filter binds only in the `=` form; key is now `--debug=<filter>`.

**Changed**

- Models: `opus`/default → Opus 5.5 (v2.1.280), `fable` → Fable 5.1 (v2.1.257). `00-meta.js` and the card 4 tip.
- Aliases recorded: `/clear` (`/reset`, `/new`), `/usage` (+`/stats`), `/rewind` (`/checkpoint`, `/undo`), `/tasks`
  (`/bashes`), `/doctor` (`/checkup`, now a skill that can fix), `/code-review` (`/review`, effort levels),
  `/permissions` (`/allowed-tools`), `claude update` (`upgrade`), `claude stop` (`kill`).
- `/clear [name]`, `/fast on|off`, `/model best`, `/context all`, `/loop` self-pacing, `Ctrl+D` double-press,
  `Ctrl+X Ctrl+K` confirm, `Alt+T` no-op on Opus 5.5/Fable, image paste `Alt+V` on Windows/WSL, Shift+Enter
  terminal list, `claude auth status` JSON output, `claude import` gains Cursor, `--permission-mode default`.

**Added**

- Card 1: `/autocompact`, `/btw`. Card 2: `claude --resume <path>`, `/fork`, `/background`, `claude project purge`.
- Card 3: `/plan`, `/run`. Card 4: `/advisor`, `/tui`. Card 5: `Ctrl+Enter` / `Ctrl+X Ctrl+S` send-now.
- Card 6: `Option+Enter`, `Alt+Y` note. Card 8: `--tools`, `--max-turns`.
- Card 9: "Background Sessions" group — `claude agents` (moved), `attach`, `logs`, `stop`, `rm`, `respawn`.

**Open questions for the next pass**

- `Ctrl+L`: still `chat:clearInput` in the binary's Chat map, still "Redraw the screen" in the docs. Card follows the docs.
- `claude remote-control --help` no longer lists `--sandbox` / `--no-sandbox`, but the binary still parses them and
  `/docs/en/remote-control` documents them. Kept on card 11.

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
