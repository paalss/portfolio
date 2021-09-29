// import classes from "./Footer.module.css";
import scratchLogo from "../../../images/scratchlogo-transparent-white.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <b>Du finner meg på:</b>
        <ul>
          <li>
            <a
              href="https://github.com/paalss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon fab fa-github"></span>
              <span className="text">Github (paalss)</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/pal.stakvik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon fab fa-facebook"></span>
              <span className="text">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pal-stakvik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon fab fa-linkedin"></span>
              <span className="text">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gassosaman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon fab fa-instagram"></span>
              <span className="text">Instagram (gassosaman)</span>
            </a>
          </li>
          <li>
            <a
              href="https://scratch.mit.edu/users/pa0110/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon fab fa">
                <img src={scratchLogo} alt="Scratch logo" />
              </span>
              <span className="text">Scratch (pa0110)</span>
            </a>
          </li>
        </ul>

        <b>Mail:</b>
        <ul>
          <li>
            <a href="mailto:paalss94@gmail.com">
              <span className="icon fas fa-envelope"></span>
              <span className="text">paalss94@gmail.com</span>
            </a>
          </li>
          <li>
            <span className="icon fa"></span>
            <button id="copyMailButton">
              <i className="far fa-clipboard" aria-hidden="true"></i> Kopier
              mailadresse
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
