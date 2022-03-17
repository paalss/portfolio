// images
import fagstoffImg from "../../images/webwork/fagstoff/fagstoff.webp";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
import ToolList from "../../components/common/ToolList";
import WorkLinks from "../../components/common/WorkLinks";

const Fagstoff = () => (
  <>
    <img
      src={fagstoffImg}
      width={1893}
      height={543}
      alt={t`Nettside med overskriften 'fagstoff'`}
    />
    <WorkLinks
      site="https://paalss.github.io/fagstoff/"
      repo="https://github.com/paalss/fagstoff"
    />
    <h2>
      <Trans>
        Fritidsprosjekt
        <span className="subtitle">2016 høst</span>
      </Trans>
    </h2>
    <ToolList tools={["HTML", "CSS"]} toolsText={true} />
    <p>
      <Trans>
        En nettside som jeg førte opp webkoding-notater i. Sist oppdatert
        02.11.16
      </Trans>
    </p>
  </>
);

export default Fagstoff;
