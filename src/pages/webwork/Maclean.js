// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";

const Maclean = () => (
  <>
    <img
      src="images/webwork/maclean/alistairmaclean-full.webp"
      className="work-heading-img"
      width={837}
      height={556}
      alt={t`maclean nettside`}
    />

    <WorkHeading
      heading={t`Alistair MacLean portefølje redesign`}
      timespan="2015"
      siteInfo={{
        site: "https://paalss.github.io/Alistair-MacLean-portfolio-redesign",
        repo: "https://github.com/paalss/Alistair-MacLean-portfolio-redesign",
      }}
      tools={["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator"]}
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
