import React from "react";
import useLoadData from "../../hooks/useLoadData/useLoadData";
import { ActivityIndicator, FlatList, View } from "react-native";
import { type MarvelComicData } from "../../types/types";
import Comic from "../Comic/Comic";
import { globalColors } from "../../styles/colors";
import comicListStyles from "./ComicsListStyles";

const ComicList = (): JSX.Element => {
  const { isFetching, marvelData: comics, paginate } = useLoadData();

  const renderSeparator = (): JSX.Element => (
    <View style={comicListStyles.gap}></View>
  );

  if (isFetching && !comics?.length) {
    return (
      <View
        style={comicListStyles.skeletonContainer}
        accessibilityLabel="loading comics"
      >
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
        keyExtractor={(item, index) => `${item.id}-${index}`}
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
          style={comicListStyles.loader}
        />
      )}
    </>
  );
};

export default ComicList;
