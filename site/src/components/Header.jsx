import { useLocation } from "react-router-dom";
import { useT } from "../i18n.jsx";
import A from "./A.jsx";
import LangSwitch from "./LangSwitch.jsx";
import { EMAIL, parsePath } from "../site.js";

export default function Header() {
  const t = useT();
  const { page } = parsePath(useLocation().pathname);
  const current = (key) => (page && page.key === key ? "page" : undefined);
  return (
    <header className="bar">
      <A className="bar__name" to="/">
        <img className="bar__logo" src="/assets/favicon.svg" width={28} height={28} alt="" />
        Yannik Bauer
      </A>
      <nav className="index" aria-label={t("Pages")}>
        <ul>
          <li><A to="/work" aria-current={current("work")}>{t("Work")}</A></li>
          <li><A to="/credentials" aria-current={current("credentials")}>{t("Credentials")}</A></li>
        </ul>
      </nav>
      <LangSwitch className="lang lang--bar" />
      <a className="cta cta--bar" href={`mailto:${EMAIL}`}>{t("Get in touch")}</a>
    </header>
  );
}
