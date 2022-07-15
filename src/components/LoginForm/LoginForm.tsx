import { Box, Button, TextField, Typography } from "@mui/material";
import {
  ChangeEvent,
  FunctionComponent,
  useState,
  useEffect,
  FormEvent,
} from "react";
import { LoginUser } from "../../redux/interfaces/UserInterfaces";
import { useAppDispatch } from "../../redux/store/hooks";
import { loginUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { LoginFormContainer } from "./LoginFormContainer";

const LoginForm: FunctionComponent = (): JSX.Element => {
  const formInitialState = { username: "", password: "" } as LoginUser;

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  const loginUser = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetForm();
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
      <LoginFormContainer>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={loginUser}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <TextField
            required
            name="username"
            label="username"
            type="text"
            id="username"
            value={formData.username}
            onChange={changeData}
            className="login-form__input"
          />
          <TextField
            required
            name="password"
            label="password"
            type="password"
            id="password"
            value={formData.password}
            onChange={changeData}
            className="login-form__input"
          />
          <Button type="submit" variant="contained" disabled={buttonDisabled}>
            Login{" "}
          </Button>
        </Box>
      </LoginFormContainer>
    </>
  );
};

export default LoginForm;
