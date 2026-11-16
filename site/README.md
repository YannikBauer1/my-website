# yannik-bauer.me

React site, prerendered to plain HTML so every page loads fast and is readable by search engines.

## Run it

```bash
npm install
npm run dev        # development, with live reload
npm run build      # production build into dist/ (one HTML file per page and language)
npm run preview    # serve dist/ on http://localhost:4700 the way Netlify will
```

## Where things are

| What | Where |
|---|---|
| Email, domain, languages, list of pages with titles | `src/site.js` |
| German and Portuguese text (English is the key) | `src/i18n.json` |
| Pages | `src/pages/` (Home, Work, Credentials, Impressum, Privacy) |
| Header, footer and closing section, links, language switch | `src/components/` |
| Page change and language change behaviour | `src/App.jsx` |
| Scroll reveals, pointer effects, the word fade | `src/effects.js` |
| Styles | `src/styles/` |
| Images, fonts, favicon | `public/` |

## Changing text

Edit the English text in the page component. If it is new, add it to `src/i18n.json`
with its `de` and `pt` versions. Text without an entry stays English in every language.

## Adding a page

1. Add it to `PAGES` in `src/site.js`.
2. Create the component in `src/pages/` and register it in `VIEWS` in `src/App.jsx`.

## Launch

Pages are built with `noindex` until `SITE_INDEX=1` is set (see `netlify.toml`).
The legal notice and privacy page stay out of search results either way.
