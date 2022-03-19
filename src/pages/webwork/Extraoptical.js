// images
// import frontpageImg from "../../images/webwork/extraoptical/sider/front-page.webp";
import frontpagePwaImg from "../../images/webwork/extraoptical/sider/front-page-pwa.png";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading/WorkHeading";

const Extraoptical = () => (
  <>
    <img
      src={frontpagePwaImg}
      width={1504}
      height={909}
      alt={t`Extra Optical forside`}
    />

    <WorkHeading
      heading={t`Extra Opticals nye netbutikk fra februar`}
      timespan={t`2022 februar–nå`}
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

    <WorkHeading
      extraSpaceAbove={true}
      heading={t`Extra Opticals eldre side`}
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
      <li>
        <Trans>
          Bygd noen sider på den nye nettsiden (en Progressive Web App)
        </Trans>
      </li>
    </ul>
  </>
);

export default Extraoptical;
