import { createContext, useContext, useCallback } from "react";
import dict from "./i18n.json";

export const LangContext = createContext("en");
export const useLang = () => useContext(LangContext);

/** English is the source text and the key. Anything without an entry (names, titles of papers) stays as it is. */
export function translate(text, lang) {
  if (lang === "en") return text;
  const entry = dict[text];
  return entry && entry[lang] ? entry[lang] : text;
}

export function useT() {
  const lang = useLang();
  return useCallback((text) => translate(text, lang), [lang]);
}

/** Does this exact string read differently in the other language? Used by the language switch to fade only what changes. */
export function changes(text, from, to) {
  if (from === to) return false;
  let key = text;
  if (from !== "en") { key = null; for (const k in dict) if (dict[k][from] === text) { key = k; break; } if (key === null) return false; }
  return translate(key, to) !== text;
}
