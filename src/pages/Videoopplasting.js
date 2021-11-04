import videoOgTranskriptImg from "../images/www-teknologi/2-video-og-transkript.png";
import videosideImg from "../images/www-teknologi/prosjekt2-5-videoside.png";
import videolisteImg from "../images/www-teknologi/prosjekt2-7-videoliste.png";
import videoopplastingImg from "../images/www-teknologi/prosjekt2-8-videoopplasting.png";
import Figure from "../components/common/Figure";

function Videoopplasting() {
  return (
    <>
      <h2>To studie&shy;proskekter, våren 2020</h2>
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
      <div uk-grid uk-lightbox="animation: slide">
        <Figure
          imgSrc={videoOgTranskriptImg}
          imgAlt="videosiden i første prosjekt"
          caption="Videoside i første prosjekt"
          group="videoopplasting1"
        />
      </div>
      <span className="link">
        <i class="fas fa-circle-notch"></i> Ikke tilgjengelig live
      </span>
      <span className="link">
        <i class="fab fa-github"></i> Ikke tilgjengelig kildekode
      </span>
      <span className="subtitle">
        <ul className="tools">
          Verktøy: <br />
          <li>Templating engine (Twig)</li> <li>PHP</li> <li>MySQL</li>{" "}
          <li>Relasjonsdatabase</li> <li>HTML</li> <li>Docker</li>{" "}
        </ul>
      </span>

      <div>
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
      </div>

      <h2>Andre prosjekt</h2>
      <div uk-grid uk-lightbox="animation: slide">
        <Figure
          imgSrc={videosideImg}
          imgAlt="videosiden i andre prosjekt"
          caption="Videoside i andre prosjekt"
        />
        <Figure
          imgSrc={videolisteImg}
          imgAlt="videolistesiden"
          caption="Videooversikt"
        />
        <Figure
          imgSrc={videoopplastingImg}
          imgAlt="videoopplastingssiden"
          caption="«Last opp video»-siden"
        />
      </div>
      <span className="link">
        <i class="fas fa-circle-notch"></i> Ikke tilgjengelig live
      </span>
      <span className="link">
        <i class="fab fa-github"></i> Ikke tilgjengelig kildekode
      </span>
      <span className="subtitle">
        <ul className="tools">
          Verktøy: <br />
          <li>JavaScript</li> <li>LitElement</li> <li>PHP</li> <li>MySQL</li>{" "}
          <li>Relasjonsdatabase</li> <li>HTML</li> <li>CSS</li> <li>Docker</li>{" "}
        </ul>
      </span>

      <div>
        <p>
          Kravspesifikasjonen var mye det samme som i prosjekt 1. Her skulle det
          også skilles mellom ulike brukertyper, som var <i>admin</i>,{" "}
          <i>lærer</i> og <i>studenter</i>, hver med ulike rettigheter:
        </p>
        {/* className="normal-list" kan fjernes hvis du går over til component-scoped CSS */}
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
            skal registrere seg som lærer, må de opprette en studentbruker, og
            så sende forespørsel til admin om å få byttet brukertype)
          </li>
        </ul>

        <p>
          Nettappen skulle også være en Single page application, men dette fikk
          vi til bare delvis. (Hvis man klikker på en video i oversikten, tar
          siden en automatisk refresh. Man må også refreshe etter å ha lastet
          opp video eller gjort andre permanente endringer.)
        </p>
        <p>
          I dette prosjektet jobbet jeg med én annen. Det jeg hadde ansvar for,
          var å få til videoopplasting, -visning og -oversikt. Jeg lagde også
          mesteparten av brukerredigeringsfunksjonen for admin-brukere. Jeg drev
          også med litt CSS styling.
        </p>
        <p>
          Appen ble lagd med bruk av LitElement-baserte komponenter som vi for
          det meste lagde selv.
        </p>
      </div>
    </>
  );
}

export default Videoopplasting;
