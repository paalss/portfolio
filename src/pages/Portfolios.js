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
          Verktøy: <li>React</li> <li>JavaScript</li> <li>HTML</li> <li>CSS</li>
        </ul>

        <p>
          Min første portefølje som fokuserer på hva jeg kan innen webutvikling,
          og som jeg er helt fullstendig fornøyd med.
        </p>
        <p>
          Jeg fant det temmelig demotiverende å jobbe med min forrige portefølje
          (den under), siden jeg ikke var helt fornøyd med designet, men ikke
          visste hva jeg skulle fikse. Det førte i hvert fall til at jeg skrotet
          den og lagde den du er på nå.
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
          Portenføljen jeg lagde før denne, (den under fra 2016), var veldig
          mangelfull. I denne nye porteføljen forsøkte jeg å dekke så mye som
          mulig av det jeg hadde gjort.
        </p>
        <p>
          Denne lagde jeg i PHP, mest for å løse for å fikse
          «samme-header-og-footer-på-alle-sidene». Jeg var mest stø på PHP på
          denne tiden, og jeg hadde tilgang på en folk.ntnu.no server som
          støttet PHP, så jeg kunne dele den live.
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
          Denne siden hadde veldig mye av det arbeidet jeg hadde gjort på medier
          og kommunikasjon på videregående. Mye grafisk arbeid!
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
