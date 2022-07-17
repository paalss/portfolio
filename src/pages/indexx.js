import React, { Suspense } from "react";
import { flatPagesInfo as pagesInfo } from "../pagesInfo";
import paalssInfo from "../jsonLdSchema";

// components
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import LoadingSpinner from "../components/layout/LoadingSpinner";

// react lingui
import { Trans } from "@lingui/macro";

const Indexx = () => (
  <>
    {/* plasser JSON LD (med schema.org) inn i dokumentet: */}
    <script type="application/ld+json">{JSON.stringify(paalssInfo)}</script>
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
                {pagesInfo.map((page) => (
                  <Route key={page.id} path={page.link} exact={page.exact}>
                    {page.heading ? page.heading : <h1>{page.title}</h1>}
                  </Route>
                ))}
                <Route path="*">
                  <h1>
                    <Trans>404 - Siden finnes ikke</Trans>
                  </h1>
                </Route>
              </Switch>
            </div>
          </Header>
          <Nav />
          <Main>
            <div className="container">
              <Switch>
                {pagesInfo.map((page) => (
                  <Route key={page.id} path={page.link} exact={page.exact}>
                    {page.page}
                  </Route>
                ))}
              </Switch>
            </div>
          </Main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  </>
);

export default Indexx;
