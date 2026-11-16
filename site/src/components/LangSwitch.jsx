import { useLocation } from "react-router-dom";
import { useT } from "../i18n.jsx";
import { useNav } from "../nav.jsx";
import { LANGS, parsePath, localPath } from "../site.js";

export default function LangSwitch({ className }) {
  const t = useT();
  const { switchLang } = useNav();
  const { lang, page } = parsePath(useLocation().pathname);
  return (
    <span className={className} role="group" aria-label={t("Language")}>
      {LANGS.map((l) => {
        const href = localPath(page ? page.path : "/", l);
        const current = l.code === lang.code;
        return (
          <a key={l.code} href={href} hrefLang={l.htmlLang} lang={l.htmlLang} aria-current={current ? "true" : undefined}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
              e.preventDefault();
              if (!current) switchLang(href, l.code);
            }}>
            {l.code.toUpperCase()}
          </a>
        );
      })}
    </span>
  );
}
