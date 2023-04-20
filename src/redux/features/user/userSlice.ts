import {type PayloadAction, createSlice} from "@reduxjs/toolkit";
import {type User, type UserState} from "./types";

const initialUserState: UserState = {
  email: "",
  name: "",
  surname: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>): UserState => ({
      ...currentState,
      email: action.payload.email,
      name: action.payload.name,
      surname: action.payload.surname,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const {loginUser: loginUserActionCreator} = userSlice.actions;
