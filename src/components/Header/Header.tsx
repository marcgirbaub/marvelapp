import React from "react";
import { Text, View } from "react-native";
import headerStyles from "./HeaderStyles";

const Header = (): JSX.Element => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.title}>MARVEL</Text>
  </View>
);

export default Header;
