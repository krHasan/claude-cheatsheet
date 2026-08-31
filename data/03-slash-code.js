// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "slash-code",
  title: "3 Slash — Code & Project",
  icon: "⌥",
  color: "blue",
  tag: "slash",
  groups: [
    {
      label: null,
      rows: [
        {
          key: "/init",
          type: "slash",
          desc: "Initialize project; generates CLAUDE.md with project context",
        },
        {
          key: "/memory",
          type: "slash",
          desc: "View & edit CLAUDE.md and auto-memory files",
        },
        {
          key: "/code-review",
          type: "slash",
          desc: "Review diff/PR for bugs. `--fix`, `--comment`; `ultra` = cloud multi-agent",
        },
        {
          key: "/simplify",
          type: "slash",
          desc: "Suggest simplifications to a file or diff, without the bug hunt",
        },
        {
          key: "/batch",
          type: "slash",
          desc: "Orchestrate large-scale changes across a codebase in parallel",
        },
        {
          key: "/doctor",
          type: "slash",
          desc: "Diagnose installation, auth, and config issues",
        },
        {
          key: "/insights",
          type: "slash",
          desc: "Generate an HTML report analysing your recent local sessions",
        },
        {
          key: "/goal",
          type: "slash",
          desc: "Keep working across turns until the condition is met or cleared",
        },
        {
          key: "/loop",
          type: "slash",
          desc: "Re-run a prompt on an interval. `/loop 5m /code-review`",
        },
        {
          key: "/security-review",
          type: "slash",
          desc: "Check diff, PR, branch, or path for security vulnerabilities",
        },
        {
          key: "/hooks",
          type: "slash",
          desc: "View hook configurations for tool events",
        },
        {
          key: "/verify",
          type: "slash",
          desc: "Check code for correctness, test coverage, and performance issues",
        },
      ],
    },
  ],
  tip: {
    label: "Note",
    text: "Custom commands are now skills. `.claude/skills/<name>/SKILL.md` and the older `.claude/commands/<name>.md` both create `/name`.",
  },
});
