// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "auth-cli",
  title: "9 Auth & Diagnostic Commands",
  icon: "🔑",
  color: "gray",
  tag: "cli",
  groups: [
    {
      label: "Authentication",
      rows: [
        {
          key: "claude auth login",
          type: "code",
          desc: "Log in or switch accounts. `--sso`, `--console`, `--email`",
        },
        {
          key: "claude auth status",
          type: "code",
          desc: "Auth state as JSON (`--text` for prose); exits 1 when logged out",
        },
        {
          key: "claude auth logout",
          type: "code",
          desc: "Clear stored credentials",
        },
      ],
    },
    {
      label: "Installation & Health",
      rows: [
        {
          key: "claude setup-token",
          type: "code",
          desc: "Mint a long-lived OAuth token for CI",
        },
        {
          key: "claude --version",
          type: "code",
          desc: "Show installed version",
        },
        {
          key: "claude doctor",
          type: "code",
          desc: "Read-only install / settings diagnostics; `/doctor` in a session can also fix",
        },
        {
          key: "claude update",
          type: "code",
          desc: "Apply an update now (native installs auto-update). Alias `upgrade`",
        },
        {
          key: "claude install [ver]",
          type: "code",
          desc: "Install native build: `stable`, `latest`, or a version",
        },
      ],
    },
    {
      label: "Background Sessions",
      rows: [
        {
          key: "claude agents",
          type: "code",
          desc: "Agent view — monitor & dispatch background sessions. `--json` to script it",
        },
        {
          key: "claude attach <id>",
          type: "code",
          desc: "Open a background session in this terminal",
        },
        {
          key: "claude logs <id>",
          type: "code",
          desc: "Print a background session's recent output",
        },
        {
          key: "claude stop <id>",
          type: "code",
          desc: "Stop it, keeping the conversation. Alias `kill`",
        },
        {
          key: "claude rm <id>",
          type: "code",
          desc: "Delete it, and its worktree when safe. Transcript stays resumable",
        },
        {
          key: "claude respawn [id]",
          type: "code",
          desc: "Restart on the current version; `--all` for every running one",
        },
      ],
    },
    {
      label: "Other Subcommands",
      rows: [
        {
          key: "claude remote-control",
          type: "code",
          desc: "Serve sessions to claude.ai/code & the Claude app",
        },
        {
          key: "claude mcp",
          type: "code",
          desc: "Configure & manage MCP servers",
        },
        {
          key: "claude plugin",
          type: "code",
          desc: "Manage plugins",
        },
        {
          key: "claude import",
          type: "code",
          desc: "Import config from Codex, Gemini CLI or Cursor. `--dry-run`",
        },
        {
          key: "claude ultrareview",
          type: "code",
          desc: "Cloud multi-agent review of branch or PR. `--json`, `--post`",
        },
      ],
    },
    {
      label: "Install (one-liner)",
      rows: [
        {
          key: "curl -fsSL https://claude.ai/install.sh | bash",
          type: "code",
          full: true,
          desc: "macOS, Linux, WSL",
        },
        {
          key: "irm https://claude.ai/install.ps1 | iex",
          type: "code",
          full: true,
          desc: "Windows PowerShell",
        },
      ],
    },
  ],
});
