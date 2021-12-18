import scratchLogo from "../../../images/scratchlogo-transparent-white-small.webp";
import classes from "./Footer.module.css"

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <b>Du finner meg på:</b>
        <ul>
          <li>
            <a
              href="https://github.com/paalss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.icon + " fab fa-github"}></span>
              <span className={classes.text}>Github (paalss)</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pal-stakvik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.icon + " fab fa-linkedin"}></span>
              <span className={classes.text}>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gassosaman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.icon + " fab fa-instagram"}></span>
              <span className={classes.text}>Instagram (gassosaman)</span>
            </a>
          </li>
          <li>
            <a
              href="https://scratch.mit.edu/users/pa0110/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.icon + " fab fa"}>
                <img src={scratchLogo} alt="Scratch logo" />
              </span>
              <span className={classes.text}>Scratch (pa0110)</span>
            </a>
          </li>
        </ul>

        <b>Mail:</b>
        <ul>
          <li>
            <a href="mailto:paalss94@gmail.com">
              <span className={classes.icon + " fas fa-envelope"}></span>
              <span className={classes.text}>paalss94@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
