import classes from "./LangMenu.module.css";

import { useLocation } from "react-router-dom";

// react lingui
import { useLingui } from "@lingui/react";

// images
import norwegianFlag from "../../../images/flags/4x3/no.svg";
import usFlag from "../../../images/flags/4x3/us.svg";

const LangMenu = () => {
  const location = useLocation();
  const { i18n } = useLingui();
  const activeLang = i18n.locale;

  const activate = (lang) => {
    i18n.activate(lang);
    localStorage.setItem("lang", lang);
  };

  // returner active.class hvis knappen er aktiv
  const activeClass = (lang) => activeLang === lang && classes.active;

  // forsiden har et bilde som øker avstanden mellom LangMenu og teksten. Rett opp dette
  const onIndexMoveUp = () => location.pathname === "/" ? classes.moveUp : "";

  return (
    <div className={onIndexMoveUp()}>
      <button
        onClick={() => activate("no")}
        className={classes.button + " " + activeClass("no")}
      >
        <img
          className={classes.flag}
          src={norwegianFlag}
          alt="Norwegian flag"
        />
        Norsk
      </button>
      <button
        onClick={() => activate("en")}
        className={classes.button + " " + activeClass("en")}
      >
        <img className={classes.flag} src={usFlag} alt="United stated flag" />
        English
      </button>
    </div>
  );
};

export default LangMenu;
