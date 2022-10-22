import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkHeaderImage";

const Dokker = () => (
  <>
    <WorkHeaderImage
      src="/images/webwork/dokker/dashboard/latest-document-assignment.webp"
      width={2880}
      height={1534}
      alt="Dokker interface"
    />

    <WorkHeading
      heading="Dokker"
      timespan={t`2021 april–september`}
      siteInfo={{
        site: "https://www.dokker.com/nb",
      }}
      tools={["React", "TypeScript", "JSX", "CSS"]}
    />

    <Trans>
      <p>
        Under denne fem-måneders praksisen bidro jeg i utviklingen av
        web-applikasjonen Dokker, produktet til Learning Moment. Jeg tok også et
        React-kurs for å få den nødvendige kunnskapen jeg trengte. Jeg fikk
        bidratt med:
      </p>
      <ul className="normal-list">
        <li>Nye komponenter</li>
        <li>Refaktorering</li>
        <li>Vurdering av andres kode</li>
        <li>Litt bug-fixing</li>
      </ul>
      <p>Under denne perioden lærte jeg:</p>
      <ul className="normal-list">
        <li>React og relaterte verktøy</li>
        <li>
          Samarbeid på prosjekt med bruk av <i>issues</i> og{" "}
          <i>pull requests</i>
        </li>
      </ul>
      <h3>Komponentener jeg lagde</h3>
    </Trans>
    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc="/images/webwork/dokker/follow-up-card/followupcard.webp"
        imgWidth={694}
        imgHeight={159}
        imgAlt="FollowUpCard"
        caption={t`Et kort for keep-up-delen av dashboard`}
      />
      <Figure
        imgSrc="/images/webwork/dokker/news-card/newscards.webp"
        imgWidth={693}
        imgHeight={525}
        imgAlt="NewsCard"
        caption={t`Et kort for recent-activities-delen av dashboard`}
      />
    </div>
    <Trans>
      <h3>Litt om Dokker</h3>
      <p>
        Dokker er en kommunikasjonsplatform for studenter og lærere i skole og
        lignende. I Dokker kan f.eks. lærere legge ut oppgaver, og elever kan
        levere inn besvarelser og selvvurderinger. <br />
        Elevene får samlet opp dokumentasjon av egen kunnskap på Dokker, og
        dette kabn de vise frem til fremtidige arbeidsgivere. Det er et selling
        point at de behoolder tilgangen på dokumentasjonen livet ut. De kan også
        legge ut vitnemål og sertifikater.
      </p>
    </Trans>
    {/*
      <p>
        Dokker er en kommunikasjonsportal mellom f.eks. lærere og elever, hvor
        lærere kan legge ut forelesninger og oppgaver mens elever kan gi
        leveranser og selvvurderinger.
      </p>
      */}
    <h3>
      <Trans>Videre lesing</Trans>
    </h3>
    <ul>
      <li>
        <a href="https://www.dokker.com/nb">
          <Trans>Dokker appen</Trans>
        </a>
      </li>
      <li>
        <a href="https://www.dokker.com/nb/blog">
          <Trans>Dokker blogg</Trans>
        </a>
      </li>
      <li>
        <a href="https://learningmoment.tech/">Learning Moment</a>
      </li>
    </ul>
  </>
);

export default Dokker;
