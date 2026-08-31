---
name: update-commands
description: Reconcile this cheatsheet against the current Claude Code release — find commands, shortcuts, flags and settings that were added, renamed, or removed since the last reconciliation, verify each one against the local install and the official docs, then update the data files, the version markers, and the reconciliation log.
argument-hint: "[all | slash | keys | cli | config | <card-id>]"
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, WebFetch, Bash(which *), Bash(readlink *), Bash(claude --version), Bash(claude --help), Bash(claude * --help), Bash(strings *), Bash(node --check *), Bash(ls *), Bash(cat *), Bash(git status *), Bash(git log *)
---

# Update the command tables

Reconcile the cheatsheet against the Claude Code release installed on this machine. A wrong
shortcut is the main failure mode for this project, so **every** change you make must be
backed by evidence from a source below — never from memory of what Claude Code used to do.

## Arguments

```
ARGUMENTS: $ARGUMENTS
```

Empty means a full pass over every card. Otherwise read the words above as a scope plus an
optional modifier, in any order:

| Argument | Effect |
| :--- | :--- |
| *(none)* | Reconcile every card. |
| `slash` \| `keys` \| `cli` \| `config` | Only cards carrying that `tag`. |
| a card `id` (`sessions`, `cli-flags`, `keys-essential`, …) | Only that card. Match against the `id` field in `data/*.js`. |
| a `code.claude.com/docs/...` URL | Reconcile the page against that doc specifically, in addition to the usual sources. |
| `check` | Report the delta and change nothing on disk. Skips Step 5 and Step 7. |

Two examples: `sessions check` audits only the sessions card and writes nothing;
`cli https://code.claude.com/docs/en/cli-reference` re-derives the CLI cards from that page.

If an argument matches neither a tag, a card id, nor a URL, say so and ask rather than
guessing at what the user meant. Whenever the pass is scoped, say so in your report and do
**not** advance the reconciled-against version markers in Step 7 — a partial audit does not
certify the whole page.

## Step 1 — Establish the baseline

Read, in this order:

- `CLAUDE.md` → the line `The command tables were last reconciled against Claude Code <ver>`.
- `data/00-meta.js` → `version`, `defaultModel`, `models`, `updated`, `platforms`.
- `RECONCILIATION.md` → what the last pass changed and anything it flagged as unresolved.
- `claude --version` → the installed build.

If the installed build equals the last reconciled version and `RECONCILIATION.md` has no open
items, say so and stop — there is nothing to reconcile. Otherwise the delta between those two
versions is the window you are auditing.

## Step 2 — Extract ground truth from the local binary

This is the most reliable source: it is the exact build on this machine, and it contains
commands the docs omit. The `claude` launcher is a Bun single-file executable.

```bash
BIN=$(readlink -f "$(which claude)")
OUT=<your session scratchpad>/strings.txt   # ~2.7M lines — keep it out of the repo
strings -n 3 "$BIN" > "$OUT"
```

> **Use `LC_ALL=C /usr/bin/grep -a`, not bare `grep`.** `grep` on this machine resolves to
> ugrep, which fails with `exceeds complexity limits` on `.{0,N}` patterns over binary-ish
> input. GNU grep with `LC_ALL=C` handles them.

**Slash commands** — every built-in carries a `type` and a `description`:

```bash
LC_ALL=C /usr/bin/grep -ao 'type:"\(local\|local-jsx\|prompt\)",name:"[a-z0-9:_-]*",description:"[^"]\{0,120\}' "$OUT" | sort -u
```

Field order varies between commands, so that pattern misses some. For anything you expect but
do not see, search the name on its own and read the surrounding definition:

```bash
LC_ALL=C /usr/bin/grep -ao 'name:"<cmd>"[^\n]\{0,200\}' "$OUT" | sort -u
```

Look for `aliases:[...]` (record aliases), `isHidden`, `isEnabled`, and descriptions that
begin with `(removed)` or `Renamed to /x` — those mark a command that must come off the page
or change its entry.

**Bundled skills** are slugs in one contiguous block, not `type:`-tagged commands. Find the
block from any slug you already know:

```bash
LC_ALL=C /usr/bin/grep -ao '.\{0,700\}"code-review".\{0,700\}' "$OUT" | head -1
```

**Keyboard shortcuts** live in one default binding map, keyed by context (`Global`, `Chat`,
`Transcript`, `Task`, …). Dump it whole and read it:

```bash
LC_ALL=C /usr/bin/grep -ao '.\{0,900\}"ctrl+j":"chat:newline".\{0,2200\}' "$OUT" | head -1 | fold -w 200
```

