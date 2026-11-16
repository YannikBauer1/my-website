import { useT } from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import { EMAIL } from "../site.js";

export default function Work() {
  const t = useT();
  return (
    <>
    <header className="head">
      <div className="wrap">
        <h1 className="head__title">
          {t("Work")}
        </h1>
      </div>
    </header>
    <section className="room room--first wk" id="bts" aria-labelledby="bts-title">
      <div className="wrap part__grid app">
        <div className="part__text app__intro" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("App")}
          </p>
          <h2 className="part__title" id="bts-title">
            {t("BTS Insights")}
          </h2>
          <p className="part__line">
            {t("The #1 app for pro bodybuilding fans worldwide. Every show, every result, every athlete. I built it, run it and market it on my own.")}
          </p>
        </div>
        <div className="duo duo--work" data-sc-in>
          <div className="duo__pool" aria-hidden="true">
          </div>
          <div className="duo__rear">
            <div className="phone">
              <img src="/assets/app-profile.webp" width={780} height={1695} alt={t("An athlete profile in BTS Insights.")} decoding="async" />
            </div>
          </div>
          <div className="duo__front">
            <div className="obj__tilt" data-sc-tilt="4">
              <div className="phone">
                <img src="/assets/app-event-results.webp" width={780} height={1695} alt={t("Results of the 2026 Olympia in BTS Insights, with placings and judges' scores.")} decoding="async" />
              </div>
            </div>
          </div>
        </div>
        <div className="part__text app__details" data-sc-in data-sc-stagger="70">
          <p className="stat">
            <strong>
              {t("~10,000")}
            </strong>
            <span>
              {t("users worldwide, and still growing")}
            </span>
          </p>
          <ul className="facts">
            <li>
              <b>
                {t("Inside.")}
              </b>
              {" "}{t("Every result, all athlete careers, head to head, the show calendar.")}
            </li>
            <li>
              <b>
                {t("First of its kind.")}
              </b>
              {" "}{t("Fans predict the shows and compete on their picks.")}
            </li>
            <li>
              <b>
                {t("Built with.")}
              </b>
              {" "}{t("Native iOS and Android: SwiftUI, Kotlin, Supabase.")}
            </li>
          </ul>
          <p className="stores">
            <a className="store" href="https://apps.apple.com/app/id6751126177" rel="noopener">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span>
                <small>
                  {t("Download on the")}
                </small>
                {t("App Store")}
              </span>
            </a>
            <a className="store" href="https://play.google.com/store/apps/details?id=com.ironinsights.app" rel="noopener">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
              </svg>
              <span>
                <small>
                  {t("Get it on")}
                </small>
                {t("Google Play")}
              </span>
            </a>
            <a className="store store--icon" href="https://www.instagram.com/ironinsightsbb/" rel="noopener" aria-label={t("BTS Insights on Instagram")}>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
    <section className="room wk" id="websites" aria-labelledby="web-title">
      <div className="wrap">
        <div className="wk__head" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("Websites")}
          </p>
          <h2 className="part__title" id="web-title">
            {t("For local businesses")}
          </h2>
        </div>
        <div className="shelf shelf--three" data-sc-in data-sc-stagger="90">
          <figure className="shelf__item" id="gofit">
            <div className="print">
              <img src="/assets/site-gofit-3.webp" width={1800} height={930} alt={t("The new GoFit website: the gym floor with the GoFit Bad Kissingen sign and the site navigation.")} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <h3>
                {t("GoFit")}
              </h3>
              <p>
                {t("A gym in Bad Kissingen. New website, and I run the gym's IT.")}
              </p>
              <p className="links">
                <a href="https://gofitbk.netlify.app/" rel="noopener">
                  {t("Preview")}
                  <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="shelf__item" id="saifi">
            <div className="print">
              <img src="/assets/site-saifi-3.webp" width={1800} height={930} alt={t("The new website of Saifi's Gebäudereinigung: headline Wieder klar sehen over a window being wiped clean.")} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <h3>
                {t("Saifi's Gebäudereinigung")}
              </h3>
              <p>
                {t("A building cleaning company in Bad Kissingen. Full relaunch.")}
              </p>
              <p className="links">
                <a href="https://saifis-gebaeudereinigung.netlify.app/" rel="noopener">
                  {t("Preview")}
                  <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="shelf__item" id="rehasport">
            <div className="print">
              <img src="/assets/site-reha-3.webp" width={1800} height={930} alt={t("The new Rehasport Bad Kissingen website: headline Rehasport in Bad Kissingen beside a woman exercising with a ball.")} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <h3>
                {t("Rehasport Bad Kissingen")}
              </h3>
              <p>
                {t("A rehabilitation sports provider. New website with online course booking.")}
              </p>
              <p className="links">
                <a href="https://rehasport-bad-kissingen.netlify.app/" rel="noopener">
                  {t("Preview")}
                  <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
      <End />
    </>
  );
}
