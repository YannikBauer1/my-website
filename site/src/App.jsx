import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { flushSync } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { LangContext, translate, changes } from "./i18n.jsx";
import { NavContext } from "./nav.jsx";
import { parsePath, DOMAIN, localPath } from "./site.js";
import { startPage, fadeWords } from "./effects.js";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Credentials from "./pages/Credentials.jsx";
import Impressum from "./pages/Impressum.jsx";
import Privacy from "./pages/Privacy.jsx";

const VIEWS = { home: Home, work: Work, credentials: Credentials, impressum: Impressum, privacy: Privacy };
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, page } = parsePath(location.pathname);
  const pageKey = page ? page.key : "missing";
  const View = VIEWS[pageKey] || Home;
  const first = useRef(true);
  const busy = useRef(false);

  // --- moving between pages: the header stays, the content leaves and the next one settles in
  const nav = useMemo(() => ({
    go(href) {
      const url = new URL(href, window.location.href);
      if (url.pathname.replace(/\/+$/, "") === window.location.pathname.replace(/\/+$/, "")) {      // same page: just move to the section
        const el = url.hash && document.getElementById(url.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (busy.current) return;
      busy.current = true;
      const root = document.documentElement;
      if (reduced()) { navigate(href); busy.current = false; return; }
      root.classList.add("nav-leave");
      setTimeout(() => { navigate(href); busy.current = false; }, 170);
    },
    // --- switching language: nothing reloads and nothing moves. Only the words change, top to bottom.
    switchLang(href, to) {
      if (busy.current) return;
      busy.current = true;
      const from = parsePath(window.location.pathname).lang.code;
      const fade = fadeWords((text) => changes(text, from, to));
      setTimeout(() => {
        flushSync(() => navigate(href, { preventScrollReset: true }));
        fade.back();
        busy.current = false;
      }, fade.wait);
    },
  }), [navigate]);

  // --- after a page change: scroll, then let the new content arrive
  useIsoLayoutEffect(() => {
    const root = document.documentElement;
    if (first.current) { first.current = false; return; }
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" }); else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    root.classList.remove("nav-leave", "nav-arrive");
    void document.body.offsetWidth;
    root.classList.add("nav-arrive");
    const timer = setTimeout(() => root.classList.remove("nav-arrive"), 900);
    return () => clearTimeout(timer);
  }, [pageKey]);

  // --- reveal engine and pointer effects, restarted for each page (not for a language change)
  useEffect(() => startPage(), [pageKey]);

  // --- keep the document head in step
  useEffect(() => {
    if (!page) return;
    document.documentElement.lang = lang.htmlLang;
    document.title = translate(page.title, lang.code);
    document.querySelector('meta[name="description"]')?.setAttribute("content", translate(page.description, lang.code));
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", DOMAIN + localPath(page.path, lang));
  }, [page, lang]);

  return (
    <LangContext.Provider value={lang.code}>
      <NavContext.Provider value={nav}>
        <a className="skip" href="#main">{translate("Skip to content", lang.code)}</a>
        <Header />
        <main id="main">
          <View />
        </main>
      </NavContext.Provider>
    </LangContext.Provider>
  );
}
