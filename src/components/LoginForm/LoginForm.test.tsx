import React from "react";
import { act, fireEvent, screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";
import LoginForm from "./LoginForm";
import { type UserCredentials } from "../../hooks/useUser/types";

const mockedLoginUserFunction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUserFunction,
}));

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show two inputs with the placeholders 'Email address' and 'Password'", () => {
      const emailPlaceholderText = "Email address";
      const passwordPlaceholderText = "Password";

      renderWithProviders(<LoginForm />);

      const emailPlaceholder =
        screen.getByPlaceholderText(emailPlaceholderText);
      const passwordPlaceholder = screen.getByPlaceholderText(
        passwordPlaceholderText,
      );

      expect(emailPlaceholder).toBeDefined();
      expect(passwordPlaceholder).toBeDefined();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const expectedButtonText = "Log in";

      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button");
      const buttonText = screen.getByText(expectedButtonText);

      expect(button).toBeDefined();
      expect(buttonText).toBeDefined();
    });
  });

  describe("When the user enters the email 'james@gmail.com' and the password 'james1234' and clicks on the log in button", () => {
    test("Then it should show those credentials on the corresponding inputs and the loginUser function should be called", () => {
      const userCredentials: UserCredentials = {
        email: "james@gmail.com",
        password: "james1234",
      };

      const emailLabelText = "enter email address";
      const passwordLabelText = "enter password";

      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabelText);
      const passwordInput = screen.getByLabelText(passwordLabelText);
      const button = screen.getByRole("button");

      fireEvent.changeText(emailInput, userCredentials.email);
      fireEvent.changeText(passwordInput, userCredentials.password);

      fireEvent.press(button);

      expect(emailInput.props.value).toBe(userCredentials.email);
      expect(passwordInput.props.value).toBe(userCredentials.password);
      expect(mockedLoginUserFunction).toHaveBeenCalledWith(userCredentials);
    });
  });
});
