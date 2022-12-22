import Pallete from "./Palette.js";
import { seedColors } from "./seedColors.js";
import React, { Component } from "react";
import { generatePalette } from "./colorHelpers.js";

class App extends Component {
  render() {
    return (
      <div>
        <Pallete palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
