// import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ page }) {
  return (
    <nav>
      <div className="container">
        <ul className="nav">
          <li>
            <Link
              to="/maclean"
              id="indexLink"
              className={page === "index" ? "open" : ""}
            >
              Hjem
            </Link>
          </li>
          <li>
            <a href="index.html">Nettsider</a>
            <ul className="website-links">
              <li>
                <a
                  href="webWork/rankingapp.html"
                  className={page === "rankingapp" ? "open" : ""}
                >
                  Ranking app
                </a>
              </li>
              <li>
                <a
                  href="webWork/videoopplasting.html"
                  className={page === "videoopplasting" ? "open" : ""}
                >
                  Videoopplastingssystemer
                </a>
              </li>
              <li>
                <a
                  href="webWork/maclean.html"
                  className={page === "maclean" ? "open" : ""}
                >
                  Alistair Maclean nettside redesign
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a id="galleryLink" href="gallery.html">
              Kunst
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
