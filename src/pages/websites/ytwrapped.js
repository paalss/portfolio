import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";
import Head from "next/head";

const Ytwrapped = () => (
  <>
    <Head>
      <title>YT-wrapped – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/webwork/yt-wrapped/img.avif"
      width={1059.58}
      height={780.417}
      alt={t`liste over videoer`}
    />
    <WorkHeading
      heading="Yt-wrapped"
      timespan={t`2022 januar–nå`}
      siteInfo={{
        site: "https://paalss.github.io/youtube-wrapped",
        repo: "https://github.com/paalss/youtube-wrapped",
      }}
      tools={["React", "JavaScript", "JSX", "CSS"]}
    />
    <p>
      <Trans>
        Syntes det var synd at Youtube ikke hadde samme års-sammendrag slik som
        Spotify har, hvor man kan se hva man har spilt av mest i løpet av et år.
        Så da måtte jeg nesten lage noe slikt selv.
      </Trans>
    </p>
    <p>
      <Trans>
        For å bruke denne applikasjonen så forutsetter det at du har vært
        innlogget på Youtube mens du har sett videoene, slik at man kan skaffe
        disse datene og laste dem opp i denne appen.
      </Trans>
    </p>
  </>
);

export default Ytwrapped;
