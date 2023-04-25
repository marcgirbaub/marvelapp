import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import heroCardStyles from "./HeroCardStyles";
import { type MarvelHero } from "../../types/types";
import useLoadCurrentHero from "../../hooks/useLoadCurrentHero/useLoadCurrentHero";

interface HeroCardProps {
  hero: MarvelHero;
  resetPage: () => void;
}

const HeroCard = ({
  hero: { name, thumbnail, comics, description, id },
  resetPage,
}: HeroCardProps): JSX.Element => {
  const { loadCurrentHero } = useLoadCurrentHero();

  return (
    <View style={heroCardStyles.container} testID="heroCard">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          loadCurrentHero(
            { description, id: id.toString(), name, thumbnail },
            resetPage,
          );
        }}
      >
        <View style={heroCardStyles.imageContainer}>
          <Image
            source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
            style={heroCardStyles.image}
            resizeMode="cover"
            accessibilityLabel={name}
          />
        </View>
        <View style={heroCardStyles.infoContainer}>
          <Text style={heroCardStyles.name}>{name}</Text>
          <Text
            style={heroCardStyles.secondaryText}
          >{`${comics.available} comic appearances`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeroCard;
