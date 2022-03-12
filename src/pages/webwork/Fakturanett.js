// import projImg from "../../images/tmplt/t.webp";
import ToolList from "../../components/common/ToolList";
// import Figure from "../../components/common/Figure";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { Trans, t } from "@lingui/macro";

const Fakturanett = () => (
  <>
    {/* <img src={projImg} width={0} height={0} alt={t`_bilde`} /> */}
    <a
      className="link"
      href="https://www.fakturanett.no/"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faCircleNotch} /> {t`Besøk siden`}
    </a>
    <span className="link">
      <FontAwesomeIcon icon={faGithub} /> {t`Privat kildekode`}
    </span>
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
