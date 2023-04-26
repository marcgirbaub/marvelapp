import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { create, type ApisauceInstance } from "apisauce";
import { type MarvelData, type MarvelResponse } from "../../types/types";
import {
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
import { Alert } from "react-native";

type Props = {
  url: string;
  maxResultsPerPage: number;
  children: JSX.Element;
};

type ProxyHandler<T, P extends string> = {
  get?(target: T, p: P, receiver: any): any;
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

  const user = useAppSelector((state) => state.user);
  const { url: stateUrl, currentHero } = useAppSelector((state) => state.hero);

  useEffect(() => {
    if (!user.isLogged) {
      setState({ ...state, data: [] } as ContextStateFetched<MarvelData>);
      setPage(0);
    }
  }, [user.isLogged]);

  const getNavigatableUrl = useCallback((): string => {
    const newUrl = new URL(url);
    Object.entries({
      ...getAuthQueryStringParams(),
      ...getPaginationQueryStringParams(maxResultsPerPage, page),
    }).forEach((param) => {
      newUrl.searchParams.append(param[0], param[1]);
    });

    let parsedUrl = "";

    if (newUrl.toString().includes("characters/")) {
      parsedUrl = newUrl.toString().replace("characters/", "characters");
    }

    if (newUrl.toString().includes("comics/")) {
      parsedUrl = newUrl.toString().replace("comics/", "comics");
    }

    return parsedUrl;
  }, [page, url]);

  useEffect(() => {
    if (state.isFetching || !state.url || !stateUrl) {
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
        if (url.includes("comics")) {
          const previousData = page === 0 ? [] : state.data;

          setState({
            ...state,
            isFetching: false,
            data: [...(previousData ?? []), ...value.data.results],
          } as ContextStateFetched<MarvelData>);

          return;
        }

        const previousData = page === 0 ? [] : state.data;

        setState({
          ...state,
          isFetching: false,
          data: [...(previousData ?? []), ...value.data.results],
        } as ContextStateFetched<MarvelData>);
      })
      .catch((error) => {
        Alert.alert("Error fetching data");
      });
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
            setPage(page + 1);
          }

          if (!currentHero.name) {
            setPage(page + 1);
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
