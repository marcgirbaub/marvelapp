import React from "react";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";
import LoginScreen from "./LoginScreen";

describe("Given a LoginScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'MARVEL'", () => {
      const titleText = "MARVEL";

      renderWithProviders(<LoginScreen />);

      const title = screen.getByText(titleText);

      expect(title).toBeDefined();
    });

    test("Then it should show a log in form with a 'Log in' button", () => {
      const buttonText = "Log in";

      renderWithProviders(<LoginScreen />);

      const button = screen.getByText(buttonText);

      expect(button).toBeDefined();
    });
  });
});
