import React from "react";
import { t } from "@lingui/macro";
import Head from "next/head";

import Otherwork from "../components/common/SquareLinks/Work/Otherwork"

const Other = () => (
  <>
    <Head>
      <title>{t`Annet arbeid`} – Pål Stakvik</title>
    </Head>
    <Otherwork/>
  </>
);

export default Other;
