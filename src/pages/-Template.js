// images
import projImg from "../../images/tmplt/t.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../components/common/WorkHeading/WorkHeading";

const Template = () => (
  <>
    <img src={projImg} width={0} height={0} alt={t`_bilde`} />
    <WorkHeading
      headingInfo={{
        heading: (
          <Trans>_Sammenheng</Trans>
        ),
        timespan: t`2022 tidsspann`,
        hx: "h2",
      }}
      siteInfo={{
        site: "_link",
        repo: "_link"
      }}
      tools={
        ["verktøy"]
      }
    />
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
