import pf5 from "../images/portfolios/pf5.png";
import pf4 from "../images/portfolios/pf4.png";
import pf3 from "../images/portfolios/pf3.png";
import pf2 from "../images/portfolios/pf2-full2.png";
import pf1v2 from "../images/portfolios/pf1-2.png";
import pf1v1 from "../images/portfolios/pf1-1.jpg";

import Figure from "../components/common/Figure";

function Portfolios() {
  return (
    <>
      <>
        <h2>
          Fritidsprosjekt etter studiene
          <span className="subtitle">2020 desember–</span>
        </h2>
        <ul className="tools">
          Verktøy: <li>React</li> <li>JavaScript</li> <li>JSX</li> <li>CSS</li>
        </ul>

        <p>
          Denne porteføljen lagde jeg fordi jeg var ufornøyd med den forrige (se
          under). Den hadde litt for dårlig design og hadde lite fokus på
          nettsider jeg hadde laget, så da begynte jeg liksågodt på en helt ny
          portefølje.
        </p>

        <div uk-lightbox="animation: slide">
          <Figure imgSrc={pf5} imgAlt="portefølje 5" caption="portefølje 5" />
        </div>
        <span className="link">
          <span className="fas fa-circle-notch"></span> Du er på siden
        </span>
        <a
          className="link"
          href="https://github.com/paalss/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </>

      <>
        <h2>
          Fritidsprosjekt under studiene
          <span className="subtitle">2019</span>
        </h2>
        <ul className="tools">
          Verktøy: <li>PHP</li> <li>HTML</li> <li>CSS</li>
        </ul>

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
          (folk.ntnu.no/paalsst) som støttet PHP. Så det er grunnen til at det
          ikke ble en statisk side.
        </p>

        <div uk-lightbox="animation: slide">
          <Figure imgSrc={pf4} imgAlt="portefølje 4" caption="portefølje 4" />
        </div>
        <span className="link">
          <span className="fas fa-circle-notch"></span> Ikke tilgjengelig live
        </span>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2019-fritid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </>

      <>
        <h2>
          Eksamensinnlevering i webkoding
          <span className="subtitle">2016 høst</span>
        </h2>
        <ul className="tools">
          Verktøy: <li>HTML</li> <li>CSS</li>
        </ul>

        <div uk-lightbox="animation: slide">
          <Figure imgSrc={pf3} imgAlt="portefølje 3" caption="portefølje 3" />
        </div>
        <a
          className="link"
          href="https://paalss.github.io/portfolio-2016-2-webkoding-final-delivery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fas fa-circle-notch"></span> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2016-2-webkoding-final-delivery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </>

      <>
        <h2>
          En portefølje påbegynt like før studiene
          <span className="subtitle">2016</span>
        </h2>
        <ul className="tools">
          Verktøy: <li>HTML</li> <li>CSS</li>
        </ul>

        <p>
          Denne kom jeg aldri langt med før jeg la prosjektet fra meg. Den har
          ingen undersider og index-siden er halvferdig.
        </p>

        <div uk-lightbox="animation: slide">
          <Figure
            imgSrc={pf2}
            imgAlt="portefølje 2"
            caption="Fritidsprosjekt som aldri ble fullført"
          />
        </div>
        <a
          className="link"
          href="https://paalss.github.io/portfolio-2016-1-fritid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fas fa-circle-notch"></span> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2016-1-fritid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </>

      <>
        <h2>
          Innlevering på VGS og videreutvikling etter det
          <span className="subtitle">2015</span>
        </h2>
        <ul className="tools">
          Verktøy: <li>HTML</li> <li>CSS</li>
        </ul>

        <p>
          I 2015 gikk jeg på <i>medier og kommunikasjon</i> på Byåsen VGS. Til
          en skoleoppgave lagde jeg en tresiders portefølje om meg selv og mitt
          arbeid. Etter å ha levert denne oppgaven endret jeg litt på layout-et.
        </p>

        <div uk-lightbox="animation: slide">
          <Figure
            imgSrc={pf1v2}
            imgAlt="portefølje 1 versjon 2"
            caption="Videreutvikling: nye farger og noe endret layout"
          />
          <Figure
            imgSrc={pf1v1}
            imgAlt="portefølje 1 versjon 1"
            caption="Innleveringsoppgave på medier og kommunikasjon"
          />
        </div>
        <a
          className="link"
          href="https://paalss.github.io/portfolio-2015-2-etter-innlevering/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fas fa-circle-notch"></span> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2015-2-etter-innlevering"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </>
    </>
  );
}

export default Portfolios;
