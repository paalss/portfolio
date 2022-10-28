import React, { lazy } from "react";
import Image from "next/image";
import { Trans } from "@lingui/macro";

// ---------------
// IMAGES
// locally imported, so that we don't need to provide width and height to Image from next/future/image
// ---------------

// webwork
import fakturanettImg from "../public/images/webwork/fakturanett/fakturanett-icon.avif";
import ytWrappedImg from "../public/images/webwork/yt-wrapped/img.avif";
import ohmyaliasesImg from "../public/images/webwork/ohmyaliases/img.avif";
import extraopticalImg from "../public/images/webwork/extraoptical/logo/eo-icon.webp";
import dokkerImg from "../public/images/webwork/dokker/logo/dokkericon.webp";
import rankingappImg from "../public/images/webwork/rankingapp/rankingapp-small.webp";
import videoopplastingImg from "../public/images/webwork/www-teknologi/split-videouploading.webp";
import fagstoffImg from "../public/images/webwork/fagstoff/fagstoff-small.webp";
import macleanImg from "../public/images/webwork/maclean/alistairmaclean.webp";
import portfoliosImg from "../public/images/webwork/portfolios/split-portfolios.webp";

// graphicwork
import artistbookingImg from "../public/images/graphicwork/artistbooking/Android-Mobile–1.webp";
import mpoeImg from "../public/images/graphicwork/mpoe/mpoe-cropped-forside.webp";
import flaviaImg from "../public/images/graphicwork/flaviadeluce/flavia-cropped-hode.webp";
import jrNmImg from "../public/images/graphicwork/jr-nm-ski/IMG_2413-min-small.webp";

// other
import galleryImg from "../public/images/gallery/gallery1-small.webp";

