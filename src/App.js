import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About.js';
import Header from './Header.js';
import Links from './Links.js'
import Images from './Images.js';
import './App.css';

const App = () => (
  <div className="App">
  <Header />
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/gifs' component={Gifs} />
    </div>
  </BrowserRouter>
  <footer>
  kyoko.kadowaki [at] gmail.com
  </footer>
  </div>
)

const Home = () => (
      <div>
      <About />
      <Links />
      </div>
);

const Gifs = () => (
      <div>
      <Images / >
      </div>
);
export default App;
