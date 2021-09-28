// components
import Barchart from "../components/common/Barchart";
import SquareLink from "../components/common/SquareLink";

// images
import macleanImg from "../images/maclean/alistairmaclean.png";
import rankingappImg from "../images/rankingapp/rankingapp.png";
import videoopplastingImg from "../images/www-teknologi/prosjekt2-5-videoside.png";

function Home() {
  return (
    <>
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
      <WebWorkLinks />
    </>
  );
}

export function WebWorkLinks() {
  return (
    <div className="flex">
      <SquareLink
        link="/webWork/rankingapp"
        imgSrc={rankingappImg}
        imgAlt="ranking webapp"
        title="Ranking app"
        tools={["TypeScript", "PHP", "Relasjonsdatabase", "MySQL", "mer…"]}
      />
      <SquareLink
        link="/webWork/videoopplasting"
        imgSrc={videoopplastingImg}
        imgAlt="videoopplasting webapp"
        title="Videoopplastings&shy;system prosjekter"
        // &#8209; === hard hyphen
        tools={["PHP", "JS", <>Web&#8209;components</>, "mer…"]}
      />
      <SquareLink
        link="/webWork/maclean"
        imgSrc={macleanImg}
        imgAlt="maclean nettside"
        title="Alistair MacLean nettside redesign"
        tools={["HTML", "CSS"]}
      />
    </div>
  );
}

export default Home;
