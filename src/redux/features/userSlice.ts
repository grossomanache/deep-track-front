import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserState } from "../interfaces/UserInterfaces";

const initialState = {
  name: "",
  surname: "",
  username: "",
  logged: false,
  //logged: localStorage.getItem("token") ? true : false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: UserState, action: PayloadAction<UserData>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ name: "", surname: "", username: "", logged: false }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
