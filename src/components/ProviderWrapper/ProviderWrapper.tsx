import React from "react";
import { CachedRequestsProvider } from "../../store/contexts/CachedRequestsProvider";
import { resultsPerPage } from "../../constants/apiConstants";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "../../navigation/StackNavigator/StackNavigator";
import { useAppSelector } from "../../store/redux/hooks";

const ProviderWrapper = (): JSX.Element => {
  const { url } = useAppSelector((state) => state.hero);
  return (
    <CachedRequestsProvider maxResultsPerPage={resultsPerPage} url={url}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CachedRequestsProvider>
  );
};

export default ProviderWrapper;
