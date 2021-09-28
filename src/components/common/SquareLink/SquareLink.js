// import classes from "./SquareLink.module.css";

function SquareLink({ link, imgSrc, imgAlt, title, tools }) {
  return (
    <a href={link} className="box">
      <div className="frame">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <ul className="tools">
        {tools &&
          tools.map((t, i) => {
            return (
              <li key={i}>
                {t}
              </li>
            );
          })}
      </ul>
    </a>
  );
}

export default SquareLink;
