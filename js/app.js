const C = CONFIG;
const $ = (selector) => document.querySelector(selector);

const esc = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const safeUrl = (value = "") =>
  /^https?:\/\//i.test(value) ? value : "#";

const skin = (name) =>
  `https://mc-heads.net/avatar/${encodeURIComponent(name)}/128`;

const pageNames = {
  home: "Home",
  status: "Server Status",
  players: "Players",
  leaderboards: "Leaderboards",
  economy: "Economy",
  wiki: "Wiki",
  rules: "Rules",
  ranks: "Ranks",
  store: "Store",
  events: "Events",
  news: "News",
  staff: "Staff",
  plugins: "Plugins",
  commands: "Commands",
  quests: "Quests",
  achievements: "Achievements",
  gallery: "Gallery",
  discord: "Discord",
  support: "Support",
  dashboard: "Dashboard",
  expenses: "Expenses"
};

function page() {
  return location.hash.replace(/^#\/?/, "").split("/")[0] || "home";
}

function nav() {
  const navEl = $("#nav");

  navEl.innerHTML = Object.entries(pageNames)
    .map(([key, label]) => `
      <a href="#/${key}" class="${page() === key ? "active" : ""}">
        ${esc(label)}
      </a>
    `)
    .join("");
}

function layout(title, content) {
  return `
    <section class="page">
      <div class="page-head">
        <p class="eyebrow">${esc(C.name)}</p>
        <h1>${esc(title)}</h1>
      </div>
      ${content}
    </section>
  `;
}

function card(title, text, extra = "") {
  return `
    <article class="card">
      <h3>${esc(title)}</h3>
      ${text}
      ${extra}
    </article>
  `;
}

function comingSoon() {
  return `
    <div class="empty-state">
      <strong>Coming Soon</strong>
      <span>قريبًا</span>
    </div>
  `;
}

/* =========================
   HOME
   ========================= */

function homePage() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">MINECRAFT SURVIVAL</p>
        <h1>${esc(C.name)}</h1>
        <p>${esc(C.tagline)}</p>

        <div class="hero-actions">
          <a class="btn primary" href="#/status">Server Status</a>
          <a class="btn" href="#/discord">Join Discord</a>
        </div>
      </div>
    </section>

    <section class="quick-grid">
      ${card("Server IP", `<code>${esc(C.server.ip)}</code>`)}
      ${card("Discord", `<a href="${safeUrl(C.discord.invite)}" target="_blank" rel="noopener">Join Discord</a>`)}
      ${card("Currency", `<strong>${esc(C.economy.currencyName)} (${esc(C.economy.symbol)})</strong>`)}
      ${card("Ranks", `<strong>Coming Soon</strong>`)}
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Worlds</h2>
      </div>

      <div class="grid">
        ${C.worlds.map(world => card(world, `<p>KRISTOFER SMP World</p>`)).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>Spawn City</h2>
      </div>

      <div class="grid">
        ${C.spawn.map(item => card(item, `<p>Available in Spawn</p>`)).join("")}
      </div>
    </section>
  `;
}

/* =========================
   STATUS
   ========================= */

async function statusPage() {
  const data = await API.status();

  if (!data) {
    return layout("Server Status", `
      <div class="status-card">
        <span class="status-dot"></span>
        <h2>Server Status</h2>
        <p>Live server information is currently unavailable.</p>
        <code>${esc(C.server.ip)}</code>
      </div>
    `);
  }

  const online = Boolean(data.online);
  const players = data.players?.online ?? 0;
  const maxPlayers = data.players?.max ?? 0;
  const version = data.version || "Unknown";

  return layout("Server Status", `
    <div class="grid">
      ${card(
        "Status",
        `<strong>${online ? "Online" : "Offline"}</strong>`
      )}

      ${card(
        "Players",
        `<strong>${players}${maxPlayers ? ` / ${maxPlayers}` : ""}</strong>`
      )}

      ${card(
        "Version",
        `<strong>${esc(version)}</strong>`
      )}

      ${card(
        "Server IP",
        `<code>${esc(C.server.ip)}</code>`
      )}
    </div>
  `);
}

/* =========================
   STAFF
   ========================= */

function staffPage() {
  return layout("Staff Team", `
    <div class="staff-grid">
      ${C.staff.map(member => `
        <article class="staff-card">
          <img
            src="${skin(member.name)}"
            alt="${esc(member.name)}"
            loading="lazy"
          >

          <div>
            <h3>${esc(member.name)}</h3>
            <p>${esc(member.role)}</p>
            ${
              member.team
                ? `<span>${esc(member.team)}</span>`
                : ""
            }
          </div>
        </article>
      `).join("")}
    </div>
  `);
}

/* =========================
   PLUGINS
   ========================= */

function pluginsPage() {
  return layout("Plugins", `
    <div class="grid">
      ${C.plugins.map(plugin =>
        card(plugin, `<p>Server Plugin</p>`)
      ).join("")}
    </div>
  `);
}

/* =========================
   COMMANDS
   ========================= */

function commandsPage() {
  return layout("Commands", `
    <div class="commands-list">
      ${C.commands.map(command => `
        <article class="command-card">
          <code>${esc(command.cmd)}</code>
          <p>${esc(command.desc)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

/* =========================
   RULES
   ========================= */

function rulesPage() {
  return layout("Rules", `
    <div class="rules-list">
      ${C.rules.map((rule, index) => `
        <article class="rule-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${esc(rule)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

/* =========================
   RANKS
   ========================= */

function ranksPage() {
  return layout("Ranks", `
    ${comingSoon()}
  `);
}

/* =========================
   STORE
   ========================= */

function storePage() {
  return layout("Store", `
    ${comingSoon()}
  `);
}

/* =========================
   ECONOMY
   ========================= */

function economyPage() {
  return layout("Economy", `
    <div class="grid">
      ${card(
        "Currency",
        `<strong>${esc(C.economy.currencyName)}</strong>
         <p>Symbol: ${esc(C.economy.symbol)}</p>`
      )}

      ${card(
        "Shop",
        `<strong>Economy Shop</strong>
         <p>Server shop is available in-game.</p>`
      )}

      ${card(
        "Rewards",
        comingSoon()
      )}
    </div>
  `);
}

/* =========================
   QUESTS
   ========================= */

function questsPage() {
  return layout("Quests", `
    <div class="grid">
      ${C.quests.map(quest =>
        card(quest.name, `<p>${esc(quest.desc)}</p>`)
      ).join("")}
    </div>
  `);
}

/* =========================
   ACHIEVEMENTS
   ========================= */

function achievementsPage() {
  return layout("Achievements", `
    <div class="grid">
      ${C.achievements.map(item =>
        card(item.name, `<p>${esc(item.desc)}</p>`)
      ).join("")}
    </div>
  `);
}

/* =========================
   WORLDS
   ========================= */

function worldsPage() {
  return layout("Worlds", `
    <div class="grid">
      ${C.worlds.map(world =>
        card(world, `<p>KRISTOFER SMP World</p>`)
      ).join("")}
    </div>
  `);
}

/* =========================
   NEWS
   ========================= */

function newsPage() {
  return layout("News", `
    ${C.news.length
      ? `<div class="grid">
          ${C.news.map(item =>
            card(
              item.title,
              `<p>${esc(item.body || "")}</p>`
            )
          ).join("")}
        </div>`
      : comingSoon()
    }
  `);
}

/* =========================
   EVENTS
   ========================= */

function eventsPage() {
  return layout("Events", `
    ${C.events.length
      ? `<div class="grid">
          ${C.events.map(item =>
            card(
              item.title,
              `<p>${esc(item.body || "")}</p>`
            )
          ).join("")}
        </div>`
      : comingSoon()
    }
  `);
}

/* =========================
   GALLERY
   ========================= */

function galleryPage() {
  return layout("Gallery", `
    ${C.gallery.length
      ? `<div class="gallery-grid">
          ${C.gallery.map(item => {
            if (item.type === "video") {
              return `
                <video controls preload="metadata">
                  <source src="${safeUrl(item.src)}">
                </video>
              `;
            }

            return `
              <figure>
                <img
                  src="${safeUrl(item.src)}"
                  alt="${esc(item.caption || C.name)}"
                  loading="lazy"
                >
                ${
                  item.caption
                    ? `<figcaption>${esc(item.caption)}</figcaption>`
                    : ""
                }
              </figure>
            `;
          }).join("")}
        </div>`
      : comingSoon()
    }
  `);
}

/* =========================
   DISCORD
   ========================= */

function discordPage() {
  return layout("Discord", `
    <div class="discord-card">
      <h2>Join KRISTOFER SMP Discord</h2>
      <p>Join our Discord community and discover more about the server.</p>

      <a
        class="btn primary"
        href="${safeUrl(C.discord.invite)}"
        target="_blank"
        rel="noopener"
      >
        Join Discord
      </a>
    </div>
  `);
}

/* =========================
   SUPPORT
   ========================= */

function supportPage() {
  return layout("Support", `
    <div class="support-card">
      <h2>Need Help?</h2>
      <p>For support, questions, or reports, join our Discord server.</p>

      <a
        class="btn primary"
        href="${safeUrl(C.discord.invite)}"
        target="_blank"
        rel="noopener"
      >
        Discord Support
      </a>
    </div>
  `);
}

/* =========================
   WIKI
   ========================= */

function wikiPage() {
  return layout("Wiki", `
    <div class="grid">
      ${Object.entries(C.wiki).map(([title, text]) =>
        card(title, `<p>${esc(text)}</p>`)
      ).join("")}
    </div>
  `);
}

/* =========================
   DASHBOARD
   ========================= */

async function dashboardPage() {
  const data = await API.status();

  const online = data?.online ?? null;
  const players = data?.players?.online ?? null;

  return layout("Dashboard", `
    <div class="grid">
      ${card(
        "Server Status",
        `<strong>${
          online === null
            ? "Checking..."
            : online
              ? "Online"
              : "Offline"
        }</strong>`
      )}

      ${card(
        "Online Players",
        `<strong>${
          players === null
            ? "Checking..."
            : players
        }</strong>`
      )}

      ${card(
        "Server IP",
        `<code>${esc(C.server.ip)}</code>`
      )}

      ${card(
        "Discord",
        `<a href="${safeUrl(C.discord.invite)}" target="_blank" rel="noopener">Join Discord</a>`
      )}
    </div>
  `);
}

/* =========================
   EXPENSES
   ========================= */

function expensesPage() {
  return layout("Expenses", `
    ${comingSoon()}
  `);
}

/* =========================
   PLAYERS
   ========================= */

async function playersPage() {
  const result = await API.players();

  if (!result.list.length) {
    return layout("Players", `
      ${comingSoon()}
    `);
  }

  return layout("Online Players", `
    <div class="players-grid">
      ${result.list.map(player => `
        <article class="player-card">
          <img src="${skin(player.name)}" alt="${esc(player.name)}">
          <strong>${esc(player.name)}</strong>
        </article>
      `).join("")}
    </div>
  `);
}

/* =========================
   LEADERBOARDS
   ========================= */

function leaderboardsPage() {
  return layout("Leaderboards", `
    ${comingSoon()}
  `);
}

/* =========================
   ROUTER
   ========================= */

async function render() {
  nav();

  const current = page();
  const app = $("#app");

  try {
    switch (current) {
      case "home":
        app.innerHTML = homePage();
        break;

      case "status":
        app.innerHTML = await statusPage();
        break;

      case "players":
        app.innerHTML = await playersPage();
        break;

      case "leaderboards":
        app.innerHTML = leaderboardsPage();
        break;

      case "economy":
        app.innerHTML = economyPage();
        break;

      case "wiki":
        app.innerHTML = wikiPage();
        break;

      case "rules":
        app.innerHTML = rulesPage();
        break;

      case "ranks":
        app.innerHTML = ranksPage();
        break;

      case "store":
        app.innerHTML = storePage();
        break;

      case "events":
        app.innerHTML = eventsPage();
        break;

      case "news":
        app.innerHTML = newsPage();
        break;

      case "staff":
        app.innerHTML = staffPage();
        break;

      

      case "commands":
        app.innerHTML = commandsPage();
        break;

      case "quests":
        app.innerHTML = questsPage();
        break;

      case "achievements":
        app.innerHTML = achievementsPage();
        break;

      case "gallery":
        app.innerHTML = galleryPage();
        break;

      case "discord":
        app.innerHTML = discordPage();
        break;

      case "support":
        app.innerHTML = supportPage();
        break;

      case "dashboard":
        app.innerHTML = await dashboardPage();
        break;

      case "expenses":
        app.innerHTML = expensesPage();
        break;

      default:
        app.innerHTML = homePage();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error(error);

    app.innerHTML = `
      <section class="page">
        <div class="empty-state">
          <strong>Something went wrong</strong>
          <span>حدث خطأ أثناء تحميل الصفحة</span>
        </div>
      </section>
    `;
  }
}

/* =========================
   MOBILE MENU
   ========================= */

const burger = $("#burger");

if (burger) {
  burger.addEventListener("click", () => {
    const navEl = $("#nav");
    const expanded = burger.getAttribute("aria-expanded") === "true";

    burger.setAttribute("aria-expanded", String(!expanded));
    navEl.classList.toggle("open");
  });
}

window.addEventListener("hashchange", render);

render();