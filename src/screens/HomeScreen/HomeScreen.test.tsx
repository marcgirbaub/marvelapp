import React from "react";
import { screen } from "@testing-library/react-native";
import { mockListOfHeroes } from "../../mocks/heroesMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import HomeScreen from "./HomeScreen";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";

const mockUseLoadHeroes = useLoadHeroes as jest.Mock;

jest.mock("../../hooks/useLoadHeroes/useLoadHeroes");

describe("Given a HomeScreen component", () => {
  describe("When rendered", () => {
    describe("And the data is a list of two heroes", () => {
      test("Then it should show two heroes on the screen", () => {
        const heroCardTestId = "heroCard";
        const numberOfCards = mockListOfHeroes.length;

        mockUseLoadHeroes.mockReturnValue({
          isFetching: false,
          marvelData: mockListOfHeroes,
          paginate: jest.fn(),
        });

        renderWithProviders(<HomeScreen />);

        const expectedHeroCards = screen.queryAllByTestId(heroCardTestId);

        expect(expectedHeroCards).toHaveLength(numberOfCards);
      });
    });

    describe("And the initial data is being fetched", () => {
      test("Then it should show a loading skeleton with accessibility label `loading heroes`", () => {
        const accessibilityLabel = "loading heroes";

        mockUseLoadHeroes.mockReturnValue({
          isFetching: true,
          heroes: [],
          paginate: jest.fn(),
        });

        renderWithProviders(<HomeScreen />);

        const loadingSkeleton = screen.getByLabelText(accessibilityLabel);

        expect(loadingSkeleton).toBeDefined();
      });
    });
  });
});
