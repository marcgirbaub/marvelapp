import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import ProviderWrapper from "./src/components/ProviderWrapper/ProviderWrapper";

const App = (): JSX.Element => (
  <Provider store={store}>
    <ProviderWrapper />
  </Provider>
);

export default App;
