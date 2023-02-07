import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import { seedColors } from "./helpers/seedColors";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App(props) {
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
      <Route path="*" element={<PaletteList palettes={palettes} />} />
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
