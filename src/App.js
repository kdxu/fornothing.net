import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./components/About.js";
import Header from "./components/Header.js";
import Links from "./components/Links.js";
import Images from "./components/Images.js";
import Footer from "./components/Footer.js";
import "./css/App.css";

const App = () =>
  (
    <div className="App">
    <Header />
    <HashRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gifs" component={Gifs} />
    </Switch>
    </HashRouter>
    <Footer />
    </div>
  );
  

const Home = () => (
  <div>
    <About />
    <Links />
  </div>
);

const Gifs = () => (
  <div>
    <Images />
  </div>
);
export default App;
