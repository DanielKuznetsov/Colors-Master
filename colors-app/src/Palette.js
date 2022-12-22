import React, { Component } from "react";
import ColorBox from "./Color-box.js";
import Slider from "rc-slider"; 
import "rc-slider/assets/index.css";
import "./Pallete.scss";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="Pallete">
        <div className="Slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* {footer} */}
      </div>
    );
  }
}
