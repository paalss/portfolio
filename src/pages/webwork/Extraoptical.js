import frontpageImg from "../../images/webwork/extraoptical/sider/front-page.webp";
import frontpagePwaImg from "../../images/webwork/extraoptical/sider/front-page-pwa.png";

// components
import ToolList from "../../components/common/ToolList";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { Trans, t } from "@lingui/macro";

const Extraoptical = () => (
  <>
    <img
      src={frontpagePwaImg}
      width={1504}
      height={909}
      alt={t`Extra Optical forside`}
    />
    <a
      className="link"
      href="https://extraoptical.no/"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faCircleNotch} /> {t`Besøk siden`}
    </a>
    <span className="link">
      <FontAwesomeIcon icon={faGithub} /> {t`Privat kildekode`}
    </span>
    <h2>
      <Trans>
        Extra Opticals nettbutikk
        <span className="subtitle">2022 november–nå</span>
      </Trans>
    </h2>
    <ToolList
      tools={["React", "Linux", "JSX", "CSS", "Magento PWA builder", "PHTML"]}
      toolsText={true}
    />
    <dl>
      <dt>Magento PWA builder</dt>
      <dd>
        <Trans>
          Et eCommerce CMS hvor nettsideadministratorer kan legge til egne
          undersider og byggeklosser.
        </Trans>
      </dd>
    </dl>
    <dl>
      <dt>PHTML</dt>
      <dd>
        <Trans>
          Et HTML templating språk (HTML hvor man kan bruke variabler og
          expressions). Ikke så ulikt Twig og Handlebars.
        </Trans>
      </dd>
    </dl>
    <p>
      <Trans>
        På den nye nettsiden har jeg jobbet både i Magento PWA builder og i
        kildekoden. Koden er satt opp slik at enkelte deler er satt av til{" "}
        <i>Magento PWA builder</i> innhold, mens resten er React-komponenter.
      </Trans>
    </p>
    <p>
      <Trans>
        Denne versjonen av nettsiden ble lansert februar 2022. Jeg hadde også
        praksis hos Extra Optical før dette, så jeg har fått jobbet på en eldre
        versjon av nettsiden også.
      </Trans>
    </p>

    <h3 className="big-h3">{t`Gammel side (før februar 2022)`}</h3>

    <ToolList tools={["Magento2", "PHTML", "CSS"]} toolsText={true} />
    <p>
      <Trans>
        I dennne praksisen jobbet jeg med nettbutikken Extra Optical (frontend).
        EO skulle gå over til å bygge nettsiden sin på nytt i en{" "}
        <i>page builder</i> da jeg hadde vært der i ca. 2 måneder, så jeg har
        fått jobbet på både ny og gammel versjon.
      </Trans>
    </p>
    <h4>
      <Trans>Bidrag</Trans>
    </h4>
    <ul className="normal-list">
      <li>
        <Trans>
          Fikset errors og kodeslurv i HTML. For eksempel var det mange enslige{" "}
          <i>opening/closing</i>-HTML-tags som manglet <i>matching pair</i>.
        </Trans>
      </li>
      <li>
        <Trans>
          Rettet opp / fjernet <i>broken links</i>
        </Trans>
      </li>
      <li>
        <Trans>Lagd undersider</Trans>
      </li>
      <li>
        <Trans>Fikset på Extra Opticals Zendesk Help center.</Trans>
      </li>
      <li>
        <Trans>
          Fikset layout på bunntekst og ordnet en side for mobilstørrelser
        </Trans>
      </li>
      <li>
        <Trans>
          Bygd noen sider på den nye nettsiden (en Progressive Web App)
        </Trans>
      </li>
    </ul>
  </>
);

export default Extraoptical;
