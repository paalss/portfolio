import React, { Suspense, useEffect, useMemo } from "react";
import NavLink from "next/link";
import pagesInfo from "../../../pagesInfo";
import LangMenu from "../../common/LangMenu";

// import DarkmodeSwitch from "../../common/DarkmodeSwitch";

import classes from "./Nav.module.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  const DarkmodeSwitch = useMemo(() => {
    if (typeof window !== "undefined") {
      return dynamic(() => import("../../common/DarkmodeSwitch"));
    } else {
      return undefined;
    }
  }, [window]);

  return (
    <nav className={classes.nav}>
      <div className="container">
        <ul className={classes.ul}>
          {/* linker til subpages */}
          {pagesInfo.map((page) => (
            <li
              key={page.id}
              className={pathname === page.link ? classes.selected : ""}
            >
              <NavLink
                href={page.link}
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
            {DarkmodeSwitch && <DarkmodeSwitch />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
