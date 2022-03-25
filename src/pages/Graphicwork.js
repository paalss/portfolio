import SquareLink from "../components/common/SquareLink";
import { graphicworkInfo } from "../pagesInfo";

const Graphicwork = () => (
  <>
    <div className="squarelinks-flex">
      {graphicworkInfo.map((page) => {
        return (
          <SquareLink
            key={page.id}
            link={page.path}
            imgSrc={page.imgSrc}
            imgAlt={page.imgAlt}
            title={page.title}
            tools={page.tools}
            thereAreMoreTools={page.thereAreMoreTools}
          />
        );
      })}
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
  </>
);;

export default Graphicwork;
