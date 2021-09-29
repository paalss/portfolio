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
            <NavLink to="/webWork" activeClassName="selected">Nettsider</NavLink>
            <ul className="website-links">
              <li>
                <NavLink to="/webWork/rankingapp" activeClassName="selected">
                  Ranking app
                </NavLink>
              </li>
              <li>
                <NavLink to="/webWork/videoopplasting" activeClassName="selected">
                  Videoopplastingssystemer
                </NavLink>
              </li>
              <li>
                <NavLink to="/webWork/maclean" activeClassName="selected">
                  Alistair Maclean nettside redesign
                </NavLink>
              </li>
            </ul>
          </li>
          {/* <li>
            <NavLink id="galleryLink" to="/webWork/gallery" activeClassName="selected">
              Kunst
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
