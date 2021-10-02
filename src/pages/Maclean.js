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
        I 2015 hadde jeg et valgfritt prosjekt på videregående hvor jeg valgte å
        redesigne <i>alistairmaclean.com</i> sitt GUI. Grunnen var at jeg
        tidligere hadde jeg sett og vært skuffet over hvordan den så ut. MacLean
        skrev nesten utelukkende bøker med action og spenning, og det syntes jeg
        ikke nettsiden reflekterte noe av.
      </p>
      <p>
        Nå er jo det denne nettsiden egentlig bare en blogg, og ikke en
        «offisiell» nettside, som jeg har vurdert den etter. Så man kan jo
        spørre seg om det var riktig av meg å være såpass kritisk og mene at
        nettsiden skal representere forfatteren. Jeg mener å huske at nettsiden
        brukte å kalle seg selv for den offisielle nettsiden til MacLean, men
        det er mulig jeg husker feil.
      </p>

      <h3>Verktøy</h3>
      <p>
        Jeg bygget nettsiden i HTML og CSS og bittelitt JavaScript. Logoen lagde
        jeg i Illustrator og header-bildet lagde jeg ved photoshoppe et bilde av
        eget modellfly på noen T-skjorter.
      </p>
    </>
  );
}

export default Maclean;
