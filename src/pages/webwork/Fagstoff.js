// images
import fagstoffImg from "../../images/webwork/fagstoff/fagstoff.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkLinks from "../../components/common/WorkLinks";
import WorkHeading from "../../components/common/WorkHeading/WorkHeading";

const Fagstoff = () => (
  <>
    <img
      src={fagstoffImg}
      width={1893}
      height={543}
      alt={t`Nettside med overskriften 'fagstoff'`}
    />
    <WorkHeading
      headingInfo={{
        heading: (
          <Trans>_Sammenheng</Trans>
        ),
        timespan: t`2022 tidsspann`,
        hx: "h2",
      }}
      siteInfo={{
        site: "https://paalss.github.io/fagstoff",
        repo: "https://github.com/paalss/fagstoff"
      }}
      tools={["HTML", "CSS"]
      }
    />
    <WorkLinks
      site="https://paalss.github.io/fagstoff"
      repo=""
    />
    <h2>
      <Trans>
        Fritidsprosjekt
        <span className="subtitle">2016 høst</span>
      </Trans>
    </h2>
    <p>
      <Trans>
        En nettside som jeg førte opp webkoding-notater i. Sist oppdatert
        02.11.16
      </Trans>
    </p>
  </>
);

export default Fagstoff;
