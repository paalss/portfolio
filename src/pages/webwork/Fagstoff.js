// images
import fagstoffImg from "../../images/webwork/fagstoff/fagstoff.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading/WorkHeading";

const Fagstoff = () => (
  <>
    <img
      src={fagstoffImg}
      className="work-heading-img"
      width={1893}
      height={543}
      alt={t`Nettside med overskriften 'fagstoff'`}
    />

    <WorkHeading
      heading={t`Fagstoff`}
      timespan={t`2016 høst`}
      siteInfo={{
        site: "https://paalss.github.io/fagstoff",
        repo: "https://github.com/paalss/fagstoff",
      }}
      tools={["HTML", "CSS"]}
    />
    
    <p>
      <Trans>
        En nettside som jeg førte opp webkoding-notater i. Sist oppdatert
        02.11.16
      </Trans>
    </p>
  </>
);

export default Fagstoff;
