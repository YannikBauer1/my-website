import { useT } from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import { EMAIL } from "../site.js";

export default function Impressum() {
  const t = useT();
  return (
    <>
    <header className="head">
      <div className="wrap">
        <h1 className="head__title">
          {t("Legal notice")}
        </h1>
      </div>
    </header>
    <section className="room room--first wk legal">
      <div className="wrap">
        <div className="legal__body">
          <h2>
            {t("Impressum")}
          </h2>
          <p>
            {t("Information according to § 5 DDG")}
          </p>
          <p>
            {t("Yannik Bauer")}
            <br />
            {t("c/o GoFit")}
            <br />
            {t("Röntgenstraße 1")}
            <br />
            {t("97688 Bad Kissingen")}
            <br />
            {t("Germany")}
          </p>
          <h2>
            {t("Contact")}
          </h2>
          <p>
            {t("Email:")}{" "}
            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <h2>
            {t("Responsible for the content")}
          </h2>
          <p>
            {t("Yannik Bauer, address as above.")}
          </p>
        </div>
      </div>
    </section>
      <End bare />
    </>
  );
}
