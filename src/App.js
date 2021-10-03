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

// pages
const Home = lazy(() => import("./pages/Home"));
const Rankingapp = lazy(() => import("./pages/Rankingapp"));
const Videoopplasting = lazy(() => import("./pages/Videoopplasting"));
const Maclean = lazy(() => import("./pages/Maclean"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Webwork = lazy(() => import("./pages/Webwork"));

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
                <Route path="/" exact>
                  <div className="index-header-flex">
                    <div>
                      <h1>Pål Stakvik</h1>
                      <p className="tagline">Utdannet web&shy;utvikler</p>
                    </div>
                    <div className="circle-frame">
                      <img src={photo} alt="Pål Stakvik" />
                    </div>
                  </div>
                </Route>
                <Route path="/webwork" exact>
                  <h1>Nettsider</h1>
                </Route>
                <Route path="/webwork/rankingapp">
                  <h1>Ranking app</h1>
                </Route>
                <Route path="/webwork/videoopplasting">
                  <h1>Videoopplastings&shy;apper</h1>
                </Route>
                <Route path="/webwork/maclean">
                  <h1>Alistair MacLean nettside redesign</h1>
                </Route>
                <Route path="/webwork/gallery">
                  <h1>Kunst</h1>
                </Route>
              </Switch>
            </div>
          </Header>
          <Nav page="index" />
          <Main>
            <div className="container">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/webwork" exact>
                  <Webwork />
                </Route>
                <Route path="/webwork/rankingapp">
                  <Rankingapp />
                </Route>
                <Route path="/webwork/videoopplasting">
                  <Videoopplasting />
                </Route>
                <Route path="/webwork/maclean">
                  <Maclean />
                </Route>
                <Route path="/webwork/gallery">
                  <Gallery />
                </Route>
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
