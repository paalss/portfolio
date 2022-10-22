import React from "react";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";
import HT from "../../components/common/HtmlTag";
import WorkHeaderImage from "../../components/common/WorkHeaderImage";

const Extraoptical = () => (
  <>
    <WorkHeaderImage
      src="/images/webwork/extraoptical/sider/front-page-pwa.png"
      width={1504}
      height={909}
      alt={t`Extra Optical forside`}
    />

    <WorkHeading
      heading={t`Extra Opticals nåværende nettbutikk`}
      timespan={t`2022 februar–august`}
      siteInfo={{
        site: "https://extraoptical.no/",
      }}
      tools={[
        "React",
        "JavaScript",
        "JSX",
        "GraphQL",
        "CSS",
        <>Magento&nbsp;PWA&nbsp;builder</>,
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
    <h3>
      <Trans>Mitt bidrag</Trans>
    </h3>
    <p>
      <Trans>
        Under dette oppholdet har jeg bidratt på nettbutikken Extra Optical.
        Arbeidsoppgavene har for det meste vært å skape UI-elementer med React
        og GraphQL.
      </Trans>
    </p>
    <p>
      <Trans>
        Jeg har bidratt med UI-elementer som bilde- og produkt-karuseller,
        product-grids, tilbehørs pop-up og progress bars. I alle disse
        tilfellene måtte jeg også bruke GraphQL til å fylle inn elementene med
        ekte data.
      </Trans>{" "}
      <Trans>
        Ellers har jeg har hjulpet til med oversetting (med package'n{" "}
        <i>react-intl</i>) og lagt til litt animasjon (med <i>react-spring</i>).
      </Trans>{" "}
      <Trans>
        De fleste av karusellene ble lagd med <i>react-slick</i>.
      </Trans>
    </p>
    <h3>
      <Trans>Dette har jeg lært</Trans>
    </h3>
    <p>
      <Trans>
        Jeg lærte meg GraphQL, jobbe med magento components, Magento Page
        Builder, bruke SSH-keys og forskjellige react-packages.
      </Trans>{" "}
      <Trans>
        Jeg har blitt bedre på å dokumentere egne bidrag og tilrettelegge{" "}
        <i>Pull Requests</i> for den som skal se gjennom den.
      </Trans>{" "}
      <Trans>
        Jeg har blitt bedre på å separere logikk og markup og vet hvilke
        konsekvenser man får av å blande <i>CRLF</i> og <i>LF line endings</i> i
        samme prosjekt.
      </Trans>
    </p>
    <p>
      <Trans>
        Denne versjonen av nettsiden ble lansert februar 2022. Jeg hadde også
        praksis hos Extra Optical før dette, så jeg har fått jobbet på en eldre
        versjon av nettsiden også.
      </Trans>
    </p>

    <WorkHeading
      extraSpaceAbove={true}
      heading={t`Extra Opticals eldre nettbutikk`}
      timespan={t`2021 november – 2022 februar`}
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
  </>
);

export default Extraoptical;
