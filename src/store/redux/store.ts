import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { userReducer } from "./features/user/userSlice";
import { heroReducer } from "./features/hero/heroSlice";

const rootReducer = combineReducers({
  user: userReducer,
  hero: heroReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
