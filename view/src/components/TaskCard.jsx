import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import instance from "../../instance";

function TaskCard({ task, description, task_id, fetchTasks }) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleDelete = async () => {
    const username = localStorage.getItem("username");
    const response = await instance.get("/delete_task", {
      params: {
        username: username,
        task_id: task_id,
      },
    });
    fetchTasks();
  };

  return (
    <Card variant="outlined" className="my-5">
      <CardContent>
        <Stack direction="row" spacing={1}>
          <div>
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex flex-col justify-center flex-1 pl-5">
            <Typography
              variant="h6"
              className={`flex items-center ${isChecked ? "line-through" : ""}`}
            >
              {task}
            </Typography>
            {description ? (
              <Typography
                variant="h7"
                color="text.secondary"
                className={`flex items-center ${
                  isChecked ? "line-through" : ""
                }`}
              >
                {description}
              </Typography>
            ) : (
              ""
            )}
          </div>
          <div>
            <IconButton size="large" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
