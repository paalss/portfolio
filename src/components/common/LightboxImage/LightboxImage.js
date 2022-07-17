import LazyLoad from "react-lazyload";
import React from "react";
import classes from "./LightboxImage.module.css";
// import "./uikit-lightbox-related.module.css";

const LightboxImage = ({
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  title,
  gallery = false,
}) => {
  if (gallery) {
    return (
      <a href={imgSrc} data-caption={title} className={classes.listItem}>
        <LazyLoad height={300}>
          <div className={classes.frame}>
            {/* 340 width er kun et estimat */}
            <img
              height={300}
              width={340}
              src={imgSrc}
              alt={imgAlt}
              className={classes.galleryImg}
            />
          </div>
        </LazyLoad>
      </a>
    );
  } else {
    return (
      // data-type="image" er nødvendig for at UIkit lightbox alltid skal funke
      <a href={imgSrc} data-caption={title} data-type="image">
        <img src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} className={classes.img} />
      </a>
    );
  }
};

export default LightboxImage;
