import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import HeroesList from "./HeroesList";
import { mockListOfHeroes } from "../../mocks/heroesMocks";
import { screen } from "@testing-library/react-native";

describe("Given a HeroesList component", () => {
  describe("When rendered with a list of two heroes", () => {
    test("Then it should show two heroes on the screen", () => {
      const heroCardTestId = "heroCard";
      const numberOfCards = mockListOfHeroes.length;

      renderWithProviders(
        <HeroesList
          heroesList={mockListOfHeroes}
          onEndReachedAction={() => "endOfPage"}
          isFetching={false}
        />,
      );

      const expectedHeroCards = screen.queryAllByTestId(heroCardTestId);

      expect(expectedHeroCards).toHaveLength(numberOfCards);
    });
  });
});
