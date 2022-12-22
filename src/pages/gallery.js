import React from "react";
import LightboxImage from "../components/common/LightboxImage";
import classes from "./gallery.module.css";

import { t, Trans } from "@lingui/macro";
import Head from "next/head";

import * as instaResonseLocal from "./local-gallery-images.json";

const Gallery = () => {
  let content = (
    <p>
      <Trans>Fant ingen bilder</Trans>
    </p>
  );

  const instaMedia = instaResonseLocal.data;

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

  return (
    <>
      <Head>
        <title>{t`Kunst`} – Pål Stakvik</title>
      </Head>
      <h2>{t`Maleri, tegninger og annet`}</h2>
      <p>{t`Bilder jeg har lagt ut på min Instagram-konto.`}</p>

      <div uk-lightbox="animation: slide">
        <div className={classes.galleryFlex}>{content}</div>
      </div>
    </>
  );
};

// Change after "47ecfb5 - replace instagram-cdn-links with links referring to local images"

// Going away from using instagram-cdn responses because they always 'expire' after a while:
// Images would either disappear entirely or just show the caption when a certain amout of time
// had passed. You would need to manually refetch access token in Postman or redeploy
// the site.

// Now local images are used

export default Gallery;
