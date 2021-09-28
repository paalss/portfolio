// import classes from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

// images
import photo from "./images/cvphoto1.jpg";
import macleanImg from "./images/maclean/alistairmaclean.png";
import rankingappImg from "./images/rankingapp/rankingapp.png";
import videoopplastingImg from "./images/www-teknologi/prosjekt2-5-videoside.png";
import Barchart from "./components/common/Barchart";
import SquareLink from "./components/common/SquareLink";

function App() {
  return (
    <Router>
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
          <Switch>
            <Route path="/maclean">
              <Maclean />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Kompetanse</h2>
      <p className="mb-50">
        Jeg har erfaring innen webutvikling og grafisk design.
      </p>
      <div id="skills-placeholder" className="skills-placeholder mb-130">
        <Barchart
          web={[
            { tech: "HTML & CSS", level: "3" },
            { tech: "JavaScript", level: "3" },
            {
              tech: <>MySQL &amp; relasjons&shy;databaser</>,
              level: "3",
            },
            { tech: "React", level: "2" },
            { tech: "PHP", level: "2" },
            { tech: "Automatisk testing", level: "1" },
            { tech: "NodeJS", level: "1" },
            { tech: "Docker", level: "1" },
          ]}
          design={[
            {
              tech: "Adobe XD, Photoshop, Illustrator & InDesign",
              level: "2",
            },
          ]}
        />
      </div>

      <h2>Nettsider</h2>
      <p className="mb-50">
        Her er noen nettsider som jeg er stolt av å ha laget / bidratt på og som
        jeg har skrevet litt om.
      </p>
      <div className="flex">
        <SquareLink
          link="webWork/rankingapp.html"
          imgSrc={rankingappImg}
          imgAlt="ranking webapp"
          title="Ranking app"
          tools={["TypeScript", "PHP", "Relasjonsdatabase", "MySQL", "mer…"]}
        />
        <SquareLink
          link="webWork/videoopplasting.html"
          imgSrc={videoopplastingImg}
          imgAlt="videoopplasting webapp"
          title="Videoopplastings&shy;system prosjekter"
          tools={["PHP", "JS", <>Web&#8209;components</>, "mer…"]}
        />
        <SquareLink
          link="webWork/maclean.html"
          imgSrc={macleanImg}
          imgAlt="maclean nettside"
          title="Alistair MacLean nettside redesign"
          tools={["HTML", "CSS"]}
        />
      </div>
    </div>
  );
}

function Maclean() {
  return <h2>Maclean</h2>;
}

export default App;
