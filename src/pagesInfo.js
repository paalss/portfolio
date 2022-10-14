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
import videoopplastingImg from "../public/images/webwork/www-teknologi/prosjekt2-5-videoside-small.webp";
import fagstoffImg from "../public/images/webwork/fagstoff/fagstoff-small.webp";
import macleanImg from "../public/images/webwork/maclean/alistairmaclean.webp";
import portfoliosImg from "../public/images/webwork/portfolios/pf5.webp";

// graphicwork
import artistbookingImg from "../public/images/graphicwork/artistbooking/Android-Mobile–1.webp";
import mpoeImg from "../public/images/graphicwork/mpoe/mpoe-cropped-forside.webp";
import flaviaImg from "../public/images/graphicwork/flaviadeluce/flavia-cropped-hode.webp";
import jrNmImg from "../public/images/graphicwork/jr-nm-ski/IMG_2413-min-small.webp";

// other
import galleryImg from "../public/images/gallery/gallery1-small.webp";

// ---------------
// PAGES
// Lazy load for å forminske loade-tiden når du først besøker nettsiden. Spar loading til du besøker dem.
// ---------------

// home
const Home = lazy(() => import("./pages"));

// webwork
const Webwork = lazy(() => import("./pages/webwork"));
const Ohmyaliases = lazy(() => import("./pages/webwork/ohmyaliases"));
const Ytwrapped = lazy(() => import("./pages/webwork/ytwrapped"));
const Fakturanett = lazy(() => import("./pages/webwork/fakturanett"));
const Extraoptical = lazy(() => import("./pages/webwork/extraoptical"));
const Dokker = lazy(() => import("./pages/webwork/dokker"));
const Rankingapp = lazy(() => import("./pages/webwork/rankingapp"));
const Videoopplasting = lazy(() => import("./pages/webwork/videoopplasting"));
const Portfolios = lazy(() => import("./pages/webwork/portfolios"));
const Maclean = lazy(() => import("./pages/webwork/maclean"));
const Fagstoff = lazy(() => import("./pages/webwork/fagstoff"));

// graphicwork
const Graphicwork = lazy(() => import("./pages/graphicwork"));
const Artistbooking = lazy(() => import("./pages/graphicwork/artistbooking"));
const MPOE = lazy(() => import("./pages/graphicwork/mpoe"));
const Flaviadeluce = lazy(() => import("./pages/graphicwork/flaviadeluce"));
const JRNM = lazy(() => import("./pages/graphicwork/jrnm"));

