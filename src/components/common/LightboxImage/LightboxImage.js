function LightboxImage({ imgSrc, imgAlt, title, group }) {
  return (
    <a href={imgSrc} data-lightbox={group} data-title={title}>
      <img src={imgSrc} alt={imgAlt} />
    </a>
  );
}

export default LightboxImage;
