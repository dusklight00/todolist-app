import { Container, Typography, Button, Stack } from "@mui/material";
import CreateButton from "./components/CreateButton";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <Container>
        <Typography variant="h3" className="py-16">
          Good Morning, <strong>Dusk</strong>!
        </Typography>
        <Stack direction="row" spacing={2}>
          <CreateButton />
          <Button size="large">Logout</Button>
        </Stack>
        <TaskCard task="Complete Homework" description="Before Tomorrow" />
        <TaskCard task="Complete Homework" description="Before Tomorrow" />
      </Container>
    </>
  );
}

export default App;
