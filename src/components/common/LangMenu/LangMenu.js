import React from "react";
import classes from "./LangMenu.module.css";

// react lingui
import { useLingui } from "@lingui/react";

import Image from "next/image";

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

  const flagSrc =
    activeLang === "no" ? "/images/flags/US.svg" : "/images/flags/NO.svg";

  return (
    <>
      <button
        onClick={() => toggleLang()}
      >
        <div className={classes.iconAndText}>
          <div>
            <Image
              src={flagSrc}
              width={16}
              height={12}
              alt="United states flag"
            />
          </div>
          {activeLang === "no" ? "English" : "Norsk"}
        </div>
      </button>
    </>
  );
};

export default LangMenu;
