import React from "react";
import NavLink from "next/link";
import pagesInfo from "../../../pagesInfo";
import LangMenu from "../../common/LangMenu";
// import DarkmodeSwitch from "../../common/DarkmodeSwitch";

import classes from "./Nav.module.css";

const Nav = () => (
  <nav className={classes.nav}>
    <div className="container">
      <ul className={classes.ul}>
        {/* linker til subpages */}
        {pagesInfo.map((page) => (
          <li key={page.id}>
            <NavLink
              href={page.link}
              activeClassName={classes.selected}
              exact={page.exact ? page.exactActiveClassName : false}
            >
              <a>{page.title}</a>
            </NavLink>
            {page.subpages && (
              <ul className="website-links">
                {page.subpages.map((subpage) => (
                  <li key={subpage.id}>
                    <NavLink
                      href={subpage.link}
                      activeClassName={classes.selected}
                    >
                      <a>{subpage.title}</a>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* knapper for innstillinger */}
        <li>
          <LangMenu />
        </li>
        <li className={classes.switch}>
          {/* <DarkmodeSwitch /> */}
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
