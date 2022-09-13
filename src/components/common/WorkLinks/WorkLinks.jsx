import classes from "./WorkLinks.module.css"

// icons
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { t } from "@lingui/macro";
import { Fragment } from "react";

const WorkLinks = ({ site = false, repo = false }) => {
  return (
    <Fragment>
      {site && (
        <a className={classes.link} href={site} rel="noopener noreferrer">
          <Fa icon={faGlobe} /> {t`Besøk siden`}
        </a>
      )}
      {repo && (
        <a className={classes.link} href={repo} rel="noopener noreferrer">
          <Fa icon={faCode} /> {t`Kildekode`}
        </a>
      )}
    </Fragment>
  );
};

export default WorkLinks;
