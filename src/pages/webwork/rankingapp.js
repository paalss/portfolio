import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";

const Rankingapp = () => (
  <>
    <img
      src="/images/webwork/rankingapp/app-recording1.gif"
      className="work-heading-img"
      width={1296}
      height={616}
      alt="Ranking app interface"
    />

    <WorkHeading
      heading="Ranking app"
      timespan="2020–2021"
      siteInfo={{
        repo: "https://github.com/paalss/Ranking-app",
      }}
      tools={[
        "TypeScript",
        "Jest",
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Docker",
      ]}
    />

    <Trans>
      <p>Dette prosjektet er arkivert og jobbes ikke på lenger.</p>
      <p>
        I slutten av juli 2020 begynte jeg å lage denne webappen for å rangere
        ting, hvor poenggivingen er en sortering fra best til dårligst.
        Potensielle ideer jeg hadde for appen, var å la brukerne få dele/vise
        listen sin med andre brukere, bidra på felles lister og importere
        listelementer direkte fra andre databaser (med web API).
      </p>
      <h3>Motivasjon til prosjektet</h3>
      <p>
        Kort sagt: Jeg ville prøve å lage det ranker.com burde ha vært. Og for å
        ha et kodeprosjekt å drive på med.
      </p>
      <p>
        Ranker.com er en nettapp som hadde mye av den samme funksjonaliteten som
        jeg nevnte over. Jeg likte det, og det var derfor skuffende da
        ranker.com plutselig på et tidspunkt bestemte seg for å skrote konseptet
        sitt. (De byttet ut å ordne lister mot å kun velge én favoritt per
        kategori.) Nettsidedesignet syntes jeg allerede ikke var særlig pent.
        Det var dette, samt behovet mitt for å holde på med noe koding etter å
        ha blitt ferdig med studiene, som fikk meg til å begynne dette
        prosjektet.
      </p>
      <p>
        Det skal nevnes at ranker.com i ettertid har ombestemt seg og gått
        tilbake til sitt originale konsept igjen. Men nettsiden er fortsatt et
        stort rot.
      </p>
      <p>
        Uansett, jeg hadde jo blitt bedre på programmering i JavaScript, så det
        i seg selv er jo motivasjon nok til å fortsette med det.
      </p>
    </Trans>
    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc="/images/webwork/rankingapp/overview.webp"
        imgWidth={493}
        imgHeight={401}
        imgAlt={t`Oversikt over lister eksempel`}
        caption={t`Lag egne lister`}
      />
      <Figure
        imgSrc="/images/webwork/rankingapp/top-novels2.webp"
        imgWidth={906}
        imgHeight={604}
        imgAlt={t`Beste metroidvanias listeeksempel`}
        caption={t`Sett inn egne elementer, tilpass etter behov`}
      />
      <Figure
        imgSrc="/images/webwork/rankingapp/best-metroidvanias.webp"
        imgWidth={964}
        imgHeight={763}
        imgAlt={t`Beste bøker listeeksempel`}
        caption={t`Få pene og oversiktlige lister`}
      />
    </div>
  </>
);

export default Rankingapp;
