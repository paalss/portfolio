import { lazy } from "react";
import { Trans } from "@lingui/macro";

// ---------------
// IMAGES
// ---------------

// home
import photo from "./images/cvphoto2.webp";
// webwork
import extraopticalImg from "./images/extraoptical/logo/eo-icon.webp";
import dokkerImg from "./images/dokker/logo/dokkericon.webp";
import rankingappImg from "./images/rankingapp/rankingapp-small.webp";
import videoopplastingImg from "./images/www-teknologi/prosjekt2-5-videoside-small.webp";
import macleanImg from "./images/maclean/alistairmaclean.webp";
import portfoliosImg from "./images/portfolios/pf5.webp";
// graphicwork
import artistbookingImg from "./images/artistbooking/Android-Mobile–1.webp";
import jrNmImg from "./images/jr-nm-ski/IMG_2413-min-small.webp";
// other
import galleryImg from "./images/gallery/gallery1-small.webp";

// ---------------
// PAGES
// Lazy load for å forminske loade-tiden når du først besøker nettsiden. Spar loading til du besøker dem.
// ---------------

// home
const Home = lazy(() => import("./pages/Home"));
// webwork
const Webwork = lazy(() => import("./pages/Webwork"));
const Extraoptical = lazy(() => import("./pages/Extraoptical"));
const Dokker = lazy(() => import("./pages/Dokker"));
const Rankingapp = lazy(() => import("./pages/Rankingapp"));
const Videoopplasting = lazy(() => import("./pages/Videoopplasting"));
const Maclean = lazy(() => import("./pages/Maclean"));
const Portfolios = lazy(() => import("./pages/Portfolios"));
// graphicwork
const Graphicwork = lazy(() => import("./pages/Graphicwork"));
const Artistbooking = lazy(() => import("./pages/Artistbooking"));
const JRNM = lazy(() => import("./pages/JRNM"));
// other
const Gallery = lazy(() => import("./pages/Gallery"));

const pagesInfo = [
  {
    id: 1,
    path: "/",
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
          <img src={photo} alt="Pål Stakvik" />
        </div>
      </div>
    ),
    page: <Home />,
  },
  {
    id: 2,
    path: "/webwork",
    exact: true, // naviger til Webwork kun om path er eksakt "/webwork"
    exactActiveClassName: false, // uthev nav-link om path inneholder "/webwork"
    title: <Trans>Nettsider</Trans>,
    page: <Webwork />,
    subpages: [
      {
        id: 3,
        path: "/webwork/extraoptical",
        title: "Extra Optical",
        page: <Extraoptical />,
        imgSrc: extraopticalImg,
        imgAlt: "Extraoptical logo",
        tools: ["Magento2", "PHTML", "CSS"],
      },
      {
        id: 4,
        path: "/webwork/dokker",
        title: "Dokker",
        page: <Dokker />,
        imgSrc: dokkerImg,
        imgAlt: "Dokker logo",
        tools: ["React", "TypeScript", "CSS"],
      },
      {
        id: 5,
        path: "/webwork/rankingapp",
        title: "Ranking app",
        page: <Rankingapp />,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", <Trans>Relasjonsdatabase</Trans>, "MySQL"],
        thereAreMoreTools: true,
      },
      {
        id: 6,
        path: "/webwork/videoopplasting",
        title: <Trans>Video&shy;opplastings&shy;apper</Trans>,
        heading: (
          <h1>
            <Trans>Video&shy;opplastings&shy;apper</Trans>
          </h1>
        ),
        page: <Videoopplasting />,
        imgSrc: videoopplastingImg,
        imgAlt: <Trans>Videoopplastingsapp</Trans>,
        tools: ["PHP", "LitElement", "JavaScript"],
        thereAreMoreTools: true,
      },
      {
        id: 7,
        path: "/webwork/maclean",
        title: <Trans>Alistair MacLean nettside redesign</Trans>,
        page: <Maclean />,
        imgSrc: macleanImg,
        imgAlt: <Trans>MacLean side</Trans>,
        tools: ["HTML", "CSS", "Photoshop"],
        thereAreMoreTools: true,
      },
      {
        id: 8,
        path: "/webwork/portfolios",
        title: <Trans>Denne porteføljen</Trans>,
        page: <Portfolios />,
        imgSrc: portfoliosImg,
        imgAlt: <Trans>porteføljer side</Trans>,
        tools: ["React", "JavaScript", <>React&#8209;lingui</>],
        thereAreMoreTools: true,
      },
    ],
  },
  {
    id: 9,
    path: "/graphicwork",
    exact: true,
    exactActiveClassName: false,
    title: <Trans>Grafisk</Trans>,
    page: <Graphicwork />,
    subpages: [
      {
        id: 10,
        path: "/graphicwork/artistbooking",
        title: "Artist booking prototype",
        page: <Artistbooking />,
        imgSrc: artistbookingImg,
        imgAlt: "Artist booking hi-fi prototype",
        tools: ["Adobe XD"],
      },
      {
        id: 11,
        path: "/graphicwork/jrnm",
        title: "Jr NM ski 2015 logo",
        page: <JRNM />,
        imgSrc: jrNmImg,
        imgAlt: <Trans>Jr NM på ski logo</Trans>,
        tools: ["Photoshop"],
      },
    ],
  },
  {
    id: 12,
    path: "/gallery",
    title: <Trans>Kunst</Trans>,
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
    path: "/",
    title: "Hjem",
  },
  {
    id: 2,
    path: "/webwork",
    title: "Nettsider",
    subpages: [
      {
        id: 3,
        path: "/webwork/rankingapp",
        title: "Ranking app",
      },
      {
        id: 4,
        path: "/webwork/videoopplasting",
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
    path: "/",
    title: "Hjem",
  },
  {
    id: 2,
    path: "/webwork",
    title: "Nettsider",
    subpages: [...],
  },
  {
    id: 3,
    path: "/webwork/rankingapp",
    title: "Ranking app",
  },
  {
    id: 4,
    path: "/webwork/videoopplasting",
    title: "Videoopplastingsapper",
  }
  ...
];
*/

// pakk ut subPages der det finnes
let subpages = pagesInfo.flatMap((page) => page.subpages ? page.subpages : "no subpages")
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
  (element) => element.path === "/webwork"
).subpages;
export const graphicworkInfo = pagesInfo.find(
  (element) => element.path === "/graphicwork"
).subpages;
export const galleryInfo = pagesInfo.find(
  (element) => element.path === "/gallery"
);

export default pagesInfo;
