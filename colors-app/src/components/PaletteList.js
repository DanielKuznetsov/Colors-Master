import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import bg from "../bg.svg"

const styles = {
  root: {
    backgroundColor: "#404180",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: 'scroll',
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    margin: "2rem 0",
    "& a": {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, i) => (
              <MiniPalette key={i} {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
