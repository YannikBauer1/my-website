import { useT } from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import { EMAIL } from "../site.js";

export default function Home() {
  const t = useT();
  return (
    <>
    <section className="home home--slim" aria-labelledby="home-title">
      <div className="wrap home__grid">
        <div className="home__text">
          <h1 className="plate__name" id="home-title">
            {t("Yannik Bauer")}
          </h1>
          <p className="home__line">
            {t("I build apps, websites and AI automations.")}
          </p>
          <p className="home__act">
            <a className="cta cta--plate" href={`mailto:${EMAIL}`}>
              {t("Get in touch")}
            </a>
            <A className="more" to="/work">
              {t("See the work")}
            </A>
          </p>
        </div>
        <figure className="me">
          <div className="me__pool" aria-hidden="true">
          </div>
          <div className="print me__frame" data-sc-tilt="3">
            <img src="/assets/portrait.webp" width={1254} height={1254} alt={t("Yannik Bauer")} fetchpriority="high" />
          </div>
        </figure>
      </div>
    </section>
    <section className="part part--app part--rise" id="apps" aria-labelledby="app-title">
      <div className="wrap part__grid part__grid--flip">
        <div className="duo">
          <div className="duo__pool" aria-hidden="true">
          </div>
          <div className="duo__rear" aria-hidden="true" data-plane="0.07">
            <div className="phone ">
              <img src="/assets/app-profile.webp" width={780} height={1695} alt="" decoding="async" />
            </div>
          </div>
          <div className="duo__front">
            <div className="obj__tilt" data-sc-tilt="4">
              <div className="phone ">
                <img src="/assets/app-event-results.webp" width={780} height={1695} alt={t("BTS Insights on iPhone: results of the 2026 Olympia with placings and judges' scores.")} decoding="async" />
              </div>
            </div>
          </div>
        </div>
        <div className="part__text" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("Apps")}
          </p>
          <h2 className="part__title" id="app-title">
            {t("Built to ~10,000 users in two years.")}
          </h2>
          <p className="part__line">
            {t("BTS Insights, the #1 app for pro bodybuilding fans. I do all of it: the apps, the content, the marketing.")}
          </p>
          <p className="links links--before">
            <A className="more" to="/work#bts">
              {t("More about the app")}
            </A>
          </p>
        </div>
        <p className="links links--after">
          <A className="more" to="/work#bts">
            {t("More about the app")}
          </A>
        </p>
      </div>
    </section>
    <section className="part part--web" id="websites" aria-labelledby="web-title">
      <div className="wrap part__grid">
        <div className="part__text" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("Websites")}
          </p>
          <h2 className="part__title" id="web-title">
            {t("Websites for local businesses.")}
          </h2>
          <p className="part__line">
            {t("Made so a visitor finds what they came for in seconds, then calls or books.")}
          </p>
          <p className="links links--before">
            <A className="more" to="/work#websites">
              {t("See the websites")}
            </A>
          </p>
        </div>
        <div className="pair pair--three" data-seen>
          <div className="print pair__back">
            <img src="/assets/site-gofit-3.webp" width={1800} height={930} alt={t("The new GoFit website.")} loading="lazy" decoding="async" />
          </div>
          <div className="print pair__mid">
            <img src="/assets/site-reha-3.webp" width={1800} height={930} alt={t("The new Rehasport Bad Kissingen website.")} loading="lazy" decoding="async" />
          </div>
          <div className="print pair__front">
            <img src="/assets/site-saifi-3.webp" width={1800} height={930} alt={t("The new website of Saifi's Gebäudereinigung.")} loading="lazy" decoding="async" />
          </div>
        </div>
        <p className="links links--after">
          <A className="more" to="/work#websites">
            {t("See the websites")}
          </A>
        </p>
      </div>
    </section>
    <section className="part part--auto" id="automations" aria-labelledby="auto-title">
      <div className="wrap part__grid part__grid--flip">
        <div className="room__object" data-sc-in>
          <div className="flow" data-seen role="img" aria-label={t("Two automations drawn as flows. An email arrives, AI reads it and drafts a reply, the reply is sent. A payment is missed, a reminder is written, it follows up until paid.")}>
            <p className="flow__name">
              {t("Email replies")}
            </p>
            <ol className="flow__line">
              <li>
                {t("Email arrives")}
              </li>
              <li>
                {t("AI reads and drafts")}
              </li>
              <li>
                {t("Reply sent")}
              </li>
            </ol>
            <p className="flow__name">
              {t("Payment reminders")}
            </p>
            <ol className="flow__line">
              <li>
                {t("Payment missed")}
              </li>
              <li>
                {t("Reminder written")}
              </li>
              <li>
                {t("Follows up until paid")}
              </li>
            </ol>
          </div>
        </div>
        <div className="part__text" data-sc-in data-sc-stagger="70">
          <p className="part__kind">
            {t("AI automations")}
          </p>
          <h2 className="part__title" id="auto-title">
            {t("The routine work, handed to AI.")}
          </h2>
          <p className="part__line">
            {t("Emails, reminders, follow-ups. Set up once, then they run on their own.")}
          </p>
        </div>
      </div>
    </section>
      <End />
    </>
  );
}
