// components
import Barchart from "../components/common/Barchart";
import SquareLink from "../components/common/SquareLink";

// images
import macleanImg from "../images/maclean/alistairmaclean.png";
import rankingappImg from "../images/rankingapp/rankingapp.png";
import videoopplastingImg from "../images/www-teknologi/prosjekt2-5-videoside.png";
import galleryImg from "../images/gallery/gallery1.png";

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
              // &shy; === soft hyphen
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
      <h2>Annet</h2>
      <OtherLinks/>
    </>
  );
}

export function WebWorkLinks() {
  return (
    <div className="webworklinks-flex">
      <SquareLink
        link="/webwork/rankingapp"
        imgSrc={rankingappImg}
        imgAlt="ranking webapp"
        title="Ranking app"
        tools={["TypeScript", "PHP", "Relasjonsdatabase", "MySQL"]}
        thereAreMoreTools={true}
      />
      <SquareLink
        link="/webwork/videoopplasting"
        imgSrc={videoopplastingImg}
        imgAlt="videoopplasting webapp"
        title="Videoopplastings&shy;apper"
        tools={["PHP", "JavaScript", "LitElement"]}
        thereAreMoreTools={true}
      />
      <SquareLink
        link="/webwork/maclean"
        imgSrc={macleanImg}
        imgAlt="maclean nettside"
        title="Alistair MacLean nettside redesign"
        tools={["HTML", "CSS"]}
      />
    </div>
  );
}

export function OtherLinks() {
  return (
    <div className="webworklinks-flex">
      <SquareLink
        link="/gallery"
        imgSrc={galleryImg}
        imgAlt="kunstgalleri"
        title="Kunst"
      />
    </div>
  );
}

export default Home;
