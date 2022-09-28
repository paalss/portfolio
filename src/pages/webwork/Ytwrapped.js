// react lingui
import { Trans, t } from "@lingui/macro";

// components
import WorkHeading from "../../components/common/WorkHeading";

const Ytwrapped = () => (
  <>
    <img
      src="/images/webwork/yt-wrapped/img.avif"
      className="work-heading-img"
      // width={0}
      // height={0}
      alt={t`liste over videoer`}
    />
    <WorkHeading
      heading="Yt-wrapped"
      timespan={t`2022 vår–nå`}
      siteInfo={{
        site: "https://paalss.github.io/youtube-wrapped",
        repo: "https://github.com/paalss/youtube-wrapped",
      }}
      tools={["React", "JavaScript", "JSX", "CSS"]}
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
        innlogget på Youtube mens du har sett videoene, slik at man kan
        skaffe disse datene og laste dem opp i denne appen.
      </Trans>
    </p>
  </>
);

export default Ytwrapped;
