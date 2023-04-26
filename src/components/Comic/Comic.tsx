import React from "react";
import { type MarvelComic } from "../../types/types";
import { Image, Text, View } from "react-native";
import comicStyles from "./ComicStyles";

interface ComicProps {
  comic: MarvelComic;
}

const Comic = ({ comic }: ComicProps): JSX.Element => (
  <View style={comicStyles.comicContainer} testID="comic">
    <Image
      source={{
        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      }}
      style={comicStyles.comicImage}
      accessibilityLabel={`${comic.title} comic image`}
    />
    <Text style={comicStyles.comicTitle}>{comic.title}</Text>
  </View>
);

export default Comic;
