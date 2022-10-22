import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkHeaderImage"
import Head from "next/head";

const MPOE = () => (
  <>
    <Head>
      <title>{t`Bok-cover`} – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/graphicwork/mpoe/mpoe-cropped.webp"
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
        imgSrc="/images/graphicwork/mpoe/mpoe.webp"
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`bok-cover`}
        caption={t`bok-cover`}
      />
      <Figure
        imgSrc="/images/graphicwork/mpoe/mpoe-utkast.webp"
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`utkast til bok-cover`}
        caption={t`utkast`}
      />
      <Figure
        imgSrc="/images/graphicwork/mpoe/mpoe-poster.webp"
        imgWidth={0}
        imgHeight={0}
        imgAlt="poster"
        caption={t`Et poster jeg også lagde`}
      />
    </div>
  </>
);

export default MPOE;
