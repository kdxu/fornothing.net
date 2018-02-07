import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Gifs from './Gifs';
import Works from './Works';
import Footer from './Footer';
import '../css/App.css';

export default () => (
  <div>
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
