import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";
import Head from "next/head";

const Portfolios = () => (
  <>
    <Head>
      <title>{t`Denne porteføljen`} – Pål Stakvik</title>
    </Head>
    <>
      <WorkHeaderImage
        src="/images/webwork/portfolios/split-portfolios.webp"
        alt={t`portefølje med foto og ferdigheter`}
        width={951}
        height={605}
      />

      <h2>{t`Fem ulike versjoner`}</h2>

      <WorkHeading
        hLevel={3}
        heading={t`Portefølje` + " 5 " + t`(siste)`}
        timespan={t`2020 desember–nå`}
        siteInfo={{
          repo: "https://github.com/paalss/portfolio",
        }}
        tools={[
          "React",
          "Next",
          "JavaScript",
          "JSX",
          "CSS",
          <>React&#8209;lingui</>,
          "Schema.org",
        ]}
      />

      <p>
        <Trans>
          Siden du befinner deg på nå startet jeg i desember 2020. Den ble designet
          spesifikt for å presentere mine webprosjekt og skulle
          fungere som et supplement til CV i forbindelse med jobbsøking.
        </Trans>
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc="/images/webwork/portfolios/pf5-1-9desember-2020.png"
          imgWidth={1918}
          imgHeight={920}
          imgAlt={t`portefølje med prosjekter`}
          caption={t`Porteføljen slik den så ut 9. desember 2020`}
        />
      </div>

      <Trans>
        <p>
          I senere tid har jeg lagt til mer innhold og forbedret SEO. Jeg er
          veldig fornøyd med designet, kodekvaliteten og valg av verktøy.
        </p>
        <h3>Hvorfor React?</h3>
        <p>
          Før jeg brukte React til porteføljen brukte jeg JavaScript til å
          etterligne en komponent-basert arkitektur. Det var fordi noen
          elementer måtte gjenbrukes på hver side (Nav og Footer) og et element
          måtte ryddes bort fra index.html (søylediagrammet).
        </p>
        <p>
          Å lage komponenter med “vanilla JavaScript” ble ganske uelegant etter
          hvert som koden ble større. Jeg gikk derfor over til React da det var
          det komponent-baserte verktøyet jeg hadde tidligere erfaring med.
        </p>
      </Trans>
    </>

    <>
      <WorkHeading
        hLevel={3}
        extraSpaceAbove={true}
        heading={t`Portefølje` + " 4"}
        timespan="2019"
        siteInfo={{
          repo: "https://github.com/paalss/portfolio-2019-fritid",
        }}
        tools={["PHP", "CSS"]}
      />

      <p>
        <Trans>
          Dette var en portefølje jeg lagde under studiene. Etter ett år ble
          informasjonen på siden ganske utdatert, og jeg ble ganske misfornøyd
          med designet og måten jeg hadde kodet det på. Derfor skrotet jeg denne
          og begynte på siden du er på nå.
        </Trans>
      </p>
      <p>
        <Trans>
          Jeg lagde denne i PHP, mest for å fikse
          «samme-header-og-footer-på-alle-sidene». Jeg kunne heller ikke
          JavaScript så godt på denne tiden, så det er grunnen til at jeg ikke
          brukte det.
        </Trans>
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc="/images/webwork/portfolios/pf4.webp"
          imgWidth={973}
          imgHeight={1057}
          imgAlt={t`portefølje 4`}
          caption={t`portefølje 4`}
        />
      </div>
    </>

    <>
      <WorkHeading
        hLevel={3}
        extraSpaceAbove={true}
        heading={t`Portefølje` + " 3"}
        timespan={t`2016 høst`}
        siteInfo={{
          site: "https://paalss.github.io/portfolio-2016-2-webkoding-final-delivery",
          repo: "https://github.com/paalss/portfolio-2016-2-webkoding-final-delivery",
        }}
        tools={["HTML", "CSS"]}
      />

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc="/images/webwork/portfolios/pf3.webp"
          imgWidth={1280}
          imgHeight={623}
          imgAlt={t`portefølje 3`}
          caption={t`Portefølje 3`}
        />
      </div>
    </>

    <>
      <WorkHeading
        hLevel={3}
        extraSpaceAbove={true}
        heading={t`Portefølje` + " 2"}
        timespan="2016"
        siteInfo={{
          site: "https://paalss.github.io/portfolio-2016-1-fritid",
          repo: "https://github.com/paalss/portfolio-2016-1-fritid",
        }}
        tools={["HTML", "CSS"]}
      />

      <p>
        {t`Denne kom jeg aldri langt med før jeg la prosjektet fra meg. Den har ingen undersider og index-siden er halvferdig.`}
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc="/images/webwork/portfolios/pf2-full2.webp"
          imgWidth={1331}
          imgHeight={752}
          imgAlt={t`Portefølje` + " 2"}
          caption={t`Fritidsprosjekt som aldri ble fullført`}
        />
      </div>
    </>

    <>
      <WorkHeading
        hLevel={3}
        extraSpaceAbove={true}
        heading={t`Portefølje` + " 1"}
        timespan="2015"
        siteInfo={{
          site: "https://paalss.github.io/portfolio-2015-2-etter-innlevering",
          repo: "https://github.com/paalss/portfolio-2015-2-etter-innlevering",
        }}
        tools={["HTML", "CSS"]}
      />

      <p>
        {/* Skoleoppgave portefølje + etterarbeid */}
        <Trans>
          I 2015 gikk jeg på <i>medier og kommunikasjon</i> på Byåsen VGS. Der
          hadde jeg en oppgave i å lage en tresiders portefølje om meg selv.
          Etter å ha levert denne oppgaven endret jeg litt på layout-et.
        </Trans>
      </p>
      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc="/images/webwork/portfolios/pf1-1.webp"
          imgWidth={723}
          imgHeight={437}
          imgAlt={t`portefølje 1 versjon 1`}
          caption={t`Innleveringsoppgave på medier og kommunikasjon`}
        />
        <Figure
          imgSrc="/images/webwork/portfolios/pf1-2.webp"
          imgWidth={1280}
          imgHeight={622}
          imgAlt={t`portefølje 1 versjon 2`}
          caption={t`Videreutvikling etter leveranse: nye farger og noe endret layout`}
        />
      </div>
    </>
  </>
);

export default Portfolios;
