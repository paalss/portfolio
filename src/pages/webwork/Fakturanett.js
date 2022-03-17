// images
import webappImg from "../../images/webwork/fakturanett/page.png";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import ToolList from "../../components/common/ToolList";
import WorkLinks from "../../components/common/WorkLinks";
// import Figure from "../../components/common/Figure";

const Fakturanett = () => (
  <>
    <img src={webappImg} width={1294} height={665} alt={t`fakturanett forside`} />
    <WorkLinks site="https://www.fakturanett.no/" />
    <h2>
      <Trans>
        Ansatt hos Invoice Club
        <span className="subtitle">2022 februar–nå</span>
      </Trans>
    </h2>
    <ToolList tools={["PHP", "HTML", "CSS"]} toolsText={true} />
    <p>
      <Trans>Prosjektbeskrivelse kommer senere.</Trans>
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
