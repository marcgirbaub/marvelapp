import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../store/redux/store";

jest.mock("@react-navigation/native", () => ({
  useRoute: jest.fn().mockReturnValue("home"),
  useNavigation: jest.fn(),
}));

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'MARVEL'", () => {
      const titleText = "MARVEL";

      render(
        <Provider store={store}>
          <Header />
        </Provider>,
      );

      const title = screen.getByText(titleText);

      expect(title).toBeDefined();
    });
  });
});
