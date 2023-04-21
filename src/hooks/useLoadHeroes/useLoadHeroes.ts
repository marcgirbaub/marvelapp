/* eslint-disable @typescript-eslint/no-floating-promises */
import { create } from "apisauce";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const baseUrl = "https://gateway.marvel.com/v1/public/";
const ts = 1;
const apikey = "a210315da234565f0fe376e374490fe2";
const hash = "72e901aebf80c750431501c5a505adf1";
const charactersEndpoint = "characters";

const api = create({ baseURL: baseUrl, params: { ts, apikey, hash } });

const useLoadHeroes = () => {
  const [heroes, setHeroes] = useState<MarvelHeroData>([]);
  const [isFetching, setIsFetching] = useState(false);

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

  return { heroes, isFetching };
};

export default useLoadHeroes;
