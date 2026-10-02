window.CONFIG = {
  name: "KRISTOFER SMP",
  tagline: "SURVIVE • BUILD • CONQUER",

  server: {
    ip: "fr3.plugged.host:40961"
  },

  discord: {
    invite: "https://discord.gg/Tu7vqWP2t"
  },

  api: {
    status: "https://api.mcsrvstat.us/3/",
    players: "",
    metrics: "",
    refreshSec: 60
  },

  /* =========================
     RANKS
     ========================= */
  ranks: [],

  /* =========================
     STORE
     ========================= */
  store: [],

  /* =========================
     ECONOMY
     ========================= */
  economy: {
    currencyName: "K-Coins",
    symbol: "K₵",
    about: "عملة KRISTOFER SMP المستخدمة داخل نظام الاقتصاد.",
    shopUrl: "",
    rewards: []
  },

  /* =========================
     STAFF
     ========================= */
  staff: [
    {
      name: "3li15",
      role: "Owner"
    },
    {
      name: "A7mosxpro",
      role: "Web Developer"
    },
    {
      name: "Nox_1",
      role: "Minecraft Developer",
      team: "Pixel Games"
    },
    {
      name: "A7mosxpro",
      role: "Minecraft Developer",
      team: "Pixel Games"
    }
  ],

  /* =========================
     PLUGINS
     ========================= */
  plugins: [
    "TPA",
    "RTP",
    "RTPQ",
    "Dragon Egg Tracker",
    "Economy Shop",
    "Home",
    "Lobby",
    "Falling Tree",
    "Vein Miner",
    "Voice Chat",
    "Login",
    "Security"
  ],

  /* =========================
     WORLDS
     ========================= */
  worlds: [
    "Survival World",
    "Mining World (Reset دوري)",
    "Farm World",
    "PvP Arena",
    "Events World"
  ],

  /* =========================
     SPAWN
     ========================= */
  spawn: [
    "Spawn",
    "Rules",
    "Market",
    "Bank / Economy",
    "Daily Rewards",
    "Leaderboards",
    "Quests",
    "Portals",
    "Help NPCs"
  ],

  /* =========================
     COMMANDS
     ========================= */
  commands: [
    {
      cmd: "/simple tpa <player>",
      desc: "Send a teleport request to a player."
    },
    {
      cmd: "/simple tpaccept",
      desc: "Accept a teleport request."
    },
    {
      cmd: "/simple tpdeny",
      desc: "Deny a teleport request."
    },
    {
      cmd: "/simple rtp",
      desc: "Teleport to a random location."
    },
    {
      cmd: "/simple home",
      desc: "Teleport to your home."
    },
    {
      cmd: "/simple sethome <name>",
      desc: "Create a home."
    },
    {
      cmd: "/simple delhome <name>",
      desc: "Delete a home."
    },
    {
      cmd: "/simple bal",
      desc: "Check your balance."
    },
    {
      cmd: "/simple baltop",
      desc: "View the richest players."
    },
    {
      cmd: "/simple shop",
      desc: "Open the server shop."
    },
    {
      cmd: "/simple kit",
      desc: "View available kits."
    },
    {
      cmd: "/simple msg <player> <message>",
      desc: "Send a private message."
    }
  ],

  /* =========================
     RULES
     ========================= */
  rules: [
    "احترم جميع اللاعبين وأعضاء الإدارة. — Respect all players and staff.",
    "ممنوع استخدام Cheats أو Hacks. — Cheats and hacks are not allowed.",
    "ممنوع استغلال Bugs أو Glitches. — Do not exploit bugs or glitches.",
    "ممنوع التخريب أو السرقة بدون إذن. — No griefing or stealing.",
    "ممنوع Spam أو Flood في الشات. — No spam or flooding.",
    "ممنوع الإعلان عن سيرفرات أخرى بدون إذن. — No unauthorized advertising.",
    "ممنوع نشر المعلومات الشخصية. — Respect player privacy.",
    "اتبع تعليمات الإدارة المتعلقة بالسيرفر. — Follow staff instructions.",
    "استخدم Discord للإبلاغ عن المخالفات. — Use Discord for reports."
  ],

  /* =========================
     ACHIEVEMENTS
     ========================= */
  achievements: [
    {
      name: "First Steps | البداية",
      desc: "Enter the server for the first time."
    },
    {
      name: "Wooden Age | عصر الخشب",
      desc: "Collect your first resources."
    },
    {
      name: "Miner | عامل المناجم",
      desc: "Start your mining journey."
    },
    {
      name: "Builder | البنّاء",
      desc: "Build your first structure."
    },
    {
      name: "Explorer | المستكشف",
      desc: "Explore new areas."
    },
    {
      name: "Dragon Slayer | قاتل التنين",
      desc: "Defeat the Ender Dragon."
    },
    {
      name: "Rich Player | الثري",
      desc: "Build up a large amount of server currency."
    },
    {
      name: "Survivor | الناجي",
      desc: "Survive and progress in the Survival World."
    }
  ],

  /* =========================
     QUESTS
     ========================= */
  quests: [
    {
      name: "First Mission | المهمة الأولى",
      desc: "Collect your basic resources."
    },
    {
      name: "Mining Mission | مهمة التعدين",
      desc: "Collect resources from the Mining World."
    },
    {
      name: "Builder Mission | مهمة البناء",
      desc: "Build and develop your own base."
    },
    {
      name: "Explorer Mission | مهمة الاستكشاف",
      desc: "Explore different areas."
    },
    {
      name: "PvP Mission | مهمة الـPvP",
      desc: "Participate in PvP battles."
    },
    {
      name: "Dragon Mission | مهمة التنين",
      desc: "Prepare to face the Ender Dragon."
    }
  ],

  /* =========================
     NEWS & EVENTS
     ========================= */
  news: [],
  events: [],

  /* =========================
     GALLERY
     ========================= */
  gallery: [],

  /* =========================
     WIKI
     ========================= */
  wiki: {
    Server: "KRISTOFER SMP — SURVIVE • BUILD • CONQUER",
    Gameplay: "Survival-focused Minecraft gameplay with multiple worlds.",
    Economy: "Server economy powered by K-Coins.",
    Ranks: "Coming Soon | قريبًا",
    Commands: "Use the /simple command prefix.",
    Rules: "Follow the server rules and respect other players.",
    Events: "Coming Soon | قريبًا"
  },

  /* =========================
     EXPENSES
     ========================= */
  expenses: {
    currency: "EGP",
    items: {
      Hosting: null,
      Domain: null,
      Plugins: null,
      Services: null,
      "Other Expenses": null
    }
  }
};