import LightboxImage from "../LightboxImage";
import classes from "./Figure.module.css"

function Figure({ imgSrc, imgAlt, caption }) {
  return (
    <figure className={classes.figure}>
      <LightboxImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        title={caption}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default Figure;
