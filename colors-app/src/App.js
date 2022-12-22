import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:paletteId" element={<Palette />} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<h1>Single color page</h1>}
      />
    </Routes>
  );
}
export default App;
