import React, { useCallback, useEffect, useState } from "react";
import LightboxImage from "../components/common/LightboxImage";
import classes from "./gallery.module.css";

import { t, Trans } from "@lingui/macro";

const Gallery = (props) => {
  let content = (
    <p>
      <Trans>Fant ingen bilder</Trans>
    </p>
  );

  if (props.media) {
    const { media: instaMedia } = props;
    if (instaMedia.length > 0) {
      content = instaMedia.map((i) => (
        <LightboxImage
          key={i.id}
          imgSrc={i.media_url}
          imgAlt={i.caption}
          title={i.caption}
          gallery={true}
        />
      ));
    }
  }

  if (props.errMessage) {
    content = (
      <>
        <p>{props.errMessage}</p>
        <p>
          <Trans>
            Innlasting av bilder mislyktes. Men du kan alltids se innholdet på{" "}
            <a href="https://www.instagram.com/gassosaman/">
              min Instagram-konto
            </a>
            .
          </Trans>
        </p>
      </>
    );
    if (
      props.errMessage === "NetworkError when attempting to fetch resource."
    ) {
      content = (
        <>
          <p>{props.errMessage}</p>
          <p>
            <Trans>
              Innlasting av bilder mislyktes. Du kan prøve å:
              <ul>
                <li>Slå av utvidet sporingsbeskyttelse for dette nettstedet</li>
                <li>
                  Åpne denne nettsiden i Google Chrome eller Microsoft Edge
                </li>
              </ul>
              Ellers så kan du gå til{" "}
              <a href="https://www.instagram.com/gassosaman/">
                min Instagram-konto
              </a>{" "}
              og de samme bildene der.
            </Trans>
          </p>
        </>
      );
    }
  }

  return (
    <>
      <h2>{t`Maleri, tegninger og annet`}</h2>
      <p>{t`Bilder jeg har lagt ut på min Instagram`}</p>

      <div uk-lightbox="animation: slide">
        <div className={classes.galleryFlex}>{content}</div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.NEXT_PUBLIC_LONG_LIVED_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const media = await response.json();
    const mediaWithoutVideos = media.data.filter(
      (d) => d.media_type !== "VIDEO"
    );

    return {
      props: {
        media: mediaWithoutVideos,
      },
    };
  } catch (error) {
    return {
      props: {
        errMessage: error.message,
      },
    };
  }
}

export default Gallery;