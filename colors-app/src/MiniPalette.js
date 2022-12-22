import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    border: "1px solid black",
    padding: "0.8rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginleft: "0.5rem",
    fontSize: "2.5rem",
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  console.log(classes);

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
