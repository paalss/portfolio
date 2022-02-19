import mpoeCoverImg from "../../images/graphicwork/mpoe/mpoe-cropped.webp";
import mpoeProcessImg from "../../images/graphicwork/mpoe/mpoe.webp";
import mpoeProcessImg2 from "../../images/graphicwork/mpoe/mpoe-utkast.webp";
import mpoePosterImg from "../../images/graphicwork/mpoe/mpoe-poster.webp";

import ToolList from "../../components/common/ToolList";
import Figure from "../../components/common/Figure";

// react lingui
import { Trans, t } from "@lingui/macro";

const MPOE = () => (
  <>
    <img
      src={mpoeCoverImg}
      width={961}
      height={446}
      alt={t`mord på orienteksekspressen bokcover`}
    />

    <h2>
      <Trans>
        Grafisk skoleoppgave
        <span className="subtitle">2016</span>
      </Trans>
    </h2>
    <ToolList
      tools={["Photoshop", "Illustrator", "InDesign"]}
      toolsText={true}
    />
    <p>
      <Trans>
        Et bokcover jeg lagde for boka "Mord på orientekspressen" av Agatha
        Christie. Jeg lagde også et poster og andre design med samme motiv.
      </Trans>
    </p>
    <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={mpoeProcessImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`bokcover`}
        caption={t`bokcover`}
      />
      <Figure
        imgSrc={mpoeProcessImg2}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`utkast til bokcover`}
        caption={t`utkast`}
      />
      <Figure
        imgSrc={mpoePosterImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt="poster"
        caption={t`Et poster jeg også lagde`}
      />
    </div>
  </>
);

export default MPOE;
