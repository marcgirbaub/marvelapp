import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import StackNavigator from "./StackNavigator";
import { screen } from "@testing-library/react-native";

describe("Given a StackNavigator component", () => {
  describe("When rendered", () => {
    beforeEach(() => renderWithProviders(<StackNavigator />));

    test("Then it should show a login screen with a `MARVEL` title", () => {
      const titleText = "MARVEL";

      const title = screen.getByText(titleText);

      expect(title).toBeDefined();
    });

    test("Then it should show a login screen with a login form with two inputs and a 'Log in' button", () => {
      const emailPlaceholderText = "Email address";
      const passwordPlaceholderText = "Password";
      const expectedButtonText = "Log in";

      const emailPlaceholder =
        screen.getByPlaceholderText(emailPlaceholderText);
      const passwordPlaceholder = screen.getByPlaceholderText(
        passwordPlaceholderText,
      );
      const button = screen.getByText(expectedButtonText);

      expect(emailPlaceholder).toBeDefined();
      expect(passwordPlaceholder).toBeDefined();
      expect(button).toBeDefined();
    });
  });
});
