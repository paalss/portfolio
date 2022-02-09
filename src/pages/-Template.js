import projImg from "../../images/tmplt/t.webp";
import ToolList from "../../components/common/ToolList";
import Figure from "../../components/common/Figure";

// react lingui
import { Trans, t } from "@lingui/macro";

const Template = () => (
  <>
    <img src={projImg} width={0} height={0} alt={t`_bilde`} />
    <a
      className="link"
      href="https://paalss.github.io/repo/"
      rel="noopener noreferrer"
    >
      <span className="fas fa-circle-notch"></span> {t`Besøk siden`}
    </a>
    <a
      className="link"
      href="https://github.com/paalss/repo"
      rel="noopener noreferrer"
    >
      <span className="fab fa-github"></span> {t`Kildekode`}
    </a>
    <span className="link">
      <span className="fas fa-circle-notch"></span> {t`Ikke tilgjengelig live`}
    </span>
    <span className="link">
      <span className="fab fa-github"></span> {t`Privat kildekode`}
    </span>
    <h2>
      <Trans>
        _Sammenheng
        <span className="subtitle">_semester</span>
      </Trans>
    </h2>
    <ToolList tools={["verktøy"]} toolsText={true} />
    <p>
      <Trans>Beskrivelse</Trans>
    </p>
    <div uk-lightbox="animation: slide" className="flex wrap">
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
    </div>
  </>
);

export default Template;
