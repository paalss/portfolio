import rankingappImg from "../images/rankingapp/app-recording1.gif";

function Rankingapp() {
  return (
    <>
      <img src={rankingappImg} alt="ranking app interface" />
      <a
        className="link"
        href="https://github.com/paalss/Ranking-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> Kildekode
      </a>
      <h2>
        Ranking app, høsten 2020–
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li>JavaScript</li> <li>TypeScript</li> <li>PHP</li> <li>MySQL</li>{" "}
            <li>Relasjonsdatabase&nbsp;(MariaDB)</li> <li>HTML</li> <li>CSS</li>{" "}
            <li>Docker</li> <li>Jest</li>{" "}
          </ul>
        </span>
      </h2>
      <p>
        I slutten av juli 2020 begynte jeg å lage denne webappen for å rangere
        ting, hvor poenggivingen er en sortering fra best til dårligst. Jeg vet
        ikke hvor mye jeg vil klare å legge til denne webappen, men det hadde
        vært gøy om brukerne kunne dele/vise listen sin med andre brukere, bidra
        på felles lister og importere listelementer direkte fra andre databaser
        (med web API).
      </p>
      <h3>
        Motivasjon til prosjektet
        <span className="subtitle">
          Kort sagt: Jeg ville prøve å lage det ranker.com burde ha vært. Og for
          å ha et kodeprosjekt å drive på med.
        </span>
      </h3>
      <p>
        Ranker.com er en nettapp som hadde mye av den samme funksjonaliteten som
        jeg nevnte over. Jeg likte det, og det var derfor skuffende da
        ranker.com plutselig på et tidspunkt bestemte seg for å skrote konseptet
        sitt. (De byttet ut å ordne lister mot å kun velge én favoritt per
        kategori.) Nettsidedesignet syntes jeg allerede ikke var særlig pent.
        Det var dette, samt behovet mitt for å holde på med noe koding etter å
        ha blitt ferdig med studiene, som fikk meg til å begynne dette
        prosjektet.
      </p>
      <p>
        Det skal nevnes at ranker.com i ettertid har ombestemt seg og gått
        tilbake til sitt originale konsept igjen. Men nettsiden er fortsatt et
        stort rot.
      </p>
      <p>
        Uansett, jeg hadde jo blitt bedre på programmering i JavaScript, så det
        i seg selv er jo motivasjon nok til å fortsette med det.
      </p>
      <p>Nettappen er foreløpig work in progress.</p>
    </>
  );
}

export default Rankingapp;
