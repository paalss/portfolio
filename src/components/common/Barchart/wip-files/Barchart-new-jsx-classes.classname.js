import classes from "./Barchart.module.css";

function Barchart() {
  return (
    <>
      <div className={classes.skills}>
        <ul className={classes.lines}>
          <li className={classes.line + " " + classes["l--0"]}>
            <span className={classes.line__label + " " + classes.title}>
              Erfaring:
            </span>
          </li>
          <li className={classes.line + " " + classes["l--33"]}>
            <span className={classes.line__label}>Grunn&shy;leggende</span>
          </li>
          <li className={classes.line + " " + classes["l--66"]}>
            <span className={classes.line__label}>Behersker godt</span>
          </li>
          <li className={classes.line + " " + classes["l--100"]}>
            <span className={classes.line__label}>Ganske god på</span>
          </li>
        </ul>

        <div className={classes.charts}>
          <div className={classes.chart + " " + classes["chart--dev"]}>
            <h3 className={classes.chart__title}>Webutvikling</h3>
            <ul className={classes["chart--horiz"]}>
              <li title="Ganske god på HTML &amp; CSS">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>HTML &amp; CSS</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </li>
              <li title="Ganske god på JavaScript">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>JavaScript</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </li>
              <li title="Ganske god på MySQL &amp; Relasjonsdatabaser">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>
                    MySQL &amp; Relasjons&shy;databaser
                  </span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </li>
              <li title="Behersker React godt">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>React</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </li>
              <li title="Behersker PHP godt">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>PHP</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </li>
              <li title="Kan grunnleggende automatisk testing">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>
                    Automatisk testing
                  </span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </li>
              <li title="Kan grunnleggende NodeJS">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>NodeJS</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </li>
              <li title="Kan under Docker">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>Docker</span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          <div className={classes.chart + " " + classes["chart--design"]}>
            <h3 className={classes.chart__title}>Grafisk design</h3>
            <ul className={classes["chart--horiz"]}>
              <li title="Behersker Adobe XD, Photoshop, Illustrator, InDesign godt">
                <div className={classes["flex-li"]}>
                  <span className={classes.chart__label}>
                    Adobe XD, Photoshop, Illustrator, InDesign
                  </span>
                  <div
                    className={classes.chart__bar}
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Barchart;
