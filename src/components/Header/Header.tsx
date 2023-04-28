import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import headerStyles from "./HeaderStyles";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store/redux/hooks";
import { loadInitialHeroStateActionCreator } from "../../store/redux/features/hero/heroSlice";

const Header = (): JSX.Element => {
  const { handleLogout } = useUser();
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useAppDispatch();

  const logoutConfirmationText = "Are you sure you want to log out?";

  const logoutAlert = () => {
    Alert.alert("Log out", logoutConfirmationText, [
      { text: "Cancel" },
      { text: "Log out", style: "destructive", onPress: handleLogout },
    ]);
  };

  return (
    <View style={headerStyles.container}>
      {route.name === "home" ? (
        <TouchableOpacity
          style={headerStyles.logoutButton}
          onPress={logoutAlert}
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
