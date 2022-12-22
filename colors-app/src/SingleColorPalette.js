import React, { Component } from "react";
import "./SingleColorPalette.scss";
import { seedColors } from "./seedColors";
import { useParams, useState } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./Color-box.js";

export default function SingleColorPalette() {
  const { paletteId } = useParams();
  const { colorId } = useParams();

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
      background={color[1][0].hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single COlor Boxes</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
