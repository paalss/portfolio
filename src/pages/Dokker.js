import dokkerInterface from "../images/dokker/dashboard/latest-document-assignment.png";
import followupcardImg from "../images/dokker/follow-up-card/followupcard.png";
import newcardsImg from "../images/dokker/news-card/newscards.png";
// import newcardImg from "../images/dokker/news-card/wip3-2021-06-30-at-08.58.07.png";
// import noelementsfoundImg from "../images/dokker/no-elements-found/empty-state-for-your-assignments.png";

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
        <span className="fas fa-circle-notch"></span> Besøk siden
      </a>
      <span className="link">
        <span className="fab fa-github"></span> Privat kildekode
      </span>
      <h2>
        Praksisprosjekt hos Learning Moment
        <span className="subtitle">2021 april–september</span>
      </h2>
      <ul className="tools">
        Verktøy: <li>React</li> <li>TypeScript</li> <li>JSX</li> <li>CSS</li>
      </ul>
      <p>
        Under denne fem-måneders praksisen bidro jeg i utviklingen av
        web-applikasjonen Dokker, produktet til Learning Moment. Jeg tok også et
        React kurs for å få den nødvendige kunnskapen jeg trengte. Jeg fikk
        bidratt med:
      </p>
      <ul>
        <li>Nye komponenter</li>
        <li>Refaktorering</li>
        <li>Vurdering av andres kode</li>
        <li>Litt bug-fixing</li>
      </ul>
      <p>Under denne perioden lærte jeg:</p>
      <ul>
        <li>React og relaterte verktøy</li>
        <li>
          Samarbeid på prosjekt med bruk av <i>issues</i> og{" "}
          <i>pull requests</i>
        </li>
      </ul>
      <h3>Komponentener jeg lagde</h3>
      <div uk-lightbox="animation: slide">
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
        {/* <Figure
          imgSrc={noelementsfoundImg}
          imgAlt="NoElementsFound"
          caption="Et ikon og melding som allerede fantes direkte i andre komponenter, men som jeg fikk pakke inn i et eget komponent. Her er komponentet brukt på assignments-listen"
        /> */}
      </div>
      <h3>Litt om Dokker</h3>
      <p>
        Dokker kan minne om en fusjon av ItsLearning (eller Blackboard/Fronter)
        og vitnemålsportalen: I Dokker kan f.eks. lærere legge ut oppgaver, og
        elever kan levere inn besvarelser og selvvurderinger. <br />
        Elevene får samlet opp dokumentasjon av egen kunnskap på Dokker, og den
        får de beholde tilgangen til livet ut. De kan også legge ut vitnemål og
        sertifikater.
      </p>
      {/*
      <p>
        Dokker er en kommunikasjonsportal mellom f.eks. lærere og elever, hvor
        lærere kan legge ut forelesninger og oppgaver mens elever kan gi
        leveranser og selvvurderinger.
      </p>
      */}
      <h3>Videre lesing</h3>
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