import React from "react";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { SafeAreaView, View } from "react-native";
import globalStyles from "./src/styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <SafeAreaView></SafeAreaView>
    </Provider>
  </>
);

export default App;
