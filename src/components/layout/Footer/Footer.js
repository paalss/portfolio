import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import scratchLogo from "../../../images/scratchlogo-transparent-white-small.webp";
import classes from "./Footer.module.css";

// react lingui
import { t } from "@lingui/macro";

const Footer = () => (
  <footer className={classes.footer}>
    <div className="container">
      <b>{t`Du finner meg på:`}</b>
      <ul>
        <li>
          <a
            href="https://github.com/paalss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faGithub} />
            <span className={classes.linkText}>Github (paalss)</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pal-stakvik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
            <span className={classes.linkText}>Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/gassosaman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
            <span className={classes.linkText}>Instagram (gassosaman)</span>
          </a>
        </li>
        <li>
          <a
            href="https://scratch.mit.edu/users/pa0110/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={classes.icon}>
              <img src={scratchLogo} alt="Scratch logo" />
            </span>
            <span className={classes.linkText}>Scratch (pa0110)</span>
          </a>
        </li>
      </ul>

      <b>Info:</b>
      <ul>
        <li>
          <a href="mailto:paalss94@gmail.com">
            <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
            <span className={classes.linkText}>paalss94@gmail.com</span>
          </a>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />Bosatt
          i Trondheim
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
