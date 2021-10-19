import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LoadingSpinner from "./components/layout/LoadingSpinner";

// images
import photo from "./images/cvphoto1.jpg";
import macleanImg from "./images/maclean/alistairmaclean.png";
import rankingappImg from "./images/rankingapp/rankingapp.png";
import videoopplastingImg from "./images/www-teknologi/prosjekt2-5-videoside.png";
import galleryImg from "./images/gallery/gallery1.png";

// pages
const Home = lazy(() => import("./pages/Home"));
const Webwork = lazy(() => import("./pages/Webwork"));
const Rankingapp = lazy(() => import("./pages/Rankingapp"));
const Videoopplasting = lazy(() => import("./pages/Videoopplasting"));
const Maclean = lazy(() => import("./pages/Maclean"));
const Gallery = lazy(() => import("./pages/Gallery"));

export const pagesInfo = [
  {
    id: 1,
    path: "/",
    exact: true, // bestemme om <Route path=""> skal ha exact
    exactActiveClassName: true, // bestemme om <NavLink to=""> skal ha exact
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
    exact: true,
    exactActiveClassName: false,
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
        title: <>Videoopplastings&shy;apper</>,
        heading: <h1>Videoopplastings&shy;apper</h1>,
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
    path: "/gallery",
    title: "Kunst",
    page: <Gallery />,
    imgSrc: galleryImg,
    imgAlt: "gallery"
  },
];

// Bring nested array ett nivå opp
// Klipper ut nested array og lager en ny array hvor alle elementene er på samme nivå.
// En slags array.flat(), bare at denne funker
const nestedArray = pagesInfo.find((page) => page.subpages).subpages;
const pagesInfoWithoutNestedArray = pagesInfo.filter(() => nestedArray);
const flatPagesInfo = [...pagesInfoWithoutNestedArray, ...nestedArray];

function App() {
  return (
    <Router basename="portfolio">
      <Suspense
        fallback={
          <div className="center-content">
            <LoadingSpinner />
          </div>
        }
      >
        <div className="oldbody">
          <Header>
            <div className="container">
              <Switch>
                {flatPagesInfo.map((page) => {
                  return (
                    <Route key={page.id} path={page.path} exact={page.exact}>
                      {page.heading ? page.heading : <h1>{page.title}</h1>}
                    </Route>
                  );
                })}
              </Switch>
            </div>
          </Header>
          <Nav />
          <Main>
            <div className="container">
              <Switch>
                {flatPagesInfo.map((page) => {
                  return (
                    <Route key={page.id} path={page.path} exact={page.exact}>
                      {page.page}
                    </Route>
                  );
                })}
              </Switch>
            </div>
          </Main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
