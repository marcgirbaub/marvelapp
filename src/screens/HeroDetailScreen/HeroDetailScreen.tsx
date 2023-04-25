import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import heroDetailScreenStyles from "./HeroDetailScreenStyles";
import { type MarvelComicData } from "../../types/types";
import globalStyles from "../../styles/globalStyles";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";

const HeroDetailScreen = (): JSX.Element => {
  const { description, name, thumbnail } = useAppSelector(
    (state) => state.hero.currentHero,
  );

  const { isFetching, marvelData: comics, paginate } = useLoadHeroes();

  const renderSeparator = () => (
    <View style={heroDetailScreenStyles.gap}></View>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}
    >
      <View>
        <View style={heroDetailScreenStyles.imageContainer}>
          <Image
            source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
            resizeMode="cover"
            style={heroDetailScreenStyles.image}
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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={heroDetailScreenStyles.comicsTitleContainer}>
            <Text style={heroDetailScreenStyles.comicsTitle}>Comics</Text>
          </View>
          {isFetching ? (
            <View style={heroDetailScreenStyles.skeletonContainer}>
              <View style={heroDetailScreenStyles.skeleton}></View>
              <View style={heroDetailScreenStyles.skeleton}></View>
            </View>
          ) : (
            <FlatList
              data={comics as MarvelComicData}
              ItemSeparatorComponent={renderSeparator}
              contentContainerStyle={heroDetailScreenStyles.comicsList}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              onEndReachedThreshold={0}
              onEndReached={paginate}
              renderItem={({ item }) => (
                <View style={heroDetailScreenStyles.comicContainer}>
                  <Image
                    source={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}
                    style={heroDetailScreenStyles.comicImage}
                  />
                  <Text style={heroDetailScreenStyles.comicTitle}>
                    {item.title}
                  </Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HeroDetailScreen;
