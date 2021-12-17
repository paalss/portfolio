import mobileImg1 from "../images/artistbooking/Android-Mobile–1.webp";
import mobileImg2 from "../images/artistbooking/Android-Mobile–2.webp";
import mobileImg3 from "../images/artistbooking/Android-Mobile–3.webp";
import mobileImg4 from "../images/artistbooking/Android-Mobile–4.webp";
import destopImg from "../images/artistbooking/Web-1280–4.webp";
// import screenshotImg from "../images/artistbooking/Screenshot_20191126-120019.webp";

import Figure from "../components/common/Figure";

function Artistbooking() {
  return (
    <>
      <h2>
        Prosjekt i studiene
        <span className="subtitle">2019 høst</span>
      </h2>
      <ul className="tools">
        Verktøy: <li>Adobe XD</li>
      </ul>
      <p>
        I faget "grafiske verktøy, prinsipper og metoder" skulle vi lage en
        klikkbar hi-fi prototype for en app. Appen skulle være musikkrelatert,
        så det endte opp med å bli en app for privatpersoner og musikkartister
        som kunne avtale spillejobber med hverandre. Jeg bestemte meg til å lage
        mobil- og desktop-visning av alle sidene.
      </p>
      <h3>Noen utvalgte bilder</h3>
      <div uk-lightbox="animation: slide" className="flex wrap">
        <Figure imgSrc={mobileImg1} imgAlt="Startside" caption="Startside" />
        <Figure imgSrc={mobileImg2} imgAlt="Søkefelt" caption="Søkefelt" />
        <Figure
          imgSrc={mobileImg3}
          imgAlt="Søkeresultater"
          caption="Søkeresultater"
        />
        <Figure
          imgSrc={mobileImg4}
          imgAlt="Artistprofil"
          caption="Artistprofil"
        />
        <Figure
          imgSrc={destopImg}
          imgAlt="En desktopside"
          caption="En desktopside"
        />
      </div>
    </>
  );
}

export default Artistbooking;
