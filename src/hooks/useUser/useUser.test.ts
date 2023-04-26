import { renderHook } from "@testing-library/react-native";
import useUser from "./useUser";
import Wrapper from "../../utils/Wrapper";
import { store } from "../../store/redux/store";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/redux/features/user/userSlice";
import Routes from "../../navigation/routes";
import authorizedUser from "./data/authorizedUser";
import { type UserCredentials } from "./types";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNavivation = jest.requireActual("@react-navigation/native");
  return {
    ...actualNavivation,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => jest.clearAllMocks());

describe("Given a useUser hook", () => {
  describe("When the handleLogout function is called", () => {
    test("Then the dispatch should be called with the action to log out the user", () => {
      const {
        result: {
          current: { handleLogout },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const expectedAction = logoutUserActionCreator();

      handleLogout();

      expect(spyDispatch).toHaveBeenCalledWith(expectedAction);
    });

    test("Then user should be redirected to the login screen", () => {
      const {
        result: {
          current: { handleLogout },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const expectedRoute = Routes.login;

      handleLogout();

      expect(mockedNavigate).toHaveBeenCalledWith(expectedRoute);
    });
  });

  describe("When the loginUser function is called with the correct credentials", () => {
    test("Then the dispatch should be called two times, to log in the user and to load the hero initial state", async () => {
      const userCredentials: UserCredentials = {
        email: authorizedUser.email,
        password: authorizedUser.password,
      };
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const expectedCalledTimes = 2;

      await loginUser(userCredentials);

      expect(spyDispatch).toHaveBeenCalledTimes(expectedCalledTimes);
    });
  });

  describe("When the loginUser function is called with the wrong credentials", () => {
    test("Then the dispatch should not be called", async () => {
      const userCredentials: UserCredentials = {
        email: "charles@gmail.com",
        password: "charles1234",
      };

      const expectedError = new Error("Wrong credentials");

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      try {
        await loginUser(userCredentials);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });
  });
});
