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
          desc: "Start fresh with empty context; the old conversation stays resumable. `/clear <name>` labels it. Aliases `/reset`, `/new`",
        },
        {
          key: "/compact",
          type: "slash",
          desc: "Summarize conversation to free context. Use `/compact focus on tests` to steer it",
        },
        {
          key: "/context",
          type: "slash",
          desc: "Visualize context usage as a colored grid, with suggestions. `/context all` expands the breakdown",
        },
        {
          key: "/usage",
          type: "slash",
          desc: "Session cost, plan usage limits & activity stats. `/cost` and `/stats` are aliases",
        },
        {
          key: "/rewind",
          type: "slash",
          desc: "Rewind conversation and/or code to an earlier point, or summarize from there. Aliases `/checkpoint`, `/undo`",
        },
        {
          key: "/diff",
          type: "slash",
          desc: "Review working-tree changes, including the edits Claude has made",
        },
        {
          key: "/autocompact",
          type: "slash",
          desc: "Set how full context gets before auto-compacting — `/autocompact 500k` or `auto`",
        },
        {
          key: "/btw",
          type: "slash",
          desc: "Ask a side question without adding it to the conversation",
        },
        {
          key: "/copy",
          type: "slash",
          desc: "Copy last response. `/copy 2` for 2nd-latest",
        },
        {
          key: "/tasks",
          type: "slash",
          desc: "View & manage background work — subagents (finished ones too) and shells. Alias `/bashes`",
        },
      ],
    },
  ],
  tip: {
    label: "Pro tip",
    text: "Use `/compact` when context usage exceeds 80%; use `/clear` when switching to an entirely new task.",
  },
});
