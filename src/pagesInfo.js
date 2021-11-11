import { lazy } from "react";

// ---------------
// IMAGES
// ---------------

// home
import photo from "./images/cvphoto2.jpg";
// webwork
import dokkerImg from "./images/dokker/logo/dokkericon.png";
import rankingappImg from "./images/rankingapp/rankingapp.png";
import videoopplastingImg from "./images/www-teknologi/prosjekt2-5-videoside.png";
import macleanImg from "./images/maclean/alistairmaclean.png";
import portfoliosImg from "./images/portfolios/pf5.png";
// graphicwork
import artistbookingImg from "./images/artistbooking/Android-Mobile–6.png";
import jrNmImg from "./images/jr-nm-ski/IMG_2413.JPG";
// other
import galleryImg from "./images/gallery/gallery1.png";

// ---------------
// PAGES
// Lazy load for å forminske loade-tiden når du først besøker nettsiden. Spar loading til du besøker dem.
// ---------------

// home
const Home = lazy(() => import("./pages/Home"));
// webwork
const Webwork = lazy(() => import("./pages/Webwork"));
const Dokker = lazy(() => import("./pages/Dokker"));
const Rankingapp = lazy(() => import("./pages/Rankingapp"));
const Videoopplasting = lazy(() => import("./pages/Videoopplasting"));
const Maclean = lazy(() => import("./pages/Maclean"));
const Portfolios = lazy(()=> import("./pages/Portfolios"))
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
    title: "Hjem",
    heading: (
      <div className="index-header-flex">
        <div>
          <h1>Pål Stakvik</h1>
          <p className="tagline">Utdannet web&shy;utvikler</p>
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
    title: "Nettsider",
    page: <Webwork />,
    subpages: [
      {
        id: 3,
        path: "/webwork/dokker",
        title: "Dokker",
        page: <Dokker />,
        imgSrc: dokkerImg,
        imgAlt: "Dokker logo",
        tools: ["React", "TypeScript", "HTML", "CSS"],
      },
      {
        id: 4,
        path: "/webwork/rankingapp",
        title: "Ranking app",
        page: <Rankingapp />,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", "Relasjonsdatabase", "MySQL"],
        thereAreMoreTools: true,
      },
      {
        id: 5,
        path: "/webwork/videoopplasting",
        title: <>Video&shy;opplastings&shy;apper</>,
        heading: <h1>Video&shy;opplastings&shy;apper</h1>,
        page: <Videoopplasting />,
        imgSrc: videoopplastingImg,
        imgAlt: "Videoopplasting app",
        tools: ["PHP", "JavaScript", "LitElement"],
        thereAreMoreTools: true,
      },
      {
        id: 6,
        path: "/webwork/maclean",
        title: "Alistair MacLean nettside redesign",
        page: <Maclean />,
        imgSrc: macleanImg,
        imgAlt: "MacLean page",
        tools: ["HTML", "CSS", "Photoshop"],
        thereAreMoreTools: true,
      },
      {
        id: 7,
        path: "/webwork/portfolios",
        title: "Portefølje (og tidligere versjoner)",
        page: <Portfolios />,
        imgSrc: portfoliosImg,
        imgAlt: "porteføljer side",
        tools: ["React", "HTML", "CSS"],
        thereAreMoreTools: true,
      },
    ],
  },
  {
    id: 8,
    path: "/graphicwork",
    exact: true,
    exactActiveClassName: false,
    title: "Grafisk",
    page: <Graphicwork />,
    subpages: [
      {
        id: 9,
        path: "/graphicwork/artistbooking",
        title: "Artist booking app",
        page: <Artistbooking />,
        imgSrc: artistbookingImg,
        imgAlt: "Artist booking app",
        tools: ["Adobe XD"],
      },
      {
        id: 10,
        path: "/graphicwork/jrnm",
        title: "Jr NM ski 2015 logo",
        page: <JRNM />,
        imgSrc: jrNmImg,
        imgAlt: "Jr NM på ski logo",
        tools: ["Photoshop"],
      },
    ],
  },
  {
    id: 11,
    path: "/gallery",
    title: "Kunst",
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
let subpages = pagesInfo.flatMap((page) => {
  return page.subpages ? page.subpages : "no subpages";
});
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
