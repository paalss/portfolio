import macleanImg from "../../images/webwork/maclean/alistairmaclean-full.webp";

// components
import ToolList from "../../components/common/ToolList";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// react lingui
import { Trans, t } from "@lingui/macro";

const Maclean = () => (
  <>
    <img src={macleanImg} width={837} height={556} alt={t`maclean nettside`} />
    <a
      className="link"
      href="https://paalss.github.io/Alistair-MacLean-portfolio-redesign/"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faCircleNotch} /> {t`Besøk siden`}
    </a>
    <a
      className="link"
      href="https://github.com/paalss/Alistair-MacLean-portfolio-redesign"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} /> {t`Kildekode`}
    </a>
    <h2>
      <Trans>
        Innlevering på videregående
        <span className="subtitle">2015</span>
      </Trans>
    </h2>
    <ToolList
      tools={["HTML", "CSS", "Photoshop", "Illustrator"]}
      toolsText={true}
    />

    <Trans>
      <p>
        I 2015 hadde jeg et valgfritt prosjekt på videregående hvor jeg valgte å
        redesigne{" "}
        <a href="alistairmaclean.com" target="_blank" rel="noopener noreferrer">
          alistairmaclean.com
        </a>{" "}
        sitt GUI. Grunnen var at jeg tidligere hadde jeg sett og vært skuffet
        over hvordan den så ut. MacLean skrev nesten utelukkende bøker med
        action og spenning, og det syntes jeg ikke nettsiden reflekterte noe av.
      </p>

      <h3>Verktøy</h3>
      <p>
        Jeg bygget nettsiden i HTML og CSS og bittelitt JavaScript (ikke så mye
        å skryte av). Logoen lagde jeg i Illustrator og header-bildet lagde jeg
        ved photoshoppe et bilde av eget modellfly oppå noen T-skjorter.
      </p>
    </Trans>
  </>
);

export default Maclean;
