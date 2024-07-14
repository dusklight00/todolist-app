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

function LoginPage() {
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
              // onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained">Login</Button>
            <p>
              Don't have an account? <Link href="/register">Register</Link>
            </p>
          </Stack>
          <Snackbar
            // open={snackOpen}
            autoHideDuration={6000}
            // onClose={() => {
            //   setSnackOpen(false);
            // }}
            // message={snackMessage}
          />
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginPage;
