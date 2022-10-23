import Head from "next/head";
import React from "react";
import { t } from "@lingui/macro";
import GraphicWork from "../components/common/SquareLinks/Work/GraphicWork/GraphicWork";

const Graphics = () => (
  <>
    <Head>
      <title>{t`Grafisk`} – Pål Stakvik</title>
    </Head>
    <GraphicWork />
  </>
);

export default Graphics;
