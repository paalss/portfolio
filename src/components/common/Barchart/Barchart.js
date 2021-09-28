import "./Barchart.css";

const createBars = (topics) => {
  return topics.map((topic) => {
    const { tech, level } = topic;
    let title = "";
    let width = "";
    if (level === "0") {
      title = `Kan litt ${tech}`;
      width = "16.5%";
    }
    if (level === "1") {
      title = `Kan grunnleggende ${tech}`;
      width = "33%";
    }
    if (level === "2") {
      title = `Behersker ${tech} godt`;
      width = "66%";
    }
    if (level === "3") {
      title = `Ganske god på ${tech}`;
      width = "100%";
    }
    return (
      <li title={title} key={tech}>
        <div className="flex-li">
          <span className="chart__label">{tech}</span>
          <div className="chart__bar" style={{ width: width }}></div>
        </div>
      </li>
    );
  });
};

function Barchart({ web, design }) {
  return (
    <>
      <div className="skills">
        <ul className="lines">
          <li className="line l--0">
            <span className="line__label title">Erfaring:</span>
          </li>
          <li className="line l--33">
            <span className="line__label">Grunn&shy;leggende</span>
          </li>
          <li className="line l--66">
            <span className="line__label">Behersker godt</span>
          </li>
          <li className="line l--100">
            <span className="line__label">Ganske god på</span>
          </li>
        </ul>

        <div className="charts">
          <div className="chart chart--dev">
            <h3 className="chart__title">Webutvikling</h3>
            <ul className="chart--horiz">{web && createBars(web)}</ul>
          </div>

          <div className="chart chart--design">
            <h3 className="chart__title">Grafisk design</h3>
            <ul className="chart--horiz">{design && createBars(design)}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Barchart;
