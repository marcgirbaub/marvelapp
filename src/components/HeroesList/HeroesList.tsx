import React, { useRef } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import HeroCard from "../HeroCard/HeroCard";
import heroesListStyles from "./HeroesListStyles";
import { globalColors } from "../../styles/colors";
import { type MarvelHero, type MarvelHeroData } from "../../types/types";

interface HeroesListProps {
  onEndReachedAction: () => void;
  heroesList: MarvelHeroData;
  isFetching: boolean;
}

const renderSeparator = () => <View style={heroesListStyles.gap}></View>;

const HeroesList = ({
  heroesList,
  onEndReachedAction,
  isFetching,
}: HeroesListProps): JSX.Element => {
  const heroesListRef = useRef<FlatList<MarvelHero>>(null);

  const scrollToTop = () => {
    heroesListRef.current!.scrollToOffset({ animated: true, offset: 0 });
  };

  if (!heroesList?.length) {
    return (
      <Text style={heroesListStyles.errorText}>
        There was an error loading the heroes
      </Text>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={heroesListStyles.scrollButton}
        activeOpacity={0.4}
        onPress={scrollToTop}
      >
        <Text style={heroesListStyles.scrollButtonText}>Scroll TOP</Text>
      </TouchableOpacity>
      <FlatList
        data={heroesList}
        renderItem={({ item }) => <HeroCard hero={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={onEndReachedAction}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={heroesListStyles.list}
        ref={heroesListRef}
      />
      {isFetching && heroesList.length ? (
        <ActivityIndicator
          size="large"
          color={globalColors.accent}
          style={heroesListStyles.infinitiLoader}
        />
      ) : null}
    </View>
  );
};

export default HeroesList;
