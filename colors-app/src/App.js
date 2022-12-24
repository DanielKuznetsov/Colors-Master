import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        exact
        path="/palette/:paletteId"
        element={<Palette palettes={palettes} />}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palettes={palettes} />}
      />
      <Route
        exact
        path="/palette/new"
        element={
          <NewPaletteForm palettes={palettes} saveNewPalette={savePalette} />
        }
      />
    </Routes>
  );
}
export default App;
