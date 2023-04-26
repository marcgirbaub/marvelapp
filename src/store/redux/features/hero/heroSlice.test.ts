import {
  heroReducer,
  initialHeroState,
  loadCurrentHeroActionCreator,
  loadInitialHeroStateActionCreator,
  resetHeroStateActionCreator,
} from "./heroSlice";
import { type HeroStructure, type HeroState } from "./types";

describe("Given a heroReducer reducer", () => {
  const currentHeroState: HeroState = { ...initialHeroState };

  describe("When it receives a current state and the action to loadCurrentHero with an url and a hero to load", () => {
    test("Then it should return a new state with the received hero and url", () => {
      const newUrl = "marvel.com/characters";
      const currentHero: HeroStructure = {
        description: "Spiderman moves like spiders",
        id: "1234",
        name: "Spiderman",
        comicAppearances: 4,
        thumbnail: { extension: "jpg", path: "spiderman" },
      };

      const expectedNewState: HeroState = { url: newUrl, currentHero };

      const loadCurrentHeroAction = loadCurrentHeroActionCreator({
        url: newUrl,
        currentHero,
      });
      const newState = heroReducer(currentHeroState, loadCurrentHeroAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives a current state and the action to resetHeroState", () => {
    test("Then it shoudl return a new state with all properties reset to empty fields", () => {
      const expectedNewState: HeroState = {
        currentHero: {
          comicAppearances: 0,
          description: "",
          id: "",
          name: "",
          thumbnail: { extension: "", path: "" },
        },
        url: "",
      };

      const resetHeroStateAction = resetHeroStateActionCreator();
      const newState = heroReducer(currentHeroState, resetHeroStateAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives a current state and the action to loadInitialHeroState", () => {
    test("Then it should return a new state equal to the initial state", () => {
      const loadInitialHeroStateAction = loadInitialHeroStateActionCreator();
      const newState = heroReducer(
        currentHeroState,
        loadInitialHeroStateAction,
      );

      expect(newState).toStrictEqual(initialHeroState);
    });
  });
});
