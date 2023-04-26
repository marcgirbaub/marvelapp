import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import heroDetailScreenStyles from "./HeroDetailScreenStyles";
import globalStyles from "../../styles/globalStyles";
import ComicList from "../../components/ComicsList/ComicsList";

const HeroDetailScreen = (): JSX.Element => {
  const { description, name, thumbnail, comicAppearances } = useAppSelector(
    (state) => state.hero.currentHero,
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}
    >
      <View style={heroDetailScreenStyles.imageContainer}>
        <Image
          source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
          resizeMode="cover"
          style={heroDetailScreenStyles.image}
          accessibilityLabel={`${name} image`}
        />
      </View>
      <Text style={heroDetailScreenStyles.heroName}>{name}</Text>
      {description ? (
        <Text style={heroDetailScreenStyles.description}>{description}</Text>
      ) : (
        <Text style={heroDetailScreenStyles.noDescription}>
          No available description
        </Text>
      )}
      <View style={heroDetailScreenStyles.comicsSection}>
        <View style={heroDetailScreenStyles.comicsTitleContainer}>
          <Text style={heroDetailScreenStyles.comicsTitle}>Comics</Text>
        </View>
        {comicAppearances === 0 ? (
          <Text style={heroDetailScreenStyles.noDescription}>
            No comic appearances
          </Text>
        ) : (
          <ComicList />
        )}
      </View>
    </ScrollView>
  );
};

export default HeroDetailScreen;
