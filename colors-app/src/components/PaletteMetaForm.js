import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Picker from "@emoji-mart/react";

export default function PaletteMetaForm({
  handleSubmit,
  handleTValidatorChange,
  newPaletteName,
  colors,
}) {
  //   const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("");

  const handleClickOpen = () => {
    // setOpen(true);
    setStage("form");
  };

  const handleClose = () => {
    // setOpen(false);
    setStage("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = (emoji) => {
    handleSubmit(emoji.native);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
        <Picker onEmojiSelect={savePalette} />
      </Dialog>
      <Dialog open={stage === "form"} onClose={handleClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm className="valForm" onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beatiful palette. Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={handleTValidatorChange}
              fullWidth
              margin="normal"
              variant="filled"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter a palette name", "Name is already taken"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
