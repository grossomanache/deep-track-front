import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

import {
  UserData,
  LoginUser,
  ApiLoginResponse,
} from "../../interfaces/UserInterfaces";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice";
import { notify } from "../../../utils/toast";

export const loginUserThunk =
  (loginInformation: LoginUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const route: string = `${process.env.NEXT_PUBLIC_API_URL}user/login`;
      const {
        data: { token },
      }: ApiLoginResponse = await axios.post(route, loginInformation);
      localStorage.setItem("token", token);
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
      notify({
        message: "Successfully logged in",
        type: "success",
      });
    } catch (error) {
      notify({ message: "Incorrect username and/or password", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const logOutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutActionCreator());
  dispatch(finishedLoadingActionCreator());
};
