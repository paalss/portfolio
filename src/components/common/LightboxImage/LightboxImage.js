import LazyLoad from "react-lazyload";
import classes from "./LightboxImage.module.css";

function LightboxImage({ imgSrc, imgAlt, title, gallery = false }) {
  if (gallery) {
    return (
      <a
        class="uk-inline"
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
      <a class="uk-inline" href={imgSrc} data-caption={title}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    );
  }
}

export default LightboxImage;
