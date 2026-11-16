import { useT } from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import { EMAIL } from "../site.js";

export default function Credentials() {
  const t = useT();
  return (
    <>
    <header className="head">
      <div className="wrap">
        <h1 className="head__title">
          {t("Credentials")}
        </h1>
      </div>
    </header>
    <section className="room room--first wk" id="research" aria-labelledby="research-title">
      <div className="wrap part__grid">
        <div className="part__text" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("Research")}
          </p>
          <h2 className="part__title" id="research-title">
            {t("Published research")}
          </h2>
          <p className="part__line">
            {t("Written at the University of Porto and INESC TEC, where the research included using LLMs to generate course content.")}
          </p>
          <ul className="papers">
            <li>
              <a href="https://doi.org/10.4230/OASIcs.ICPEC.2025.15" rel="noopener">
                {t("Designing a Multi-Narrative Gamified Learning Experience")}
                <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                  <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span>
                {t("Paper, ICPEC 2025")}
              </span>
            </li>
            <li>
              <a href="https://doi.org/10.4230/OASIcs.ICPEC.2024.21" rel="noopener">
                {t("Authoring Programming Exercises for Automated Assessment Assisted by Generative AI")}
                <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                  <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span>
                {t("Paper, ICPEC 2024")}
              </span>
            </li>
            <li>
              <a href="https://repositorio-aberto.up.pt/handle/10216/154059" rel="noopener">
                {t("Improving Teachers User Experience in a Virtual Learning Environment")}
                <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                  <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span>
                {t("Master's thesis, 2023. Graded 19 of 20.")}
              </span>
            </li>
            <li>
              <a href="https://drops.dagstuhl.de/opus/volltexte/2023/18500/" rel="noopener">
                {t("Can a Content Management System Provide a Good User Experience to Teachers?")}
                <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                  <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span>
                {t("Paper, ICPEC 2023")}
              </span>
            </li>
          </ul>
        </div>
        <div className="room__object" data-sc-in>
          <div className="obj obj--paper">
            <div className="obj__pool" aria-hidden="true">
            </div>
            <div className="obj__lift">
              <div className="obj__tilt">
                <div className="sheets sheets--four" data-loose aria-hidden="true">
                  <div className="sheet sheet--a">
                    <p className="sheet__venue">
                      {t("ICPEC 2023")}
                    </p>
                    <p className="sheet__title">
                      {t("Can a Content Management System Provide a Good User Experience to Teachers?")}
                    </p>
                  </div>
                  <div className="sheet sheet--b">
                    <p className="sheet__venue">
                      {t("Master's thesis 2023")}
                    </p>
                    <p className="sheet__title">
                      {t("Improving Teachers User Experience in a Virtual Learning Environment")}
                    </p>
                  </div>
                  <div className="sheet sheet--c">
                    <p className="sheet__venue">
                      {t("ICPEC 2025")}
                    </p>
                    <p className="sheet__title">
                      {t("Designing a Multi-Narrative Gamified Learning Experience")}
                    </p>
                  </div>
                  <div className="sheet sheet--d">
                    <p className="sheet__venue">
                      {t("ICPEC 2024")}
                    </p>
                    <p className="sheet__title">
                      {t("Authoring Programming Exercises for Automated Assessment Assisted by Generative AI")}
                    </p>
                    <p className="sheet__doi">
                      {t("doi.org/10.4230/OASIcs.ICPEC.2024.21")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="room wk" id="education" aria-labelledby="edu-title">
      <div className="wrap">
        <div className="wk__head" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("Background")}
          </p>
          <h2 className="part__title" id="edu-title">
            {t("Education and research")}
          </h2>
        </div>
        <ol className="cv" data-sc-in data-sc-stagger="60">
          <li className="cv__row">
            <span className="cv__when">
              {t("2024 to 2025")}
            </span>
            <h3 className="cv__what">
              {t("Researcher, INESC TEC")}
            </h3>
            <p className="cv__more">
              {t("Gamified programming education, and LLMs for generating course content.")}
            </p>
          </li>
          <li className="cv__row">
            <span className="cv__when">
              {t("2024")}
            </span>
            <h3 className="cv__what">
              {t("English as a Second Language")}
            </h3>
            <p className="cv__more">
              {t("Utah Tech University, United States. Certificate.")}
            </p>
          </li>
          <li className="cv__row">
            <span className="cv__when">
              {t("2022 to 2023")}
            </span>
            <h3 className="cv__what">
              {t("Researcher, INESC TEC")}
            </h3>
            <p className="cv__more">
              {t("A framework for gamified programming education.")}
            </p>
          </li>
          <li className="cv__row">
            <span className="cv__when">
              {t("2021 to 2023")}
            </span>
            <h3 className="cv__what">
              {t("Master's in Computer Science")}
            </h3>
            <p className="cv__more">
              {t("University of Porto. Thesis graded 19 of 20.")}
            </p>
          </li>
          <li className="cv__row">
            <span className="cv__when">
              {t("2018 to 2021")}
            </span>
            <h3 className="cv__what">
              {t("Bachelor's in Mathematics")}
            </h3>
            <p className="cv__more">
              {t("University of Porto.")}
            </p>
          </li>
        </ol>
      </div>
    </section>
      <End />
    </>
  );
}
