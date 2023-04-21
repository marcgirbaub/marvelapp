/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import HeroCard from "./HeroCard";
import { screen } from "@testing-library/react-native";

const mockHeroData: MarvelHero = {
  id: 1011334,
  name: "3-D Man",
  description: "",

  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },

  comics: {
    available: 12,
    collectionURI:
      "http://gateway.marvel.com/v1/public/characters/1011334/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
        name: "Avengers: The Initiative (2007) #14",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
        name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21546",
        name: "Avengers: The Initiative (2007) #15",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21741",
        name: "Avengers: The Initiative (2007) #16",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
        name: "Avengers: The Initiative (2007) #17",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22299",
        name: "Avengers: The Initiative (2007) #18",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22300",
        name: "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22506",
        name: "Avengers: The Initiative (2007) #19",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8500",
        name: "Deadpool (1997) #44",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10223",
        name: "Marvel Premiere (1972) #35",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10224",
        name: "Marvel Premiere (1972) #36",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10225",
        name: "Marvel Premiere (1972) #37",
      },
    ],
    returned: 12,
  },
};

describe("Given a HeroCard component", () => {
  describe("When it receives a Hero with the name '3-D Man' that has 12 comic appearances", () => {
    beforeEach(() => renderWithProviders(<HeroCard hero={mockHeroData} />));

    test("Then it should show the name on the screen", () => {
      const heroName = mockHeroData.name;

      const renderedName = screen.getByText(heroName);

      expect(renderedName).toBeDefined();
    });

    test("Then it should show its image with the accessibility label equal to its name", () => {
      const accessibilityLabel = mockHeroData.name;

      const image = screen.getByLabelText(accessibilityLabel);

      expect(image).toBeDefined();
    });

    test("Then it should show a text with '12 comic appearances'", () => {
      const comicAppearancesText = `${mockHeroData.comics.available} comic appearances`;

      const comicAppearancesElement = screen.getByText(comicAppearancesText);

      expect(comicAppearancesElement).toBeDefined();
    });
  });
});
