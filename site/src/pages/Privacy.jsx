import { useT } from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import { EMAIL } from "../site.js";

export default function Privacy() {
  const t = useT();
  return (
    <>
    <header className="head">
      <div className="wrap">
        <h1 className="head__title">
          {t("Privacy")}
        </h1>
      </div>
    </header>
    <section className="room room--first wk legal">
      <div className="wrap">
        <div className="legal__body">
          <h2>
            {t("Who is responsible")}
          </h2>
          <p>
            {t("Yannik Bauer, contact details in the")}{" "}
            <A to="/impressum">
              {t("legal notice")}
            </A>
            {t(".")}
          </p>
          <h2>
            {t("What this site does")}
          </h2>
          <p>
            {t("This site has no accounts, no forms, no cookies and no analytics. It does not track you.")}
          </p>
          <h2>
            {t("Hosting")}
          </h2>
          <p>
            {t("The site is hosted by Netlify. When you open a page, Netlify processes your IP address and basic request data in server logs to deliver the site and keep it secure (Art. 6 (1) (f) GDPR).")}
          </p>
          <h2>
            {t("Fonts")}
          </h2>
          <p>
            {t("The fonts are served from this site. No font provider is contacted when you open a page.")}
          </p>
          <h2>
            {t("Contact by email")}
          </h2>
          <p>
            {t("If you write to me, I use your message and address only to answer you.")}
          </p>
          <h2>
            {t("Your rights")}
          </h2>
          <p>
            {t("You can ask what data I hold about you and have it corrected or deleted. You can also complain to a data protection authority.")}
          </p>
        </div>
      </div>
    </section>
      <End bare />
    </>
  );
}
