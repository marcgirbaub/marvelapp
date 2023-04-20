import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <SafeAreaView></SafeAreaView>
    </Provider>
  </>
);

export default App;
