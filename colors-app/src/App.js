import Pallete from "./Palette.js";
import {seedColors} from "./seedColors.js";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Pallete {...seedColors[1]}/>
      </div>
    );
  }
}

export default App;
