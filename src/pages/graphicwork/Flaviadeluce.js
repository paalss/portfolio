import flaviaprocessImg from "../../images/graphicwork/flaviadeluce/flavia.webp";
import flaviabannerImg from "../../images/graphicwork/flaviadeluce/flavia-cropped.webp";

import ToolList from "../../components/common/ToolList";
import Figure from "../../components/common/Figure";

// react lingui
import { Trans, t } from "@lingui/macro";

const Flaviadeluce = () => (
  <>
    <img src={flaviabannerImg} width={0} height={0} alt="web-banner" />
    <h2>
      <Trans>
        Grafisk skoleoppgave
        <span className="subtitle">2015?</span>
      </Trans>
    </h2>
    <ToolList tools={["verktøy"]} toolsText={true} />
    <p>
      <Trans>
        Dette er et bokbanner jeg lagde av Flavia de Luce-serien, en krim og
        mysterier-bokserie som tar plass i et 50-talls england. Hovedpersonen er
        en 12-år gammel kjeminerd, og det ville jeg få frem i dette banneret.
        Bokbanneret er ment for å passe til å bli brukt på en
        bokhandel-nettside, ark.no, tror jeg. (Det er fortsatt bare en
        skoleoppgave, ikke et 'ordentlig' oppdrag, altså)
      </Trans>
    </p>
    <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={flaviaprocessImg}
        imgWidth={1024}
        imgHeight={725}
        imgAlt={t`flere bilder med flavia de luce motiver`}
        caption={t`Utkast og skisser til web-banneret oppe til venstre. Jeg har desverre ikke tatt vare på et mer høyoppløselig bilde av det.`}
      />
    </div>
  </>
);

export default Flaviadeluce;
