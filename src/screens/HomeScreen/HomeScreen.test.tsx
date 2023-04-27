import React from "react";
import { screen } from "@testing-library/react-native";
import { mockListOfHeroes } from "../../mocks/heroesMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import HomeScreen from "./HomeScreen";
import useLoadData from "../../hooks/useLoadData/useLoadData";
import { CachedRequestsProvider } from "../../store/contexts/CachedRequestsProvider";

const mockUseLoadHeroes = useLoadData as jest.Mock;

jest.mock("../../hooks/useLoadData/useLoadData");

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
        const resultsPerPage = 10;
        const url = "https://marvel.com";

        mockUseLoadHeroes.mockReturnValue({
          isFetching: true,
          heroes: [],
          paginate: jest.fn(),
        });

        renderWithProviders(
          <CachedRequestsProvider maxResultsPerPage={resultsPerPage} url={url}>
            <HomeScreen />
          </CachedRequestsProvider>,
        );

        const loadingSkeleton = screen.getByLabelText(accessibilityLabel);

        expect(loadingSkeleton).toBeDefined();
      });
    });
  });
});
