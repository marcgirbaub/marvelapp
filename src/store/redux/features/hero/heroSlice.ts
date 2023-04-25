import { createSlice } from "@reduxjs/toolkit";
import { type HeroState } from "./types";

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
  reducers: {},
});

export const heroReducer = heroSlice.reducer;
