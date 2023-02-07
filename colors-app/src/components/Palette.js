import "../styles/Palette.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./Color-box.js";
import Navbar from "./Navbar.js";
import PaletteFooter from "./PaletteFooter.js";
import { generatePalette } from "../helpers/colorHelpers";

export default function Palette({ palettes }) {
  const { paletteId } = useParams(); //useParams to get the :paletteId

  const findPalette = (id) => {
    // same findPalette function in the lesson
    return palettes.find(function (palette) {
      return palette.id === id;
    });
  };

  // this used to be the palette prop, now simply defined inside of Palette.js
  const palette = generatePalette(findPalette(paletteId));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={paletteId}
      showLink={true}
    />
  ));

  const changeLevel = (level) => {
    setLevel(level);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={true}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
