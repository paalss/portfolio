import { Link } from "react-router-dom";
import classes from "./SquareLink.module.css";

function SquareLink({
  link,
  imgSrc,
  imgAlt,
  title,
  tools,
  thereAreMoreTools = false,
  desktopEmptySpace = false,
}) {
  if (!desktopEmptySpace) {
    return (
      <Link to={link} className={classes.squareLink}>
        <div className={classes.frame}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h3>{title}</h3>
        <ul className="tools">
          {tools &&
            tools.map((tech, i) => {
              return (
                <span key={i}>
                  <li>{tech}</li>{" "}
                </span>
              );
            })}
          {thereAreMoreTools && ". . ."}
        </ul>
      </Link>
    );
  } else {
    return <div className={classes.desktopEmptySpace}></div>;
  }
}

export default SquareLink;