const pagesInfo = [
  {
    id: 1,
    link: "/",
    exact: true,
    exactActiveClassName: true,
    title: <Trans>Hjem</Trans>,
    heading: (
      <div className="index-header-flex">
        <div>
          <h1>Pål Stakvik</h1>
          <span className="tagline">
            <Trans>Utdannet web&shy;utvikler</Trans>
          </span>
        </div>
        <div className="circle-frame">
          <Image
            width={1200}
            height={1600}
            src="/images/cvphoto2.webp"
            alt="Pål Stakvik"
            placeholder="blur"
            blurDataURL="/images/cvphoto2.webp"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    link: "/websites",
    exact: true, // naviger til Webwork kun om link er eksakt "/websites"
    exactActiveClassName: false, // uthev nav-link om link inneholder "/websites"
    title: <Trans>Nettsider</Trans>,
    subpages: [
      {
        id: 9,
        link: "/websites/extraoptical",
        site: "https://extraoptical.no/",
        title: "Extra Optical",
        subtitle: <Trans>Praksis &amp; jobb</Trans>,
        imgSrc: extraopticalImg,
        imgAlt: "Extraoptical logo",
        tools: ["React", "GraphQL", "JavaScript", "CSS"],
        thereAreMoreTools: true,
      },
      {
        id: 10,
        link: "/websites/fakturanett",
        site: "https://fakturanett.no/",
        title: "Fakturanett",
        subtitle: <Trans>Jobb</Trans>,
        imgSrc: fakturanettImg,
        imgAlt: "Fakturanett ikon",
        tools: ["PHP", "HTML", "CSS", "JavaScript"],
      },
      {
        id: 8,
        link: "/websites/dokker",
        site: "https://www.dokker.com/nb",
        title: "Dokker",
        subtitle: <Trans>Praksis</Trans>,
        imgSrc: dokkerImg,
        imgAlt: "Dokker logo",
        tools: ["React", "TypeScript", "CSS"],
      },
      {
        id: 12,
        link: "/websites/ytwrapped",
        site: "https://paalss.github.io/youtube-wrapped",
        repo: "https://github.com/paalss/youtube-wrapped",
        title: "Youtube-wrapped",
        subtitle: <Trans>Fritid</Trans>,
        imgSrc: ytWrappedImg,
        imgAlt: "youtube-wrapped UI",
        tools: ["React", "JavaScript", "JSX", "CSS"],
      },
      {
        id: 11,
        link: "/websites/ohmyaliases",
        site: "https://paalss.github.io/oh-my-aliases",
        repo: "https://github.com/paalss/oh-my-aliases",
        title: "Oh my aliases",
        subtitle: <Trans>Fritid</Trans>,
        imgSrc: ohmyaliasesImg,
        imgAlt: "oh my aliases UI",
        tools: ["React", "JavaScript", "JSX", "CSS"],
      },
      {
        id: 7,
        link: "/websites/portfolios",
        repo: "https://github.com/paalss/portfolio",
        title: <Trans>Denne porteføljen</Trans>,
        subtitle: (
          <>
            <Trans>Fritid</Trans>/<Trans>Skole</Trans>/<Trans>Studier</Trans>
          </>
        ),
        imgSrc: portfoliosImg,
        imgAlt: "Portfolio page",
        tools: ["React", "Next", "JavaScript", "CSS"],
        thereAreMoreTools: true,
      },
      {
        id: 5,
        link: "/websites/videoopplasting",
        title: <Trans>Video&shy;opplastings&shy;apper</Trans>,
        subtitle: <Trans>Studier</Trans>,
        heading: (
          <h1>
            <Trans>Video&shy;opplastings&shy;apper</Trans>
          </h1>
        ),
        imgSrc: videoopplastingImg,
        imgAlt: "Video uploading app",
        tools: ["PHP", "Lit", "HTML", "CSS", "JavaScript", "MySQL", "Docker"],
        thereAreMoreTools: true,
      },
      {
        id: 4,
        link: "/websites/fagstoff",
        site: "https://paalss.github.io/fagstoff/",
        repo: "https://github.com/paalss/fagstoff",
        title: <Trans>Fagstoff</Trans>,
        subtitle: <Trans>Fritid</Trans>,
        imgSrc: fagstoffImg,
        imgAlt: "Subject matter",
        tools: ["HTML", "CSS"],
      },
      {
        id: 3,
        link: "/websites/maclean",
        site: "https://paalss.github.io/Alistair-MacLean-portfolio-redesign/",
        repo: "https://github.com/paalss/Alistair-MacLean-portfolio-redesign",
        title: <Trans>Alistair MacLean nettside redesign</Trans>,
        subtitle: <Trans>Skole</Trans>,
        imgSrc: macleanImg,
        imgAlt: "MacLean page",
        tools: ["HTML", "CSS", "JavaScript"],
        thereAreMoreTools: true,
      },
      {
        id: 6,
        link: "/websites/rankingapp",
        repo: "https://github.com/paalss/ranking-app",
        title: "Ranking app",
        subtitle: <Trans>Fritid</Trans>,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", "MySQL", "HTML", "CSS", "Jest", "Docker"],
      },
    ],
  },
  {
    id: 10,
    link: "/graphics",
    exact: true,
    exactActiveClassName: false,
    title: <Trans>Grafisk</Trans>,
    subpages: [
      {
        id: 14,
        link: "/graphics/artistbooking",
        title: "Artist booking app prototype",
        subtitle: <Trans>Studier</Trans>,
        imgSrc: artistbookingImg,
        imgAlt: "High-fidelity prototype of an artist booking app",
        tools: ["Adobe XD"],
      },
      {
        id: 13,
        link: "/graphics/flaviadeluce",
        title: <Trans>Bok web-banner</Trans>,
        subtitle: <Trans>Skole</Trans>,
        imgSrc: flaviaImg,
        imgAlt: "Book webbanner",
        tools: ["Photoshop", "Illustrator"],
      },
      {
        id: 12,
        link: "/graphics/mpoe",
        title: <Trans>Bok-cover o.l.</Trans>,
        subtitle: <Trans>Skole</Trans>,
        imgSrc: mpoeImg,
        imgAlt: "Book cover",
        tools: ["Photoshop", "Illustrator", "InDesign"],
      },
      {
        id: 11,
        link: "/graphics/jrnm",
        title: "Jr NM ski 2015 logo",
        subtitle: <Trans>Praksis</Trans>,
        imgSrc: jrNmImg,
        imgAlt: "Jr NM ski logo",
        tools: ["Photoshop"],
      },
    ],
  },
  {
    id: 15,
    link: "/gallery",
    title: <Trans>Kunst</Trans>,
    subtitle: <Trans>Fritid</Trans>,
    imgSrc: galleryImg,
    imgAlt: "gallery",
  },
];

/*
=============================
Transformer array for App
=============================

App trenger en versjon av pagesInfo hvor alle sidene (objektene) ligger på samme nivå i en array.
Da kan den bare loope gjennom alle og rendre <Route> for hver av dem.

Ta sub-pages elementene, og bring dem opp et hakk

Eksempel: Det skal gå fra sånn

pagesInfo =
[
  {
    id: 1,
    link: "/",
    title: "Hjem",
  },
  {
    id: 2,
    link: "/websites",
    title: "Nettsider",
    subpages: [
      {
        id: 3,
        link: "/websites/rankingapp",
        title: "Ranking app",
      },
      {
        id: 4,
        link: "/websites/videoopplasting",
        title: "Videoopplastingsapper",
      }
      ...
    ],
  },
  ...
];

til sånn:

flatPagesInfo =
[
  {
    id: 1,
    link: "/",
    title: "Hjem",
  },
  {
    id: 2,
    link: "/websites",
    title: "Nettsider",
    subpages: [...],
  },
  {
    id: 3,
    link: "/websites/rankingapp",
    title: "Ranking app",
  },
  {
    id: 4,
    link: "/websites/videoopplasting",
    title: "Videoopplastingsapper",
  }
  ...
];
*/

// pakk ut subPages der det finnes
let subpages = pagesInfo.flatMap((page) =>
  page.subpages ? page.subpages : "no subpages"
);
// fjern pages som ikke hadde noen subpages, nå står vi igjen med kun subpages
subpages = subpages.filter((e) => e !== "no subpages");

export const flatPagesInfo = [...pagesInfo, ...subpages];

/*
=============================
Hent pages for Index
=============================

Index trenger pages for å generere <SquareLink>-er
*/

export const webworkInfo = pagesInfo.find(
  (element) => element.link === "/websites"
).subpages;
export const graphicworkInfo = pagesInfo.find(
  (element) => element.link === "/graphics"
).subpages;
export const galleryInfo = pagesInfo.find(
  (element) => element.link === "/gallery"
);

export default pagesInfo;
