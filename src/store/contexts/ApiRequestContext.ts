import { type ApisauceInstance } from "apisauce";
import { createContext } from "react";
import { type MarvelData } from "../../types/types";

export type ContextStateUninitialized = {
  url?: undefined;
  isFetching: false;
  data?: undefined;
};

export type ContextStateInitialized = {
  url: string;
  isFetching: false;
  data?: undefined;
};

export type ContextStateFetching<T> = {
  url: string;
  isFetching: true;
  data?: T;
};

export type ContextStateFetched<T> = {
  url: string;
  isFetching: false;
  data: T;
  apisauceInstance: ApisauceInstance;
};

export type ApiRequestContextState<T> =
  | ContextStateUninitialized
  | ContextStateInitialized
  | ContextStateFetching<T>
  | ContextStateFetched<T>;

export interface IActions {
  paginate(): void;
}

const initialState = {
  isFetching: false,
};

export const ApiRequestContext = createContext<
  [ApiRequestContextState<MarvelData>, IActions]
>([initialState as ContextStateUninitialized, { paginate: () => undefined }]);
