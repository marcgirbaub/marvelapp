import React from "react";
import useLoadHeroes from "../../hooks/useLoadHeroes/useLoadHeroes";
import { ActivityIndicator, FlatList, View } from "react-native";
import { type MarvelComicData } from "../../types/types";
import Comic from "../Comic/Comic";
import { globalColors } from "../../styles/colors";
import comicListStyles from "./ComicsListStyles";

const ComicList = (): JSX.Element => {
  const { isFetching, marvelData: comics, paginate } = useLoadHeroes();

  const renderSeparator = (): JSX.Element => (
    <View style={comicListStyles.gap}></View>
  );

  if (isFetching && !comics?.length) {
    return (
      <View style={comicListStyles.skeletonContainer}>
        <View style={comicListStyles.skeleton}></View>
        <View style={comicListStyles.skeleton}></View>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={comics as MarvelComicData}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={comicListStyles.comicsList}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.7}
        horizontal={true}
        onEndReached={() => {
          paginate();
        }}
        bounces={false}
        renderItem={({ item }) => <Comic comic={item} />}
      />
      {isFetching && comics?.length && (
        <ActivityIndicator
          size="large"
          color={globalColors.accent}
          style={{ position: "absolute", top: -10, right: 10 }}
        />
      )}
    </>
  );
};

export default ComicList;
