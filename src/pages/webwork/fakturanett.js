import React from "react";

// react lingui
import { t, Trans } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";
// import Figure from "../../components/common/Figure";

const Fakturanett = () => (
  <>
    <img
      src="/images/webwork/fakturanett/page.avif"
      className="work-heading-img"
      width={1294}
      height={665}
      alt={t`fakturanett forside`}
    />

    <WorkHeading
      heading="Fakturanett"
      timespan={t`2022 februar–august`}
      siteInfo={{
        site: "https://www.fakturanett.no/",
      }}
      tools={["PHP", "HTML", "CSS"]}
    />

    <p>
      <Trans>
        Under min 20%-ansettelse hos Invoice Club har jeg hatt som jobb å
        forbedre koden til fakturanett.no. Jeg skulle oppgradere kildekoden fra
        pre-PHP5.5 til PHP7, oppdage og fikse bugs og fjerne unødvendige filer.
      </Trans>
      {/* har lært litt regex */}
      {/* <Trans>Jobber med å optimalisere koden, fjerne unødvendige filer. Skal jobbe med å bygge nettsiden med Vue etter hvert</Trans> */}
    </p>
  </>
);

export default Fakturanett;
