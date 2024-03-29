import React from 'react';
import Head from "next/head";
import OtherworkLinks from "../components/common/SquareLinks/Work/Otherwork";
import WebworkLinks from "../components/common/SquareLinks/Work/Webwork";
import GraphicworkLinks from "../components/common/SquareLinks/Work/GraphicWork";

// components
import Barchart from "../components/common/Barchart";
import Certificate from "../components/common/Certificate";

// react lingui
import { Trans, t } from "@lingui/macro";

const Index = () => {
  return (
    <>
      <Head>
        <title>Pål Stakvik</title>
      </Head>

      <Trans>
        <h2>Kompetanse</h2>
        <div className="mb-50">
          Jeg har erfaring innen webutvikling og grafisk design.
        </div>
      </Trans>

      <div id="skills-placeholder" className="skills-placeholder mb-130">
        <Barchart
          web={[
            { tech: "HTML & CSS", level: "3" },
            { tech: "JavaScript", level: "3" },
            { tech: "React", level: "3" },
            {
              // denne string'en passer for bar title, men ikke som label innerhtml...
              tech: t`MySQL & relasjonsdatabaser`,
              // ...label trenger en HTML-versjon med soft hyphen (&shy;), slik at ordet kan orddeles ved linjeskift
              techHtmlEntities: (
                <Trans>MySQL &amp; relasjons&shy;databaser</Trans>
              ),
              level: "2",
            },
            { tech: "PHP", level: "2" },
            { tech: t`Automatisk testing`, level: "1" },
            { tech: "NodeJS", level: "1" },
            { tech: "Next", level: "1" },
          ]}
          design={[
            {
              tech: "Adobe XD, Photoshop, Illustrator & InDesign",
              level: "2",
            },
          ]} />
      </div>

      <h2 className="mb-50">
        <Trans>Nettsider</Trans>
      </h2>
      <WebworkLinks />

      <h2 className="mb-50">
        <Trans>Grafisk</Trans>
      </h2>

      <GraphicworkLinks />

      <h2 className="mb-50">
        <Trans>Annet</Trans>
      </h2>
      <OtherworkLinks />

      <h2 className="mb-50">
        <Trans>React sertifikat</Trans>
      </h2>

      <Certificate />
    </>
  );
};

export default Index;
