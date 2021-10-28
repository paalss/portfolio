import mobileImg1 from "../images/artistbooking/Android-Mobile–1.png";
import mobileImg6 from "../images/artistbooking/Android-Mobile–6.png";
import destopImg from "../images/artistbooking/Web-1280–4.png";
// import screenshotImg from "../images/artistbooking/Screenshot_20191126-120019.png";

import Figure from "../components/common/Figure";

function Artistbooking() {
  return (
    <>
      <h2>
        Prosjekt i studiene, høsten 2019
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li>Adobe XD</li>
          </ul>
        </span>
      </h2>
      <p>
        I faget grafiske verktøy, prinsipper og metoder skulle vi lage en
        klikkbar hi-fi prototype for en app. Appen skulle løse noe
        musikkrelatert, så det endte opp med å bli en app for privatpersoner og
        musikkartister som kunne avtale spillejobber med hverandre. Jeg
        forholdte meg til å lage mobil- og desktop-visning av alle sidene
      </p>
      <h2>Noen utvalgte bilder</h2>
      <div uk-grid uk-lightbox="animation: slide">
        <Figure
          imgSrc={mobileImg1}
          imgAlt="Artist booking app grensesnitt"
          caption="Artist booking app grensesnitt"
        />
        <Figure
          imgSrc={destopImg}
          imgAlt="Prototype i nettleser"
          caption="Prototype i nettleser"
        />
      </div>
    </>
  );
}

export default Artistbooking;
