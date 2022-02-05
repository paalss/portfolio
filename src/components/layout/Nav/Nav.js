import { NavLink } from "react-router-dom";
import pagesInfo from "../../../pagesInfo";
import LangMenu from "../../common/LangMenu";
import DarkmodeSwitch from "../../common/DarkmodeSwitch";

import classes from "./Nav.module.css";

const Nav = () => (
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
          <LangMenu />
        </li>
        <li className={classes.switch}>
          <DarkmodeSwitch />
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
