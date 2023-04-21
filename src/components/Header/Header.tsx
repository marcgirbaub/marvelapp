import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import headerStyles from "./HeaderStyles";
import useLogout from "./hooks/useLogout";

const Header = (): JSX.Element => {
  const { handleLogout } = useLogout();

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity
        style={headerStyles.logoutButton}
        onPress={async () => handleLogout()}
      >
        <Text style={headerStyles.logoutText}>Log out</Text>
      </TouchableOpacity>
      <Text style={headerStyles.title}>MARVEL</Text>
    </View>
  );
};

export default Header;
