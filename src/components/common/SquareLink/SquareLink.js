import { Link } from "react-router-dom";


function SquareLink({ link, imgSrc, imgAlt, title, tools, thereAreMoreTools = false }) {
  return (
    <Link to={link} className="box">
      <div className="frame">
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
}

export default SquareLink;
