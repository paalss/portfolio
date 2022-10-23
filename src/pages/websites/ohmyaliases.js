import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";
import Head from "next/head";

const Ohmyaliases = () => (
  <>
    <Head>
      <title>Oh My aliases – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/webwork/ohmyaliases/img.avif"
      className="work-heading-img"
      width={939}
      height={587}
      alt={t`liste over aliaser`}
    />
    <WorkHeading
      heading="Oh my aliases"
      timespan={t`2022 mai–juni`}
      siteInfo={{
        site: "https://paalss.github.io/oh-my-aliases/",
        repo: "https://github.com/paalss/oh-my-aliases",
      }}
      tools={["React", "JavaScript", "JSX", "CSS"]}
    />
    <p>
      <Trans>
        Måtte lære meg aliasene til Oh my bash. Så jeg lagde denne
        oppslagsverk-appen for å raskt kunne se aliasene for mine ofte brukte
        kommandoer. Aliasene er for øvrig de samme på Oh my bash og -zsh.
      </Trans>
    </p>
  </>
);

export default Ohmyaliases;
