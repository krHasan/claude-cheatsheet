// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "keys-essential",
  title: "5 Keyboard — Essential",
  icon: "⌨",
  color: "orange",
  tag: "keys",
  groups: [
    {
      label: "Session Control",
      rows: [
        {
          key: "Ctrl+C",
          type: "kbd",
          desc: "Interrupt running op. First press clears input, second exits",
        },
        {
          key: "Esc",
          type: "kbd",
          desc: "Interrupt Claude mid-turn, keeping work done so far",
        },
        {
          key: "Esc + Esc",
          type: "kbd",
          desc: "Clear input draft or open rewind menu for a checkpoint",
        },
        {
          key: "Ctrl+D",
          type: "kbd",
          desc: "Exit Claude Code",
        },
        {
          key: "Ctrl+L",
          type: "kbd",
          desc: "Redraw screen (fix garbled display)",
        },
        {
          key: "Ctrl+R",
          type: "kbd",
          desc: "Reverse-search command history",
        },
        {
          key: "Ctrl+S",
          type: "kbd",
          desc: "Stash or restore the current prompt",
        },
        {
          key: "Ctrl+Z",
          type: "kbd",
          desc: "Suspend Claude Code (`fg` to resume)",
        },
      ],
    },
    {
      label: "Background & Agents",
      rows: [
        {
          key: "Ctrl+B",
          type: "kbd",
          desc: "Move running bash or agent to background (tmux: press twice)",
        },
        {
          key: "Ctrl+X Ctrl+K",
          type: "kbd",
          desc: "Stop all running background subagents",
        },
        {
          key: "Ctrl+T",
          type: "kbd",
          desc: "Toggle Claude's to-do checklist (not the background list — see `/tasks`)",
        },
        {
          key: "Ctrl+O",
          type: "kbd",
          desc: "Toggle transcript viewer (detailed tool usage, MCP calls)",
        },
      ],
    },
    {
      label: "Modes",
      rows: [
        {
          key: "Shift+Tab",
          type: "kbd",
          desc: "Cycle permission modes ([[Alt+M]] on Windows without VT input)",
        },
        {
          key: "Alt+P",
          type: "kbd",
          desc: "Switch model ([[Option]] on macOS — needs Option-as-Meta)",
        },
        {
          key: "Alt+T",
          type: "kbd",
          desc: "Toggle extended thinking",
        },
        {
          key: "Alt+O",
          type: "kbd",
          desc: "Toggle fast mode",
        },
      ],
    },
  ],
});
