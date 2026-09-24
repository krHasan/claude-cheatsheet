// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "sessions",
  title: "2 Sessions — Resume, Name & Branch",
  icon: "⏱",
  color: "gray",
  tag: "cli",
  groups: [
    {
      label: "Resume",
      rows: [
        {
          key: "claude -c",
          type: "code",
          desc: "`--continue` — most recent session in this directory. Skips `-p`, SDK, background & `/loop`-first sessions",
        },
        {
          key: "claude -r",
          type: "code",
          desc: "`--resume` with no argument opens the session picker",
        },
        {
          key: "claude --resume <name>",
          type: "code",
          desc: "Exact match resumes directly; an ambiguous name opens the picker pre-filled",
        },
        {
          key: "claude --resume <id>",
          type: "code",
          desc: "Runs from any directory — searches this project & its worktrees, then every other project",
        },
        {
          key: "claude --resume <path>",
          type: "code",
          desc: "Resume straight from a `.jsonl` transcript, given its absolute path",
        },
        {
          key: "claude --from-pr 123",
          type: "code",
          desc: "Picker filtered to sessions linked to that pull request",
        },
        {
          key: "/resume",
          type: "slash",
          desc: "Switch conversation from inside a session. `/resume <name>` needs an exact match",
        },
        {
          key: "Restored",
          type: "text",
          desc: "History, model, `--agent`, permission mode, an active `/goal`, and unexpired scheduled tasks",
        },
        {
          key: "Not restored",
          type: "text",
          desc: "Pass `--mcp-config`, `--settings`, `--plugin-dir`, `--fallback-model` & `--add-dir` again",
        },
      ],
    },
    {
      label: "Session Picker",
      rows: [
        {
          key: "↑ / ↓",
          type: "kbd",
          desc: "Move between sessions; [[Enter]] resumes the highlighted one",
        },
        {
          key: "→ / ←",
          type: "kbd",
          desc: "Expand or collapse a grouped session row",
        },
        {
          key: "Space",
          type: "kbd",
          desc: "Preview the conversation ([[Ctrl+V]] where the terminal eats Space)",
        },
        {
          key: "Ctrl+R",
          type: "kbd",
          desc: "Rename the highlighted session",
        },
        {
          key: "/",
          type: "kbd",
          desc: "Search — or just start typing. Paste a GitHub / GitLab / Bitbucket PR or MR URL to find the session that made it",
        },
        {
          key: "Ctrl+A",
          type: "kbd",
          desc: "Widen to every project on this machine — also shows each session's path. Press again to narrow",
        },
        {
          key: "Ctrl+W",
          type: "kbd",
          desc: "Widen to all worktrees of this repo (multi-worktree repos only)",
        },
        {
          key: "Ctrl+B",
          type: "kbd",
          desc: "Filter to the current git branch. Press again for all branches",
        },
        {
          key: "Esc",
          type: "kbd",
          desc: "Leave search mode, or close the picker",
        },
      ],
    },
    {
      label: "Naming",
      rows: [
        {
          key: "claude -n auth-refactor",
          type: "code",
          desc: "Name it at startup so it is findable & resumable by name",
        },
        {
          key: "/rename auth-refactor",
          type: "slash",
          desc: "Name it mid-session. The name also shows on the prompt bar",
        },
        {
          key: "Generated title",
          type: "text",
          desc: "Unnamed sessions get one from your first prompt — it works as a resume handle",
        },
        {
          key: "Display name",
          type: "text",
          desc: "`my-app-3f` in agent view is not a resume handle. Accepting a plan sets a real title",
        },
        {
          key: "Collision",
          type: "text",
          desc: "A name already live on this machine gets a suffix — `auth-refactor-graceful-unicorn`",
        },
      ],
    },
    {
      label: "Branch & Fork",
      rows: [
        {
          key: "/branch [name]",
          type: "slash",
          desc: "Copy the conversation and switch into it; the original stays in the picker untouched",
        },
        {
          key: "/fork [prompt]",
          type: "slash",
          desc: "Copy the conversation into a new background session and keep working here",
        },
        {
          key: "/background [prompt]",
          type: "slash",
          desc: "Send this session itself to the background and free the terminal. Alias `/bg`",
        },
        {
          key: "claude -c --fork-session",
          type: "code",
          desc: "Fork on resume instead. New process, so session permission grants do not carry over",
        },
        {
          key: "Carried into a branch",
          type: "text",
          desc: "Session permission grants, running background agents & bash, and a Remote Control connection",
        },
      ],
    },
    {
      label: "Export & Storage",
      rows: [
        {
          key: "/export",
          type: "slash",
          desc: "Menu to copy or save the transcript as readable text. `/export notes.txt` skips the menu",
        },
        {
          key: "~/.claude/projects/<project>/<session-id>.jsonl",
          type: "code",
          full: true,
          desc: "Where transcripts live. The line format is internal and changes between releases — script against `/export` or `-p` instead",
        },
        {
          key: 'claude -p --resume <id> --output-format json "summarize what we changed"',
          type: "code",
          full: true,
          desc: "Ask an existing session a question and get structured output back",
        },
        {
          key: "claude project purge [path]",
          type: "code",
          desc: "Delete a project's transcripts, tasks, file history & config entry now",
        },
        {
          key: "cleanupPeriodDays",
          type: "code",
          desc: "`settings.json` — change the 30-day transcript retention",
        },
        {
          key: "CLAUDE_CONFIG_DIR",
          type: "code",
          desc: "Move session storage off `~/.claude` entirely",
        },
        {
          key: "CLAUDE_CODE_PROJECT_DIR_NAME",
          type: "code",
          desc: "Name the `<project>` folder yourself. Ignored unless `CLAUDE_CONFIG_DIR` is set too",
        },
        {
          key: "--no-session-persistence",
          type: "code",
          desc: "Write no transcript for one `-p` run",
        },
      ],
    },
  ],
  tip: {
    label: "Resume from summary",
    text: "On Pro or Max, resuming a session over 100k tokens that has been idle about an hour offers three ways in: run `/compact` first, load it as-is, or stop asking. The prompt cache has expired either way, so the next request reprocesses the history once.",
  },
});
