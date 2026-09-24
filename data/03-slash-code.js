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
          desc: "Review diff, PR, branch or path for bugs. `low`…`max` effort, `--fix`, `--comment`; `ultra` = cloud multi-agent. Alias `/review`",
        },
        {
          key: "/simplify",
          type: "slash",
          desc: "Review changed code for reuse, simplification & efficiency, then apply the fixes — no bug hunt",
        },
        {
          key: "/batch",
          type: "slash",
          desc: "Orchestrate large-scale changes across a codebase in parallel",
        },
        {
          key: "/plan",
          type: "slash",
          desc: "Enter plan mode. `/plan fix the auth bug` starts on that task",
        },
        {
          key: "/doctor",
          type: "slash",
          desc: "Setup checkup that diagnoses and can fix issues — install, bloated CLAUDE.md, unused skills, slow hooks. Alias `/checkup`",
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
          desc: "Re-run a prompt on an interval; omit it and Claude self-paces. `/loop 5m /code-review`",
        },
        {
          key: "/security-review",
          type: "slash",
          desc: "Scan the current branch's diff against origin's default branch for vulnerabilities",
        },
        {
          key: "/hooks",
          type: "slash",
          desc: "View hook configurations for tool events",
        },
        {
          key: "/run",
          type: "slash",
          desc: "Launch and drive your project's app to see a change working",
        },
        {
          key: "/verify",
          type: "slash",
          desc: "Build & run your app to confirm a change does what it should — not just tests",
        },
      ],
    },
  ],
  tip: {
    label: "Note",
    text: "Custom commands are now skills. `.claude/skills/<name>/SKILL.md` and the older `.claude/commands/<name>.md` both create `/name`.",
  },
});
