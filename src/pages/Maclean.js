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
        I 2015, andre eller tredjeåret på videregående, fikk vi et valgfritt
        prosjekt. Jeg hadde allerede vært skuffet over hvordan nettsiden til en
        av mine favorittforfattere så ut, og jeg bestemte meg da for at
        prosjektet mitt skulle være å redesigne den. For meg var det viktig at
        nettsiden skulle utstråle spenning og i tillegg være pen å se på.
      </p>
      <p>
        Jeg bygget nettsiden i HTML og CSS og bittelitt JavaScript. Logoen lagde
        jeg i Illustrator og header-bildet lagde jeg ved photoshoppe et bilde av
        eget modellfly oppnå noen T-skjorter.
      </p>
    </>
  );
}

export default Maclean;
