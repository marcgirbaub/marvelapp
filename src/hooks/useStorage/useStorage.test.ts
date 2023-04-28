import { renderHook } from "@testing-library/react-native";
import { store } from "../../store/redux/store";
import useStorage from "./useStorage";
import Wrapper from "../../utils/Wrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useStorage hook", () => {
  describe("When the getFromStorage function is called", () => {
    test("Then the getItem method from AsyncStorage should be called with `name`, `surname` and `email`", async () => {
      const {
        result: {
          current: { getFromStorage },
        },
      } = renderHook(() => useStorage(), { wrapper: Wrapper });

      await getFromStorage();

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("name");
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("surname");
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("email");
    });
  });

  describe("When the getFromStorage function is called and there is data from the user storaged in the AsyncStorage", () => {
    test("Then the dispatch should be called", async () => {
      const {
        result: {
          current: { getFromStorage },
        },
      } = renderHook(() => useStorage(), { wrapper: Wrapper });

      AsyncStorage.getItem = jest.fn().mockReturnValue("user");

      await getFromStorage();

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When the removeFromStorage function is called", () => {
    test("Then the removeItem method from AsyncStorage should be called three times", async () => {
      const expectedNumberOfCalls = 3;

      const {
        result: {
          current: { removeFromStorage },
        },
      } = renderHook(() => useStorage(), { wrapper: Wrapper });

      await removeFromStorage();

      expect(AsyncStorage.removeItem).toBeCalledTimes(expectedNumberOfCalls);
    });
  });
});
