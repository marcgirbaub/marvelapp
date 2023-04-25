import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator/StackNavigator";
import { resultsPerPage, marvelBaseUrl } from "./src/constants/apiConstants";
import { CachedRequestsProvider } from "./src/store/contexts/CachedRequestsProvider";

const App = (): JSX.Element => (
  <Provider store={store}>
    <CachedRequestsProvider
      maxResultsPerPage={resultsPerPage}
      url={marvelBaseUrl}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CachedRequestsProvider>
  </Provider>
);

export default App;
