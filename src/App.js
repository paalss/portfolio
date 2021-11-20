import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { flatPagesInfo } from "./pagesInfo";
// import GA from "./utils/GoogleAnalytics";

// components
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LoadingSpinner from "./components/layout/LoadingSpinner";

function App() {
  return (
    <Router basename="portfolio">
      {/* { GA.init() && <GA.RouteTracker /> } */}
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
