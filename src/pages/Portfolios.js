import pf4 from "../images/portfolios/pf4.png";
import pf3 from "../images/portfolios/pf3.png";
import pf2 from "../images/portfolios/pf2-full2.png";
import pf1v2 from "../images/portfolios/pf1-2.png";
import pf1v1 from "../images/portfolios/pf1-1.jpg";

import Figure from "../components/common/Figure";

function Portfolios() {
  return (
    <>
      <div>
        <h2>
          2019 portefølje
          <span className="subtitle">Fritidsprosjekt</span>
        </h2>

        <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
          <Figure imgSrc={pf4} imgAlt="portefølje 4" caption="portefølje 4" />
        </div>
        <span className="link">
          <i class="fas fa-circle-notch"></i> Ikke tilgjengelig live
        </span>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2019-fritid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
        <p>
          Denne lagde jeg i PHP for å la alle sidene referere til samme header
          og footer filer. Det var ideelt for meg da, siden det var det jeg best
          kunne, og på denne tiden hadde jeg tilgang på en folk.ntnu.no server
          som støttet PHP. <br />
          Jeg fant det temmelig demotiverende å jobbe med den, siden jeg ikke
          var helt fornøyd med designet, men samtidig ikke kunne sette fingeren
          på hvorfor. Så desember 2020 tok jeg heller og lagde den siden du er
          på nå.
        </p>
      </div>

      <div>
        <h2>
          Høst 2016: Pål Stakvik's NTNU Webpage
          <span className="subtitle">
            Eksamensinnlevering i webkoding (NTNU)
          </span>
        </h2>
        <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
          <Figure
            imgSrc={pf3}
            imgAlt="portefølje 3"
            caption="Ganske fornøyd med designet!"
          />
        </div>
        <a
          className="link"
          href="https://paalss.github.io/portfolio-2016-2-webkoding-final-delivery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-circle-notch"></i> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2016-2-webkoding-final-delivery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
      </div>

      <div>
        <h2>
          2016 vår/høst Portefølje
          <span className="subtitle">Fritidsprosjekt</span>
        </h2>
        <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
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
          <i class="fas fa-circle-notch"></i> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2016-1-fritid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
        <p>
          Denne kom jeg aldri langt med før jeg la prosjektet fra meg. Den har
          ingen undersider og index-siden er halvferdig.
        </p>
      </div>

      <div>
        <h2>
          2015 Portefølje 2
          <span className="subtitle">
            Videreutvikling etter en innlevering på videregående
          </span>
        </h2>
        <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
          <Figure
            imgSrc={pf1v2}
            imgAlt="portefølje 1 versjon 2"
            caption="Fritidsarbeid, hadde lyst til å forbedre siden etter innleveringen"
          />
        </div>
        <a
          className="link"
          href="https://paalss.github.io/portfolio-2015-2-etter-innlevering/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-circle-notch"></i> Besøk siden
        </a>
        <a
          className="link"
          href="https://github.com/paalss/portfolio-2015-2-etter-innlevering"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-github"></span> Kildekode
        </a>
        <p>
          Denne siden hadde veldig mye av det arbeidet jeg hadde gjort på medier
          og kommunikasjon på videregående. Mye grafisk arbeid!
        </p>
      </div>

      <div>
        <h2>2015 Portefølje 1
          <span className="subtitle">Innleveringsoppgave på videregående</span>
        </h2>
        <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
          <Figure
            imgSrc={pf1v1}
            imgAlt="portefølje 1 versjon 1"
            caption="innleveringsoppgave i 2015"
          />
        </div>
        <span className="link">
          <i class="fas fa-circle-notch"></i> Ikke tilgjengelig live
        </span>
        <span className="link">
          <i class="fab fa-github"></i> Ikke tilgjengelig kildekode
        </span>
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </span>
      </div>
    </>
  );
}

export default Portfolios;
