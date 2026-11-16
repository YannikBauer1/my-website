import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/fonts.css";
import "./styles/scrollcraft.css";
import "./styles/site.css";
import "./styles/v2.css";
import "./styles/themes.css";
import "./vendor/scrollcraft.js";
import App from "./App.jsx";

const el = document.getElementById("root");
const tree = <BrowserRouter><App /></BrowserRouter>;
if (el.hasChildNodes()) hydrateRoot(el, tree); else createRoot(el).render(tree);   // prerendered page, or plain dev server
