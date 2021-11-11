import LazyLoad from "react-lazyload";
import classes from "./LightboxImage.module.css";

function LightboxImage({ imgSrc, imgAlt, title, gallery = false }) {
  if (gallery) {
    return (
      <a
        href={imgSrc}
        data-caption={title}
        className={classes.listItem}
      >
        <LazyLoad height="300px">
          <div className={classes.frame}>
            <img src={imgSrc} alt={imgAlt} className={classes.galleryImg} />
          </div>
        </LazyLoad>
      </a>
    );
  } else {
    return (
      // data-type="image" er nødvendig for at UIkit lightbox alltid skal funke
      <a href={imgSrc} data-caption={title} data-type="image">
        <img src={imgSrc} alt={imgAlt} />
      </a>
    );
  }
}

export default LightboxImage;
