import React, { Component } from "react";
import "./DraggableColorBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";

export default class DraggableColorBox extends Component {
  render() {
    return (
      <div
        className="DraggableColorBox"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="boxContent">
          <span>{this.props.name}</span>
          <DeleteIcon className="deleteIcon" />
        </div>
      </div>
    );
  }
}
