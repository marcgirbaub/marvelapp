import React from "react";
import { View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";
import HeroesList from "../../components/HeroesList/HeroesList";
import homeScreenStyles from "./HomeScreenStyles";
import { type MarvelHero, type MarvelHeroData } from "../../types/types";

const HomeScreen = (): JSX.Element => {
  const {
    marvelData: heroes,
    isFetching,
    paginate,
    resetPage,
  } = useLoadHeroes();

  if ((isFetching && !heroes?.length) || !heroes) {
    return (
      <View style={globalStyles.container} accessibilityLabel="loading heroes">
        <View style={homeScreenStyles.skeleton}></View>
        <View style={homeScreenStyles.skeleton}></View>
        <View style={homeScreenStyles.skeleton}></View>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {(heroes[0] as MarvelHero)?.comics && (
        <HeroesList
          heroesList={heroes as MarvelHeroData}
          onEndReachedAction={() => {
            paginate();
          }}
          resetPage={resetPage}
          isFetching={isFetching}
        />
      )}
    </View>
  );
};

export default HomeScreen;
