import React from "react";
import { View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";
import HeroesList from "../../components/HeroesList/HeroesList";
import homeScreenStyles from "./HomeScreenStyles";
import { type MarvelHeroData } from "../../types/types";

const HomeScreen = (): JSX.Element => {
  const { marvelData: heroes, isFetching, paginate } = useLoadHeroes();

  if (isFetching && !heroes?.length) {
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
      <HeroesList
        heroesList={heroes as MarvelHeroData}
        onEndReachedAction={() => {
          paginate();
        }}
        isFetching={isFetching}
      />
    </View>
  );
};

export default HomeScreen;
