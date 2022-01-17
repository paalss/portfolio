import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { flatPagesInfo, routePathsWithoutLangParam } from "./pagesInfo";
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
      {routePathsWithoutLangParam.map((path) => (
        <Route exact path={path}>
          <Redirect to={`/no${path}`} />
        </Route>
      ))}
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
                <HeaderRoutes />
                <Route path="*">
                  <h1>404 - Page not found</h1>
                </Route>
              </Switch>
            </div>
          </Header>
          <Nav />
          <Main>
            <div className="container">
              <Switch>
                <MainRoutes />
              </Switch>
            </div>
          </Main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

function HeaderRoutes() {
  return flatPagesInfo.map((page) => (
    <Route key={page.id} path={`/:lang(no|en)${page.path}`} exact={page.exact}>
      {page.heading ? page.heading : <h1>{page.title}</h1>}
    </Route>
  ));
}

function MainRoutes() {
  return flatPagesInfo.map((page) => (
    <Route key={page.id} path={`/:lang(no|en)${page.path}`} exact={page.exact}>
      {page.page}
    </Route>
  ));
}

export default App;
