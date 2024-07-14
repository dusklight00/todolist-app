import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CreateButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Create Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Task
            </Typography>
            <TextField
              label="What do you want to do?"
              variant="outlined"
              fullWidth
              // onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              // onChange={(e) => setUsername(e.target.value)}
            />
            <Button variant="contained" size="large">
              Create Task
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default CreateButton;
