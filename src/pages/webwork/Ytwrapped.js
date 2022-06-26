// images
import projImg from "../../images/webwork/yt-wrapped/img.png";

// react lingui
import { Trans, t } from "@lingui/macro";

// components
// import Figure from "../../components/common/Figure";
import WorkHeading from "../../components/common/WorkHeading";

const Ytwrapped = () => (
  <>
    <img
      src={projImg}
      className="work-heading-img"
      // width={0}
      // height={0}
      alt={t`liste over videoer`}
    />
    <WorkHeading
      heading="Yt-wrapped"
      timespan={t`2022 vår–nå`}
      siteInfo={{
        repo: "https://github.com/paalss/youtube-wrapped",
      }}
      tools={["React", "JavaScript", "JSX"]}
    />
    <p>
      <Trans>
        Syntes det var synd at Youtube ikke hadde samme års-sammendrag slik som
        Spotify har, hvor man kan se hva man har spilt av mest i løpet av et år.
        Så da måtte jeg nesten lage noe slikt selv.
      </Trans>
    </p>
    <p>
      <Trans>
        For å bruke denne applikasjonen så forutsetter det at du har vært
        innlogged på youtube mens du har sett videoene, slik at man kan
        skaffe disse datene og laste dem opp i denne appen.
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

export default Ytwrapped;
