// images
import flaviaProcessImg from "../../images/graphicwork/flaviadeluce/flavia.webp";
import flaviaBannerImg from "../../images/graphicwork/flaviadeluce/flavia-cropped.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";
import { Fragment } from "react";

const Flaviadeluce = () => (
  <Fragment>
    <img
      src={flaviaBannerImg}
      className="work-heading-img"
      width={0}
      height={0}
      alt="web-banner"
    />
    <WorkHeading
      heading={t`Flavia de Luce serien web-banner`}
      timespan="2015?"
      tools={["Photoshop", "Illustrator"]}
    />
    <p>
      <Trans>
        Dette er et bokbanner jeg lagde av Flavia de Luce-serien, en krim- og
        mysterier-bokserie som tar plass i england på 50-tallet. Bokbanneret er
        ment for å passe til å bli brukt på en bokhandel-nettside, ark.no, tror
        jeg det var. (Det er fortsatt bare en skoleoppgave og ikke et
        'ordentlig' oppdrag, altså.)
      </Trans>
    </p>
    <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={flaviaProcessImg}
        imgWidth={1024}
        imgHeight={725}
        imgAlt={t`flere bilder med flavia de luce motiver`}
        caption={t`Utkast og skisser til web-banneret oppe til venstre. Jeg har desverre ikke tatt vare på et mer høyoppløselig bilde av det.`}
      />
    </div>
  </Fragment>
);

export default Flaviadeluce;
