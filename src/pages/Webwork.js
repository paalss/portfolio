import { webworkInfo } from "../pagesInfo";

// components
import SquareLink from "../components/common/SquareLink";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// react lingui
import { Trans } from "@lingui/macro";

const Webwork = () => (
  <>
    <div className="squarelinks-flex">
      {webworkInfo.map((page) => (
        <SquareLink
          key={page.id}
          {...page}
        />
      ))}
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
    <div className="mt-50 center-content">
      <a
        className="button"
        href="https://github.com/paalss"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> <Trans>Besøk min Github-profil</Trans>
      </a>
    </div>
  </>
);;

export default Webwork;
