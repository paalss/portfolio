import ToolList from "../components/common/ToolList";
import macleanImg from "../images/maclean/alistairmaclean-full.webp";

function Maclean() {
  return (
    <>
      <img src={macleanImg} width={837} height={556} alt="maclean nettside" />
      <a
        className="link"
        href="https://paalss.github.io/Alistair-MacLean-portfolio-redesign/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> Besøk siden
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
        Innlevering på videregående
        <span className="subtitle">2015</span>
      </h2>
      <ToolList
        tools={["HTML", "CSS", "Photoshop", "Illustrator"]}
        toolsText={true}
      />

      <p>
        I 2015 hadde jeg et valgfritt prosjekt på videregående hvor jeg valgte å
        redesigne <i>alistairmaclean.com</i> sitt GUI. Grunnen var at jeg
        tidligere hadde jeg sett og vært skuffet over hvordan den så ut. MacLean
        skrev nesten utelukkende bøker med action og spenning, og det syntes jeg
        ikke nettsiden reflekterte noe av.
      </p>

      <h3>Verktøy</h3>
      <p>
        Jeg bygget nettsiden i HTML og CSS og bittelitt JavaScript (ikke så mye
        å skryte av). Logoen lagde jeg i Illustrator og header-bildet lagde jeg
        ved photoshoppe et bilde av eget modellfly oppå noen T-skjorter.
      </p>
    </>
  );
}

export default Maclean;
