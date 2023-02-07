import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    padding: "0.8rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "15rem",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1.2rem",
    position: "relative",
  },
  emoji: {
    marginleft: "0.5rem",
    fontSize: "2rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-2.5px",
    position: "relative",
  },
  link: {
    textDecoration: "none",
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id } = props;

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  return (
    <Link className={classes.link} to={`/palette/${id}`}>
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </Link>
  );
}

export default withStyles(styles)(MiniPalette);
