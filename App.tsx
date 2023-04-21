import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator/StackNavigator";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
