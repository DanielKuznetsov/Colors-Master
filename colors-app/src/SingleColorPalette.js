import React, { Component } from "react";
import "./SingleColorPalette.scss";
import { seedColors } from "./seedColors";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./Color-box.js";
import Navbar from "./Navbar.js";
import PaletteFooter from "./PaletteFooter";

export default function SingleColorPalette() {
  const { paletteId } = useParams();
  const { colorId } = useParams();
  const [format, setFormat] = useState("hex");

  const findPalette = (id) => {
    //same findPalette function in the lesson
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  const palette = generatePalette(findPalette(paletteId));

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    // Looping through an Object
    for (let key in allColors) {
      shades.push([
        key,
        allColors[key].filter((el) => el.id === colorToFilterBy),
      ]);
    }

    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color[1][0].name}
      name={color[1][0].name}
      background={color[1][0][format]}
      showLink={false}
    />
  ));

  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
