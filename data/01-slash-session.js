// Edit this file to change the section. Reload the page to see it.
CHEATSHEET.add({
  id: "slash-session",
  title: "Slash — Session & Context",
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
          key: "/resume",
          type: "slash",
          desc: "Return to an earlier conversation, or list them. `/resume 2`",
        },
        {
          key: "/rename",
          type: "slash",
          desc: "Name current session. `/rename feature-auth`",
        },
        {
          key: "/rewind",
          type: "slash",
          desc: "Rewind to a checkpoint or earlier turn. `/rewind 3`",
        },
        {
          key: "/branch",
          type: "slash",
          desc: "Branch conversation into a parallel path",
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
          key: "/export",
          type: "slash",
          desc: "Export conversation as plain text",
        },
        {
          key: "/sessions",
          type: "slash",
          desc: "List sessions by name & recency; attach to a background one",
        },
      ],
    },
  ],
  tip: {
    label: "Pro tip",
    text: "Use `/compact` when context usage exceeds 80%; use `/clear` when switching to an entirely new task.",
  },
});
