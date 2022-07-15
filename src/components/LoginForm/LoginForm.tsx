import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState, useEffect } from "react";
import { LoginUser } from "../../redux/interfaces/UserInterfaces";

const LoginForm: FunctionComponent = (): JSX.Element => {
  const formInitialState = { username: "", password: "" } as LoginUser;

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  useEffect(() => {
    if (formData.password && formData.username) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [formData]);

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <TextField
          required
          name="username"
          label="Username"
          type="text"
          id="username"
          value={formData.username}
          onChange={changeData}
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={changeData}
        />
        <Button type="submit" variant="contained" disabled={buttonDisabled}>
          Login{" "}
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
