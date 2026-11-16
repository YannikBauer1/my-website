import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
export { PAGES, LANGS, DOMAIN, localPath } from "./site.js";
export { translate } from "./i18n.jsx";

export function render(url) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
