import { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import DraggableColorList from "./DraggableColorList";
import "../styles/NewPaletteForm.scss";
import PaletteMetaForm from "./PaletteMetaForm";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: `calc(100vh - 64px)`,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NewPaletteForm({ saveNewPalette, palettes }, props) {
  const { maxColors = 20 } = props;

  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colors, setColors] = useState([...palettes[0].colors]);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
    };
    setColors([...colors, newColor]);
    setNewColorName("");
  };

  const handleChange = (evt) => {
    setNewColorName(evt.target.value);
  };

  const handleTValidatorChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });

    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase().trim()
      );
    });
  });

  const handleSubmit = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      colors: colors,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji,
    };
    saveNewPalette(newPalette);

    navigate("/");
  };

  const removeColor = (name) => {
    setColors(colors.filter((color) => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const addRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;

    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];

      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }

    setColors([...colors, randomColor]);
  };

  const isPaletteFull = colors.length >= maxColors;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <PaletteFormNavbar open={open} /> */}
      <CssBaseline />
      <AppBar className="appBar" position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            {/* <MenuIcon /> */}
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
        <div className="navBtns">
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            newPaletteName={newPaletteName}
            handleTValidatorChange={handleTValidatorChange}
            colors={colors}
          />
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back!
            </Button>
          </Link>
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="drawerContainer">
          <h4 className="colorPickerTitle">Design Your Palette</h4>
          <div className="buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setColors([])}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={isPaletteFull}
              style={{ color: isPaletteFull ? "black" : "white" }}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            className="colorPicker"
            color={currentColor}
            onChangeComplete={updateCurrentColor}
          />
          <ValidatorForm className="validForm" onSubmit={addNewColor}>
            <TextValidator
              placeholder="Add color name"
              className="colorNameInput"
              variant="filled"
              value={newColorName}
              onChange={handleChange}
              validators={[
                "required",
                "isColorNameUnique",
                "isColorUnique",
                "required",
              ]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used",
                "The name field is required",
              ]}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: isPaletteFull ? "grey" : currentColor,
                color: isPaletteFull ? "white" : "black",
              }}
              type="submit"
              disabled={isPaletteFull}
              className="addColor"
            >
              {isPaletteFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </Main>
    </Box>
  );
}
