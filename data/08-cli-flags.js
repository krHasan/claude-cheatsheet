// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "cli-flags",
  title: "8 CLI Flags & Options",
  icon: "⚑",
  color: "green",
  tag: "cli",
  groups: [
    {
      label: "Launch",
      rows: [
        {
          key: '-p "query"',
          type: "code",
          desc: "Print mode — single query, then exit",
        },
        {
          key: "--model opus",
          type: "code",
          desc: "Override model for this session",
        },
        {
          key: "--effort high",
          type: "code",
          desc: "Set effort level for this session",
        },
        {
          key: "--agent <name>",
          type: "code",
          desc: "Run the session as a named custom agent",
        },
        {
          key: "--add-dir <dirs>",
          type: "code",
          desc: "Allow tool access to extra directories",
        },
        {
          key: "-w",
          type: "code",
          desc: "Start in an isolated git worktree (`--tmux` for panes)",
        },
        {
          key: "--safe-mode",
          type: "code",
          desc: "Disable all customizations to debug a broken config",
        },
      ],
    },
    {
      label: "Automation & CI/CD",
      rows: [
        {
          key: "--max-budget-usd N",
          type: "code",
          desc: "Cap API spend for the run (with `-p`)",
        },
        {
          key: "--output-format json",
          type: "code",
          desc: "Output as `text`, `json`, or `stream-json`",
        },
        {
          key: "--allowedTools",
          type: "code",
          desc: 'Restrict tools. e.g. `"Bash(git *) Edit"`',
        },
        {
          key: "--permission-mode",
          type: "code",
          desc: "`acceptEdits` · `auto` · `plan` · `manual` · `dontAsk` · `bypassPermissions`",
        },
        {
          key: "--json-schema",
          type: "code",
          desc: "Validate structured output against a JSON Schema",
        },
        {
          key: "--bare",
          type: "code",
          desc: "Scripted mode — skip hooks, LSP, plugins",
        },
        {
          key: "--dangerously-skip-permissions",
          type: "code",
          desc: "Skip all permission prompts (trusted CI only)",
        },
      ],
    },
    {
      label: "Debug, Cloud & Plugins",
      rows: [
        {
          key: "--debug [filter]",
          type: "code",
          desc: 'Verbose logging, filterable (`"api,hooks"`)',
        },
        {
          key: "--cloud [desc]",
          type: "code",
          desc: "Create or attach to a Claude Code on the web session",
        },
        {
          key: "--bg",
          type: "code",
          desc: "Start detached as a background agent",
        },
        {
          key: "--remote-control",
          type: "code",
          desc: "Drive this session from claude.ai/code or your phone. `--rc` for short",
        },
        {
          key: "--plugin-dir ./path",
          type: "code",
          desc: "Load a plugin directory or `.zip` archive",
        },
        {
          key: "--plugin-url https://…",
          type: "code",
          desc: "Fetch & load a remote plugin `.zip`",
        },
      ],
    },
  ],
});
