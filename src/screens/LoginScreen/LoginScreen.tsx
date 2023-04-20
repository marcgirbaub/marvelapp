import React from "react";
import { Text, View } from "react-native";
import LoginForm from "../../components/LoginForm/LoginForm";
import globalStyles from "../../styles/globalStyles";
import loginScreenStyles from "./loginScreenStyles";

const LoginScreen = (): JSX.Element => (
  <View style={globalStyles.container}>
    <View style={loginScreenStyles.contentContainer}>
      <Text style={loginScreenStyles.title}>MARVEL</Text>
      <LoginForm />
    </View>
  </View>
);

export default LoginScreen;
