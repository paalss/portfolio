// images
import mpoeCoverImg from "../../images/graphicwork/mpoe/mpoe-cropped.webp";
import mpoeProcessImg from "../../images/graphicwork/mpoe/mpoe.webp";
import mpoeProcessImg2 from "../../images/graphicwork/mpoe/mpoe-utkast.webp";
import mpoePosterImg from "../../images/graphicwork/mpoe/mpoe-poster.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";
import { Fragment } from "react";

const MPOE = () => (
  <Fragment>
    <img
      src={mpoeCoverImg}
      className="work-heading-img"
      width={961}
      height={446}
      alt={t`mord på orienteksekspressen bok-cover`}
    />
    <WorkHeading
      heading={t`Bok-cover o.l.`}
      timespan="2016"
      tools={["Photoshop", "Illustrator", "InDesign"]}
    />

    <p>
      <Trans>
        Et bok-cover jeg lagde for boka "Mord på orientekspressen" av Agatha
        Christie. Jeg lagde også et poster og andre design med samme motiv.
      </Trans>
    </p>

    <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={mpoeProcessImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`bok-cover`}
        caption={t`bok-cover`}
      />
      <Figure
        imgSrc={mpoeProcessImg2}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`utkast til bok-cover`}
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
  </Fragment>
);

export default MPOE;
