import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

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
