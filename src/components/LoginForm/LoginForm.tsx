import { Box, Button, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const LoginForm: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <TextField
          required
          id="username-input"
          name="username"
          label="Username"
          type="text"
          autoComplete="off"
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained">
          Login{" "}
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
