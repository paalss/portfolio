import macleanImg from "../images/maclean/alistairmaclean-full.png";

function Maclean() {
  return (
    <>
      <img src={macleanImg} alt="maclean nettside" />
      <a
        className="link"
        href="https://paalss.github.io/Alistair-MacLean-portfolio-redesign/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ● Besøk siden
      </a>
      <a
        className="link"
        href="https://github.com/paalss/Alistair-MacLean-portfolio-redesign"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> Kildekode
      </a>
      <h2>
        Prosjekt på videregående, 2015
        <span className="subtitle">
          <ul className="tools">
            Verktøy: <br />
            <li>HTML</li> <li>CSS</li>
          </ul>
        </span>
      </h2>
      <p>
        I 2015 hadde jeg sett og vært skuffet over hvordan nettsiden til
        Alistair MacLean – en av mine favorittforfattere på den tiden – så ut.
        Jeg syntes ikke grensesnittet reflekterte forfatteren, som nesten
        utelukkende skrev bøker med mye action og spenning.
        <br />I anledning av et valgfritt prosjekt på videregående, valgte jeg
        derfor å redesigne denne siden som oppgave. Jeg holdt meg kun til
        UI-redesign, tekstinnholdet lot jeg for det meste være.
      </p>
      <p>
        Målet mitt med UI-redesignet var å lage en nettside som utstråler
        action og spenning og i tillegg være pen å se på.
      </p>
      <p>
        Jeg bygget nettsiden i HTML og CSS og bittelitt JavaScript. Logoen lagde
        jeg i Illustrator og header-bildet lagde jeg ved photoshoppe et bilde av
        eget modellfly på noen T-skjorter.
      </p>
    </>
  );
}

export default Maclean;
