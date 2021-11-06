import dokkerlogo from "../images/dokker/dokkerlogo.png";
// import Figure from "../components/common/Figure";

function Dokker() {
  return (
    <>
      <img src={dokkerlogo} alt="Dokker logo" />
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
        web-applikasjonen Dokker. Jeg tok også et nettkurs i React for å få den
        nødvendige kompetansen jeg trengte.
      </p>

      <h3>Mitt bidrag</h3>
      <p>
        Her bidro jeg med nye komponenter, refaktorering og vurdering av andres
        pull requests. Jeg fikset også noen bugs. Jeg (forsøkte) også å lage noen automatiske tester.
      </p>
      <h4>Egne komponenter</h4>
      <ul>
        <li>FollowUpCard</li>
        <li>NewsCard</li>
        <li>NoElementsFound</li>
      </ul>
      <h4>Fikset bugs</h4>
      <h4>Auto-tester med Jest</h4>
      <p>
        Dette ble litt mislykket, siden jeg kom bare så langt som å lage tester
        for om enkelte elementer fantes på siden. Og da vi oppdaterte
        dependencies i prosjektet, så sluttet selv disse testene å funke. Jeg
        kom fram til at man burde mocke resultatet av en hook, men der kom jeg
        ikke lenger.
      </p>

      <h3>Om Dokker</h3>
      <p>
        Dokker er et samhandlingsverktøy for brukere innenfor skole,
        tiltaksarbeid, integrering og bedrifter generelt. Den har funksjonalitet
        som man også ser igjen i verktøy ItsLearning og lignende: Lærere kan
        legge ut oppgaver, elever kan levere inn arbeidet sitt. I tillegg kan
        Dokker ta vare på vitnemål og sertifisering. Ellers skal brukerne beholde tilgangen til egen dokumentasjon, selv om
        de ikke lenger går på stedet de fikk den.
      </p>
      <b>Mer info:</b>
      <ul>
        <li>
          <a href="https://www.dokker.com/nb">https://www.dokker.com/nb</a>
        </li>
        <li>
          <a href="https://www.dokker.com/nb/blog">
            https://www.dokker.com/nb/blog
          </a>
        </li>
      </ul>
    </>
  );
}

export default Dokker;
