import React from "react";
import { screen } from "@testing-library/react-native";
import useLoadData from "../../hooks/useLoadData/useLoadData";
import renderWithProviders from "../../utils/renderWithProviders";
import ComicList from "./ComicsList";
import { getMockComic } from "../../mocks/comicsMocks";

const mockUseLoadHeroes = useLoadData as jest.Mock;

jest.mock("../../hooks/useLoadData/useLoadData");

const firstMockedComic = getMockComic(
  "The Avengers Infinity War",
  12345,
  "avengerscomic",
);
const secondMockedComic = getMockComic(
  "Deadpool (1997)",
  54321,
  "deadpoolcomic",
);

const mockListOfComics = [firstMockedComic, secondMockedComic];

describe("Given a ComicList component", () => {
  describe("When rendered", () => {
    describe("And the data is a list of two comics", () => {
      test("Then it should show these two comics on the screen", () => {
        const comicTestId = "comic";
        const numberOfComics = mockListOfComics.length;

        mockUseLoadHeroes.mockReturnValue({
          isFetching: false,
          marvelData: mockListOfComics,
          paginate: jest.fn(),
        });

        renderWithProviders(<ComicList />);

        const renderedComics = screen.getAllByTestId(comicTestId);

        expect(renderedComics.length).toBe(numberOfComics);
      });
    });

    describe("And the data is being fetched", () => {
      test("Then it should show a loading skeleton with an accessibility label text `loading comics`", () => {
        const skeletonAccessibilityLabel = "loading comics";

        mockUseLoadHeroes.mockReturnValue({
          isFetching: true,
          marvelData: [],
          paginate: jest.fn(),
        });

        renderWithProviders(<ComicList />);

        const skeleton = screen.getByLabelText(skeletonAccessibilityLabel);

        expect(skeleton).toBeDefined();
      });
    });
  });
});
