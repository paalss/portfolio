import { Link } from "react-router-dom";
import ToolList from "../ToolList/ToolList";
import classes from "./SquareLink.module.css";

// icons
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const SquareLink = ({
  link,
  web,
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
        {(web || repo) && (
          <div className={classes.externalLinks}>
            {web ? (
              <a href={web}>
                <Fa icon={faCircleNotch} /> Web
              </a>
            ): (
              <span></span>
            )}
            {repo ? (
              <a href={repo}>
                <Fa icon={faGithub} /> Kode
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
