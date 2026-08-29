// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "claude-md",
  title: "CLAUDE.md — Project Config",
  icon: "📄",
  color: "purple",
  tag: "config",
  groups: [
    {
      label: null,
      rows: [
        {
          key: "./CLAUDE.md",
          type: "code",
          desc: "Project instructions at repo root (auto-loaded)",
        },
        {
          key: "~/.claude/CLAUDE.md",
          type: "code",
          desc: "Global user instructions applied to every session",
        },
        {
          key: ".claude/skills/",
          type: "code",
          desc: "Project skills — one `<name>/SKILL.md` per `/name`",
        },
        {
          key: ".claude/commands/",
          type: "code",
          desc: "Older custom-command form; still creates `/name`",
        },
        {
          key: ".claude/agents/",
          type: "code",
          desc: "Project subagent definitions",
        },
        {
          key: ".claude/settings.json",
          type: "code",
          desc: "Project permission & tool settings",
        },
        {
          key: "~/.claude/settings.json",
          type: "code",
          desc: "Global user settings & defaults",
        },
        {
          key: ".mcp.json",
          type: "code",
          desc: "Project MCP server definitions",
        },
      ],
    },
  ],
  tip: {
    label: "What to put in CLAUDE.md",
    text: "Build & test commands, architecture overview, code conventions, folder structure, team preferences. Claude reads this at session start to stay aligned with your project.",
  },
});
