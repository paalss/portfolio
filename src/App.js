import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pagesInfo from "./pagesInfo";

// components
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LoadingSpinner from "./components/layout/LoadingSpinner";

/*
Kan sikkert flyttes til pagesInfo

For å loope gjennom sidene og lage router, må alle sidene (objektene) ligge på samme nivå i en array.
subpages objektene i pagesInfo må derfor bringes opp et hakk.

pagesInfo:
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


flatPagesInfo:
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


console.log(pagesInfo);

let subpages = pagesInfo.flatMap((page) => {
  return page.subpages ? page.subpages : "no subpages";
});
subpages = subpages.filter((e) => e !== "no subpages");
console.log('subpages:', subpages);

const flatPagesInfo = [...pagesInfo, ...subpages];
console.log(flatPagesInfo);

function App() {
  return (
    <Router basename="portfolio">
      <Suspense
        fallback={
          <div className="center-content-fullscreen">
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
