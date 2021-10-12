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
        {/* offset={300} Start å rendre 300px før bildet kommer i viewport */}
        <LazyLoad height="40vh" offset={300}>
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
