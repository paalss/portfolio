import React from "react";

// icons
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { t } from "@lingui/macro";

const WorkLinks = ({ site = false, repo = false }) => {
  return (
    <>
      {site && (
        <a className="button" href={site} rel="noopener noreferrer">
          <Fa icon={faGlobe} /> {t`Besøk siden`}
        </a>
      )}
      {repo && (
        <a className="button" href={repo} rel="noopener noreferrer">
          <Fa icon={faCode} /> {t`Kildekode`}
        </a>
      )}
    </>
  );
};

export default WorkLinks;
