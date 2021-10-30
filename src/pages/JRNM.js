import JRNMImg from "../images/jr-nm-ski/IMG_2413.JPG";
import JRNMImg2 from "../images/jr-nm-ski/JrNM-logo-web.jpg";
import JRNMImg3 from "../images/jr-nm-ski/velkommen-til-Jr-NM-Jervskogen.jpg";

import Figure from "../components/common/Figure";

function JRNM() {
  return (
    <>
      <img src={JRNMImg} alt="Artist booking app grensesnitt" />
      <h2>
        Praksisplass
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li>Photoshop</li>
          </ul>
        </span>
      </h2>
      <p>
        I 2013 hadde jeg en-ukes praksis hos Orega på Lade i Trondheim. Dette
        var mens jeg gikk interiør og utstillingsdesign på VGS. Der fikk jeg
        være med på å designe logo for Junior NM på Ski 2015. Det var
        kjempekult!
      </p>
      <p>
        Leveransen min på slutten av uka ble bokstavene «NM» slik som de er i
        den ferdige logoen, pluss en grå tekst under hvor det sto «Jr NM på ski
        2015».
      </p>
      <p>
        Jeg brukte Photoshop fordi jeg ikke kunne Illustrator eller visste
        hvorfor det var et ideelt verktøy på den tiden. Det har ergret meg i
        ettertid: når man bytter farge med fill-bucket på pikselgrafikk, vil
        ikke alle piksler følge med alltid, så man ender opp noen ganger med
        pikselrester fra andre fargeversjoner. <br />
        Jeg lagde en profilmanual til logoen som viste forskjellige versjoner og
        bakgrunner logoen kunne være på, og man kan tydelig se at man kan se
        rester etter tidligere farger.
      </p>
      <p>
        I den ferdige logoen som ble brukt i arrangementet hadde den grå teksten
        heldigvis blitt byttet ut med en blå tekst, som ser mye bedre ut.
        Mistenker også at de har vektorisert den, siden logoen så mye renere ut
        da jeg så at den på arrangementet.
      </p>
      <div uk-grid uk-lightbox="animation: slide">
        <Figure
          imgSrc={JRNMImg2}
          imgAlt="Logo for Junior NM på ski 2015"
          caption="Logo som ble brukt. Den er bearbeidet etter jeg leverte den i 2013"
        />
        <Figure
          imgSrc={JRNMImg3}
          imgAlt="plakat med logo"
          caption="Plakat"
        />
      </div>
    </>
  );
}

export default JRNM;
