import React from "react";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { SafeAreaView, View } from "react-native";
import globalStyles from "./src/styles/globalStyles";

const App = (): JSX.Element => (
  <>
    <SafeAreaView>
      <View style={globalStyles.container}>
        <LoginForm />
      </View>
    </SafeAreaView>
  </>
);

export default App;
