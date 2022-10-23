import React from 'react';

// react lingui
import { Trans, t } from "@lingui/macro";
import WorkHeaderImage from '../components/common/WorkHeaderImage';

// components
// import Figure from "../../components/common/Figure";
// import WorkHeading from "../components/common/WorkHeading";

const [FTName] = () => (
  <>
    <WorkHeaderImage
      src={projImg}
      width={0}
      height={0}
      alt={t`_bilde`}
    />
    {/* <WorkHeading
      heading={t`h1-tittel eller oppdelt`}
      timespan={t`2022 tidsspann`}
      siteInfo={{
        site: "",
        repo: "",
      }}
      tools={[]}
    /> */}
    <p>
      <Trans>Beskrivelse</Trans>
    </p>
    <div uk-lightbox="animation: slide" className="flex wrap">
      {/* <Figure
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
      /> */}
    </div>
  </>
);

export default [FTName];
