// images
import mobileImg1 from "../../images/graphicwork/artistbooking/Android-Mobile–1.webp";
import mobileImg2 from "../../images/graphicwork/artistbooking/Android-Mobile–2.webp";
import mobileImg3 from "../../images/graphicwork/artistbooking/Android-Mobile–3.webp";
import mobileImg4 from "../../images/graphicwork/artistbooking/Android-Mobile–4.webp";
import destopImg from "../../images/graphicwork/artistbooking/Web-1280–4.webp";
// import screenshotImg from "../../images/graphicwork/artistbooking/Screenshot_20191126-120019.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";

const Artistbooking = () => (
  <>
    <WorkHeading
      heading="Artistbooking prototype"
      timespan={t`2019 høst`}
      tools={["Adobe XD"]}
    />

    <p>
      <Trans>
        I faget “grafiske verktøy, prinsipper og metoder” skulle vi lage en
        klikkbar hi-fi prototype for en app. Appen skulle være musikkrelatert,
        så det endte opp med å bli en app for privatpersoner og musikkartister
        som kunne avtale spillejobber med hverandre. Jeg bestemte meg til å lage
        mobil- og desktop-visning av alle sidene.
      </Trans>
    </p>
    <h3>Noen utvalgte bilder</h3>
    <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={mobileImg1}
        imgWidth={360}
        imgHeight={646}
        imgAlt={t`Startside`}
        caption={t`Startside`}
      />
      <Figure
        imgSrc={mobileImg2}
        imgWidth={360}
        imgHeight={640}
        imgAlt={t`Søkefelt`}
        caption={t`Søkefelt`}
      />
      <Figure
        imgSrc={mobileImg3}
        imgWidth={360}
        imgHeight={864}
        imgAlt={t`Søkeresultater`}
        caption={t`Søkeresultater`}
      />
      <Figure
        imgSrc={mobileImg4}
        imgWidth={360}
        imgHeight={1027}
        imgAlt={t`Artistprofil`}
        caption={t`Artistprofil`}
      />
      <Figure
        imgSrc={destopImg}
        imgWidth={1280}
        imgHeight={848}
        imgAlt={t`En desktopside`}
        caption={t`En desktopside`}
      />
    </div>
  </>
);

export default Artistbooking;
