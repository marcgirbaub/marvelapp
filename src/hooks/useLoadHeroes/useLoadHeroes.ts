/* eslint-disable @typescript-eslint/no-floating-promises */
import { create } from "apisauce";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

const baseUrl = "https://gateway.marvel.com/v1/public/";
const ts = 1;
const apikey = "a210315da234565f0fe376e374490fe2";
const hash = "72e901aebf80c750431501c5a505adf1";
const charactersEndpoint = "characters";
const limit = 10;

const api = create({ baseURL: baseUrl, params: { ts, apikey, hash, limit } });

const useLoadHeroes = () => {
  const [heroes, setHeroes] = useState<MarvelHeroData>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);

  const getHeroes = async () => {
    setIsFetching(true);

    const response = await api.get(charactersEndpoint);

    if (!response.ok) {
      setIsFetching(false);
      Alert.alert("There was a problem loading heroes");

      return;
    }

    setHeroes([
      ...heroes,
      ...(response.data as MarvelHeroesListResponse).data.results,
    ]);
    setIsFetching(false);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const paginate = useCallback(async () => {
    setIsFetching(true);

    const response = await api.get(
      `${charactersEndpoint}?offset=${(page + 1) * limit}`,
    );

    if (!response.ok) {
      setIsFetching(false);
      Alert.alert("There was a problem loading heroes");

      return;
    }

    setHeroes([
      ...heroes,
      ...(response.data as MarvelHeroesListResponse).data.results,
    ]);
    setIsFetching(false);
    setPage((p) => p + 1);
  }, [page, heroes]);

  return { heroes, isFetching, paginate };
};

export default useLoadHeroes;
