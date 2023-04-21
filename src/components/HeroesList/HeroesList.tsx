import React from "react";
import { FlatList, View } from "react-native";
import HeroCard from "../HeroCard/HeroCard";
import heroesListStyles from "./HeroesListStyles";

interface HeroesListProps {
  onEndReachedAction: () => void;
  heroesList: MarvelHeroData;
}

const HeroesList = ({
  heroesList,
  onEndReachedAction,
}: HeroesListProps): JSX.Element => {
  const renderSeparator = () => <View style={heroesListStyles.gap}></View>;

  return (
    <FlatList
      data={heroesList}
      renderItem={({ item }) => <HeroCard hero={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReachedAction}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export default HeroesList;
