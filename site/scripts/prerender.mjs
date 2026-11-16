// After the two Vite builds: render every page in every language to its own HTML file,
// with the right <head>, so search engines and link previews see real content.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const { render, PAGES, LANGS, DOMAIN, localPath, translate } = await import(pathToFileURL(path.join(root, "dist-server/entry-server.js")));
const template = fs.readFileSync(path.join(root, "dist/index.html"), "utf8");
const INDEX = process.env.SITE_INDEX === "1";          // set SITE_INDEX=1 at launch to let search engines in
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const OG_LOCALE = { en: "en_US", de: "de_DE", pt: "pt_PT" };
const today = new Date().toISOString().slice(0, 10);
const PERSON_ID = DOMAIN + "/#person";
const person = {
  "@type": "Person", "@id": PERSON_ID, name: "Yannik Bauer", url: DOMAIN + "/", image: DOMAIN + "/assets/portrait.webp",
  jobTitle: "Software developer",
  knowsAbout: ["Mobile app development", "Web development", "AI automation", "Large language models", "React", "Software engineering"],
  knowsLanguage: ["de", "pt", "en"], nationality: { "@type": "Country", name: "Germany" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Porto" },
  sameAs: ["https://github.com/YannikBauer1", "https://www.linkedin.com/in/yannik-bauer-53259b233/"],
};
const website = { "@type": "WebSite", "@id": DOMAIN + "/#website", url: DOMAIN + "/", name: "Yannik Bauer", inLanguage: ["en", "de", "pt-PT"], publisher: { "@id": PERSON_ID } };
const app = {
  "@type": "MobileApplication", name: "BTS Insights", applicationCategory: "SportsApplication", operatingSystem: "iOS, Android",
  author: { "@id": PERSON_ID },
  installUrl: ["https://apps.apple.com/app/id6751126177", "https://play.google.com/store/apps/details?id=com.ironinsights.app"],
  sameAs: ["https://apps.apple.com/app/id6751126177", "https://play.google.com/store/apps/details?id=com.ironinsights.app", "https://www.instagram.com/ironinsightsbb/"],
};
const paper = (name, url, year, extra = {}) => ({ "@type": "ScholarlyArticle", name, headline: name, url, datePublished: String(year), author: { "@id": PERSON_ID }, inLanguage: "en", ...extra });
const papers = [
  paper("Designing a Multi-Narrative Gamified Learning Experience", "https://doi.org/10.4230/OASIcs.ICPEC.2025.15", 2025),
  paper("Authoring Programming Exercises for Automated Assessment Assisted by Generative AI", "https://doi.org/10.4230/OASIcs.ICPEC.2024.21", 2024),
  paper("Can a Content Management System Provide a Good User Experience to Teachers?", "https://drops.dagstuhl.de/opus/volltexte/2023/18500/", 2023),
  { "@type": "Thesis", name: "Improving Teachers User Experience in a Virtual Learning Environment", url: "https://repositorio-aberto.up.pt/handle/10216/154059", datePublished: "2023", author: { "@id": PERSON_ID }, inLanguage: "en", inSupportOf: "Master's in Computer Science", sourceOrganization: { "@type": "CollegeOrUniversity", name: "University of Porto" } },
];

/** structured data for one page, as one linked graph */
function graph(page, lang, url, title, desc) {
  const home = DOMAIN + localPath("/", lang);
  const webpage = { "@type": page.key === "home" ? "ProfilePage" : "WebPage", "@id": url + "#webpage", url, name: title, description: desc, inLanguage: lang.htmlLang, isPartOf: { "@id": DOMAIN + "/#website" }, about: { "@id": PERSON_ID } };
  if (page.key === "home") webpage.mainEntity = { "@id": PERSON_ID };
  const out = [website, { ...person, description: desc0(lang) }, webpage];
  if (page.key !== "home") out.push({ "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Yannik Bauer", item: home },
    { "@type": "ListItem", position: 2, name: title.split(/[:|]/)[0].trim(), item: url },
  ] });
  if (page.key === "work") out.push(app);
  if (page.key === "credentials") out.push(...papers);
  return { "@context": "https://schema.org", "@graph": out };
}
const desc0 = (lang) => translate(PAGES[0].description, lang.code);

const urls = [];
for (const lang of LANGS) for (const page of PAGES) {
  const route = localPath(page.path, lang);
  const url = DOMAIN + route;
  const title = translate(page.title, lang.code), desc = translate(page.description, lang.code);
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<meta name="author" content="Yannik Bauer">`,
    `<link rel="canonical" href="${url}">`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l.htmlLang}" href="${DOMAIN + localPath(page.path, l)}">`),
    `<link rel="alternate" hreflang="x-default" href="${DOMAIN + localPath(page.path, LANGS[0])}">`,
    `<meta property="og:type" content="${page.key === "home" ? "profile" : "website"}">`,
    `<meta property="og:site_name" content="Yannik Bauer">`,
    `<meta property="og:locale" content="${OG_LOCALE[lang.code]}">`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l.code]}">`),
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${DOMAIN}/assets/og.jpg">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(translate("Yannik Bauer", lang.code))}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(desc)}">`,
    `<meta name="twitter:image" content="${DOMAIN}/assets/og.jpg">`,
    INDEX && !page.legal ? `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">` : `<meta name="robots" content="noindex">`,
    page.key === "home" ? `<link rel="preload" as="image" href="/assets/portrait.webp" type="image/webp" fetchpriority="high">` : "",
    page.legal ? "" : `<script type="application/ld+json">${JSON.stringify(graph(page, lang, url, title, desc)).replace(/</g, "\\u003c")}</script>`,
  ].filter(Boolean).join("\n");
  const html = template
    .replace(/<!--head-->[\s\S]*?<!--\/head-->/, head)
    .replace('<html lang="en"', `<html lang="${lang.htmlLang}"`)
    .replace("<!--app-->", render(route));
  const file = path.join(root, "dist", route === "/" ? "" : route, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (!page.legal) urls.push({ url, page });
  if (page.key === "home" && lang === LANGS[0]) fs.writeFileSync(path.join(root, "dist/404.html"), html.replace(/<link rel="canonical"[^>]*>\n?/, "").replace(/<meta name="robots"[^>]*>/, `<meta name="robots" content="noindex">`));
}
const alternates = (page) => [...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.htmlLang}" href="${DOMAIN + localPath(page.path, l)}"/>`), `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN + localPath(page.path, LANGS[0])}"/>`].join("\n");
fs.writeFileSync(path.join(root, "dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map(({ url, page }) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n${alternates(page)}\n  </url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(root, "dist/robots.txt"), INDEX ? `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n` : `User-agent: *\nAllow: /\n`);
fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`prerendered ${LANGS.length * PAGES.length} pages${INDEX ? "" : " (noindex: set SITE_INDEX=1 at launch)"}`);
