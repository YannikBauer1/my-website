import { useLang } from "../i18n.jsx";
import { useNav } from "../nav.jsx";
import { LANGS, localPath } from "../site.js";

/** Internal link. `to` is language-neutral ("/work#bts"); the current language's prefix is added here. */
export default function A({ to, children, ...rest }) {
  const lang = LANGS.find((l) => l.code === useLang());
  const { go } = useNav();
  const href = localPath(to, lang);
  function onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    e.preventDefault();
    go(href);
  }
  return <a href={href} onClick={onClick} {...rest}>{children}</a>;
}
