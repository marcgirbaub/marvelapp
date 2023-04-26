import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type HeroState } from "./types";
import { marvelBaseUrl } from "../../../../constants/apiConstants";

export const initialHeroState: HeroState = {
  currentHero: {
    description: "",
    id: "",
    name: "",
    comicAppearances: 0,
    thumbnail: { extension: "", path: "" },
  },
  url: marvelBaseUrl,
};

const heroSlice = createSlice({
  name: "hero",
  initialState: initialHeroState,
  reducers: {
    loadCurrentHero: (
      currentState,
      action: PayloadAction<HeroState>,
    ): HeroState => ({
      ...currentState,
      currentHero: action.payload.currentHero,
      url: action.payload.url,
    }),
    resetHeroState: (): HeroState => ({ ...initialHeroState, url: "" }),
    loadInitialHeroState: (): HeroState => ({ ...initialHeroState }),
  },
});

export const heroReducer = heroSlice.reducer;
export const {
  loadCurrentHero: loadCurrentHeroActionCreator,
  resetHeroState: resetHeroStateActionCreator,
  loadInitialHeroState: loadInitialHeroStateActionCreator,
} = heroSlice.actions;
