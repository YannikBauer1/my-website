import { useT } from "../i18n.jsx";
import A from "./A.jsx";
import LangSwitch from "./LangSwitch.jsx";
import { EMAIL } from "../site.js";

/** The closing call to action plus the footer. `bare` (legal pages) shows the footer only. */
export default function End({ bare = false }) {
  const t = useT();
  return (
    <section className={bare ? "end end--bare" : "end"} aria-labelledby={bare ? undefined : "end-title"}>
      {!bare && <div className="end__pool" aria-hidden="true" />}
      <div className="wrap">
        {!bare && (
          <div className="end__in" data-sc-in data-sc-stagger="70">
            <p className="end__who">
              <img src="/assets/portrait.webp" width={1254} height={1254} alt="Yannik Bauer" loading="lazy" decoding="async" />
              <span>
                Yannik Bauer
                <small>{t("German, Portuguese, English")}</small>
              </span>
            </p>
            <h2 className="end__title" id="end-title">{t("Tell me what you are building.")}</h2>
            <p className="end__cta">
              <a className="cta cta--plate" href={`mailto:${EMAIL}`}>{t("Get in touch")}</a>
            </p>
          </div>
        )}
        <footer className="foot">
          <p>
            {t("Yannik Bauer, software developer. 2026.")}
            <span className="foot__legal">
              <A to="/impressum">{t("Legal notice")}</A>
              <A to="/privacy">{t("Privacy")}</A>
            </span>
          </p>
          <p className="foot__links">
            <LangSwitch className="lang lang--foot" />
            <a className="foot__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="https://github.com/YannikBauer1" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/yannik-bauer-53259b233/" rel="noopener">LinkedIn</a>
          </p>
        </footer>
      </div>
    </section>
  );
}
