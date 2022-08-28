import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
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
        <La href="https://github.com/paalss" icon={faGithub}>
          Github (paalss)
        </La>
        <La href="https://www.linkedin.com/in/pal-stakvik/" icon={faLinkedin}>
          Linkedin
        </La>
        <La href="https://www.instagram.com/gassosaman/" icon={faInstagram}>
          Instagram (gassosaman)
        </La>
        {/* <li>
          <span className={classes.icon}>
            <img src={codersrankLogo} alt="Codersrank logo" />
          </span>
          <a href="https://profile.codersrank.io/user/paalss/">Codersrank</a>
        </li> */}
        <li>
          <a href="https://scratch.mit.edu/users/pa0110/">
            <span className={classes.icon}>
              <img src={scratchLogo} alt="Scratch logo" />
            </span>
            <span className={classes.linkText}>Scratch (pa0110)</span>
          </a>
        </li>
      </ul>

      <b>Info:</b>
      <ul>
        <La href="mailto:paalss94@gmail.com" icon={faEnvelope}>
          paalss94@gmail.com
        </La>
        <li>
          <Icon className={classes.icon} icon={faLocationDot} />
          {t`Bosatt i Trondheim`}
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

/**
 * List anchor
 */
const La = ({ href, icon, children }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className={classes.icon} icon={icon} />
        <span className={classes.linkText}>{children}</span>
      </a>
    </li>
  );
};
