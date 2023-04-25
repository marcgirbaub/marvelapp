import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type HeroStructure, type HeroState } from "./types";

const initialHeroState: HeroState = {
  currentHero: {
    description: "",
    id: "",
    name: "",
    thumbnail: { extension: "", path: "" },
  },
  url: "",
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
  },
});

export const heroReducer = heroSlice.reducer;
export const { loadCurrentHero: loadCurrentHeroActionCreator } =
  heroSlice.actions;
