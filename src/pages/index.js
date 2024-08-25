import React from "react";
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
        <title>Pål Stakvik – Web dev</title>
      </Head>

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
