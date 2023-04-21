import React from "react";
import { Image, Text, View } from "react-native";
import heroCardStyles from "./HeroCardStyles";

interface HeroCardProps {
  hero: MarvelHero;
}

const HeroCard = ({
  hero: { name, thumbnail, comics },
}: HeroCardProps): JSX.Element => (
  <View style={heroCardStyles.container}>
    <View style={heroCardStyles.imageContainer}>
      <Image
        source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
        style={heroCardStyles.image}
        resizeMode="cover"
      />
    </View>
    <View style={heroCardStyles.infoContainer}>
      <Text style={heroCardStyles.name}>{name}</Text>
      <Text
        style={heroCardStyles.secondaryText}
      >{`${comics.available} comic appearances`}</Text>
    </View>
  </View>
);

export default HeroCard;
