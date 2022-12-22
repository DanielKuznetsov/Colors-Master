import Pallete from "./Palette.js";
import { seedColors } from "./seedColors.js";
import React, { Component } from "react";
import { generatePalette } from "./colorHelpers.js";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<h1>PALETTE GOES HERE</h1>} />
        <Route
          exact
          path="/palette/:id"
          element={<h1>INDIVIDUAL PALETTE</h1>}
        />
      </Routes>
      // <div>
      //   <Pallete palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
