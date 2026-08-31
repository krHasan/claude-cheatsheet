// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "keys-input",
  title: "6 Keyboard — Input & Editing",
  icon: "✎",
  color: "blue",
  tag: "keys",
  groups: [
    {
      label: "Line Editing (Readline)",
      rows: [
        {
          key: "Ctrl+A",
          type: "kbd",
          desc: "Move cursor to start of line",
        },
        {
          key: "Ctrl+E",
          type: "kbd",
          desc: "Move cursor to end of line",
        },
        {
          key: "Ctrl+K",
          type: "kbd",
          desc: "Delete to end of line",
        },
        {
          key: "Ctrl+U",
          type: "kbd",
          desc: "Delete from cursor to line start",
        },
        {
          key: "Ctrl+W",
          type: "kbd",
          desc: "Delete previous word",
        },
        {
          key: "Ctrl+Y",
          type: "kbd",
          desc: "Paste text deleted with K/U/W",
        },
        {
          key: "Alt+B / F / D",
          type: "kbd",
          desc: "Move back / forward one word, or delete next word",
        },
        {
          key: "Ctrl+_",
          type: "kbd",
          desc: "Undo last input edit",
        },
      ],
    },
    {
      label: "New Line & External Editor",
      rows: [
        {
          key: "\\ + Enter",
          type: "kbd",
          desc: "New line (works in every terminal)",
        },
        {
          key: "Ctrl+J",
          type: "kbd",
          desc: "New line (universal, no config needed)",
        },
        {
          key: "Shift+Enter",
          type: "kbd",
          desc: "New line in iTerm2, Warp, Ghostty, Windows Terminal",
        },
        {
          key: "Ctrl+G",
          type: "kbd",
          desc: "Open prompt in external editor (also [[Ctrl+X Ctrl+E]])",
        },
        {
          key: "Ctrl+V / Cmd+V",
          type: "kbd",
          desc: "Paste image from clipboard ([[Cmd+V]] in iTerm2)",
        },
      ],
    },
  ],
});
