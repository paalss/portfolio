import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";
import Head from "next/head";

const Fagstoff = () => (
  <>
    <Head>
      <title>{t`Fagstoff`} – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/webwork/fagstoff/fagstoff.webp"
      width={1893}
      height={543}
      alt={t`Nettside med overskriften 'fagstoff'`}
    />

    <WorkHeading
      heading={t`Fagstoff`}
      timespan={t`2016 høst`}
      siteInfo={{
        site: "https://paalss.github.io/fagstoff",
        repo: "https://github.com/paalss/fagstoff",
      }}
      tools={["HTML", "CSS"]}
    />

    <p>
      <Trans>
        En nettside som jeg førte opp webkoding-notater i. Sist oppdatert
        02.11.16
      </Trans>
    </p>
  </>
);

export default Fagstoff;
