import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Link,
} from "@mui/material";

import instance from "../../instance";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async () => {
    const response = await instance.get("/login", {
      params: {
        username: username,
        password: password,
      },
    });
    setMessage(response.data.message);
    setOpen(true);
    if (response.data.success) {
      localStorage.setItem("username", username);
      setInterval(() => {
        window.location.href = "/dashboard";
      }, 1000);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <Container className="h-[100vh] flex place-content-center" maxWidth="sm">
      <Card>
        <CardContent>
          <Stack gap={3}>
            <Typography variant="h5">
              <b>Login</b>
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
            <p>
              Don't have an account? <Link href="/register">Register</Link>
            </p>
          </Stack>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
          />
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginPage;
