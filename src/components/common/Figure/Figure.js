import LightboxImage from "../LightboxImage";

function Figure({ imgSrc, imgAlt, caption, group }) {
  return (
    <figure>
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
