import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { create, type ApisauceInstance } from "apisauce";
import { Alert } from "react-native";
import { type MarvelData, type MarvelResponse } from "../../types/types";
import {
  charactersEndpoint,
  comicsEndpoint,
  marvelApikey,
  marvelBaseUrl,
  marvelHash,
  marvelTs,
  resultsPerPage,
} from "../../constants/apiConstants";
import {
  ApiRequestContext,
  type ApiRequestContextState,
  type ContextStateFetched,
  type ContextStateInitialized,
  type IActions,
} from "./ApiRequestContext";
import { useAppSelector } from "../redux/hooks";

type Props = {
  url: string;
  maxResultsPerPage: number;
  children: JSX.Element;
};

type ProxyHandler<T, P extends string> = {
  get?(
    target: { results: { [key in string]?: T }; apiInstance: ApisauceInstance },
    p: P,
    receiver: any,
  ): any;
  set?(
    target: { results: { [key in P]?: T } },
    p: P,
    value: any,
    receiver: any,
  ): boolean;
};

declare const Proxy: new <T extends object>(
  target: { results: { [key in string]?: T }; apiInstance: ApisauceInstance },
  handler: ProxyHandler<T, string>,
) => { [key: string]: Promise<T> };

const marvelProxy = new Proxy<MarvelResponse>(
  {
    apiInstance: create({
      baseURL: marvelBaseUrl,
    }),
    results: {},
  },
  {
    get<T extends MarvelResponse>(
      target: {
        results: {
          [key in string]?: T;
        };
      },
      url: string,
    ) {
      const values = target;

      return new Promise<T>(async (resolve, reject) => {
        if (values.results.hasOwnProperty(url)) {
          resolve(values.results[url]!);

          return;
        }

        try {
          const response = await (
            target as {
              results: {
                [key in string]?: T;
              };
              apiInstance: ApisauceInstance;
            }
          ).apiInstance.get<T>(url);
          const { data } = response;

          if (response.originalError !== null || !data) {
            throw new Error("Error fetching data");
          }

          (
            target as {
              results: {
                [key in string]?: T;
              };
            }
          ).results[url] = data;

          resolve(data);
        } catch (e) {
          reject(e);
        }
      });
    },
    set(target, url: string, value) {
      target.results[url] = value;
      return true;
    },
  },
);

function getAuthQueryStringParams(): {
  apikey: string;
  ts: string;
  hash: string;
} {
  return {
    apikey: marvelApikey,
    ts: marvelTs,
    hash: marvelHash,
  };
}

function getPaginationQueryStringParams(
  maxResults: number,
  page: number,
): {
  limit: string;
  offset: string;
} {
  return { limit: `${maxResults}`, offset: `${page * maxResults}` };
}

export function CachedRequestsProvider({
  children,
  url,
  maxResultsPerPage,
}: Props) {
  const [state, setState] = useState<ApiRequestContextState<MarvelData>>({
    isFetching: false,
    url,
  } as ContextStateInitialized);

  const [page, setPage] = useState(0);

  const { url: globalStateUrl, currentHero } = useAppSelector(
    (state) => state.hero,
  );

  const getNavigatableUrl = useCallback((): string => {
    const newUrl = new URL(url);
    Object.entries({
      ...getAuthQueryStringParams(),
      ...getPaginationQueryStringParams(maxResultsPerPage, page),
    }).forEach((param) => {
      newUrl.searchParams.append(param[0], param[1]);
    });

    const stringedUrl = newUrl.toString();
    let parsedUrl = "";

    if (stringedUrl.includes("characters/")) {
      parsedUrl = stringedUrl.replace("characters/", charactersEndpoint);
    }

    if (stringedUrl.includes("comics/")) {
      parsedUrl = stringedUrl.replace("comics/", comicsEndpoint);
    }

    return parsedUrl;
  }, [page, url]);

  useEffect(() => {
    let isMounted = true;

    if (state.isFetching || !state.url || !globalStateUrl) {
      return;
    }

    setState(
      state.url !== url
        ? {
            isFetching: true,
            url,
          }
        : {
            ...state,
            isFetching: true,
          },
    );

    marvelProxy[getNavigatableUrl()]
      .then((value) => {
        const previousData = page === 0 ? [] : state.data;

        const isUrlComics = url.includes(comicsEndpoint);

        if (isUrlComics && isMounted) {
          setState({
            ...state,
            isFetching: false,
            data: [...(previousData ?? []), ...value.data.results],
          } as ContextStateFetched<MarvelData>);

          return;
        }

        if (!isUrlComics) {
          setState({
            ...state,
            isFetching: false,
            data: [...(previousData ?? []), ...value.data.results],
          } as ContextStateFetched<MarvelData>);
        }
      })
      .catch((error) => {
        Alert.alert("Error loading the data");

        if (url.includes(comicsEndpoint) && isMounted) {
          setState({
            ...state,
            isFetching: false,
          } as ContextStateFetched<MarvelData>);

          return;
        }

        if (!url.includes(comicsEndpoint)) {
          setState({
            ...state,
            isFetching: false,
          } as ContextStateFetched<MarvelData>);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [page, url]);

  const store = useMemo(
    () => [
      state,
      {
        paginate() {
          if (
            currentHero.name &&
            currentHero.comicAppearances > (page + 1) * resultsPerPage
          ) {
            setPage((page) => page + 1);
          }

          if (!currentHero.name) {
            setPage((page) => page + 1);
          }
        },
      },
    ],
    [state, page, url],
  ) as [ApiRequestContextState<MarvelData>, IActions];

  return (
    <ApiRequestContext.Provider value={store}>
      {children}
    </ApiRequestContext.Provider>
  );
}

export const useCachedRequests = (): [
  ApiRequestContextState<MarvelData>,
  IActions,
] => useContext(ApiRequestContext);
