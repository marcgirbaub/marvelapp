import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import { type RootStackParamList } from "../../types/navigation.types";
import Routes from "../routes";
import Header from "../../components/Header/Header";
import { SafeAreaView } from "react-native";
import globalStyles from "../../styles/globalStyles";
import HeroDetailScreen from "../../screens/HeroDetailScreen/HeroDetailScreen";

const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderHeader = () => <Header />;

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
          component={HomeScreen}
          name={Routes.home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          component={HeroDetailScreen}
          name={Routes.detail}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigator;
