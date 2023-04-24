import { type UserState, type User } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  const initialState: UserState = {
    email: "",
    isLogged: false,
    name: "",
    surname: "",
  };

  describe("When it receives a current state and an action to login a user with their email, name and surname", () => {
    test("Then it should return a new state with the email, name and surname of the user and the property isLogged set to true", () => {
      const currentState: UserState = {
        ...initialState,
      };

      const user: User = {
        email: "james@gmail.com",
        name: "James",
        surname: "Smith",
      };

      const expectedNewState: UserState = {
        email: user.email,
        name: user.name,
        surname: user.surname,
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);
      const newState = userReducer(currentState, loginUserAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives the action to logout a user", () => {
    test("Then it should return a new state equal to the initial state, with the property isLogged set to false", () => {
      const currentState: UserState = {
        email: "james@gmail.com",
        name: "James",
        surname: "Smith",
        isLogged: true,
      };

      const logoutUserAction = logoutUserActionCreator();
      const newState = userReducer(currentState, logoutUserAction);

      expect(newState).toStrictEqual(initialState);
    });
  });
});
