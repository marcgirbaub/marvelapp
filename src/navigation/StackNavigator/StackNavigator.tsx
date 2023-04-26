import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar } from "react-native";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import { type RootStackParamList } from "../../types/navigation.types";
import Routes from "../routes";
import Header from "../../components/Header/Header";
import globalStyles from "../../styles/globalStyles";
import DetailScreenWrapper from "../wrappers/DetailScreenWrapper";
import HomeScreenWrapper from "../wrappers/HomeScreenWrapper";

const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderHeader = (): JSX.Element => <Header />;

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Stack.Navigator
        initialRouteName={Routes.login}
        screenOptions={{ header: () => renderHeader() }}
      >
        <Stack.Screen
          component={LoginScreen}
          options={{ headerShown: false }}
          name={Routes.login}
        />
        <Stack.Screen
          component={HomeScreenWrapper}
          name={Routes.home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          component={DetailScreenWrapper}
          name={Routes.detail}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
};

export default StackNavigator;
