import React from "react";
import Comic from "./Comic";
import { avengersComicMock } from "../../mocks/comicsMocks";
import { render, screen } from "@testing-library/react-native";

describe("Given a Comic component", () => {
  describe("When rendered with a comic", () => {
    beforeEach(() => render(<Comic comic={avengersComicMock} />));

    test("Then it should show its name", () => {
      const comicName = avengersComicMock.title;

      const comicTitle = screen.getByText(comicName);

      expect(comicTitle).toBeDefined();
    });

    test("Then it should show its image", () => {
      const imageAccessibilityLabel = `${avengersComicMock.title} comic image`;

      const image = screen.getByLabelText(imageAccessibilityLabel);

      expect(image).toBeDefined();
    });
  });
});
