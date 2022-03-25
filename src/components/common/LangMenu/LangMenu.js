import classes from "./LangMenu.module.css";

// react lingui
import { useLingui } from "@lingui/react";

// images
import norwegianFlag from "../../../images/flags/4x3/no.svg";
import usFlag from "../../../images/flags/4x3/us.svg";

const LangMenu = () => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;

  const toggleLang = () => {
    if (activeLang === "no") activate("en");
    if (activeLang === "en") activate("no");
  };

  const activate = (lang) => {
    i18n.activate(lang);
    document.documentElement.lang = i18n.locale; // endre html-tag sin lang-verdi
    localStorage.setItem("lang", lang);
  };

  // returner active.class hvis knappen er aktiv
  const activeClass = (lang) => activeLang === lang && classes.active;

  return (
    <>
      {activeLang === "no" && (
        <button
          onClick={() => toggleLang()}
          className={classes.button + " " + activeClass("en")}
        >
          <img className={classes.flag} src={usFlag} alt="United states flag" />
          English
        </button>
      )}

      {activeLang === "en" && (
        <button
          onClick={() => toggleLang()}
          className={classes.button + " " + activeClass("no")}
        >
          <img
            className={classes.flag}
            src={norwegianFlag}
            alt="Norwegian flag"
          />
          Norsk
        </button>
      )}
    </>
  );
};

export default LangMenu;
