// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "cli-flags",
  title: "CLI Flags & Options",
  icon: "⚑",
  color: "green",
  tag: "cli",
  groups: [
    {
      label: "Session Start",
      rows: [
        {
          key: '-p "query"',
          type: "code",
          desc: "Print mode — single query, then exit",
        },
        {
          key: "-c",
          type: "code",
          desc: "Continue most recent session",
        },
        {
          key: "-r [id|search]",
          type: "code",
          desc: "Resume by session ID, or open the picker",
        },
        {
          key: '-n "name"',
          type: "code",
          desc: "Set session display name at startup",
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
          key: "--fork-session",
          type: "code",
          desc: "Fork from a resumed session",
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
          key: "--from-pr 123",
          type: "code",
          desc: "Resume a session linked to a PR by number / URL",
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
