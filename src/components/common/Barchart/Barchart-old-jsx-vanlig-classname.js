import classes from "./Barchart.module.css";

function Barchart() {
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
            <ul className="chart--horiz">
              <li title="Ganske god på HTML &amp; CSS">
                <div className="flex-li">
                  <span className="chart__label">HTML &amp; CSS</span>
                  <div className="chart__bar" style={{ width: "100%;" }}></div>
                </div>
              </li>
              <li title="Ganske god på JavaScript">
                <div className="flex-li">
                  <span className="chart__label">JavaScript</span>
                  <div className="chart__bar" style={{ width: "100%;" }}></div>
                </div>
              </li>
              <li title="Ganske god på MySQL &amp; Relasjonsdatabaser">
                <div className="flex-li">
                  <span className="chart__label">
                    MySQL &amp; Relasjons&shy;databaser
                  </span>
                  <div className="chart__bar" style={{ width: "100%;" }}></div>
                </div>
              </li>
              <li title="Behersker React godt">
                <div className="flex-li">
                  <span className="chart__label">React</span>
                  <div className="chart__bar" style={{ width: "66%;" }}></div>
                </div>
              </li>
              <li title="Behersker PHP godt">
                <div className="flex-li">
                  <span className="chart__label">PHP</span>
                  <div className="chart__bar" style={{ width: "66%;" }}></div>
                </div>
              </li>
              <li title="Kan grunnleggende automatisk testing">
                <div className="flex-li">
                  <span className="chart__label">Automatisk testing</span>
                  <div className="chart__bar" style={{ width: "33%;" }}></div>
                </div>
              </li>
              <li title="Kan grunnleggende NodeJS">
                <div className="flex-li">
                  <span className="chart__label">NodeJS</span>
                  <div className="chart__bar" style={{ width: "33%;" }}></div>
                </div>
              </li>
              <li title="Kan under Docker">
                <div className="flex-li">
                  <span className="chart__label">Docker</span>
                  <div className="chart__bar" style={{ width: "33%;" }}></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="chart chart--design">
            <h3 className="chart__title">Grafisk design</h3>
            <ul className="chart--horiz">
              <li title="Behersker Adobe XD, Photoshop, Illustrator, InDesign godt">
                <div className="flex-li">
                  <span className="chart__label">
                    Adobe XD, Photoshop, Illustrator, InDesign
                  </span>
                  <div className="chart__bar" style={{ width: "66%;" }}></div>
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
