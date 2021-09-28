// import classes from "./App.css";

import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

// images
import photo from "./images/cvphoto1.jpg";
import maclean from "./images/maclean/alistairmaclean.png";
import rankingapp from "./images/rankingapp/rankingapp.png";
import videoopplasting from "./images/www-teknologi/prosjekt2-5-videoside.png";
import Barchart from "./components/common/Barchart";
import SquareLink from "./components/common/SquareLink";

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
            Her er noen nettsider som jeg er stolt av å ha laget / bidratt på og
            som jeg har skrevet litt om.
          </p>
          <div className="flex">
            <SquareLink
              link="webWork/rankingapp.html"
              imgSrc={rankingapp}
              imgAlt="ranking webapp"
              title="Ranking app"
              tools={[
                "TypeScript",
                "PHP",
                "Relasjonsdatabase",
                "MySQL",
                "mer…",
              ]}
            />
            <SquareLink
              link="webWork/videoopplasting.html"
              imgSrc={videoopplasting}
              imgAlt="videoopplasting webapp"
              title="Videoopplastings&shy;system prosjekter"
              tools={["PHP", "JS", <>Web&#8209;components</>, "mer…"]}
            />
            <SquareLink
              link="webWork/maclean.html"
              imgSrc={maclean}
              imgAlt="maclean nettside"
              title="Alistair MacLean nettside redesign"
              tools={["HTML", "CSS"]}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
