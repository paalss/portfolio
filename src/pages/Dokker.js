// import dokkerlogo from "../images/dokker/dokkerlogo.png";
import dokkerInterface from "../images/dokker/dashboard/latest-document-assignment.png";
// import Figure from "../components/common/Figure";

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
        Praksisprosjekt hos Learning Moment Technologies, april–september 2021
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
      <h3>Litt om Dokker</h3>
      <p>
        Fra <a href="https://www.dokker.com/nb/blog">bloggen deres</a> :
      </p>
      <blockquote cite="https://www.dokker.com/nb/blog/villiam-ovesen-ny-salgssjef-i-learning-moment">
        Dokker er et samhandlingsverktøy med over 10 000 brukere innenfor skole,
        tiltaksarbeid, integrering og bedrifter generelt. <br /> [...] <br />{" "}
        Med Dokker tar man brukermedvirkning til et nytt nivå, og gir alle
        parter i tiltaksarbeid en plattform for samhandling, utvikling og
        dokumentasjon.
      </blockquote>
      {/* <p>
        Den har mye av funksjonaliteten som man finner i systemer som
        ItsLearning og vitnemålsportalen: lage oppgaver og levere inn
        besvarelser og laste opp sertifiseringer. I tillegg beholder brukerne
        tilgangen på dokumentasjonen på egen kunnskap livet ut.
      </p> */}
      <b>Mer info:</b>
      <ul>
        <li>
          <a href="https://www.dokker.com/nb">dokker.com</a>
        </li>
      </ul>
      <h3>Mitt bidrag</h3>
      <p>
        Jeg bidro med: med nye komponenter, refaktorering og vurdering av
        pull requests. Jeg fikset også noen bugs.
      </p>
    </>
  );
}

export default Dokker;
