import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import Header from "./Header";
import { screen } from "@testing-library/react-native";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'MARVEL'", () => {
      const titleText = "MARVEL";

      renderWithProviders(<Header />);

      const title = screen.getByText(titleText);

      expect(title).toBeDefined();
    });
  });
});
