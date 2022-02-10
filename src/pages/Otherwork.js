import SquareLink from "../components/common/SquareLink";
import { galleryInfo } from "../pagesInfo";

const Otherwork = () => (
  <div className="squarelinks-flex">
    <SquareLink
      link={galleryInfo.path}
      imgSrc={galleryInfo.imgSrc}
      imgAlt={galleryInfo.imgAlt}
      title={galleryInfo.title}
    />
  </div>
);

export default Otherwork