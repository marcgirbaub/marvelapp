import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import headerStyles from "./HeaderStyles";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store/redux/hooks";
import { loadInitialHeroStateActionCreator } from "../../store/redux/features/hero/heroSlice";

const Header = (): JSX.Element => {
  const { handleLogout } = useUser();
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const route = useRoute();

  return (
    <View style={headerStyles.container}>
      {route.name === "home" ? (
        <TouchableOpacity
          style={headerStyles.logoutButton}
          onPress={async () => {
            handleLogout();
          }}
        >
          <Text style={headerStyles.logoutText}>Log out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            dispatch(loadInitialHeroStateActionCreator());
          }}
          style={headerStyles.goBack}
        >
          <Text style={headerStyles.goBackText}>Go back</Text>
        </TouchableOpacity>
      )}
      <Text style={headerStyles.title}>MARVEL</Text>
    </View>
  );
};

export default Header;
