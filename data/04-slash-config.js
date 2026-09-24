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
          desc: "Switch model & save as default. `opus` / `sonnet` / `fable` / `haiku` / `best`",
        },
        {
          key: "/effort",
          type: "slash",
          desc: "Effort: `low`…`xhigh`, `max`, `ultracode`, `auto`; `status` prints it",
        },
        {
          key: "/advisor",
          type: "slash",
          desc: "Let Claude consult a stronger model at key moments. `/advisor fable`, `off`",
        },
        {
          key: "/fast",
          type: "slash",
          desc: "Toggle fast output mode (speed-optimised API settings). `/fast on` / `off`",
        },
        {
          key: "/status",
          type: "slash",
          desc: "Settings on the Status tab — version, model, account & connectivity",
        },
        {
          key: "/config",
          type: "slash",
          desc: "Open the full interactive settings interface",
        },
        {
          key: "/permissions",
          type: "slash",
          desc: "Manage allow, ask & deny rules for tools. Alias `/allowed-tools`",
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
          key: "/tui",
          type: "slash",
          desc: "Switch renderer — `default` or `fullscreen` (flicker-free) — keeping the conversation",
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
    text: "Opus 5.5 (default) · Fable 5.1 · Sonnet 5 · Haiku 4.5",
  },
});
