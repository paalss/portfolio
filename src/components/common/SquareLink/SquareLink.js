import { Link } from "react-router-dom";
import ToolList from "../ToolList/ToolList";
import classes from "./SquareLink.module.css";

const SquareLink = ({
  link,
  imgSrc,
  imgAlt,
  title,
  tools,
  thereAreMoreTools = false,
  desktopEmptySpace = false,
}) => {
  if (!desktopEmptySpace) {
    return (
      <Link to={link} className={classes.squareLink}>
        <div className={classes.frame}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h3>{title}</h3>
        <ToolList tools={tools} thereAreMoreTools={thereAreMoreTools} />
      </Link>
    );
  } else {
    return <div className={classes.desktopEmptySpace}></div>;
  }
};

export default SquareLink;
