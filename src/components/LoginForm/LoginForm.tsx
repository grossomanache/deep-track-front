import { Box, Button, TextField, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { LoginUser } from "../../redux/interfaces/UserInterfaces";

const LoginForm: FunctionComponent = (): JSX.Element => {
  const formInitialState = { username: "", password: "" } as LoginUser;

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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
