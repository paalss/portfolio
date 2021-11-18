import img from "../images/extraoptical/sider/front-page.png";

// import Figure from "../components/common/Figure";
import HtmlTag from "../components/common/HtmlTag";

function Extraoptical() {
  return (
    <>
      <img src={img} alt="img" />
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
        <span className="subtitle">2021 november–</span>
      </h2>
      <ul className="tools">
        Verktøy: <li>Magento2</li> <li>HTML</li> <li>CSS</li>{" "}
        <li>Screaming Frog</li>
      </ul>
      <p>
        Under dennne praksisen skulle jeg jobbe med nettsiden til Extra Optical.
        Det har for det meste gått i den norske versjonen, men har også gjort
        noe på den svenske også.
      </p>
      <p>
        Arbeidsflyten har stort sett vært at jeg åpner <i>magento admin</i>{" "}
        web-appen, Åpner en <i>page</i>, <i>block</i> eller meny, og fikser på
        HTML-koden som er der. Oftest oppretter jeg nye filer lokalt i VSHtmlTag og
        limer inn HTML-koden som var der fra før inn i den, for backup. Jeg gjør
        også endringene mine i VSHtmlTag, siden Magento ikke har noe{" "}
        <i>syntax-highlighting</i>.
      </p>
      <p>Litt oppsummering av det jeg har gjort:</p>
      <ul className="normal-list">
        <li>
          Fikset errors og kodeslurv. F.eks. tilfeller av:
          <ul>
            <li>
              <HtmlTag>/a</HtmlTag>-tags som manglet starting tag. Og{" "}
              <HtmlTag>strong</HtmlTag> tags som manglet ending tag
            </li>
            <li>
              <HtmlTag>h1</HtmlTag> og <HtmlTag>div</HtmlTag> som var{" "}
              <em>inni</em> en <HtmlTag>p</HtmlTag>
            </li>
          </ul>
        </li>
        <li>Rettet opp / fjernet broken links</li>
        <li>Legge til nye lenketekster</li>
        <li>Fikset ray-ban siden for mobilvisning</li>
        <li>Kopiert styling over flere nettsider</li>
        <li>
          Fikset litt typos. F.eks.:
          <ul>
            <li>
              <del>Ziggy Startdust</del>
              <ins>Ziggy Stardust</ins>
            </li>
            <li>
              <del>
                <HtmlTag>
                  p style="font-size:16px" class="woww fadeInUpw"
                  data-wow-duratio1="2s"
                </HtmlTag>
              </del>
              <ins>
                <HtmlTag>
                  p style="font-size:16px" class="wow fadeInUp"
                  data-wow-duration1="2s"
                </HtmlTag>
              </ins>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Ting jeg har reagert på i koden</h3>
      <p>Det var mye tull i koden som møtte meg da jeg startet, her er en liste over ting jeg har reagert på:</p>
      <ul className="normal-list">
        <li>
          Det er brukt <HtmlTag>strong</HtmlTag> (i forsøk) på å gjøre tekst{" "}
          <i>bold</i>
        </li>
        <li>
          CSS-en er helt <i>all over the place</i>. Mye <i>inline styling</i>,
          noe i egne <HtmlTag>style</HtmlTag>-er i dokumentet og i{" "}
          <HtmlTag>Head</HtmlTag>. Og så er det brukt et eksternt stilark. Jeg
          må tilstå at jeg selv har bidratt litt å skrive CSS flere steder -
          skulle helst ha hatt tilgang til det eksterne stilarket, men har blitt
          bedt om å sende koden til ukrainerne slik at de kan gjøre endringen på
          sin maskin.
        </li>
        <li>
          Noen sider hopper over <HtmlTag>h2</HtmlTag> i overskrift-strukturen
          sin.
        </li>
        <li>
          Ukonsistent bruk av heading-tags. Tekstkolonner side om side har hver
          sin heading, men en av dem er på et annet nivå enn resten
        </li>
        <li>
          Bruk av eldgammel tag: <HtmlTag>center</HtmlTag>
        </li>
        <li>Sjeldent innrykk i koden</li>
        <li>
          Noen ganger er det flere <HtmlTag>h1</HtmlTag> på én side, men som
          er stylet forskjellig.
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
          format må man copy-poaste koden til VSHtmlTag og se på det der
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
      </ul>
      {/* <div uk-lightbox="animation: slide" className="flex wrap">
        <Figure imgSrc={img} imgAlt="bilde1" caption="bilde1" />
        <Figure imgSrc={img} imgAlt="bilde2" caption="bilde2" />
      </div> */}
    </>
  );
}

export default Extraoptical;
