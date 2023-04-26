import { useNavigation } from "@react-navigation/native";
import { comicsEndpoint, marvelBaseUrl } from "../../constants/apiConstants";
import { loadCurrentHeroActionCreator } from "../../store/redux/features/hero/heroSlice";
import { type HeroStructure } from "../../store/redux/features/hero/types";
import { useAppDispatch } from "../../store/redux/hooks";
import Routes from "../../navigation/routes";
import { type NavigationProps } from "../../types/navigation.types";

const useLoadCurrentHero = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const loadCurrentHero = (selectedHero: HeroStructure) => {
    navigation.navigate(Routes.detail);

    const selectedHeroComicsUrl = `${marvelBaseUrl}/${selectedHero.id}/${comicsEndpoint}`;

    dispatch(
      loadCurrentHeroActionCreator({
        currentHero: selectedHero,
        url: selectedHeroComicsUrl,
      }),
    );
  };

  return { loadCurrentHero };
};

export default useLoadCurrentHero;
