import { lazy } from "react";

// images
import photo from "./images/cvphoto1.jpg";
import macleanImg from "./images/maclean/alistairmaclean.png";
import rankingappImg from "./images/rankingapp/rankingapp.png";
import videoopplastingImg from "./images/www-teknologi/prosjekt2-5-videoside.png";
import artistbookingImg from "./images/artistbooking/Android-Mobile–6.png";
import jrNmImg from "./images/jr-nm-ski/IMG_2413.JPG"
import galleryImg from "./images/gallery/gallery1.png";

// pages. Lazy load for å forminske loade-tiden når du først besøker nettsiden. Spar loading til du besøker dem.
const Home = lazy(() => import("./pages/Home"));
const Webwork = lazy(() => import("./pages/Webwork"));
const Graphicwork = lazy(() => import("./pages/Graphicwork"));
const Rankingapp = lazy(() => import("./pages/Rankingapp"));
const Videoopplasting = lazy(() => import("./pages/Videoopplasting"));
const Maclean = lazy(() => import("./pages/Maclean"));
const Artistbooking = lazy(() => import("./pages/Artistbooking"));
const JRNM = lazy(() => import("./pages/JRNM"));
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
        path: "/webwork/rankingapp",
        title: "Ranking app",
        page: <Rankingapp />,
        imgSrc: rankingappImg,
        imgAlt: "Ranking app",
        tools: ["TypeScript", "PHP", "Relasjonsdatabase", "MySQL"],
        thereAreMoreTools: true,
      },
      {
        id: 4,
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
        id: 5,
        path: "/webwork/maclean",
        title: "Alistair MacLean nettside redesign",
        page: <Maclean />,
        imgSrc: macleanImg,
        imgAlt: "MacLean page",
        tools: ["HTML", "CSS"],
      },
    ],
  },
  {
    id: 6,
    path: "/graphicwork",
    exact: true,
    exactActiveClassName: false,
    title: "Grafisk",
    page: <Graphicwork />,
    subpages: [
      {
        id: 7,
        path: "/graphicwork/artistbooking",
        title: "Artist booking app",
        page: <Artistbooking />,
        imgSrc: artistbookingImg,
        imgAlt: "Artist booking app",
        tools: ["Adobe XD"],
      },
      {
        id: 8,
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
    id: 9,
    path: "/gallery",
    title: "Kunst",
    page: <Gallery />,
    imgSrc: galleryImg,
    imgAlt: "gallery",
  },
];

export default pagesInfo;
