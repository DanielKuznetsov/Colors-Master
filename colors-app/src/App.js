import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:paletteId" element={<Palette />} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palettes={seedColors} />}
      />
      <Route exact path="/palette/new" element={<NewPaletteForm />} />
    </Routes>
  );
}
export default App;
