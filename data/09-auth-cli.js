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
          desc: "Log in or switch accounts",
        },
        {
          key: "claude auth status",
          type: "code",
          desc: "Check current auth state",
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
          desc: "Read-only install / settings diagnostics",
        },
        {
          key: "claude update",
          type: "code",
          desc: "Apply an update now (native installs auto-update)",
        },
        {
          key: "claude install [ver]",
          type: "code",
          desc: "Install native build: `stable`, `latest`, or a version",
        },
      ],
    },
    {
      label: "Other Subcommands",
      rows: [
        {
          key: "claude agents",
          type: "code",
          desc: "Manage background agents",
        },
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
          desc: "Import config from Codex / Gemini CLI",
        },
        {
          key: "claude ultrareview",
          type: "code",
          desc: "Cloud multi-agent review of branch or PR",
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
