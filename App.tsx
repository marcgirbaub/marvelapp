import React from "react";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { SafeAreaView, View } from "react-native";
import globalStyles from "./src/styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <SafeAreaView>
        <View style={globalStyles.container}></View>
      </SafeAreaView>
    </Provider>
  </>
);

export default App;
