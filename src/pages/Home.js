import pagesInfo from "../pagesInfo";

// components
import Barchart from "../components/common/Barchart";
import SquareLink from "../components/common/SquareLink";

// info for å bygge <SquareLink>-er
const webworkInfo = pagesInfo.find(
  (element) => element.path === "/webwork"
).subpages;
const galleryInfo = pagesInfo.find((element) => element.path === "/gallery");

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
      <OtherLinks />
    </>
  );
}

export function WebWorkLinks() {
  return (
    <>
      <div className="webworklinks-flex">
        {webworkInfo.map((page) => {
          return (
            <SquareLink
              key={page.id}
              link={page.path}
              imgSrc={page.imgSrc}
              imgAlt={page.imgAlt}
              title={page.title}
              tools={page.tools}
              thereAreMoreTools={page.thereAreMoreTools}
            />
          );
        })}
      </div>
      <a
        className="link"
        href="https://github.com/paalss?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> Se flere prosjekter
      </a>
    </>
  );
}

export function OtherLinks() {
  return (
    <div className="webworklinks-flex">
      <SquareLink
        link={galleryInfo.path}
        imgSrc={galleryInfo.imgSrc}
        imgAlt={galleryInfo.imgAlt}
        title={galleryInfo.title}
      />
    </div>
  );
}

export default Home;
