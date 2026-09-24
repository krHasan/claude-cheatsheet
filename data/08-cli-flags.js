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
          desc: 'Auto-approve matching tools without a prompt, e.g. `"Bash(git *) Edit"`',
        },
        {
          key: '--tools "Bash,Edit,Read"',
          type: "code",
          desc: 'Restrict which built-in tools exist. `""` disables all',
        },
        {
          key: "--max-turns N",
          type: "code",
          desc: "Cap agentic turns (with `-p`)",
        },
        {
          key: "--permission-mode",
          type: "code",
          desc: "`default` (alias `manual`) · `acceptEdits` · `auto` · `plan` · `dontAsk` · `bypassPermissions`",
        },
        {
          key: "--json-schema",
          type: "code",
          desc: "Validate structured output against a JSON Schema",
        },
        {
          key: "--bare",
          type: "code",
          desc: "Scripted mode — skip auto-discovery of hooks, skills, plugins, MCP & CLAUDE.md",
        },
        {
          key: "--dangerously-skip-permissions",
          type: "code",
          desc: "Same as `--permission-mode bypassPermissions`. Sandboxes only",
        },
      ],
    },
    {
      label: "Debug, Cloud & Plugins",
      rows: [
        {
          key: "--debug=<filter>",
          type: "code",
          desc: "Debug logging. The filter binds only with `=`: `--debug=api,hooks`",
        },
        {
          key: "--cloud [desc]",
          type: "code",
          desc: "Create or attach to a Claude Code on the web session",
        },
        {
          key: "--bg",
          type: "code",
          desc: "Start detached as a background agent; prints the id `claude attach` takes",
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
