// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "slash-session",
  title: "1 Slash — Context & Output",
  icon: "⊟",
  color: "orange",
  tag: "slash",
  groups: [
    {
      label: null,
      rows: [
        {
          key: "/clear",
          type: "slash",
          desc: "Wipe conversation history & free context",
        },
        {
          key: "/compact",
          type: "slash",
          desc: "Summarize conversation to free context. Use `/compact focus on tests` to steer it",
        },
        {
          key: "/context",
          type: "slash",
          desc: "Visualize what is consuming your context window",
        },
        {
          key: "/usage",
          type: "slash",
          desc: "Token usage for this session & your account (`/cost` is an alias)",
        },
        {
          key: "/rewind",
          type: "slash",
          desc: "Rewind to a checkpoint or earlier turn. `/rewind 3`",
        },
        {
          key: "/diff",
          type: "slash",
          desc: "View interactive diff of all changes made",
        },
        {
          key: "/copy",
          type: "slash",
          desc: "Copy last response. `/copy 2` for 2nd-latest",
        },
        {
          key: "/tasks",
          type: "slash",
          desc: "List background work — running subagents, shells, and their status",
        },
      ],
    },
  ],
  tip: {
    label: "Pro tip",
    text: "Use `/compact` when context usage exceeds 80%; use `/clear` when switching to an entirely new task.",
  },
});
