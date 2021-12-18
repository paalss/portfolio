import ToolList from "../components/common/ToolList";
import img from "../images/extraoptical/sider/front-page.webp";

// import Figure from "../components/common/Figure";
// import T from "../components/common/HtmlTag";

function Extraoptical() {
  return (
    <>
      <img src={img} width={1920} height={1044} alt="img" />
      <a
        className="link"
        href="https://extraoptical.no/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> Besøk siden
      </a>
      <span className="link">
        <span className="fab fa-github"></span> Privat Kildekode
      </span>
      <h2>
        Praksis hos Extra Optical
        <span className="subtitle">2021 november–nå</span>
      </h2>
      <ToolList tools={["Magento2", "PHTML", "CSS"]} toolsText={true} />
      <dl>
        <dt>PHTML</dt>
        <dd>
          Et HTML templating språk (HTML som aksepterer variabler og
          expressions) i likhet med Twig og Handlebars.
        </dd>
      </dl>
      <p>
        I dennne praksisen jobbet jeg med nettbutikken Extra Optical. Det har
        for det meste gått i den norske versjonen, men har også gjort noe på de
        andre språkene.
      </p>
      {/* <p>
        Arbeidsflyten har stort sett vært at jeg logger inn i <i>magento admin</i> &shy;
        web-appen, åpner en <i>page</i>, <i>block</i> eller meny, og fikser på
        HTML-koden som er der. Oftest oppretter jeg nye filer lokalt i VSCode og
        limer inn HTML-koden som var der fra før inn i den, for backup. Jeg gjør
        også endringene mine i VSCode, siden Magento ikke har noe{" "}
        <i>syntax-highlighting</i> eller innrykk i koden.
      </p> */}
      <p>Litt oppsummering av det jeg har gjort til nå:</p>
      <ul className="normal-list">
        <li>
          Fikset errors og kodeslurv i HTML
          {/* <ul>
            <li>
              <T>/a</T>-tags som manglet starting tag. Og{" "}
              <T>strong</T> tags som manglet ending tag. Slike
              "manglende matching pair" feil var det mye av
            </li>
            <li>
              <T>h1</T> og <T>div</T> som var{" "}
              <em>inni</em> en <T>p</T>. Dette gjør at nettlesren
              automatisk rendrer en <T>/p</T> rett før{" "}
              <T>h1</T>-tagen starter, og den <T>/p</T>
              -taggen som man selv har plassert i koden, blir én for mye.
            </li>
            <li>
              ukonsistent bruk av heading-tags brukt over tre tekstkolonner side
              om side
            </li>
            <li>
              Kunne også se koden: <code><T>p</T><T>h3</T><T>strong</T><T>/strong</T>
              <T>/h3</T><T>/p</T></code></li> et sted
          </ul> */}
        </li>
        <li>
          Rettet opp / fjernet <i>broken links</i>
        </li>
        {/* <li>Lagt til nye lenketekster</li> */}
        <li>
          Fikset{" "}
          <a
            href="https://extraoptical.no/ray-ban"
            target="_blank"
            rel="noopener noreferrer"
          >
            ray-ban-siden
          </a>{" "}
          for mobilvisning
        </li>
        <li>Lagd undersider ut fra tilsendte bilder og tekst</li>
        <li>Fikset på Extra Opticals Zendesk Help center</li>
        <li>
          Fikset layout
          {/* <ul>
            <li>Kopiert styling over flere undersider</li>
            <li>
              fjernet unødvendig bruk av flere <T>h1</T> pr sidedokumentet
            </li>
          </ul> */}
        </li>
        <li>Fikset litt typos</li>
        {/* <li>
          Rettet opp i ting som ikke gir helt mening{" "}
          <ul>
            <li>
              f.eks. en del sider har en <T>h1</T> og en <T>h3</T>, men unngår å
              bruke <T>h2</T>.
            </li>
          </ul>
        </li> */}
        <li>Bygd noen sider på den nye nettsiden (en Progressive Web App)</li>
      </ul>
      . . .
      {/*
      <h3>Ting jeg har reagert på i koden</h3>
      <p>
        Det var mye tull i koden som møtte meg da jeg startet, her er en liste
        over ting jeg har reagert på:
      </p>
      <ul className="normal-list">
        <li>
          CSS-en er helt <i>all over the place</i>. Mye <i>inline styling</i>,
          noe i egne <T>style</T>-tags sidedokumentet og i{" "}
          <T>Head</T>. Og så er det brukt et eksternt stilark.{" "}
          <br /> Jeg må tilstå at jeg selv har bidratt litt å skrive CSS flere
          steder - skulle helst ha hatt tilgang til det eksterne stilarket, men
          har blitt bedt om å sende koden til ukrainerne slik at de kan gjøre
          endringen på sin maskin.
        </li>
        <li>Koden har sjelden noe form for innrykk</li>
        <li>
          Noen sider hopper over <T>h2</T> i overskrift-strukturen
          sin.
        </li>
        <li>
          Bruk av eldgammel tag: <T>center</T>
        </li>
        <li>
          Noen ganger er det flere <T>h1</T> på én side, men som er
          stylet forskjellig.
        </li>
        <li>
          Det er brukt <T>strong</T> (i forsøk) på å gjøre tekst{" "}
          <i>bold</i>
        </li>
      </ul>
      <h3>Ulemper ved å jobbe med magento</h3>
      <ul className="normal-list">
        <li>
          Upraktisk å previewe endringene i nettleser. Enten lagrer man koden
          direkte i live eller så må man åpne tilsvarende block/page/meny i en
          egen dev-server
        </li>
        <li>
          Magento har ikke syntax-highlighting, så for å se på koden i leselig
          format må man copy-poaste koden til VST og se på det der
        </li>
        <li>
          man må bruke "flush cache"-funksjonen ofte for at menyer og andre ting
          skal oppdateres live
        </li>
        <li>
          Det hender koden som magento forteller at siden har, egentlig ikke
          samsvarer helt med den den har. F.eks. hvis noen andre er inne på
          samme block/page/meny så har det hent at koden den viser brukken
        </li>
        <li>
          Det er forsøkt å kommentere ut CSS kode... med HTML-kommentar(!!!)
        </li>
      </ul>
      */}
      {/* <div uk-lightbox="animation: slide" className="flex wrap">
        <Figure imgSrc={img} imgAlt="bilde1" caption="bilde1" />
        <Figure imgSrc={img} imgAlt="bilde2" caption="bilde2" />
      </div> */}
    </>
  );
}

export default Extraoptical;
