import React from "react";
import Comic from "./Comic";
import { getMockComic } from "../../mocks/comicsMocks";
import { render, screen } from "@testing-library/react-native";

describe("Given a Comic component", () => {
  describe("When rendered with a comic", () => {
    const mockComic = getMockComic(
      "The Avengers Infinity War",
      12345,
      "avengerscomic",
    );

    beforeEach(() => render(<Comic comic={mockComic} />));

    test("Then it should show its name", () => {
      const comicName = mockComic.title;

      const comicTitle = screen.getByText(comicName);

      expect(comicTitle).toBeDefined();
    });

    test("Then it should show its image", () => {
      const imageAccessibilityLabel = `${mockComic.title} comic image`;

      const image = screen.getByLabelText(imageAccessibilityLabel);

      expect(image).toBeDefined();
    });
  });
});
