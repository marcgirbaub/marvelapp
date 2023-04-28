import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import HeroCard from "./HeroCard";
import { screen } from "@testing-library/react-native";
import { mockHero3D } from "../../mocks/heroesMocks";

describe("Given a HeroCard component", () => {
  describe("When it receives a Hero with the name '3-D Man' that has 12 comic appearances", () => {
    beforeEach(() =>
      renderWithProviders(
        <HeroCard isDetailDisabled={false} hero={mockHero3D} />,
      ),
    );

    test("Then it should show the name on the screen", () => {
      const heroName = mockHero3D.name;

      const renderedName = screen.getByText(heroName);

      expect(renderedName).toBeDefined();
    });

    test("Then it should show its image with the accessibility label equal to its name", () => {
      const accessibilityLabel = mockHero3D.name;

      const image = screen.getByLabelText(accessibilityLabel);

      expect(image).toBeDefined();
    });

    test("Then it should show a text with '12 comic appearances'", () => {
      const comicAppearancesText = `${mockHero3D.comics.available} comic appearances`;

      const comicAppearancesElement = screen.getByText(comicAppearancesText);

      expect(comicAppearancesElement).toBeDefined();
    });
  });
});
