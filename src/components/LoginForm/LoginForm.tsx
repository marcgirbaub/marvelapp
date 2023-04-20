import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import loginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => (
  <KeyboardAvoidingView behavior="padding">
    <View>
      <View style={loginFormStyles.inputContainer}>
        <TextInput
          style={loginFormStyles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email address"
          accessibilityLabel="enter email address"
        />
        <Text style={loginFormStyles.errorText}></Text>
      </View>
      <View style={loginFormStyles.inputContainer}>
        <TextInput
          style={loginFormStyles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          accessibilityLabel="enter password"
        />
        <Text style={loginFormStyles.errorText}></Text>
      </View>
      <TouchableOpacity
        style={loginFormStyles.button}
        activeOpacity={0.4}
        accessibilityLabel="press to log in">
        <Text style={loginFormStyles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

export default LoginForm;
