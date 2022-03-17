// import classes from WorkLinks

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { t } from "@lingui/macro";

const WorkLinks = ({ site = false, repo = false, siteMsg = false }) => {
  return (
    <>
      {site ? (
        <a className="link" href={site} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCircleNotch} /> {t`Besøk siden`}
        </a>
      ) : (
        <span className="link">
          <FontAwesomeIcon icon={faCircleNotch} />{" "}
          {!siteMsg ? t`Ikke tilgjengelig live` : siteMsg}
        </span>
      )}
      {repo ? (
        <a className="link" href={repo} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> {t`Kildekode`}
        </a>
      ) : (
        <span className="link">
          <FontAwesomeIcon icon={faGithub} /> {t`Privat kildekode`}
        </span>
      )}
    </>
  );
};

export default WorkLinks;
