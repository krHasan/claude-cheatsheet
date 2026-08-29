/* ============================================================
   Claude Code — Developer Reference
   Renders the cards from the data/*.js section files.

   Each data file calls CHEATSHEET.add({...}) with one section.
   To add or edit a command, edit that file — nothing here needs
   to change. Load order in index.html decides card order.
   ============================================================ */
(function () {
  "use strict";

  var sections = [];
  var meta = {};

  /* ---------------------------------------------------------- helpers */

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Description mini-markup:
       `code`     -> <code>
       [[Ctrl+C]] -> <kbd> chord                                  */
  function markup(s) {
    return esc(s)
      .replace(/\[\[([^\]]+)\]\]/g, function (_, k) {
        return chord(k);
      })
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  /* "Ctrl+X Ctrl+K"   -> [Ctrl]+[X] [Ctrl]+[K]
     "Alt+B / F / D"   -> [Alt]+[B] / [F] / [D]
     "Esc + Esc"       -> [Esc] + [Esc]
     Input is already HTML-escaped by the caller.               */
  function chord(str) {
    return String(str)
      .split(" ")
      .map(function (part) {
        if (part === "/" || part === "+" || part === "·" || part === "")
          return part;
        return part
          .split("+")
          .map(function (k) {
            return "<kbd>" + k + "</kbd>";
          })
          .join("+");
      })
      .join(" ");
  }

  /* plain text of a row, for searching */
  function plain(s) {
    return String(s)
      .replace(/[`\[\]]/g, "")
      .toLowerCase();
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ---------------------------------------------------------- render */

  function renderKey(row) {
    var k = row.key;
    if (row.type === "kbd")
      return '<span class="row-key">' + chord(esc(k)) + "</span>";
    if (row.type === "text")
      return '<span class="tok tok-text">' + esc(k) + "</span>";
    var cls = row.type === "slash" ? "tok tok-slash copyable" : "tok copyable";
    return (
      '<span class="' +
      cls +
      '" data-copy="' +
      esc(k) +
      '" title="Click to copy">' +
      esc(k) +
      "</span>"
    );
  }

  function renderRow(row) {
    var r = el(
      '<div class="row' +
        (row.full ? " full" : "") +
        '">' +
        renderKey(row) +
        (row.desc
          ? '<div class="row-desc">' + markup(row.desc) + "</div>"
          : "") +
        "</div>",
    );
    r._search = plain(row.key + " " + (row.desc || ""));
    return r;
  }

  function renderTip(tip) {
    return el(
      '<div class="tip"><b>' +
        esc(tip.label) +
        ":</b> " +
        markup(tip.text) +
        "</div>",
    );
  }

  function renderPrefix(items) {
    var wrap = el('<div class="prefix-grid"></div>');
    items.forEach(function (it) {
      var node = el(
        '<div class="prefix-item">' +
          '<span class="prefix-key">' +
          esc(it.key) +
          "</span>" +
          '<div class="prefix-desc">' +
          markup(it.desc) +
          "</div>" +
          "</div>",
      );
      node._search = plain(it.key + " " + it.desc);
      wrap.appendChild(node);
    });
    return wrap;
  }

  function renderCard(sec) {
    var card = el(
      '<section class="card ' +
        esc(sec.color || "orange") +
        '" id="' +
        esc(sec.id) +
        '" data-tag="' +
        esc(sec.tag || "") +
        '">' +
        '<div class="card-head">' +
        '<div class="card-icon" aria-hidden="true">' +
        esc(sec.icon || "·") +
        "</div>" +
        '<h2 class="card-title">' +
        esc(sec.title) +
        "</h2>" +
        '<span class="card-count"></span>' +
        "</div>" +
        '<div class="card-body"></div>' +
        "</section>",
    );
    var body = card.querySelector(".card-body");
    var rows = [];

    if (sec.layout === "prefix") {
      var grid = renderPrefix(sec.items || []);
      body.appendChild(grid);
      rows = Array.prototype.slice.call(grid.children);
    } else {
      (sec.groups || []).forEach(function (grp) {
        var g = el('<div class="group"></div>');
        if (grp.label)
          g.appendChild(
            el('<div class="group-label">' + esc(grp.label) + "</div>"),
          );
        (grp.rows || []).forEach(function (row) {
          var node = renderRow(row);
          g.appendChild(node);
          rows.push(node);
        });
        body.appendChild(g);
      });
    }

    if (sec.tip) body.appendChild(renderTip(sec.tip));

    card._rows = rows;
    card._groups = Array.prototype.slice.call(body.querySelectorAll(".group"));
    card._tip = body.querySelector(".tip");
    card.querySelector(".card-count").textContent = rows.length;
    return card;
  }

  function renderMeta() {
    var strip = document.getElementById("metaStrip");
    if (!strip || !meta.version) return;
    var links = (meta.links || [])
      .map(function (l) {
        return (
          "<span><b>" +
          esc(l.label) +
          ':</b> <a href="' +
          esc(l.href) +
          '" target="_blank" rel="noopener">' +
          esc(l.text) +
          "</a></span>"
        );
      })
      .join('<span class="dot">·</span>');

    strip.innerHTML =
      "<span><b>Version:</b> " +
      esc(meta.version) +
      '</span><span class="dot">·</span>' +
      "<span><b>Default model:</b> " +
      esc(meta.defaultModel) +
      '</span><span class="dot">·</span>' +
      "<span><b>Updated:</b> " +
      esc(meta.updated) +
      '</span><span class="dot">·</span>' +
      links;

    var foot = document.getElementById("footer");
    if (foot) {
      foot.innerHTML =
        "<span>" +
        esc((meta.models || []).join(" · ")) +
        "</span>" +
        '<span class="dot">·</span>' +
        "<span>" +
        esc(meta.platforms || "") +
        "</span>";
    }
    document.title = meta.brand + " — " + meta.tagline;
  }

  /* ---------------------------------------------------------- search */

  var state = { q: "", tag: "all" };

  function applyFilter() {
    var q = state.q.trim().toLowerCase();
    var cards = document.querySelectorAll(".card");
    var shown = 0;

    cards.forEach(function (card) {
      var tagOk = state.tag === "all" || card.dataset.tag === state.tag;
      var hits = 0;

      card._rows.forEach(function (row) {
        var match = tagOk && (!q || row._search.indexOf(q) !== -1);
        row.hidden = !match;
        if (match) hits++;
      });

      /* hide a group whose rows are all filtered out */
      card._groups.forEach(function (g) {
        var any = Array.prototype.some.call(
          g.querySelectorAll(".row"),
          function (r) {
            return !r.hidden;
          },
        );
        g.hidden = !any;
      });

      if (card._tip) card._tip.hidden = !!q;
      card.querySelector(".card-count").textContent = hits;
      card.hidden = hits === 0;
      if (hits) shown++;
    });

    var empty = document.getElementById("empty");
    if (empty) empty.hidden = shown !== 0;
  }

  function bindControls() {
    var search = document.getElementById("search");
    if (search) {
      search.addEventListener("input", function () {
        state.q = search.value;
        applyFilter();
      });
      search.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          search.value = "";
          state.q = "";
          applyFilter();
          search.blur();
        }
      });
    }

    /* "/" focuses search, the way the CLI does it */
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "/" &&
        document.activeElement !== search &&
        !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)
      ) {
        e.preventDefault();
        search.focus();
        search.select();
      }
    });

    document.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.tag = chip.dataset.tag;
        document.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        applyFilter();
      });
    });

    /* click any command token to copy it */
    document.addEventListener("click", function (e) {
      var tok = e.target.closest(".copyable");
      if (!tok) return;
      copy(tok.dataset.copy || tok.textContent).then(function () {
        document.querySelectorAll(".copied").forEach(function (n) {
          n.classList.remove("copied");
        });
        tok.classList.add("copied");
        setTimeout(function () {
          tok.classList.remove("copied");
        }, 1200);
      });
    });
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(fallback);
    }
    return fallback();

    function fallback() {
      return new Promise(function (resolve) {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.cssText = "position:fixed;opacity:0;";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          /* nothing else to try */
        }
        document.body.removeChild(ta);
        resolve();
      });
    }
  }

  /* ---------------------------------------------------------- theme */

  function bindTheme() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;

    function label() {
      var t = document.documentElement.getAttribute("data-theme");
      btn.textContent = t === "dark" ? "☀" : "☾";
      btn.setAttribute(
        "aria-label",
        t === "dark" ? "Switch to light theme" : "Switch to dark theme",
      );
    }

    /* resolve "system" to a concrete value on first click */
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      if (!cur) {
        cur = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("cc-theme", next);
      } catch (e) {
        /* private mode */
      }
      label();
    });

    label();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", label);
  }

  /* ---------------------------------------------------------- public API */

  window.CHEATSHEET = {
    add: function (section) {
      sections.push(section);
    },
    meta: function (m) {
      meta = m;
    },

    render: function () {
      var host = document.getElementById("cards");
      if (!host) return;
      var frag = document.createDocumentFragment();
      sections.forEach(function (sec) {
        frag.appendChild(renderCard(sec));
      });
      host.appendChild(frag);
      renderMeta();
      bindControls();
      bindTheme();
      applyFilter();
    },
  };
})();
