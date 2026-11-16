// Site-wide facts. Change them here, not in the pages.
export const EMAIL = "yannikbauer.website@gmail.com";
export const DOMAIN = "https://yannik-bauer.me";

export const LANGS = [
  { code: "en", prefix: "", htmlLang: "en" },
  { code: "de", prefix: "/de", htmlLang: "de" },
  { code: "pt", prefix: "/pt", htmlLang: "pt-PT" },
];

// Every page: its path, and the English title and description (translated through i18n.json).
export const PAGES = [
  { key: "home", path: "/", title: "Yannik Bauer: Apps, Websites and AI Automations", description: "Yannik Bauer is a software developer who builds apps, websites and AI automations. His app BTS Insights reached ~10,000 users in two years." },
  { key: "work", path: "/work", title: "Work: BTS Insights app and business websites | Yannik Bauer", description: "Work by Yannik Bauer: BTS Insights, a pro bodybuilding app with ~10,000 users, and websites for local businesses in Germany." },
  { key: "credentials", path: "/credentials", title: "Credentials: Master's, research and papers | Yannik Bauer", description: "Yannik Bauer's background: Master's in Computer Science from the University of Porto, research at INESC TEC, published papers and a master's thesis." },
  { key: "impressum", path: "/impressum", title: "Legal notice | Yannik Bauer", description: "Legal notice (Impressum) for yannik-bauer.me.", legal: true },
  { key: "privacy", path: "/privacy", title: "Privacy | Yannik Bauer", description: "Privacy information for yannik-bauer.me.", legal: true },
];

/** "/de/work/" -> { lang: "de", page: PAGES[1] } */
export function parsePath(pathname) {
  let p = pathname.replace(/\/+$/, "") || "/";
  let lang = LANGS[0];
  for (const l of LANGS.slice(1)) if (p === l.prefix || p.startsWith(l.prefix + "/")) { lang = l; p = p.slice(l.prefix.length) || "/"; }
  const page = PAGES.find((x) => x.path === p) || null;
  return { lang, page };
}

/** language-neutral path ("/work#bts") -> path in that language ("/de/work/#bts") */
export function localPath(to, lang) {
  const [path, hash] = to.split("#");
  const full = lang.prefix + (path === "/" ? "" : path) + "/";          // always a trailing slash: the address Netlify serves without a redirect
  return hash ? `${full}#${hash}` : full;
}
