import "../styles/DraggableColorBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement(({ handleClick, name, color }) => {
  return (
    <div className="DraggableColorBox" style={{ backgroundColor: color }}>
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon className="deleteIcon" onClick={handleClick} />
      </div>
    </div>
  );
});

export default DraggableColorBox;
