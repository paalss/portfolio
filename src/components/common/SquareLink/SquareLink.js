// import classes from "./SquareLink.module.css";

function SquareLink({ link, imgSrc, imgAlt, title, tools, thereAreMoreTools }) {
  return (
    <a href={link} className="box">
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
      {thereAreMoreTools && "med mer"}
      </ul>
    </a>
  );
}

export default SquareLink;
