import { useCallback, useEffect, useState } from "react";
import LightboxImage from "../../components/common/LightboxImage";
import classes from "./Gallery.module.css";

function Gallery() {
  const [instaMedia, setInstaMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMediaHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.REACT_APP_LONG_LIVED_ACCESS_TOKEN}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const media = await response.json();
      const mediaWithoutVideos = media.data.filter(
        (d) => d.media_type !== "VIDEO"
      );
      setInstaMedia(mediaWithoutVideos);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMediaHandler();
  }, [fetchMediaHandler]);

  let content = <p>Fant ingen bilder</p>;

  if (instaMedia.length > 0) {
    content = instaMedia.map((i) => {
      return (
        <LightboxImage
          key={i.id}
          imgSrc={i.media_url}
          imgAlt={i.caption}
          title={i.caption}
          gallery={true}
        />
      );
    });
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Laster inn...</p>;
  }

  return (
    <div uk-grid uk-lightbox="animation: slide">
      <div className={classes.galleryFlex}>{content}</div>
    </div>
  );
}

export default Gallery;
