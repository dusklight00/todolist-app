import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import instance from "../../instance";

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

function CreateButton({ fetchTasks }) {
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const username = localStorage.getItem("username");
    const response = await instance.get("/insert_task", {
      params: {
        username: username,
        task_name: task,
        description: description,
      },
    });
    setMessage(response.data.message);
    setOpenSnackbar(true);
    handleClose();
    fetchTasks();
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

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
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Create Task
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </>
  );
}

export default CreateButton;
