// import classes from "./App.css";

import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

// images
import photo from "./images/cvphoto1.jpg";
import maclean from "./images/maclean/alistairmaclean.png"
import rankingapp from "./images/rankingapp/rankingapp.png"
import videoopplasting from "./images/www-teknologi/prosjekt2-5-videoside.png";
import Barchart from "./components/common/Barchart";

function App() {
  return (
    <div className="oldbody index">
      <Header>
        <div className="container">
          <div>
            <h1>Pål Stakvik</h1>
            <p className="tagline">Utdannet web&shy;utvikler</p>
          </div>
          <div className="circle-frame">
            <img src={photo} alt="Pål Stakvik" />
          </div>
        </div>
      </Header>
      <Nav page="index" />
      <Main>
        <div className="container">
          <h2>Ferdigheter</h2>
          <p className="mb-50">
            Jeg har erfaring innen webutvikling og grafisk design.
          </p>
          <div
            id="skills-placeholder"
            className="skills-placeholder mb-130"
          >
            <Barchart/>
          </div>

          <h2>Nettsider</h2>
          <p className="mb-50">
            Her er noen nettsider som jeg er stolt av å ha laget / bidratt på og
            som jeg har skrevet litt om.
          </p>
          <div className="flex">
            <a href="webWork/rankingapp.html" className="box">
              <div className="frame">
                <img
                  src={rankingapp}
                  alt="ranking webapp"
                />
              </div>
              <h3>Ranking app</h3>
              <ul className="tools">
                <li>TypeScript</li>{" "}
                <li>PHP</li>{" "}
                <li>Relasjonsdatabase</li>{" "}
                <li>MySQL</li>{" "}
                <li>[…]</li>{" "}
              </ul>
            </a>

            <a href="webWork/videoopplasting.html" className="box">
              <div className="frame">
                <img src={videoopplasting} alt="videoopplasting webapp" />
              </div>
              <h3>Videoopplastings&shy;system prosjekter</h3>
              <ul className="tools">
                <li>PHP</li>{" "}
                <li>Twig</li>{" "}
                <li>JS</li>{" "}
                <li>Web&#8209;components</li>{" "}
                <li>[…]</li>{" "}
              </ul>
            </a>

            <a href="webWork/maclean.html" className="box">
              <div className="frame">
                <img
                  src={maclean}
                  alt="maclean nettside"
                />
              </div>
              <h3>Alistair MacLean nettside redesign</h3>
              <ul className="tools">
                <li>HTML</li>{" "}
                <li>CSS</li>{" "}
              </ul>
            </a>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
