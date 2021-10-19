import { NavLink } from "react-router-dom";
import pagesInfo from "../../../pagesInfo";

function Nav() {
  return (
    <nav>
      <div className="container">
        <ul className="nav">
          {pagesInfo.map((page) => {
            return (
              <li key={page.id}>
                <NavLink
                  to={page.path}
                  activeClassName="selected"
                  exact={page.exact ? page.exactActiveClassName : false}
                >
                  {page.title}
                </NavLink>
                {page.subpages && (
                  <ul className="website-links">
                    {page.subpages.map((subpage) => {
                      return (
                        <li key={subpage.id}>
                          <NavLink to={subpage.path} activeClassName="selected">
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
