import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="theme-color" content="#7f017f" />
        <meta
          name="google-site-verification"
          content="QHRtIQSyLGdlaOZq_NjWPRG1WIEudGxXECk1wey5F1U"
        />
        <meta
          name="description"
          content="Experience with: React, HTML, CSS, MySQL ..."
        />
        {/* uikit scripts */}
        <script defer src="uikit/js/uikit.min.js"></script>
        <script defer src="uikit/js/uikit-icons.min.js"></script>
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
