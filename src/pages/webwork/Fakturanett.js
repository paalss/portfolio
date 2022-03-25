// images
import webappImg from "../../images/webwork/fakturanett/page.png";

// react lingui
import { t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading/WorkHeading";
// import Figure from "../../components/common/Figure";

const Fakturanett = () => (
  <>
    <img
      src={webappImg}
      className="work-heading-img"
      width={1294}
      height={665}
      alt={t`fakturanett forside`}
    />

    <WorkHeading
      heading={t`Fakturanett`}
      timespan={t`2022 februar–nå`}
      siteInfo={{
        site: "https://www.fakturanett.no/",
      }}
      tools={["PHP", "HTML", "CSS"]}
    />

    <p>
      {/* <Trans>Jobber med å optimalisere koden, fjerne unødvendige filer. Skal jobbe med å bygge nettsiden med Vue etter hvert</Trans> */}
    </p>
    {/* <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={projImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`_bilde1`}
        caption={t`_bilde1`}
      />
      <Figure
        imgSrc={projImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`_bilde2`}
        caption={t`_bilde2`}
      />
    </div> */}
  </>
);

export default Fakturanett;
