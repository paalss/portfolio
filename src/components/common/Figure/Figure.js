import LightboxImage from "../LightboxImage";
import classes from "./Figure.module.css"

function Figure({ imgSrc, imgAlt, caption, group }) {
  return (
    <figure className={classes.figure}>
      <LightboxImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        title={caption}
        group={group}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default Figure;
