import fagstoffImg from "../../images/webwork/fagstoff/fagstoff.webp";
import ToolList from "../../components/common/ToolList";

// react lingui
import { Trans, t } from "@lingui/macro";

const Fagstoff = () => (
  <>
    <img src={fagstoffImg} width={1893} height={543} alt={t`Nettside med overskriften 'fagstoff'`} />
    <a
      className="link"
      href="https://paalss.github.io/fagstoff/"
      rel="noopener noreferrer"
    >
      <span className="fas fa-circle-notch"></span> {t`Besøk siden`}
    </a>
    <a
      className="link"
      href="https://github.com/paalss/fagstoff"
      rel="noopener noreferrer"
    >
      <span className="fab fa-github"></span> {t`Kildekode`}
    </a>
    <h2>
      <Trans>
        Fritidsprosjekt
        <span className="subtitle">2016 høst</span>
      </Trans>
    </h2>
    <ToolList tools={["HTML", "CSS"]} toolsText={true} />
    <p>
      <Trans>En nettside som jeg førte opp webkoding-notater i. Sist oppdatert 02.11.16</Trans>
    </p>
  </>
);

export default Fagstoff;
