import { useState, useEffect } from "react";
import {
  RewardedInterstitialAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";

const useRewardedInterstitialAd = (adUnitId) => {
  const [loaded, setLoaded] = useState(false);

  const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(
    adUnitId,
    {
      requestNonPersonalizedAdsOnly: true,
      keywords: ["fashion", "clothing"],
    }
  );

  useEffect(() => {
    const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    const unsubscribeEarned = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        // RECOMPENSA
        console.log("UsUARIO RECOMPENSADO + tokens RECOMPENSAAAA");
      }
    );

    rewardedInterstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const showAd = () => {
    if (loaded) {
      rewardedInterstitial.show();
    }
  };

  const loadAd = () => {
    rewardedInterstitial.load();
  };

  return {
    loaded,
    showAd,
    loadAd,
  };
};

export default useRewardedInterstitialAd;
