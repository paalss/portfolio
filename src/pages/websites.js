import React from "react";
import Head from "next/head";
import Webwork from "../components/common/SquareLinks/Work/Webwork"
import { t } from "@lingui/macro";

const Websites = () => {
  return (
    <>
      <Head>
        <title>{t`Nettsider`} – Pål Stakvik</title>
      </Head>
      <Webwork />
    </>
  );
};

export default Websites;
