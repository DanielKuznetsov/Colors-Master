import "../styles/SingleColorPalette.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { generatePalette } from "../helpers/colorHelpers";
import ColorBox from "./Color-box.js";
import Navbar from "./Navbar.js";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default function SingleColorPalette({palettes}) {
  const { paletteId } = useParams();
  const { colorId } = useParams();
  const [format, setFormat] = useState("hex");

  const findPalette = (id) => {
    //same findPalette function in the lesson
    return palettes.find(function (palette) {
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
    <div className="SingleColorPalette Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${paletteId}`} className="back-button">
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
