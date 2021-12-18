import mobileImg1 from "../images/artistbooking/Android-Mobile–1.webp";
import mobileImg2 from "../images/artistbooking/Android-Mobile–2.webp";
import mobileImg3 from "../images/artistbooking/Android-Mobile–3.webp";
import mobileImg4 from "../images/artistbooking/Android-Mobile–4.webp";
import destopImg from "../images/artistbooking/Web-1280–4.webp";
// import screenshotImg from "../images/artistbooking/Screenshot_20191126-120019.webp";

import Figure from "../components/common/Figure";
import ToolList from "../components/common/ToolList";

function Artistbooking() {
  return (
    <>
      <h2>
        Prosjekt i studiene
        <span className="subtitle">2019 høst</span>
      </h2>
      <ToolList tools={["Adobe XD"]} toolsText={true} />

      <p>
        I faget "grafiske verktøy, prinsipper og metoder" skulle vi lage en
        klikkbar hi-fi prototype for en app. Appen skulle være musikkrelatert,
        så det endte opp med å bli en app for privatpersoner og musikkartister
        som kunne avtale spillejobber med hverandre. Jeg bestemte meg til å lage
        mobil- og desktop-visning av alle sidene.
      </p>
      <h3>Noen utvalgte bilder</h3>
      <div uk-lightbox="animation: slide" className="flex wrap">
        <Figure
          imgSrc={mobileImg1}
          imgWidth={360}
          imgHeight={646}
          imgAlt="Startside"
          caption="Startside"
        />
        <Figure
          imgSrc={mobileImg2}
          imgWidth={360}
          imgHeight={640}
          imgAlt="Søkefelt"
          caption="Søkefelt"
        />
        <Figure
          imgSrc={mobileImg3}
          imgWidth={360}
          imgHeight={864}
          imgAlt="Søkeresultater"
          caption="Søkeresultater"
        />
        <Figure
          imgSrc={mobileImg4}
          imgWidth={360}
          imgHeight={1027}
          imgAlt="Artistprofil"
          caption="Artistprofil"
        />
        <Figure
          imgSrc={destopImg}
          imgWidth={1280}
          imgHeight={848}
          imgAlt="En desktopside"
          caption="En desktopside"
        />
      </div>
    </>
  );
}

export default Artistbooking;
