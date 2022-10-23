import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import Head from "next/head";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";

const JRNM = () => (
  <>
    <Head>
      <title>Jr NM ski 2015 logo – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/graphicwork/jr-nm-ski/IMG_2413-min.webp"
      width={5184}
      height={3456}
      alt="Junior NM på ski logo på skilt"
    />
    <WorkHeading
      heading={t`Logo for Jr NM på ski 2015`}
      timespan="2013"
      tools={["Photoshop"]}
    />
    <Trans>
      <p>
        I 2013 hadde jeg en-ukes praksis hos Orega på Lade i Trondheim. Dette
        var mens jeg gikk interiør og utstillingsdesign på VGS. Der fikk jeg
        være med på å designe logo for Junior NM på Ski 2015. Det var
        kjempekult!
      </p>
      <p>
        Leveransen min på slutten av uka ble bokstavene «NM» slik som de er i
        den ferdige logoen. Jeg lagde en sort-hvitt versjon og mange
        forskjellige fargevariasjoner av den, deriblant den med
        norskeflagg-fargene. Under «NM»-bokstavene hadde jeg skrevet «Jr NM på
        ski 2015» med grå tekst.
      </p>
      <p>
        I den logoen som ble brukt i arrangementet hadde den grå teksten
        heldigvis blitt byttet ut med en blå tekst (bilde), som ser mye bedre
        ut. Mistenker også at noen har vektorisert den, siden logoen så mye
        renere ut da jeg så at den på arrangementet.
      </p>
      <p>
        Til å designe logoen brukte jeg Photoshop. I ettertid har jeg skjønt at
        jeg heller burde ha brukt et vektorprogram som Illustrator, men dette
        visste jeg ikke da. En konsekvens av å bruke Photoshop var at ikke alle
        piksler ville henge med når man endrer farge med paint-bucket-tool. Jeg
        prøvde ut logoen i masse forskjellige farger, og man kunne se
        restepiksler fra tidligere fargefyll i de forskjellige utkastene.
      </p>
    </Trans>
    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc="/images/graphicwork/jr-nm-ski/JrNM-logo-web.webp"
        imgWidth={640}
        imgHeight={480}
        imgAlt={t`Logo for Junior NM på ski 2015`}
        caption={t`Logo som ble brukt: En bearbeidet versjon av det jeg leverte i 2013`}
      />
      <Figure
        imgSrc="/images/graphicwork/jr-nm-ski/velkommen-til-Jr-NM-Jervskogen.webp"
        imgAlt={t`plakat med logo`}
        caption={t`Plakat`}
      />
    </div>
  </>
);

export default JRNM;
