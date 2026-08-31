// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "prefixes",
  title: "7 Quick Input Prefixes",
  icon: "»",
  color: "green",
  tag: "keys",
  layout: "prefix",
  items: [
    {
      key: "/",
      desc: "Open slash command menu",
    },
    {
      key: "!",
      desc: "Run bash command directly in session",
    },
    {
      key: "@",
      desc: "Autocomplete file path mention",
    },
    {
      key: ":",
      desc: "Emoji shortcode",
    },
    {
      key: "?",
      desc: "Shortcut help panel (on empty input)",
    },
  ],
  tip: {
    label: "Vim mode",
    text: 'Enable via `/config` → Editor mode, or `"editorMode": "vim"` in settings.json. Normal/Insert modes, `h/j/k/l`, `d/c/y/p`, text objects like `iw`, `i"`.',
  },
});
