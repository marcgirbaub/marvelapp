import { comicsEndpoint, marvelBaseUrl } from "../../constants/apiConstants";
import { loadCurrentHeroActionCreator } from "../../store/redux/features/hero/heroSlice";
import { type HeroStructure } from "../../store/redux/features/hero/types";
import { useAppDispatch } from "../../store/redux/hooks";

const useLoadCurrentHero = (selectedHero: HeroStructure) => {
  const dispatch = useAppDispatch();

  const selectedHeroComicsUrl = `${marvelBaseUrl}/${selectedHero.id}/${comicsEndpoint}`;

  dispatch(
    loadCurrentHeroActionCreator({
      currentHero: selectedHero,
      url: selectedHeroComicsUrl,
    }),
  );
};

export default useLoadCurrentHero;
