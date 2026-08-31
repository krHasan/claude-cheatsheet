// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "slash-config",
  title: "4 Slash — Config & Model",
  icon: "⚙",
  color: "purple",
  tag: "slash",
  groups: [
    {
      label: null,
      rows: [
        {
          key: "/model",
          type: "slash",
          desc: "Switch model & save as default. `opus` / `sonnet` / `fable` / `haiku`",
        },
        {
          key: "/effort",
          type: "slash",
          desc: "Effort: `low`…`xhigh`, `max`, `ultracode`, `auto`; `status` prints it",
        },
        {
          key: "/fast",
          type: "slash",
          desc: "Toggle fast output mode (speed-optimised API settings)",
        },
        {
          key: "/status",
          type: "slash",
          desc: "Show model, effort level, session directory & account info",
        },
        {
          key: "/config",
          type: "slash",
          desc: "Open the full interactive settings interface",
        },
        {
          key: "/permissions",
          type: "slash",
          desc: "View & manage tool permissions interactively",
        },
        {
          key: "/mcp",
          type: "slash",
          desc: "Manage MCP server connections. `/mcp enable` / `/mcp disable`",
        },
        {
          key: "/keybindings",
          type: "slash",
          desc: "Open your keyboard shortcuts file for rebinding",
        },
        {
          key: "/theme",
          type: "slash",
          desc: "Change colour theme",
        },
        {
          key: "/ide",
          type: "slash",
          desc: "Manage IDE integrations (VS Code, JetBrains) & show status",
        },
      ],
    },
  ],
  tip: {
    label: "Models available",
    text: "Opus 5 (default) · Fable 5 · Sonnet 5 · Haiku 4.5",
  },
});
