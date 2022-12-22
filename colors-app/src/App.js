import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
    </Routes>
  );
}
export default App;