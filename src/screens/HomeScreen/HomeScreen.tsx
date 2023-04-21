import React from "react";
import { Text, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";
import HeroesList from "../../components/HeroesList/HeroesList";

const HomeScreen = (): JSX.Element => {
  const { heroes, isFetching } = useLoadHeroes();

  if (isFetching && !heroes.length) {
    return (
      <View style={globalStyles.container}>
        <Text>Skeleton</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <HeroesList
        heroesList={heroes}
        onEndReachedAction={() => []}
        isFetching={isFetching}
      />
    </View>
  );
};

export default HomeScreen;
