import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import loginFormStyles from "./LoginFormStyles";
import { type UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialUserCredentials: UserCredentials = {
    email: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials,
  );

  const [errors, setErrors] = useState({ password: "", email: "" });

  const handeFieldChange = (value: string, field: string) => {
    setUserCredentials({ ...userCredentials, [field]: value });
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

    await loginUser(userToLogin);

    setErrors({ ...errors, password: "", email: "" });
    setUserCredentials({ ...initialUserCredentials });
  };

  const isButtonDisabled =
    userCredentials.email === "" || userCredentials.password === "";

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
            onChangeText={(text) => {
              handeFieldChange(text, "email");
            }}
          />
          <Text style={loginFormStyles.errorText}>{errors.email}</Text>
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
            onChangeText={(text) => {
              handeFieldChange(text, "password");
            }}
          />
          <Text style={loginFormStyles.errorText}>{errors.password}</Text>
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
