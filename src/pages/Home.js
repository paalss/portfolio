import { galleryInfo, graphicworkInfo, webworkInfo } from "../pagesInfo";

// components
import Barchart from "../components/common/Barchart";
import SquareLink from "../components/common/SquareLink";
import Certificate from "../components/common/Certificate";

// react lingui
import { Trans, t } from "@lingui/macro";

const Home = () => (
  <>
    <Trans>
      <h2>Kompetanse</h2>
      <div className="mb-50">
        Jeg har erfaring innen webutvikling og grafisk design.
      </div>
    </Trans>

    <div id="skills-placeholder" className="skills-placeholder mb-130">
      <Barchart
        web={[
          { tech: "HTML & CSS", level: "3" },
          { tech: "JavaScript", level: "3" },
          {
            // denne string'en passer for bar title, men ikke som label innerhtml...
            tech: t`MySQL & relasjonsdatabaser`,
            // ...label trenger en HTML-versjon med soft hyphen (&shy;), slik at ordet kan orddeles ved linjeskift
            techHtmlEntities: (
              <Trans>MySQL &amp; relasjons&shy;databaser</Trans>
            ),
            level: "3",
          },
          { tech: "React", level: "2" },
          { tech: "PHP", level: "2" },
          { tech: t`Automatisk testing`, level: "1" },
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

    <Trans>
      <h2>Nettsider</h2>
      <div className="mb-50">
        Her er noen nettsider som jeg er stolt av å ha laget selv / bidratt på og som
        jeg har skrevet litt om.
      </div>
    </Trans>
    <WebworkLinks />

    <h2 className="mb-50">
      <Trans>Grafisk</Trans>
    </h2>

    <GraphicworkLinks />

    <h2 className="mb-50">
      <Trans>Annet</Trans>
    </h2>
    <OtherLinks />

    <h2 className="mb-50">
      <Trans>Sertifikat</Trans>
    </h2>
    <Certificate />
  </>
);

export const WebworkLinks = () => (
  <>
    <div className="squarelinks-flex">
      {webworkInfo.map((page) => (
        <SquareLink
          key={page.id}
          link={page.path}
          imgSrc={page.imgSrc}
          imgAlt={page.imgAlt}
          title={page.title}
          tools={page.tools}
          thereAreMoreTools={page.thereAreMoreTools}
        />
      ))}
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
    <div className="mt-50 center-content">
      <a
        className="link"
        href="https://github.com/paalss?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> <Trans>Se mer på Github</Trans>
      </a>
    </div>
  </>
);

export const GraphicworkLinks = () => (
  <>
    <div className="squarelinks-flex">
      {graphicworkInfo.map((page) => {
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
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
  </>
);

export const OtherLinks = () => (
  <div className="squarelinks-flex">
    <SquareLink
      link={galleryInfo.path}
      imgSrc={galleryInfo.imgSrc}
      imgAlt={galleryInfo.imgAlt}
      title={galleryInfo.title}
    />
  </div>
);

export default Home;
