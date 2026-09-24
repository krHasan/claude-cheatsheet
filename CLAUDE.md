# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A searchable single-page web reference for Claude Code itself. No build step, no package
manager, no tests, no dependencies beyond a Google Fonts `<link>` (JetBrains Mono + Syne).

Open `index.html` directly in a browser — `xdg-open index.html`. It is deliberately built to
work over `file://`, which is why the section data lives in `.js` files that call a global
rather than `.json` files loaded with `fetch()` (CORS blocks `fetch` on `file://`). Keep it
that way unless the project starts being served, or double-clicking the file will break.

## Layout

```
index.html              shell only — topbar, empty containers, ordered <script> tags
assets/css/styles.css   all styling; design tokens at the top
assets/js/app.js        renderer, search/filter, theme toggle, copy-to-clipboard
assets/img/favicon.ico  tab icon — Claude's spark, copied from claude.ai/favicon.ico
data/00-meta.js         version, default model, platform list, footer links
data/NN-<name>.js       one card per file
RECONCILIATION.md       what each /update-commands pass changed, newest first
.claude/skills/         project skills — currently /update-commands
```

`index.html` holds no reference content. Everything visible comes from `data/`.

## Adding or changing a command

Edit the relevant `data/NN-*.js` file and reload — nothing else needs to change. Each file
calls `CHEATSHEET.add({...})` with one card:

```js
CHEATSHEET.add({
  id: "slash-session",            // DOM id / anchor
  title: "1 Slash — Session & Context",    // number prefix = the file's number, unpadded
  icon: "⊟",
  color: "orange",                // orange | blue | purple | green | gray
  tag: "slash",                   // slash | keys | cli | config — drives the filter chips
  groups: [                       // label: null renders an ungrouped list
    { label: "Session Control", rows: [
      { key: "/clear", type: "slash", desc: "Wipe conversation history" }
    ]}
  ],
  tip: { label: "Pro tip", text: "..." }   // optional footer note
});
```

**Row `type`** picks how the key renders: `slash` (orange pill), `code` (mono token), `kbd`
(parsed as a key chord), `text` (plain). Add `full: true` for a full-width row, as the
install one-liners use.

**Key chords** are parsed from the string, so write them the way they read:
`"Ctrl+X Ctrl+K"` → `Ctrl`+`X` `Ctrl`+`K`, `"Alt+B / F / D"` → `Alt`+`B` / `F` / `D`.

**`desc` supports two bits of markup** and nothing else: backticks become `<code>`, and
`[[Ctrl+M]]` becomes a rendered key chord. Everything else is HTML-escaped, so write `&`
and `<` literally.

To add a whole card, create the data file and add a `<script src>` for it in `index.html` —
**tag order there is card order**. `app.js` never needs editing to add content.

Card titles open with their file number, unpadded (`1`, `2`, … `11`), while the filename keeps
the zero-padded `NN-` so the directory sorts in card order. Inserting a card mid-page therefore
means renumbering the files after it, their titles, and the `<script>` list together — keep all
three in step.

## Cards, not columns

`.cards` uses CSS multi-column (`columns: 3 460px`), so cards flow top-to-bottom then across
and pack without ragged gaps. Card order is therefore reading order down a column, not across
a row. Within a card, `.group` is a grid whose key column is sized by subgrid to the widest
key *in that group*, so a long flag like `--dangerously-skip-permissions` widens only its own
group. Below 620px everything collapses to stacked key-over-description.

This page is screen-only. It was previously a print/A4 card; that constraint is gone, so
don't reintroduce fixed heights, tiny type, or `break-inside` rules aimed at paper.

## Content accuracy

The card documents Claude Code's real surface. Verify claims against `code.claude.com/docs`
(the old `docs.claude.com/en/docs/claude-code` URLs 301 there) or the local install
(`claude --help`, `claude <subcommand> --help`) before adding or editing an entry — a wrong
shortcut is the main failure mode for this project. The authoritative list of built-in
commands and bundled skills is `code.claude.com/docs/en/commands`; keyboard shortcuts are at
`/docs/en/interactive-mode`.

Version and model facts live in `data/00-meta.js` only — `version`, `defaultModel`, `models`,
`updated`, `platforms`. They render into both the meta strip and the footer, so there is one
place to update them.

The command tables were last reconciled against Claude Code 2.1.281 (September 2026).

Run `/update-commands` to redo that reconciliation against whatever build is installed now.
The skill carries the full procedure — how to read the command and keybinding tables straight
out of the `claude` binary, which doc pages are authoritative for what, and how to judge a
command that appears in one source but not the other. It records each pass in
`RECONCILIATION.md` and updates the version markers, so start there rather than auditing the
page by hand.

## Checking a change

There are no tests. After editing, confirm the data files still parse and the page still
renders:

```bash
for f in data/*.js assets/js/app.js; do node --check "$f" || echo "FAIL $f"; done
google-chrome --headless --disable-gpu --hide-scrollbars \
  --virtual-time-budget=4000 --window-size=1600,2200 \
  --screenshot=/tmp/shot.png "file://$PWD/index.html"
```

A card that silently disappears usually means its data file threw — check the browser console.
