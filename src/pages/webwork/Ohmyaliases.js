// images
import projImg from "../../images/webwork/ohmyaliases/img.avif";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
// import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";

const Ohmyaliases = () => (
  <>
    <img
      src={projImg}
      className="work-heading-img"
      // width={0}
      // height={0}
      alt={t`liste over aliaser`}
    />
    <WorkHeading
      heading="Oh my aliases"
      timespan={t`2022 mai–juni`}
      siteInfo={{
        site: "https://paalss.github.io/oh-my-aliases/",
        repo: "https://github.com/paalss/oh-my-aliases",
      }}
      tools={["React", "JavaScript", "JSX", "CSS"]}
    />
    <p>
      <Trans>
        Måtte lære meg aliasene til Oh my bash. Så jeg lagde denne
        oppslagsverk-appen for å raskt kunne se aliasene for mine ofte brukte
        kommandoer. Aliasene er for øvrig de samme på Oh my bash og -zsh.
      </Trans>
    </p>
    {/* <div uk-lightbox="animation: slide" className="flex wrap">
      <Figure
        imgSrc={projImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`_bilde1`}
        caption={t`_bilde1`}
      />
      <Figure
        imgSrc={projImg}
        imgWidth={0}
        imgHeight={0}
        imgAlt={t`_bilde2`}
        caption={t`_bilde2`}
      />
    </div> */}
  </>
);

export default Ohmyaliases;
