import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import About from "./components/About.js";
import Header from "./components/Header.js";
import Links from "./components/Links.js";
import Images from "./components/Images.js";
import Works from "./components/Works.js";
import Footer from "./components/Footer.js";
import "./css/App.css";

const App = (props) =>
  (
    <div className="App">
    <Header />
    <HashRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gifs" component={Gifs} />
    <Route path="/works" component={Works} />
    </Switch>
    </HashRouter>
    <Footer />
    </div>
  );
  

const Home = () => (
  <div>
    <About />
    <Works />
    <Links />
  </div>
);

const Gifs = () => (
  <div>
    <Images />
  </div>
);
export default App;
