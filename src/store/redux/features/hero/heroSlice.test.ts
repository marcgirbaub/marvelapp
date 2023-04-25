import {
  heroReducer,
  initialHeroState,
  loadCurrentHeroActionCreator,
} from "./heroSlice";
import { type HeroStructure, type HeroState } from "./types";

describe("Given a heroReducer reducer", () => {
  describe("When it receives a current state and the action to loadCurrentHero with an url and a hero to load", () => {
    test("Then it should return a new state with the received hero and url", () => {
      const currentHeroState: HeroState = { ...initialHeroState };

      const newUrl = "marvel.com/characters";
      const currentHero: HeroStructure = {
        description: "Spiderman moves like spiders",
        id: "1234",
        name: "Spiderman",
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
});
