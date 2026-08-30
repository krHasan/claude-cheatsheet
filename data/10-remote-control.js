// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "remote-control",
  title: "Remote Control — Phone & Web",
  icon: "📱",
  color: "blue",
  tag: "cli",
  groups: [
    {
      label: "Start a Session",
      rows: [
        {
          key: "claude remote-control",
          type: "code",
          desc: "Server mode — stays running and serves sessions to claude.ai/code & the Claude app. Space toggles a QR code, `w` toggles worktree spawning",
        },
        {
          key: "claude --remote-control",
          type: "code",
          desc: "Normal interactive session that is also drivable remotely. `--rc` is the alias; `claude --rc \"My Project\"` names it",
        },
        {
          key: "/remote-control",
          type: "slash",
          desc: "Hand the session you are already in to remote, carrying history. `/rc` is the alias; an argument sets the title",
        },
        {
          key: "/mobile",
          type: "slash",
          desc: "Show a QR code to install the Claude iOS / Android app",
        },
      ],
    },
    {
      label: "Server-Mode Flags",
      rows: [
        {
          key: "--name \"My Project\"",
          type: "code",
          desc: "Session title shown in the list at claude.ai/code",
        },
        {
          key: "-c, --continue",
          type: "code",
          desc: "Bring back the session this directory's last server started with",
        },
        {
          key: "--session-id <id>",
          type: "code",
          desc: "Bring back one session — the URL part between `/code/` and any `?`",
        },
        {
          key: "--spawn <mode>",
          type: "code",
          desc: "`same-dir` (default) · `worktree` (one git worktree each) · `session` (serve exactly one)",
        },
        {
          key: "--capacity <N>",
          type: "code",
          desc: "Max concurrent sessions, default 32. Not valid with `--spawn=session`",
        },
        {
          key: "--no-create-session-in-dir",
          type: "code",
          desc: "Skip the pre-created session in the cwd — also means nothing to resume later",
        },
        {
          key: "--permission-mode <mode>",
          type: "code",
          desc: "Starting permission mode for the server's sessions, e.g. `acceptEdits`",
        },
        {
          key: "--sandbox / --no-sandbox",
          type: "code",
          desc: "Filesystem & network isolation for the sessions. Off by default",
        },
        {
          key: "--verbose · --debug-file <p>",
          type: "code",
          desc: "Detailed connection logs; write them to a file",
        },
        {
          key: "--remote-control-session-name-prefix",
          type: "code",
          desc: "Prefix for auto-generated names. Defaults to your hostname — `myhost-graceful-unicorn`",
        },
      ],
    },
    {
      label: "Reconnect & Resume",
      rows: [
        {
          key: "claude remote-control",
          type: "code",
          desc: "After [[Ctrl+C]], rerun in the same directory to restore every session it served — for about 4 hours",
        },
        {
          key: "claude --continue",
          type: "code",
          desc: "Bring back a session started with `--rc` or `/remote-control` (or `claude --resume`)",
        },
        {
          key: "/remote-control",
          type: "slash",
          desc: "Reconnect after a failure, or open the status panel with session URL, QR code & disconnect",
        },
        {
          key: "/rc active",
          type: "text",
          desc: "Footer indicator while connected — [[Down]] then [[Enter]] opens it",
        },
      ],
    },
    {
      label: "Config & Notifications",
      rows: [
        {
          key: "/config",
          type: "slash",
          desc: "`Enable Remote Control for all sessions` — auto-connect toggle: `true` / `false` / `default`",
        },
        {
          key: "remoteControlAtStartup",
          type: "code",
          desc: "Settings-file form of that toggle. `true` honored only in user or managed settings",
        },
        {
          key: "disableRemoteControl",
          type: "code",
          desc: "Turn the feature off entirely",
        },
        {
          key: "Push when Claude decides",
          type: "text",
          desc: "`/config` — proactive phone pushes, e.g. when a long task finishes",
        },
        {
          key: "Push when actions required",
          type: "text",
          desc: "`/config` — push permission prompts & questions to your phone",
        },
        {
          key: "CLAUDE_CLIENT_PRESENCE_FILE",
          type: "code",
          desc: "Skip pushes while this marker file exists — write it when your screen unlocks",
        },
      ],
    },
    {
      label: "Usable From Phone & Web",
      rows: [
        {
          key: "/compact /clear /context",
          type: "text",
          desc: "Text-output commands. Also `/usage`, `/recap`, `/exit`, `/reload-plugins`",
        },
        {
          key: "/model sonnet · /effort high",
          type: "text",
          desc: "Pass the value as an argument — remote has no picker or slider",
        },
        {
          key: "/rename · /color · /fast",
          type: "text",
          desc: "Same argument-only rule. `/autocompact 500k` sets the window",
        },
        {
          key: "/mcp reconnect",
          type: "slash",
          desc: "`enable` & `disable` too. Bare `/mcp reconnect` retries every failed server",
        },
        {
          key: "/config key=value",
          type: "slash",
          desc: "From mobile; bare `/config` lists the settable keys. On web it opens settings",
        },
        {
          key: "/plugin · /resume",
          type: "text",
          desc: "Local-only — terminal-UI commands never run from a connected device",
        },
      ],
    },
  ],
  tip: {
    label: "Requirements",
    text: "Needs a Pro, Max, Team, or Enterprise claude.ai login — API keys, Bedrock / Vertex / Foundry, a custom `ANTHROPIC_BASE_URL`, and `DISABLE_TELEMETRY`-style opt-outs all block it. Execution stays on your machine, so the local process must keep running — start it in `tmux` or `screen` over SSH.",
  },
});
