import classes from "./WorkLinks.module.css"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { t } from "@lingui/macro";

const WorkLinks = ({ site = false, repo = false }) => {
  return (
    <>
      {site && (
        <a className={classes.link} href={site} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGlobe} /> {t`Besøk siden`}
        </a>
      )}
      {repo && (
        <a className={classes.link} href={repo} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCode} /> {t`Kildekode`}
        </a>
      )}
    </>
  );
};

export default WorkLinks;
