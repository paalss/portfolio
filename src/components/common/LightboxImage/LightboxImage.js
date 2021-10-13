import LazyLoad from "react-lazyload";

function LightboxImage({ imgSrc, imgAlt, title, group, gallery = false }) {
  if (gallery) {
    return (
      <a
        href={imgSrc}
        data-lightbox={group}
        data-title={title}
        className="list-item"
      >
        {/* offset={10} Start å rendre 10px før bildet kommer i viewport */}
        <LazyLoad height="300px">
          <div className="frame">
            <img src={imgSrc} alt={imgAlt} className="gallery-img" />
          </div>
        </LazyLoad>
      </a>
    );
  } else {
    return (
      <a href={imgSrc} data-lightbox={group} data-title={title}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    );

  }
}

export default LightboxImage;
