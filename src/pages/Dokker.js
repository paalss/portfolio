import dokkerInterface from "../images/dokker/dashboard/latest-document-assignment.png";
// import newcardImg from "../images/dokker/news-card/wip3-2021-06-30-at-08.58.07.png";
import newcardsImg from "../images/dokker/news-card/newscards.png";
import followupcardImg from "../images/dokker/follow-up-card/followupcard.png";
// import noElementsFoundImg from "../images/dokker/no-elements-found/empty-state-for-your-assignments.png";

import Figure from "../components/common/Figure";

function Dokker() {
  return (
    <>
      <img src={dokkerInterface} alt="Dokker logo" />
      <a
        className="link"
        href="https://www.dokker.com/nb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-circle-notch"></i> Besøk siden
      </a>
      <span className="link">
        <i class="fab fa-github"></i> Privat kildekode
      </span>
      <h2>
        Praksisprosjekt hos Learning Moment, april–september 2021
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li>React</li> <li>TypeScript</li> <li>HTML</li> <li>CSS</li>
          </ul>
        </span>
      </h2>
      <p>
        Under denne fem-måneders praksisen bidro jeg i utviklingen av
        web-applikasjonen Dokker, som er produktet til Learning Moment. Jeg tok
        også et React kurs for å få den nødvendige kunnskapen jeg trengte. Jeg
        fikk bidratt med:
      </p>
      <ul>
        <li>Nye komponenter</li>
        <li>Refaktorering</li>
        <li>Vurdering av andres kode</li>
        <li>Litt bug-fixing</li>
      </ul>

      <h3>Komponentener jeg lagde</h3>
      <div uk-grid uk-lightbox="animation: slide">
        <Figure
          imgSrc={followupcardImg}
          imgAlt="FollowUpCard"
          caption="Et kort for keep-up-delen av dashboard"
        />
        <Figure
          imgSrc={newcardsImg}
          imgAlt="NewsCard"
          caption="Et kort for recent-atcivities-delen av dashboard"
        />
      </div>
      <h3>Litt om Dokker</h3>
      <p>
        Dokker kan minne om en fusjon av ItsLearning (eller Blackboard/Fronter)
        og vitnemålsportalen: I Dokker kan f.eks. lærere legge ut oppgaver, og
        elever kan levere inn besvarelser sammen med selvvurderinger. <br />
        Elevene får samlet opp dokumentasjon av egen kunnskap på Dokker, og den
        får de beholde tilgangen til livet ut. Man kan også legge ut vitnemål og
        sertifiseringer.
      </p>
      <p>
        Det er mer til Dokker enn det jeg beskrev over, og for videre lesing kan
        du sjekke ut disse sidene:
      </p>
      <h3>Mer om Dokker</h3>
      <ul>
        <li>
          <a href="https://www.dokker.com/nb">Dokker appen</a>
        </li>
        <li>
          <a href="https://www.dokker.com/nb/blog">Dokker blogg</a>
        </li>
        <li>
          <a href="https://learningmoment.tech/">Learning Moment</a>
        </li>
      </ul>
    </>
  );
}

export default Dokker;
