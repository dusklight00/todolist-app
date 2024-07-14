import React from "react";
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

function TaskCard() {
  return (
    <Card variant="outlined" className="my-5">
      <CardContent>
        <Stack direction="row" spacing={1}>
          <div>
            <Checkbox
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex flex-col justify-center flex-1 pl-5">
            <Typography variant="h6">
              Complete Homework for Chemistry
            </Typography>
            <Typography
              variant="h7"
              color="text.secondary"
              className="flex items-center"
            >
              Complete Homework for Chemistry
            </Typography>
          </div>
          <div>
            <IconButton size="large">
              <DeleteIcon />
            </IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
