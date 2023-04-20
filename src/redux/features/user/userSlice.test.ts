import {type UserState, type User} from "./types";
import {loginUserActionCreator, userReducer} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an initial state and an action to login a user with their email, name and surname", () => {
    test("Then it should return a new state with the email, name and surname of the user and the property isLogged set to true", () => {
      const initialState: UserState = {
        email: "",
        isLogged: false,
        name: "",
        surname: "",
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
      const newState = userReducer(initialState, loginUserAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
