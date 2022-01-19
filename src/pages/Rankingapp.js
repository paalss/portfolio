import rankingappGif from "../images/rankingapp/app-recording1.gif";
import overviewImg from "../images/rankingapp/overview.webp";
import topNovelsImg from "../images/rankingapp/top-novels2.webp";
import bestMetroidvaniasImg from "../images/rankingapp/best-metroidvanias.webp";
import Figure from "../components/common/Figure";
import ToolList from "../components/common/ToolList";

// react lingui
import { Trans, t } from "@lingui/macro";

const Rankingapp = () => (
  <>
    <img
      src={rankingappGif}
      width={1296}
      height={616}
      alt="Ranking app interface"
    />
    <span className="link">
      <span className="fas fa-circle-notch"></span>
      <Trans>Ikke tilgjengelig live</Trans>
    </span>
    <a
      className="link"
      href="https://github.com/paalss/Ranking-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="fab fa-github"></span>
      <Trans>Kildekode</Trans>
    </a>
    <h2>
      <Trans>
        Ranking app
        <span className="subtitle">2020 høst–2021 september</span>
      </Trans>
    </h2>
    <ToolList
      tools={[
        "JavaScript",
        "TypeScript",
        "Jest",
        "PHP",
        "MySQL",
        t`Relasjonsdatabase`,
        "HTML",
        "CSS",
        "Docker",
      ]}
      toolsText={true}
    />
    <Trans>
      Prosjektet er foreløpig satt på pause.
      <p>
        I slutten av juli 2020 begynte jeg å lage denne webappen for å rangere
        ting, hvor poenggivingen er en sortering fra best til dårligst. Jeg vet
        ikke hvor mye jeg vil klare å legge til denne webappen, men det hadde
        vært gøy om brukerne kunne dele/vise listen sin med andre brukere, bidra
        på felles lister og importere listelementer direkte fra andre databaser
        (med web API).
      </p>
      <h3>Motivasjon til prosjektet</h3>
      Kort sagt: Jeg ville prøve å lage det ranker.com burde ha vært. Og for å
      ha et kodeprosjekt å drive på med.
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
    </Trans>
    <div uk-lightbox="animation: slide">
      <Figure
        imgSrc={overviewImg}
        imgWidth={493}
        imgHeight={401}
        imgAlt={t`Oversikt over lister eksempel`}
        caption={t`Lag egne lister`}
      />
      <Figure
        imgSrc={bestMetroidvaniasImg}
        imgWidth={906}
        imgHeight={604}
        imgAlt={t`Beste metroidvanias listeeksempel`}
        caption={t`Sett inn egne elementer, tilpass etter behov`}
      />
      <Figure
        imgSrc={topNovelsImg}
        imgWidth={964}
        imgHeight={763}
        imgAlt={t`Beste bøker listeeksempel`}
        caption={t`Få pene og oversiktlige lister`}
      />
    </div>
  </>
);

export default Rankingapp;
