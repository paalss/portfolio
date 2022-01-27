import LightboxImage from "../LightboxImage";
import classes from "./Figure.module.css";

const Figure = ({ imgSrc, imgWidth, imgHeight, imgAlt, caption }) => (
  <figure className={classes.figure}>
    <LightboxImage
      imgSrc={imgSrc}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      imgAlt={imgAlt}
      title={caption}
    />
    <figcaption>{caption}</figcaption>
  </figure>
);

export default Figure;
