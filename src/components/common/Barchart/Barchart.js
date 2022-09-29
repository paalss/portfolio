import React from "react";
import c from "./Barchart.module.css";

// react lingui
import { Trans, t } from "@lingui/macro";

const Barchart = ({ web, design }) => (
  <>
    <div className={c.skills}>
      <ul className={c.lines}>
        <li className={c.line + " " + c.l__0}>
          <span className={c.line__label + " " + c.title}>
            <Trans>Erfaring</Trans>:
          </span>
        </li>
        <li className={c.line + " " + c.l__33}>
          <span className={c.line__label}>
            <Trans>Grunn&shy;leggende</Trans>
          </span>
        </li>
        <li className={c.line + " " + c.l__66}>
          <span className={c.line__label}>
            <Trans>Behersker godt</Trans>
          </span>
        </li>
        <li className={c.line + " " + c.l__100}>
          <span className={c.line__label}>
            <Trans>Ganske god på</Trans>
          </span>
        </li>
      </ul>

      <div className={c.charts}>
        <div className={c.chart + " " + c.chart__dev}>
          <h3 className={c.chart__title}>
            <Trans>Webutvikling</Trans>
          </h3>
          <ul className={c.chart__horiz}>{web && createBars(web)}</ul>
        </div>

        <div className={c.chart + " " + c.chart__design}>
          <h3 className={c.chart__title}>
            <Trans>Grafisk design</Trans>
          </h3>
          <ul className={c.chart__horiz}>{design && createBars(design)}</ul>
        </div>
      </div>
    </div>
  </>
);

const createBars = (topics) =>
  topics.map((topic) => {
    const { tech, techHtmlEntities, level } = topic;

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
        <div className={c.flex_li}>
          <span className={c.chart__label}>
            {/* hvis topic har en HTML-entities versjon av tech, så bruk det.
            Relasjonsdatabaser er et ord som trenger å brytes opp */}
            {techHtmlEntities ? techHtmlEntities : tech}
          </span>
          <div className={c.chart__bar} style={{ width: width }}></div>
        </div>
      </li>
    );
  });

export default Barchart;