// other
const Gallery = lazy(() => import("./pages/gallery"));

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
    page: <Home />,
  },
  {
    id: 2,
    link: "/webwork",
    exact: true, // naviger til Webwork kun om link er eksakt "/webwork"
    exactActiveClassName: false, // uthev nav-link om link inneholder "/webwork"
    title: <Trans>Nettsider</Trans>,
    page: <Webwork />,
    subpages: [
      {
        id: 12,
        link: "/webwork/ytwrapped",
        site: "https://paalss.github.io/youtube-wrapped",
        repo: "https://github.com/paalss/youtube-wrapped",
        title: "Youtube-wrapped",
        subtitle: <Trans>Fritid</Trans>,
        page: <Ytwrapped />,
        imgSrc: ytWrappedImg,
        imgAlt: "youtube-wrapped UI",
        tools: ["React", "JavaScript", "JSX", "CSS"],
      },
      {
        id: 11,
        link: "/webwork/ohmyaliases",
        site: "https://paalss.github.io/oh-my-aliases",
        repo: "https://github.com/paalss/oh-my-aliases",
        title: "Oh my aliases",
        subtitle: <Trans>Fritid</Trans>,
        page: <Ohmyaliases />,
        imgSrc: ohmyaliasesImg,
        imgAlt: "oh my aliases UI",
        tools: ["React", "JavaScript", "JSX", "CSS"],
      },
      {
        id: 10,
        link: "/webwork/fakturanett",
        site: "https://fakturanett.no/",
        title: "Fakturanett",
        subtitle: <Trans>Jobb</Trans>,
        page: <Fakturanett />,
        imgSrc: fakturanettImg,
        imgAlt: "Fakturanett ikon",
        tools: ["PHP", "HTML", "CSS", "JavaScript"],
      },
      {
        id: 9,
        link: "/webwork/extraoptical",
        site: "https://extraoptical.no/",
        title: "Extra Optical",
        subtitle: <Trans>Praksis &amp; jobb</Trans>,
        page: <Extraoptical />,
        imgSrc: extraopticalImg,
        imgAlt: "Extraoptical logo",
        tools: ["React", "GraphQL", "JavaScript", "CSS"],
        thereAreMoreTools: true,
      },
      {
        id: 8,
        link: "/webwork/dokker",
        site: "https://www.dokker.com/nb",
        title: "Dokker",
        subtitle: <Trans>Praksis</Trans>,
        page: <Dokker />,
        imgSrc: dokkerImg,
        imgAlt: "Dokker logo",
        tools: ["React", "TypeScript", "CSS"],
      },
      {
        id: 7,
        link: "/webwork/portfolios",
        repo: "https://github.com/paalss/portfolio",
        title: <Trans>Denne porteføljen</Trans>,
        subtitle: <Trans>Fritid</Trans>,
        page: <Portfolios />,
        imgSrc: portfoliosImg,
        imgAlt: "Portfolio page",
        tools: ["React", "Next", "JavaScript", "CSS"],
        thereAreMoreTools: true,
      },
      {
        id: 5,
        link: "/webwork/videoopplasting",
        title: <Trans>Video&shy;opplastings&shy;apper</Trans>,
        subtitle: <Trans>Studier</Trans>,
        heading: (
          <h1>
            <Trans>Video&shy;opplastings&shy;apper</Trans>
          </h1>
        ),
        page: <Videoopplasting />,
        imgSrc: videoopplastingImg,
        imgAlt: "Video uploading app",
        tools: ["PHP", "Lit", "HTML", "CSS", "JavaScript", "MySQL", "Docker"],
        thereAreMoreTools: true,
      },
      {
        id: 4,
        link: "/webwork/fagstoff",
        site: "https://paalss.github.io/fagstoff/",
        repo: "https://github.com/paalss/fagstoff",
        title: <Trans>Fagstoff</Trans>,
        subtitle: <Trans>Fritid</Trans>,
        page: <Fagstoff />,
        imgSrc: fagstoffImg,
        imgAlt: "Subject matter",
        tools: ["HTML", "CSS"],
      },
      {
        id: 3,
        link: "/webwork/maclean",
        site: "https://paalss.github.io/Alistair-MacLean-portfolio-redesign/",
        repo: "https://github.com/paalss/Alistair-MacLean-portfolio-redesign",
        title: <Trans>Alistair MacLean nettside redesign</Trans>,
        subtitle: <Trans>Skole</Trans>,
        page: <Maclean />,
        imgSrc: macleanImg,
        imgAlt: "MacLean page",
        tools: ["HTML", "CSS", "JavaScript"],
        thereAreMoreTools: true,
      },
      {
        id: 6,
        link: "/webwork/rankingapp",
        repo: "https://github.com/paalss/ranking-app",
        title: "Ranking app",
        subtitle: <Trans>Fritid</Trans>,
        page: <Rankingapp />,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", "MySQL", "HTML", "CSS", "Jest", "Docker"],
      },
    ],
  },
  {
    id: 10,
    link: "/graphicwork",
    exact: true,
    exactActiveClassName: false,
    title: <Trans>Grafisk</Trans>,
    page: <Graphicwork />,
    subpages: [
      {
        id: 14,
        link: "/graphicwork/artistbooking",
        title: "Artist booking app prototype",
        subtitle: <Trans>Studier</Trans>,
        page: <Artistbooking />,
        imgSrc: artistbookingImg,
        imgAlt: "High-fidelity prototype of an artist booking app",
        tools: ["Adobe XD"],
      },
      {
        id: 13,
        link: "/graphicwork/flaviadeluce",
        title: <Trans>Bok web-banner</Trans>,
        subtitle: <Trans>Skole</Trans>,
        page: <Flaviadeluce />,
        imgSrc: flaviaImg,
        imgAlt: "Book webbanner",
        tools: ["Photoshop", "Illustrator"],
      },
      {
        id: 12,
        link: "/graphicwork/mpoe",
        title: <Trans>Bok-cover o.l.</Trans>,
        subtitle: <Trans>Skole</Trans>,
        page: <MPOE />,
        imgSrc: mpoeImg,
        imgAlt: "Book cover",
        tools: ["Photoshop", "Illustrator", "InDesign"],
      },
      {
        id: 11,
        link: "/graphicwork/jrnm",
        title: "Jr NM ski 2015 logo",
        subtitle: <Trans>Praksis</Trans>,
        page: <JRNM />,
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
    page: <Gallery />,
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
    link: "/webwork",
    title: "Nettsider",
    subpages: [
      {
        id: 3,
        link: "/webwork/rankingapp",
        title: "Ranking app",
      },
      {
        id: 4,
        link: "/webwork/videoopplasting",
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
    link: "/webwork",
    title: "Nettsider",
    subpages: [...],
  },
  {
    id: 3,
    link: "/webwork/rankingapp",
    title: "Ranking app",
  },
  {
    id: 4,
    link: "/webwork/videoopplasting",
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
Hent pages for Home
=============================

Home trenger pages for å generere <SquareLink>-er
*/

export const webworkInfo = pagesInfo.find(
  (element) => element.link === "/webwork"
).subpages;
export const graphicworkInfo = pagesInfo.find(
  (element) => element.link === "/graphicwork"
).subpages;
export const galleryInfo = pagesInfo.find(
  (element) => element.link === "/gallery"
);

export default pagesInfo;
