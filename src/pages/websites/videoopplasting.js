import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkPage/WorkHeading";
import Head from "next/head";
import WorkHeaderImage from "../../components/common/WorkPage/WorkHeaderImage";

const Videoopplasting = () => (
  <>
    <Head>
      <title>{t`Videoopplasting`} – Pål Stakvik</title>
    </Head>
    <WorkHeaderImage
      src="/images/webwork/www-teknologi/split-videouploading.webp"
      width={951}
      height={605}
    />
    <h2>{t`Videoopplastingsapper`}</h2>
    <Trans>
      <p>
        Våren 2020, i faget WWW-teknologi, hadde vi to prosjekter hvor vi skulle
        lage nettapplikasjoner for videoopplasting og &#8209;visning. Altså mye
        det samme som det f.eks. Youtube, Udemy og Edx tilbyr.
      </p>
      <p>
        Begge nettappene skulle gi brukere mulighet til å blant annet: laste opp
        videoer, se på dem, legge til et interaktivt transkript ved siden av
        videoen, endre videodetaljene, legge dem til i spillelister og abonnere
        på spillelister.
      </p>
      <p>
        Det som skilte prosjektene, var verktøyene vi skulle bruke og noe av
        kravspesifikasjonen.
      </p>
    </Trans>

    <WorkHeading
      heading={t`PHP-prosjekt`}
      timespan={t`2020 januar–april`}
      tools={["Twig", "PHP", "MySQL", "HTML", "Docker"]}
    />

    <Trans>
      <p>
        Jeg jobbet i en gruppe med to andre. Jeg arbeidet mest med
        videoopplasting, &#8209;redigering og &#8209;visning. I tillegg gjorde
        jeg det spilleliste relaterte. Teknisk sett innebar dette å jobbe med
        appens interaksjon med databasen, databasestrukturen og nedlasting av
        videoer til filsystemet. Jeg jobbet også litt med kommentarer.
      </p>
      <p>
        Appen ble lagd med PHP-filer og templating engine'en Twig for å rendre
        html-sidene.
      </p>
    </Trans>

    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc="/images/webwork/www-teknologi/2-video-og-transkript.webp"
        imgWidth={1319}
        imgHeight={945}
        imgAlt={t`videospiller og transkript`}
        caption={t`videoside i PHP-prosjekt`}
      />
    </div>

    <WorkHeading
      heading={t`Lit-prosjekt`}
      timespan={t`2020 april–mai`}
      tools={[
        "Lit",
        "JavaScript",
        "PHP",
        "MySQL",
        "Relasjonsdatabase",
        "HTML",
        "CSS",
        "Docker",
      ]}
    />

    <dl>
      <dt>Lit</dt>
      <dd>
        <Trans>
          Verktøy for å bygge komponent-baserte nettsider. Lit skiller seg fra
          React ved at den bruker HTML som sitt templating språk (og ikke JSX).
          Ellers så har Lit kun <i>class-based</i> components. Lit brukes til å
          lage web-komponenter som man f.eks. finner på{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shoelace.style/"
          >
            https://shoelace.style/
          </a>
        </Trans>
      </dd>
    </dl>

    <Trans>
      <p>
        Kravspesifikasjonen var mye det samme som i prosjekt 1. Her skulle det
        også skilles mellom ulike brukertyper, som var <i>admin</i>,{" "}
        <i>lærer</i> og <i>studenter</i>, hver med ulike rettigheter:
      </p>
      <ul className="normal-list">
        <li>
          <b>studenter</b> skulle ha mulighet til å se på videoer, kommentere,
          lagre video i spillelister etc.
        </li>
        <li>
          <b>lærere</b> skulle ha studenters rettigheter pluss mulighet til å
          legge ut videoer
        </li>
        <li>
          <b>admin</b> skulle ha de samme rettighetene som alle andre, pluss
          mulighet til å endre å brukertypen til de andre brukerne. (Når folk
          skal registrere seg som lærer, må de opprette en studentbruker, og så
          sende forespørsel til admin om å få byttet brukertype)
        </li>
      </ul>

      <p>
        Nettappen skulle også være en <i>Single page application</i>, men dette
        fikk vi til bare delvis. (Hvis man klikker på en video i oversikten, tar
        siden en automatisk refresh. Man må også refreshe etter å ha lastet opp
        video eller gjort andre permanente endringer.)
      </p>
      <p>
        I dette prosjektet jobbet jeg med én annen. Det jeg hadde ansvar for,
        var å få til videoopplasting, &#8209;visning og &#8209;oversikt. Jeg
        lagde også mesteparten av brukerredigeringsfunksjonen for admin-brukere.
        Jeg drev også med litt CSS styling.
      </p>
      <p>
        Appen ble lagd med bruk av Lit-baserte komponenter som vi for det meste
        lagde selv.
      </p>
    </Trans>

    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc="/images/webwork/www-teknologi/prosjekt2-videovisning-topp.png"
        imgWidth={1325}
        imgHeight={679}
        imgAlt={t`Side med videospiller, meny og transkript`}
        caption={t`Videoside topp`}
      />
      <Figure
        imgSrc="/images/webwork/www-teknologi/prosjekt2-videovisning-bunn.png"
        imgWidth={1325}
        imgHeight={679}
        imgAlt={t`Videoside som viser kommentarer og hvilke spillelister den er i`}
        caption={t`Videoside bunn`}
      />
      <Figure
        imgSrc="/images/webwork/www-teknologi/prosjekt2-7-videoliste.webp"
        imgWidth={1920}
        imgHeight={1018}
        imgAlt={t`videooversikt`}
        caption={t`Videooversikt`}
      />
      <Figure
        imgSrc="/images/webwork/www-teknologi/prosjekt2-8-videoopplasting.webp"
        imgWidth={1917}
        imgHeight={866}
        imgAlt={t`videoopplastingsside`}
        caption={t`«Last opp video»-siden`}
      />
    </div>
  </>
);

export default Videoopplasting;
