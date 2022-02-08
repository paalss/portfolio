import pf5 from "../../images/portfolios/pf5.webp";
import pf4 from "../../images/portfolios/pf4.webp";
import pf3 from "../../images/portfolios/pf3.webp";
import pf2 from "../../images/portfolios/pf2-full2.webp";
import pf1v2 from "../../images/portfolios/pf1-2.webp";
import pf1v1 from "../../images/portfolios/pf1-1.webp";

import Figure from "../../components/common/Figure";
import ToolList from "../../components/common/ToolList";

// react lingui
import { Trans, t } from "@lingui/macro";

const Portfolios = () => (
  <>
    <>
      <h2>
        <Trans>
          Fritidsprosjekt etter studiene
          <span className="subtitle">2020 desember–nå</span>
        </Trans>
      </h2>
      <ToolList
        tools={["React", "JavaScript", "JSX", "CSS", <>React&#8209;lingui</>]}
        toolsText={true}
      />

      <Trans>
        <p>
          Før jeg lagde denne porteføljen hadde jeg lagd massevis av tidligere
          versjoner. Denne versjonen ble til fordi jeg var ufornøyd med den
          forrige (se under): Den hadde litt for dårlig design og hadde lite
          fokus på nettsider jeg hadde laget.
        </p>
        <h3>Hvorfor React?</h3>
        <p>
          Før jeg brukte React til porteføljen brukte jeg JavaScript til å
          etterligne en komponent-basert arkitektur. Det var fordi noen
          elementer måtte gjenbrukes på hver side (Nav og Footer) og et element
          måtte ryddes bort fra index.html (søylediagrammet).
        </p>
        <p>
          Å lage komponenter med "vanilla JavaScript" ble ganske uelegant etter
          hvert som koden ble større. Jeg gikk derfor over til React da det var
          det komponent-baesrte verktøyet jeg hadde tidligere erfaring med.
        </p>
      </Trans>
      {/*<p>
          Dessuten gjør React det veldig enkelt for meg å hente data fra web API
          med <i>serverside JavaScript</i> og sende dette direkte til{" "}
          <i>klient-siden</i>.
        </p> */}

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={pf5}
          imgWidth={1229}
          imgHeight={7013}
          imgAlt={t`portefølje 5`}
          caption={t`portefølje 5`}
        />
      </div>
      <span className="link">
        <span className="fas fa-circle-notch"></span> {t`Du er på siden`}
      </span>
      <a
        className="link"
        href="https://github.com/paalss/portfolio"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> {t`Kildekode`}
      </a>
    </>

    <>
      <h2>
        Fritidsprosjekt under studiene
        <span className="subtitle">2019</span>
      </h2>
      <ToolList tools={["PHP", "HTML", "CSS"]} toolsText={true} />

      <Trans>
        <p>
          Porteføljene jeg hadde lagd før denne (se under) var enten for
          mangelfull av informasjon om mitt arbeid eller hadde for dårlig kode,
          så da begynte jeg heller på denne. I denne forsøkte jeg å dekke så mye
          som mulig av det arbeidet jeg hadde gjort, alt grafisk og
          koderelatert.
        </p>
        <p>
          Denne lagde jeg i PHP, mest for å løse for å fikse
          «samme-header-og-footer-på-alle-sidene». Jeg kunne ikke JavaScript så
          godt på denne tiden, og jeg hadde tilgang på en <i>live server</i>{" "}
          &shy; (folk.ntnu.no/paalsst) som støttet PHP. Så det er grunnen til at
          det ikke ble en statisk side.
        </p>
      </Trans>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={pf4}
          imgWidth={973}
          imgHeight={1057}
          imgAlt={t`portefølje 4`}
          caption={t`portefølje 4`}
        />
      </div>
      <span className="link">
        <span className="fas fa-circle-notch"></span>{" "}
        {t`Ikke tilgjengelig live`}
      </span>
      <a
        className="link"
        href="https://github.com/paalss/portfolio-2019-fritid"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> {t`Kildekode`}
      </a>
    </>

    <>
      <h2>
        <Trans>
          Eksamensinnlevering i webkoding
          <span className="subtitle">2016 høst</span>
        </Trans>
      </h2>
      <ToolList tools={["HTML", "CSS"]} toolsText={true} />

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={pf3}
          imgWidth={1280}
          imgHeight={623}
          imgAlt={t`portefølje 3`}
          caption={t`portefølje 3`}
        />
      </div>
      <a
        className="link"
        href="https://paalss.github.io/portfolio-2016-2-webkoding-final-delivery/"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> {t`Besøk siden`}
      </a>
      <a
        className="link"
        href="https://github.com/paalss/portfolio-2016-2-webkoding-final-delivery"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> {t`Kildekode`}
      </a>
    </>

    <>
      <h2>
        <Trans>
          En portefølje påbegynt like før studiene
          <span className="subtitle">2016</span>
        </Trans>
      </h2>
      <ToolList tools={["HTML", "CSS"]} toolsText={true} />

      <p>
        {t`Denne kom jeg aldri langt med før jeg la prosjektet fra meg. Den har ingen undersider og index-siden er halvferdig.`}
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={pf2}
          imgWidth={1331}
          imgHeight={752}
          imgAlt={t`portefølje 2`}
          caption={t`Fritidsprosjekt som aldri ble fullført`}
        />
      </div>
      <a
        className="link"
        href="https://paalss.github.io/portfolio-2016-1-fritid/"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> {t`Besøk siden`}
      </a>
      <a
        className="link"
        href="https://github.com/paalss/portfolio-2016-1-fritid"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> {t`Kildekode`}
      </a>
    </>

    <>
      <h2>
        <Trans>
          Innlevering på VGS og videreutvikling etter det
          <span className="subtitle">2015</span>
        </Trans>
      </h2>
      <ToolList tools={["HTML", "CSS"]} toolsText={true} />

      <p>
        <Trans>
          I 2015 gikk jeg på <i>medier og kommunikasjon</i> på Byåsen VGS. Der
          hadde jeg en oppgave i å lage en tresiders portefølje om meg selv.
          Etter å ha levert denne oppgaven endret jeg litt på layout-et.
        </Trans>
      </p>
      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={pf1v2}
          imgWidth={1280}
          imgHeight={622}
          imgAlt={t`portefølje 1 versjon 2`}
          caption={t`Videreutvikling etter leveranse: nye farger og noe endret layout`}
        />
        <Figure
          imgSrc={pf1v1}
          imgWidth={723}
          imgHeight={437}
          imgAlt={t`portefølje 1 versjon 1`}
          caption={t`Innleveringsoppgave på medier og kommunikasjon`}
        />
      </div>
      <a
        className="link"
        href="https://paalss.github.io/portfolio-2015-2-etter-innlevering/"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> {t`Besøk siden`}
      </a>
      <a
        className="link"
        href="https://github.com/paalss/portfolio-2015-2-etter-innlevering"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> {t`Kildekode`}
      </a>
    </>
  </>
);

export default Portfolios;