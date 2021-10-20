import { NavLink } from "react-router-dom";
import pagesInfo from "../../../pagesInfo";
import classes from "./Nav.module.css"

function Nav() {
  return (
    <nav className={classes.nav}>
      <div className="container">
        <ul className={classes.ul}>
          {pagesInfo.map((page) => {
            return (
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
                    {page.subpages.map((subpage) => {
                      return (
                        <li key={subpage.id}>
                          <NavLink to={subpage.path} activeClassName={classes.selected}>
                            {subpage.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
