import { createContext, useState } from "react";
import { dataMentors } from "../constants/dataMentors";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { TestIds } from "react-native-google-mobile-ads";
import useRewardedInterstitialAd from "../hooks/useRewardedInterstitialAd";

const AdContext = createContext();
const adUnitId = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

export const AdProvider = ({ children }) => {
  const { loaded, showAd, loadAd } = useRewardedInterstitialAd(adUnitId);

  const contextData = { loaded, showAd, loadAd };

  return (
    <AdContext.Provider value={contextData}>{children}</AdContext.Provider>
  );
};
export default AdContext;
