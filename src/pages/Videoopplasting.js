import videoOgTranskriptImg from "../images/www-teknologi/2-video-og-transkript.webp";
import videosideImg from "../images/www-teknologi/prosjekt2-5-videoside.webp";
import videolisteImg from "../images/www-teknologi/prosjekt2-7-videoliste.webp";
import videoopplastingImg from "../images/www-teknologi/prosjekt2-8-videoopplasting.webp";
import Figure from "../components/common/Figure";

function Videoopplasting() {
  return (
    <>
      <h2>
        To studie&shy;proskekter
        <span className="subtitle">2020 vår</span>
      </h2>
      <p>
        Våren 2020, i faget WWW-teknologi, hadde vi to prosjekter hvor vi skulle
        lage nettapplikasjoner for videoopplasting og -visning. Altså mye det
        samme som det f.eks. Youtube, Udemy og Edx.
      </p>
      <p>
        Begge nettappene skulle gi brukere mulighet til å blant annet: laste opp
        videoer, se på dem, legge til et interaktivt transkript ved siden av
        videoen, endre videodetaljene, legge dem til i spillelister, abonnere på
        spillelister.
      </p>
      <p>
        Det som skilte prosjektene, var verktøyene vi skulle bruke og noe av
        kravspesifikasjonen.
      </p>

      <h2>Første prosjekt</h2>
      <ul className="tools">
        Verktøy: <li>Twig</li> &shy;<li>PHP</li> &shy;<li>MySQL</li> &shy;
        <li>Relasjonsdatabase</li> &shy;<li>HTML</li> &shy;<li>Docker</li>
      </ul>

      <p>
        Jeg jobbet i en gruppe med to andre. Jeg arbeidet mest med
        videoopplasting, -redigering og -visning. I tillegg gjorde jeg det
        spilleliste relaterte. Teknisk sett innebar dette å jobbe med appens
        interaksjon med databasen, databasestrukturen og nedlasting av videoer
        til filsystemet. Jeg jobbet også litt med kommentarer.
      </p>
      <p>
        Appen ble lagd med PHP-filer og templating engine'en Twig for å rendre
        html-sidene.
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={videoOgTranskriptImg}
          imgWidth={1319}
          imgHeight={945}
          imgAlt="videosiden i første prosjekt"
          caption="Videoside i første prosjekt"
          group="videoopplasting1"
        />
      </div>
      <span className="link">
        <span className="fas fa-circle-notch"></span> Ikke tilgjengelig live
      </span>
      <span className="link">
        <span className="fab fa-github"></span> Privat kildekode
      </span>

      <h2>Andre prosjekt</h2>
      <ul className="tools">
        Verktøy: <li>LitElement</li> &shy;<li>JavaScript</li> &shy;<li>PHP</li> &shy;
        <li>MySQL</li> &shy;<li>Relasjonsdatabase</li> &shy;<li>HTML</li> &shy;<li>CSS</li> &shy;
        <li>Docker</li>
      </ul>

      <dl>
        <dt>LitElement</dt>
        <dd>
          Verktøy for å bygge komponent-baserte nettsider. LitElement skiller
          seg fra React ved at den bruker HTML som sitt templating språk (og
          ikke JSX) Ellers så har LitElement kun class-based components.
        </dd>
      </dl>

      <p>
        Kravspesifikasjonen var mye det samme som i prosjekt 1. Her skulle det
        også skilles mellom ulike brukertyper, som var <i>admin</i>,{" "}
        <i>lærer</i> og <i>studenter</i>, hver med ulike rettigheter:
      </p>
      <ul className="normal-list">
        <li>
          <b>studenter</b> skulle ha mulighet til å se på videoer, kommentere,
          lagre video i spillelister etc.
        </li>
        <li>
          <b>lærere</b> skulle ha studenters rettigheter pluss mulighet til å
          legge ut videoer
        </li>
        <li>
          <b>admin</b> skulle ha de samme rettighetene som alle andre, pluss
          mulighet til å endre å brukertypen til de andre brukerne. (Når folk
          skal registrere seg som lærer, må de opprette en studentbruker, og så
          sende forespørsel til admin om å få byttet brukertype)
        </li>
      </ul>

      <p>
        Nettappen skulle også være en Single page application, men dette fikk vi
        til bare delvis. (Hvis man klikker på en video i oversikten, tar siden
        en automatisk refresh. Man må også refreshe etter å ha lastet opp video
        eller gjort andre permanente endringer.)
      </p>
      <p>
        I dette prosjektet jobbet jeg med én annen. Det jeg hadde ansvar for,
        var å få til videoopplasting, -visning og -oversikt. Jeg lagde også
        mesteparten av brukerredigeringsfunksjonen for admin-brukere. Jeg drev
        også med litt CSS styling.
      </p>
      <p>
        Appen ble lagd med bruk av LitElement-baserte komponenter som vi for det
        meste lagde selv.
      </p>

      <div uk-lightbox="animation: slide">
        <Figure
          imgSrc={videosideImg}
          imgWidth={1920}
          imgHeight={1017}
          imgAlt="videosiden i andre prosjekt"
          caption="Videoside i andre prosjekt"
        />
        <Figure
          imgSrc={videolisteImg}
          imgWidth={1920}
          imgHeight={1018}
          imgAlt="videolistesiden"
          caption="Videooversikt"
        />
        <Figure
          imgSrc={videoopplastingImg}
          imgWidth={1917}
          imgHeight={866}
          imgAlt="videoopplastingssiden"
          caption="«Last opp video»-siden"
        />
      </div>
      <span className="link">
        <span className="fas fa-circle-notch"></span> Ikke tilgjengelig live
      </span>
      <span className="link">
        <span className="fab fa-github"></span> Privat kildekode
      </span>
    </>
  );
}

export default Videoopplasting;
