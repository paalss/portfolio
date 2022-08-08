// images
// import frontpageImg from "../../images/webwork/extraoptical/sider/front-page.webp";
import frontpagePwaImg from "../../images/webwork/extraoptical/sider/front-page-pwa.png";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";
import HT from "../../components/common/HtmlTag";

const Extraoptical = () => (
  <>
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
        "JSX",
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
    <p>
      <Trans>
        På denne nettsiden har jeg jobbet mest i kildekoden, men også noe i{" "}
        CMS-et <i>Magento PWA builder</i>. Koden er satt opp slik at enkelte
        deler er satt av til CMS-et, mens resten er React-komponenter.
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
  </>
);

export default Extraoptical;
