import { lifecycle } from "recompose";
import BodyView from "./components/BodyView";
import React from "react";

const App = lifecycle({
  componentDidMount() {
  }
})(function App() {
  return(
    <div className="App">
      <BodyView />
    </div>
)});

export default App;
