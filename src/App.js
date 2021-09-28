// import classes from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Rankingapp from "./pages/Rankingapp";
import Videoopplasting from "./pages/Videoopplasting";
import Maclean from "./pages/Maclean";
import Gallery from "./pages/Gallery";

// components
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

// images
import photo from "./images/cvphoto1.jpg";

function App() {
  return (
    <Router>
      <div className="oldbody index">
        <Header>
          <div className="container">
            <div>
              <h1>Pål Stakvik</h1>
              <p className="tagline">Utdannet web&shy;utvikler</p>
            </div>
            <div className="circle-frame">
              <img src={photo} alt="Pål Stakvik" />
            </div>
          </div>
        </Header>
        <Nav page="index" />
        <Main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/webWork/rankingapp">
              <Rankingapp />
            </Route>
            <Route path="/webWork/videoopplasting">
              <Videoopplasting />
            </Route>
            <Route path="/webWork/maclean">
              <Maclean />
            </Route>
            <Route path="/webWork/gallery">
              <Gallery />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
