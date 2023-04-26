import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import HeroDetailScreen from "./HeroDetailScreen";
import type { HeroStructure } from "../../store/redux/features/hero/types";
import { screen } from "@testing-library/react-native";

describe("Given a HeroDetailScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show the name of the current hero and its image", () => {
      const currentHeroMock: HeroStructure = {
        description: "Spiderman moves like spiders",
        id: "1234",
        name: "Spiderman",
        comicAppearances: 4,
        thumbnail: { extension: "jpg", path: "spiderman" },
      };

      renderWithProviders(<HeroDetailScreen />, {
        hero: { currentHero: currentHeroMock, url: "marvel-url" },
      });

      const heroName = screen.getByText(currentHeroMock.name);
      const heroImage = screen.getByLabelText(`${currentHeroMock.name} image`);

      expect(heroName).toBeDefined();
      expect(heroImage).toBeDefined();
    });
  });

  describe("When rendered with a hero without description and comic appearances", () => {
    test("Then it shoud show a text with `No available description` and `No comic appearances`", () => {
      const expectedDescriptionText = "No available description";
      const expectedComicText = "No comic appearances";

      const noDescriptionHeroMock: HeroStructure = {
        description: "",
        id: "1234",
        name: "Spiderman",
        comicAppearances: 0,
        thumbnail: { extension: "jpg", path: "spiderman" },
      };

      renderWithProviders(<HeroDetailScreen />, {
        hero: { currentHero: noDescriptionHeroMock, url: "marvel-url" },
      });

      const noDescriptionElement = screen.getByText(expectedDescriptionText);
      const noComicsElement = screen.getByText(expectedComicText);

      expect(noDescriptionElement).toBeDefined();
      expect(noComicsElement).toBeDefined();
    });
  });
});
