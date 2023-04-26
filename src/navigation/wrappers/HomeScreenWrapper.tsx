import React from "react";
import { marvelBaseUrl, resultsPerPage } from "../../constants/apiConstants";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import { CachedRequestsProvider } from "../../store/contexts/CachedRequestsProvider";

const HomeScreenWrapper = (): JSX.Element => (
  <CachedRequestsProvider
    maxResultsPerPage={resultsPerPage}
    url={marvelBaseUrl}
  >
    <HomeScreen />
  </CachedRequestsProvider>
);

export default HomeScreenWrapper;
