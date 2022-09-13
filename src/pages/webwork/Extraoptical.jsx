// images
// import frontpageImg from "../../images/webwork/extraoptical/sider/front-page.webp";
import frontpagePwaImg from "../../images/webwork/extraoptical/sider/front-page-pwa.png";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";
import HT from "../../components/common/HtmlTag";
import { Fragment } from "react";

const Extraoptical = () => (
  <Fragment>
    <img
      src={frontpagePwaImg}
      className="work-heading-img"
      width={1504}
      height={909}
      alt={t`Extra Optical forside`}
    />

    <WorkHeading
      heading={t`Extra Opticals nettbutikk`}
      timespan={t`2022 februar–august`}
      siteInfo={{
        site: "https://extraoptical.no/",
      }}
      tools={[
        "React",
        "GraphQL",
        "JSX",
        "CSS",
        <Fragment>Magento&nbsp;PWA&nbsp;builder</Fragment>,
        "PHTML",
        "Linux",
      ]}
    />

    <dl>
      <dt>Magento PWA builder</dt>
      <dd>
        <Trans>
          Et eCommerce CMS hvor administratorer kan legge til egne undersider og
          byggeklosser med drag and drop interface. Kildekoden kan hente inn
          disse byggeklossene med <HT>CmsBlock/</HT>
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
        Under dette oppholdet har jeg bidratt på nettbutikken Extra Optical. Jeg
        har lagd UI-elementer, hentet data fra serveren og oversatt innhold med
        React.
      </Trans>
    </p>
    <p>
      <Trans>
        Jeg lærte meg GraphQL, jobbe med magento components, Magento Page
        Builder og forskjellige react-packages (react-slick, react-intl,
        react-spring).
      </Trans>{" "}
      <Trans>
        Jeg har blitt bedre på å dokumentere egne bidrag og tilrettelegge Pull
        Requests for den som skal se gjennom den. Å separere logikk og markup
        ble jeg også bedre på.
      </Trans>
    </p>
    <p>
      <Trans>
        Denne versjonen av nettsiden ble lansert februar 2022. Jeg hadde også
        praksis hos Extra Optical før dette, så jeg har fått jobbet på en eldre
        versjon av nettsiden også.
      </Trans>
    </p>

    {/*
      Jeg har jobbet med nettbutikken til Extra Optical, mest i kildekoden som
      er skrevet i React, men også noe i Magento Page Builder-verktøyet (et CMS
      for nettsideadministratorer). Lærte GraphQL, ble bedre på å samarbeide.
      Bruke SSH-keys. Hvordan man separerer logikk og templating i komponent og
      custom hook. Har fått frisket opp engelsken mye i løpet av denne tiden,
      snakker med ukrainere, dokumenterer pull requests på engelsk.

      Forskjell på CRLF line endings og LF

      litt react-spring. og react-slick. og react-intl.
    */}

    <WorkHeading
      extraSpaceAbove={true}
      heading={t`Extra Opticals eldre nettbutikk`}
      timespan={t`2022 november–februar`}
      tools={["Magento2", "PHTML", "CSS"]}
    />
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
    </ul>
  </Fragment>
);

export default Extraoptical;
