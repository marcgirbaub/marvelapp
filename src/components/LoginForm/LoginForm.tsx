import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import loginFormStyles from "./LoginFormStyles";
import { type UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import { globalColors } from "../../styles/colors";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialUserCredentials: UserCredentials = {
    email: "",
    password: "",
  };

  const initialErrorsState = {
    password: "",
    email: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials,
  );

  const [errors, setErrors] = useState(initialErrorsState);

  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handeFieldChange = (value: string, field: string) => {
    setUserCredentials({ ...userCredentials, [field]: value });
    setErrors({ ...initialErrorsState });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minimumPasswordLength = 8;

  const onSubmitHandler = async () => {
    const userToLogin: UserCredentials = {
      ...userCredentials,
    };

    if (!emailRegex.test(userCredentials.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });

      return;
    }

    if (userCredentials.password.length < minimumPasswordLength) {
      setErrors({
        ...errors,
        password: "The password must have at least 8 characters",
        email: "",
      });

      return;
    }

    setIsLoading(true);
    setErrors({ ...errors, password: "", email: "" });

    try {
      await loginUser(userToLogin);

      setUserCredentials({ ...initialUserCredentials });
      setLoginError("");

      setIsLoading(false);
    } catch (error) {
      setLoginError((error as Error).message);
      setIsLoading(false);
    }
  };

  const isButtonDisabled =
    userCredentials.email === "" ||
    userCredentials.password === "" ||
    isLoading;

  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        <View style={loginFormStyles.inputContainer}>
          <TextInput
            style={loginFormStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email address"
            accessibilityLabel="enter email address"
            value={userCredentials.email}
            editable={!isLoading}
            onChangeText={(text) => {
              handeFieldChange(text, "email");
            }}
          />
          <View style={loginFormStyles.errorContainer}>
            <Text style={loginFormStyles.errorText}>{errors.email}</Text>
          </View>
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
            value={userCredentials.password}
            editable={!isLoading}
            onChangeText={(text) => {
              handeFieldChange(text, "password");
            }}
          />
          <View style={loginFormStyles.errorContainer}>
            <Text style={loginFormStyles.errorText}>{errors.password}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={
            isButtonDisabled
              ? loginFormStyles.buttonDisabled
              : loginFormStyles.button
          }
          activeOpacity={0.4}
          accessibilityLabel="press to log in"
          accessibilityRole="button"
          disabled={isButtonDisabled}
          onPress={onSubmitHandler}
        >
          <Text style={loginFormStyles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={loginFormStyles.feedbackContainer}>
          {!isLoading && (
            <Text style={loginFormStyles.loginError}>{loginError}</Text>
          )}
          {isLoading && (
            <ActivityIndicator size="large" color={globalColors.accent} />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
