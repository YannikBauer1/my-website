import { createContext, useContext } from "react";
/** go(path): change page with the leave/arrive transition. switchLang(path): change language, words only. */
export const NavContext = createContext({ go: () => {}, switchLang: () => {} });
export const useNav = () => useContext(NavContext);
