import dokkerInterface from "../images/dokker/dashboard/latest-document-assignment.webp";
import followupcardImg from "../images/dokker/follow-up-card/followupcard.webp";
import newcardsImg from "../images/dokker/news-card/newscards.webp";
// import newcardImg from "../images/dokker/news-card/wip3-2021-06-30-at-08.58.07.webp";
// import noelementsfoundImg from "../images/dokker/no-elements-found/empty-state-for-your-assignments.webp";

// components
import Figure from "../components/common/Figure";
import ToolList from "../components/common/ToolList";

// react lingui
import { Trans, t } from "@lingui/macro";
import { i18n } from "@lingui/core";


function Dokker({ externalLinks, technologies }) {
  return (
    <>
      <img src={dokkerInterface} width={2880} height={1534} alt="Dokker logo" />
      <a
        className="link"
        href="https://www.dokker.com/nb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> {i18n._(externalLinks.besoksiden.id)}
      </a>
      <span className="link">
        <span className="fab fa-github"></span> Privat kildekode
      </span>
      <h2>
        <Trans>Praksisprosjekt hos Learning Moment Technologies</Trans>
        <span className="subtitle">
          <Trans>2021 april–september</Trans>
        </span>
      </h2>
      <ToolList
        tools={["React", "TypeScript", "JSX", "CSS"]}
        toolsText={true}
      />

      <Trans>
        <p>
          Under denne fem-måneders praksisen bidro jeg i utviklingen av
          web-applikasjonen Dokker, produktet til Learning Moment. Jeg tok også
          et React kurs for å få den nødvendige kunnskapen jeg trengte. Jeg fikk
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
      </Trans>
      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={followupcardImg}
          imgWidth={694}
          imgHeight={159}
          imgAlt="FollowUpCard"
          caption={t`Et kort for keep-up-delen av dashboard`}
        />
        <Figure
          imgSrc={newcardsImg}
          imgWidth={693}
          imgHeight={525}
          imgAlt="NewsCard"
          caption={t`Et kort for recent-activities-delen av dashboard`}
        />
      </div>
      <Trans>
        <h3>Litt om Dokker</h3>
        <p>
          Dokker kan minne om en fusjon av ItsLearning (eller
          Blackboard/Fronter) og vitnemålsportalen: I Dokker kan f.eks. lærere
          legge ut oppgaver, og elever kan levere inn besvarelser og
          selvvurderinger. <br />
          Elevene får samlet opp dokumentasjon av egen kunnskap på Dokker, og
          den får de beholde tilgangen til livet ut. De kan også legge ut
          vitnemål og sertifikater.
        </p>
      </Trans>
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
