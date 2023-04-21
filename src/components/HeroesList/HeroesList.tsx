import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import HeroCard from "../HeroCard/HeroCard";
import heroesListStyles from "./HeroesListStyles";

interface HeroesListProps {
  onEndReachedAction: () => void;
  heroesList: MarvelHeroData;
  isFetching: boolean;
}

const HeroesList = ({
  heroesList,
  onEndReachedAction,
  isFetching,
}: HeroesListProps): JSX.Element => {
  const renderSeparator = () => <View style={heroesListStyles.gap}></View>;

  if (!heroesList.length) {
    return <Text>There was an error loading the heroes</Text>;
  }

  return (
    <FlatList
      data={heroesList}
      renderItem={({ item }) => <HeroCard hero={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReachedAction}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={heroesListStyles.list}
      ListFooterComponent={
        isFetching && heroesList.length ? (
          <ActivityIndicator size="large" />
        ) : null
      }
    />
  );
};

export default HeroesList;
