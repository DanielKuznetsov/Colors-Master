import React, { Component } from "react";
import "./DraggableColorBox.scss";

export default class DraggableColorBox extends Component {
  render() {
    return (
      <div
        className="DraggableColorBox"
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.color}
        {this.props.name}
      </div>
    );
  }
}
