// import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="container">
        <ul className="nav">
          <li>
            <NavLink to="/" id="indexLink" activeClassName="selected" exact>
              Hjem
            </NavLink>
          </li>
          <li>
            <a href="index.html">Nettsider</a>
            <ul className="website-links">
              <li>
                <NavLink to="/rankingapp" activeClassName="selected">
                  Ranking app
                </NavLink>
              </li>
              <li>
                <NavLink to="/videoopplasting" activeClassName="selected">
                  Videoopplastingssystemer
                </NavLink>
              </li>
              <li>
                <NavLink to="/maclean" activeClassName="selected">
                  Alistair Maclean nettside redesign
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink id="galleryLink" to="/gallery" activeClassName="selected">
              Kunst
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
