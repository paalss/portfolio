import { NavLink } from "react-router-dom";
import pagesInfo from "../../../pagesInfo";
import classes from "./Nav.module.css";

// react lingui
import { useLingui } from "@lingui/react";

const Nav = () => {
  const { i18n } = useLingui();
  const activeLanguage = i18n.locale;

  const toggleLang = (activeLang) => {
    if (activeLang === "no") {
      i18n.activate("en");
      localStorage.setItem('lang', 'en')
    } else {
      i18n.activate("no");
      localStorage.setItem('lang', 'no')
    }
  };

  return (
    <nav className={classes.nav}>
      <div className="container">
        <ul className={classes.ul}>
          {pagesInfo.map((page) => (
            <li key={page.id}>
              <NavLink
                to={page.path}
                activeClassName={classes.selected}
                exact={page.exact ? page.exactActiveClassName : false}
              >
                {page.title}
              </NavLink>
              {page.subpages && (
                <ul className="website-links">
                  {page.subpages.map((subpage) => (
                    <li key={subpage.id}>
                      <NavLink
                        to={subpage.path}
                        activeClassName={classes.selected}
                      >
                        {subpage.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button onClick={()=>toggleLang(activeLanguage)}>
              {activeLanguage === "no" ? "English" : "Norsk"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
