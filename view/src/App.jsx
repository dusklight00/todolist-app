import { Container, Button } from "@mui/material";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <Container className="pt-24">
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Task
        </Button>
        <TaskCard />
      </Container>
    </>
  );
}

export default App;
