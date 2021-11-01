import dokkerlogo from "../images/dokker/dokkerlogo.png";
// import Figure from "../components/common/Figure";

function Dokker() {
  return (
    <>
      <img src={dokkerlogo} alt="Dokker logo" />
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
        pull requests.
      </p>

      <h3>Om Dokker</h3>
      <p>
        Dokker er et samhandlingsverktøy for brukere innenfor skole,
        tiltaksarbeid, integrering og bedrifter generelt. Den har funksjonalitet
        som man også ser igjen i verktøy som Blackboard, ItsLearning og
        lignende: Lærere kan legge ut oppgaver, elever kan levere inn arbeidet
        sitt. I tillegg kan Dokker ta vare på vitnemål og sertifisering. Ellers
        legges det vekt på at brukerne ikke skal miste tilgangen til egen
        dokumentasjon, selv om de slutter på skolen der de fikk den.
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
