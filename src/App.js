import React, { Component } from 'react';
import icon from './icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h1 className="App-title">fornothing.net</h1>
        </header>
        <h2> About </h2>
          Kyoko Kadowaki. boxing, swimming, and running tiny company.
        <hr/>
        <h2> Links </h2>
        <ul>
          <li><a href="https://github.com/kdxu">github</a></li>
          <li><a href="https://twitter.com/kdxu">twitter</a></li>
          <li><a href="https://medium.com/@kdxu">medium</a></li>
          <li><a href="https://keybase.io/kdxu">keybase</a></li>
        </ul>
        <hr/>
          kyoko.kadowaki [at] gmail.com
      </div>
    );
  }
}

export default App;
