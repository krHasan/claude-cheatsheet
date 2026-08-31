# claude-cheatsheet

A searchable web reference for [Claude Code](https://code.claude.com/docs) — slash commands,
keyboard shortcuts, CLI flags, and project config paths.

## Use it

Open `index.html` in a browser. That's it — no build, no server, no dependencies.

- **Search** — type to filter every card at once, or press <kbd>/</kbd> to jump to the box
- **Filter** — All / Slash / Keys / CLI / Config
- **Copy** — click any command or flag to copy it
- **Theme** — follows your system, with a manual toggle that sticks

## Keep it current

Claude Code ships often, and commands get added, renamed, and removed between releases. The
repo carries a skill that does the reconciliation for you: it reads the command and keybinding
tables straight out of the installed `claude` binary, cross-checks them against the official
docs, updates the data files, and logs the pass in `RECONCILIATION.md`.

```
/update-commands
```

Run it from a Claude Code session in this directory. It only runs when you invoke it — it
won't fire on its own.

### Scoping it with an argument

A full pass checks every card. Pass an argument to narrow it:

| Command | What it does |
| :--- | :--- |
| `/update-commands` | Full pass over every card, then bumps the version markers |
| `/update-commands slash` | Only the cards tagged `slash` |
| `/update-commands keys` | Only the keyboard cards |
| `/update-commands cli` | Only the CLI flag, auth, and session cards |
| `/update-commands config` | Only the `CLAUDE.md` / config card |
| `/update-commands sessions` | Only that one card, by its `id` |
| `/update-commands check` | Report what changed upstream and touch nothing on disk |

The scope can be a filter tag, a card `id`, or a `code.claude.com` doc URL, and `check` can be
combined with any of them:

```
/update-commands cli-flags check
```
> Audit just the CLI Flags card and report — no edits.

```
/update-commands sessions https://code.claude.com/docs/en/sessions
```
> Re-derive the sessions card from that specific doc page.

```
/update-commands keys check
```
> Tell me whether any keyboard shortcut changed, before I decide to update.

Card `id`s are the `id:` field in each `data/*.js` file: `slash-session`, `sessions`,
`slash-code`, `slash-config`, `keys-essential`, `keys-input`, `prefixes`, `cli-flags`,
`auth-cli`, `claude-md`, `remote-control`.

A scoped pass deliberately does **not** advance the "last reconciled against" version in
`data/00-meta.js` and `CLAUDE.md` — only a full pass certifies the whole page.

## Edit it

Every command lives in a small data file under `data/`, one file per card:

```
data/00-meta.js            version, default model, footer links
data/01-slash-session.js   Slash — Context & Output
data/02-sessions.js        Sessions — Resume, Name & Branch
data/03-slash-code.js      Slash — Code & Project
data/04-slash-config.js    Slash — Config & Model
data/05-keys-essential.js  Keyboard — Essential
data/06-keys-input.js      Keyboard — Input & Editing
data/07-prefixes.js        Quick Input Prefixes
data/08-cli-flags.js       CLI Flags & Options
data/09-auth-cli.js        Auth & Diagnostic Commands
data/10-claude-md.js       CLAUDE.md — Project Config
data/11-remote-control.js  Remote Control — Phone & Web
```

To add a command, add a row to the right file and reload:

```js
{ key: "/compact", type: "slash", desc: "Free context. Use `/compact focus on tests` to steer it" }
```

`type` is `slash`, `code`, `kbd`, or `text`. In `desc`, backticks render as code and
`[[Ctrl+C]]` renders as a key chord. See `CLAUDE.md` for the full schema.

To add a whole card, create `data/NN-name.js` and add a `<script src>` for it in
`index.html` — script order is card order.

Current as of Claude Code 2.1.251 (August 2026). See `RECONCILIATION.md` for what each pass
changed.
