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
                  {/* &shy; med space foran er en hack for å oppnå wrap mellom
                  list elements på mobile browsers: Chrome og Samsung Internet.
                  {" "} som mellomrom var nok for desktop, men ikke for mobil. */}
                  <li>{tech}</li> &shy;
                </span>
              );
            })}
          {thereAreMoreTools && <>.&nbsp;.&nbsp;.</>}
        </ul>
      </Link>
    );
  } else {
    return <div className={classes.desktopEmptySpace}></div>;
  }
}

export default SquareLink;
