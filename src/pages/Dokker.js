import dokkerInterface from "../images/dokker/dashboard/latest-document-assignment.png";
// import newcardImg from "../images/dokker/newscard/wip3-2021-06-30-at 08.58.07.png";
// import noElementsFoundImg from "../images/dokker/no-elements-found/empty-state-for-your-assignments.png";

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
        web-applikasjonen Dokker og tok et React kurs. Jeg fikk bidratt med nye
        komponenter, refaktorering, vurdering av andres kode og litt bug-fixing.
      </p>

      {/* <h3>Bidro med bl.a.:</h3>
      <Figure imgSrc={newcardImg} imgAlt="NewsCard" caption="Lagde et newscard som vises på dashboard" />
      <Figure
        imgSrc={noElementsFoundImg}
        imgAlt="NewsCard"
        caption="Refaktorerte dette til et gjenbrukbart komponent, slik at det kunne bli brukt andre steder"
      /> */}

      <h3>Litt om Dokker</h3>
      <blockquote cite="https://www.dokker.com/nb/blog/villiam-ovesen-ny-salgssjef-i-learning-moment">
        Dokker er et samhandlingsverktøy med over 10 000 brukere innenfor skole,
        tiltaksarbeid, integrering og bedrifter generelt.
      </blockquote>
      <p>
        Fra <a href="https://www.dokker.com/nb/blog">Dokker bloggen</a>.
      </p>
      <p>
        I Dokker kan f.eks. lærere legge ut oppgaver, og elever kan levere inn
        besvarelser sammen med selvvurderinger. Elevene får samlet opp
        dokumentasjon av egen kunnskap på Dokker, og den får de beholde
        tilgangen til livet ut.
      </p>
      <b>Videre lesing:</b>
      <ul>
        <li>
          <a href="https://www.dokker.com/nb">dokker.com</a>
        </li>
        <li>
          <a href="https://www.dokker.com/nb/blog">Dokker blogg</a>
        </li>
      </ul>
    </>
  );
}

export default Dokker;
