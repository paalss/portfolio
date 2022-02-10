import SquareLink from "../components/common/SquareLink";
import { webworkInfo } from "../pagesInfo";
import { Trans } from "@lingui/macro";

const Webwork = () => (
  <>
    <div className="squarelinks-flex">
      {webworkInfo.map((page) => (
        <SquareLink
          key={page.id}
          link={page.path}
          imgSrc={page.imgSrc}
          imgAlt={page.imgAlt}
          title={page.title}
          tools={page.tools}
          thereAreMoreTools={page.thereAreMoreTools}
        />
      ))}
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
    <div className="mt-50 center-content">
      <a
        className="link"
        href="https://github.com/paalss?tab=repositories"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> <Trans>Se mer på Github</Trans>
      </a>
    </div>
  </>
);;

export default Webwork;
