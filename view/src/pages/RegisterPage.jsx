import React from "react";
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

function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setOpen(true);
      return;
    }
    const response = await instance.get("/register", {
      params: {
        username: username,
        password: password,
      },
    });
    setMessage(response.data.message);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container className="h-[100vh] flex place-content-center" maxWidth="sm">
      <Card>
        <CardContent>
          <Stack gap={3}>
            <Typography variant="h5">
              <b>Register</b>
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Register
            </Button>
            <p>
              Have an account? <Link href="/">Login</Link>
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

export default RegisterPage;
