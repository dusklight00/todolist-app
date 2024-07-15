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

function RegisterPage() {
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
              // onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained">Register</Button>
            <p>
              Have an account? <Link href="/">Login</Link>
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

export default RegisterPage;
