import React from "react";
import { useAppSelector } from "../../store/redux/hooks";
import { resultsPerPage } from "../../constants/apiConstants";
import HeroDetailScreen from "../../screens/HeroDetailScreen/HeroDetailScreen";
import { CachedRequestsProvider } from "../../store/contexts/CachedRequestsProvider";

const DetailScreenWrapper = (): JSX.Element => {
  const { url } = useAppSelector((state) => state.hero);

  return (
    <CachedRequestsProvider maxResultsPerPage={resultsPerPage} url={url}>
      <HeroDetailScreen />
    </CachedRequestsProvider>
  );
};

export default DetailScreenWrapper;
