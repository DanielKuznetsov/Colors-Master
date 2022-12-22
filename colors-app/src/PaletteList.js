import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Palette List</h1>
        {palettes.map((palette) => (
            <MiniPalette {...palette}/>



        //   <Link key={palette.id} to={`/palette/${palette.id}`}>
        //     <p>{palette.paletteName}</p>
        //   </Link>
        ))}
      </div>
    );
  }
}
