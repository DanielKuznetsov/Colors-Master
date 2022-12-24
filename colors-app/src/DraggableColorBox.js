import React, { Component } from "react";
import "./DraggableColorBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DraggableColorBox({ handleClick, name, color }) {
  return (
    <div className="DraggableColorBox" style={{ backgroundColor: color }}>
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon className="deleteIcon" onClick={handleClick} />
      </div>
    </div>
  );
}
