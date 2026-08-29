# claude-cheatsheet

A searchable web reference for [Claude Code](https://code.claude.com/docs) — slash commands,
keyboard shortcuts, CLI flags, and project config paths.

## Use it

Open `index.html` in a browser. That's it — no build, no server, no dependencies.

- **Search** — type to filter every card at once, or press <kbd>/</kbd> to jump to the box
- **Filter** — All / Slash / Keys / CLI / Config
- **Copy** — click any command or flag to copy it
- **Theme** — follows your system, with a manual toggle that sticks

## Edit it

Every command lives in a small data file under `data/`, one file per card:

```
data/00-meta.js           version, default model, footer links
data/01-slash-session.js  Slash — Session & Context
data/02-slash-code.js     Slash — Code & Project
data/03-slash-config.js   Slash — Config & Model
data/04-keys-essential.js Keyboard — Essential
data/05-keys-input.js     Keyboard — Input & Editing
data/06-prefixes.js       Quick Input Prefixes
data/07-cli-flags.js      CLI Flags & Options
data/08-auth-cli.js       Auth & Diagnostic Commands
data/09-claude-md.js      CLAUDE.md — Project Config
```

To add a command, add a row to the right file and reload:

```js
{ key: "/compact", type: "slash", desc: "Free context. Use `/compact focus on tests` to steer it" }
```

`type` is `slash`, `code`, `kbd`, or `text`. In `desc`, backticks render as code and
`[[Ctrl+C]]` renders as a key chord. See `CLAUDE.md` for the full schema.

To add a whole card, create `data/NN-name.js` and add a `<script src>` for it in
`index.html` — script order is card order.

Current as of Claude Code 2.1.246 (August 2026).