Readline editing keys (`Ctrl+A/E/K/U/W/Y`, `Alt+B/F/D`) are **not** in that map — they are
handled in the input component. Absence there is not evidence they were removed; check the
docs for those.

**CLI flags and subcommands** come from the CLI itself:

```bash
claude --help
claude <subcommand> --help
```

Some subcommand helps wait on input and will hit the Bash timeout — run those in the
background and read the output file. `claude remote-control --help` documents flags that
`claude --help` does not list at all.

## Step 3 — Cross-check against the official docs

Fetch these (the old `docs.claude.com/en/docs/claude-code` URLs 301 here):

| Page | Covers |
| :--- | :--- |
| `code.claude.com/docs/en/commands` | Authoritative command list **and its Removed/Deprecated table** |
| `code.claude.com/docs/en/interactive-mode` | Keyboard shortcuts, input prefixes, vim mode |
| `code.claude.com/docs/en/cli-reference` | CLI flags |
| `code.claude.com/docs/en/sessions` | Resume, naming, picker keys, transcript storage |
| `code.claude.com/docs/en/settings-reference` | Settings keys |
| `code.claude.com/docs/en/skills` | Bundled skills |

The commands page is long enough that a single fetch truncates silently. Fetch it in slices
(`A–Q`, then `R–Z` plus the deprecated table) and confirm you got the tail.

## Step 4 — Decide, using both sources

| In binary | In docs | Verdict |
| :--- | :--- | :--- |
| yes | yes | Real. Use the doc's wording for the description. |
| yes | no | Real but undocumented or hidden (e.g. `/rename`). Keep it; do not "fix" it away. |
| no | yes | Usually a bundled skill gated off for this account (e.g. `/verify`). Confirm it appears in the bundled-skill slug block before keeping. |
| no | no | Not a command. Remove it. |

Also treat as changes: a new alias, a renamed command (`/extra-usage` → `/usage-credits`), a
description that no longer matches behavior, and a command whose argument list grew.

Never add an entry you could not confirm in at least one source. If a claim is genuinely
ambiguous, leave the page as it is and record the question in `RECONCILIATION.md` rather than
guessing.

## Step 5 — Apply the edits

Follow the conventions in `CLAUDE.md` — read it before editing. In short:

- One card per `data/NN-*.js`; the `<script>` order in `index.html` is the card order, and the
  zero-padded `NN-` filename prefix tracks that order. Each card's `title` opens with the same
  number, unpadded — `data/02-sessions.js` is titled `"2 Sessions — Resume, Name & Branch"`.
  Inserting a card mid-page means renumbering the files after it, their titles, and the
  `<script>` list together.
- `desc` supports backticks → `<code>` and `[[Ctrl+M]]` → key chord, and nothing else. No
  bold, no italics, no links — asterisks render literally.
- Row `type`: `slash` | `code` | `kbd` | `text`; `full: true` for a full-width row.
- Put a command on the one card its title covers. Repeat it on a second card only when the
  command is essential to that card's own subject — e.g. Remote Control lists `/rename`
  because argument-only invocation is a remote-control constraint, not to document `/rename`.
- Prefer editing an existing card. Add a card only when a genuinely new area appears, and
  keep cards near their topic neighbours.

## Step 6 — Verify

Both checks, every time:

```bash
for f in data/*.js assets/js/app.js; do node --check "$f" || echo "FAIL $f"; done
google-chrome --headless --disable-gpu --hide-scrollbars \
  --virtual-time-budget=4000 --window-size=1600,2400 \
  --screenshot=/tmp/shot.png "file://$PWD/index.html"
```

Read the screenshot. A data file that throws makes its card vanish silently, and `node --check`
will not catch a bad `CHEATSHEET.add` shape — only the render will.

## Step 7 — Record the pass

1. `data/00-meta.js` — set `version` to the installed build, and `updated` / `models` /
   `platforms` if those changed.
2. `CLAUDE.md` — update `The command tables were last reconciled against Claude Code <ver>`.
3. `RECONCILIATION.md` — prepend a dated entry in the existing format: the version range, what
   you added, changed, and removed with a one-line reason each, and any unresolved question
   for the next pass. Keep it terse; it is a changelog, not a report.

On a scoped pass, do step 3 only, and head the entry with the scope you audited. Steps 1 and 2
claim the whole page was checked, so they wait for a full pass.

Then tell the user what changed and what you deliberately left alone. Do not commit unless
they ask.
