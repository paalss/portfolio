function LightboxImage({ imgSrc, imgAlt, title, group, gallery = false }) {
  if (gallery) {
    return (
      <a
        href={imgSrc}
        data-lighbox={group}
        data-title={title}
        className="list-item"
      >
        <div className="frame">
          <img src={imgSrc} alt={imgAlt} className="gallery-img" />
        </div>
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
