import React, { useEffect } from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import CreateButton from "../components/CreateButton";
import TaskCard from "../components/TaskCard";
import Hero from "../components/Hero";
import instance from "../../instance";

function DashboardPage() {
  const [tasks, setTasks] = React.useState([]);

  const fetchTasks = async () => {
    const username = localStorage.getItem("username");
    const response = await instance.get("/get_task", {
      params: {
        username: username,
      },
    });
    setTasks(response.data.tasks);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      window.location.href = "/";
    }
    fetchTasks();
  }, []);

  return (
    <Container>
      <Hero />
      <Stack direction="row" spacing={2}>
        <CreateButton fetchTasks={fetchTasks} />
        <Button size="large" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>

      {tasks.map((task, index) => (
        <TaskCard
          task={task.task_name}
          description={task.description}
          key={index}
          task_id={task.id}
          fetchTasks={fetchTasks}
        />
      ))}
    </Container>
  );
}

export default DashboardPage;
