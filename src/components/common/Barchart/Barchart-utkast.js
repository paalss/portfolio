// react lingui
import { Trans, t } from "@lingui/macro";

import "./Barchart.css";

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
    let title = "";
    let width = "";

    // const eeeee = convertAnyHTMLToPlainText(tech)

    if (level === "0") {
      title = <Trans>Kan litt {tech}</Trans>;
      width = "16.5%";
    }
    if (level === "1") {
      title = <Trans>Kan grunnleggende {tech}</Trans>;
      width = "33%";
    }
    if (level === "2") {
      title = <Trans>Behersker {tech} godt</Trans>;
      width = "66%";
    }
    if (level === "3") {
      title = <Trans>Ganske god på {tech}</Trans>;
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

// const convertAnyHTMLToPlainText = (tech)=>{
//   if (typeof tech === "object") {
//     console.log(
//       true,
//       " MySQL &amp; <Trans>relasjons&shy;databaser</Trans> ER FUNNET. konverterer det"
//     );
//     const element = document.createElement("p");
//     element.innerHTML = <>{tech}</>;
//     console.log(element.textContent);
//     return element.textContent;
//   }
// }

export default Barchart;
