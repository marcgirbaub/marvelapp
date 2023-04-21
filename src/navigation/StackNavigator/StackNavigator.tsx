import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import { type RootStackParamList } from "../../types/navigation.types";
import Routes from "../routes";

const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={Routes.login}>
      <Stack.Screen
        component={LoginScreen}
        options={{ headerShown: false }}
        name={Routes.login}
      />
      <Stack.Screen
        component={HomeScreen}
        name={Routes.home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
