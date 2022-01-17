import { lazy } from "react";

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
        path: "/webwork/extraoptical",
        title: "Extra Optical",
        page: <Extraoptical />,
        imgSrc: extraopticalImg,
        imgAlt: "Extraoptical logo",
        tools: ["Magento2", "PHTML", "CSS"]
      },
      {
        id: 4,
        path: "/webwork/dokker",
        title: "Dokker",
        page: <Dokker />,
        imgSrc: dokkerImg,
        imgAlt: "Dokker logo",
        tools: ["React", "TypeScript", "JSX", "CSS"],
      },
      {
        id: 5,
        path: "/webwork/rankingapp",
        title: "Ranking app",
        page: <Rankingapp />,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", "Relasjonsdatabase", "MySQL"],
        thereAreMoreTools: true,
      },
      {
        id: 6,
        path: "/webwork/videoopplasting",
        title: <>Video&shy;opplastings&shy;apper</>,
        heading: <h1>Video&shy;opplastings&shy;apper</h1>,
        page: <Videoopplasting />,
        imgSrc: videoopplastingImg,
        imgAlt: "Videoopplasting app",
        tools: ["PHP", "LitElement", "JavaScript"],
        thereAreMoreTools: true,
      },
      {
        id: 7,
        path: "/webwork/maclean",
        title: "Alistair MacLean nettside redesign",
        page: <Maclean />,
        imgSrc: macleanImg,
        imgAlt: "MacLean page",
        tools: ["HTML", "CSS", "Photoshop"],
        thereAreMoreTools: true,
      },
      {
        id: 8,
        path: "/webwork/portfolios",
        title: "Portefølje (og tidligere versjoner)",
        page: <Portfolios />,
        imgSrc: portfoliosImg,
        imgAlt: "porteføljer side",
        tools: ["React", "JavaScript", "JSX", "CSS"],
        thereAreMoreTools: true,
      },
    ],
  },
  {
    id: 9,
    path: "/graphicwork",
    exact: true,
    exactActiveClassName: false,
    title: "Grafisk",
    page: <Graphicwork />,
    subpages: [
      {
        id: 10,
        path: "/graphicwork/artistbooking",
        title: "Artist booking app",
        page: <Artistbooking />,
        imgSrc: artistbookingImg,
        imgAlt: "Artist booking app",
        tools: ["Adobe XD"],
      },
      {
        id: 11,
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
    id: 12,
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
Liste over route paths som ikke inneholder language parameters
=============================

F.eks. Dette er uten lang param: "/webwork/extraoptical"
Dette er med lang param:         "/no/webwork/extraoptical"

Etter flerspråkelige oppdateringen av nettsiden har det blitt obligatorisk
å prefixe hver route med "/no" eller "/en".
I tilfelle noen prøver å følge lenka til den gamle porteføljen, må de
bli automatisk redirected til de nye. App component sørger for å
redirecte gamle routes til nye, men trenger denne arrayen for å vite
hvordan de uten lang param ser ut
*/
export const routePathsWithoutLangParam = [
  "/",
  "/webwork",
  "/webwork/extraoptical",
  "/webwork/dokker",
  "/webwork/rankingapp",
  "/webwork/videoopplasting",
  "/webwork/maclean",
  "/webwork/portfolios",
  "/graphicwork",
  "/graphicwork/artistbooking",
  "/graphicwork/jrnm",
  "/gallery",
];


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
