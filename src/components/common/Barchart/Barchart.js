import "./Barchart.css";

// react lingui
import { Trans, t } from "@lingui/macro";



const Barchart = ({ web, design }) => (
  <>
    <div className="skills">
      <ul className="lines">
        <li className="line l--0">
          <span className="line__label title">
            <Trans>Erfaring</Trans>:
          </span>
        </li>
        <li className="line l--33">
          <span className="line__label">
            <Trans>Grunn&shy;leggende</Trans>
          </span>
        </li>
        <li className="line l--66">
          <span className="line__label">
            <Trans>Behersker godt</Trans>
          </span>
        </li>
        <li className="line l--100">
          <span className="line__label">
            <Trans>Ganske god på</Trans>
          </span>
        </li>
      </ul>

      <div className="charts">
        <div className="chart chart--dev">
          <h3 className="chart__title">
            <Trans>Webutvikling</Trans>
          </h3>
          <ul className="chart--horiz">{web && createBars(web)}</ul>
        </div>

        <div className="chart chart--design">
          <h3 className="chart__title">
            <Trans>Grafisk design</Trans>
          </h3>
          <ul className="chart--horiz">{design && createBars(design)}</ul>
        </div>
      </div>
    </div>
  </>
);

const createBars = (topics) =>
  topics.map((topic) => {
    const { tech, level } = topic;
    console.log(tech);

    let title = "";
    let width = "";
    if (level === "0") {
      title = t`Kan litt ${tech}`;
      width = "16.5%";
    }
    if (level === "1") {
      title = t`Kan grunnleggende ${tech}`;
      width = "33%";
    }
    if (level === "2") {
      title = t`Behersker ${tech} godt`;
      width = "66%";
    }
    if (level === "3") {
      title = t`Ganske god på ${tech}`;
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

export default Barchart;
