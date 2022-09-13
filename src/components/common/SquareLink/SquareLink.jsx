
import { Link } from "react-router-dom";
import ToolList from "../ToolList/ToolList";
import classes from "./SquareLink.module.css";

// icons
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { t } from "@lingui/macro";

const SquareLink = ({
  link,
  site,
  repo,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  tools,
  thereAreMoreTools = false,
  desktopEmptySpace = false,
}) => {
  if (!desktopEmptySpace) {
    return (
      <div className={classes.root}>
        <Link to={link} className={classes.root}>
          <div className={classes.frame}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </Link>
        {(site || repo) && (
          <div className={classes.externalLinks}>
            {site ? (
              <a href={site} target="_blank" rel="noreferrer">
                <Fa icon={faGlobe} /> {t`Nett`}
              </a>
            ): (
              <span></span>
            )}
            {repo ? (
              <a href={repo} target="_blank" rel="noreferrer">
                <Fa icon={faCode} /> {t`Kode`}
              </a>
            ): (
              <span></span>
            )}
          </div>
        )}
        <ToolList tools={tools} thereAreMoreTools={thereAreMoreTools} />
      </div>
    );
  } else {
    return <div className={classes.desktopEmptySpace}></div>;
  }
};

export default SquareLink;
