import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import brainCoinsGroup from "../../assets/images/brainCoins.png";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import IconButton from "../../components/ui/common/IconButton";
import TextStyled from "../../components/ui/common/TextStyled";
import Button from "../../components/ui/common/Button";
import theme from "../../theme";
import {
  RewardedInterstitialAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId =  "ca-app-pub-1348172596313270/4372848177";

// const adUnitId = __DEV__ 
//   ? TestIds.REWARDED
//   : "ca-app-pub-1348172596313270/4372848177";

const rewarded = RewardedInterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords:['fashion','clothing']
});

const OptionReward = ({
  ctaReward,
  titleReward,
  handleReward,
  reward,
  btnIsDisabled,
}) => {
  const { t } = useTranslation("global");
  return (
    <View style={styles.optionRewardContainer}>
      <View style={{ gap: 0 }}>
        <TextStyled color={"white"} fontWeight={"bold"} fontSize={"subheading"}>
          🪧 {titleReward}
        </TextStyled>
        <TextStyled
          color="primary"
          fontWeight={"bold"}
          style={{ textAlign: "center" }}
        >
          +{reward} {t("modalReward.brainCoins")}
        </TextStyled>
      </View>
      <View style={{ gap: 4 }}>
        <Button
          onPress={() => handleReward()}
          title={ctaReward}
          style={{ alignSelf: "center" }}
          inactive={btnIsDisabled}
          secondary
        />
      </View>
    </View>
  );
};

const GetTokens = () => {
  const { tokensCount, setTokensCount } = useContext(AppContext);
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation("global");

  const handleClose = () => {
    navigation.goBack();
  };

  const handleShowAd = async () => {
    setBtnIsDisabled(true);
    try {
      await rewarded.show();
    } catch (error) {
      console.log("Error showing ad:", error);
      try {
        await rewarded.load();
        setTimeout(async () => {
          try {
            await rewarded.show();
          } catch (showRetryError) {
            console.log("Error retrying to show ad:", showRetryError);
          } finally {
            setBtnIsDisabled(false);
          }
        }, 1500);
      } catch (loadError) {
        console.log("Error loading ad:", loadError);
        setBtnIsDisabled(false);
      }
    }
  };

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log("Ad loaded");
      }
    );

    rewarded.load();

    return () => {
      unsubscribeLoaded();
    };
  }, []);

  useEffect(() => {
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log("User earned reward of ", reward);
        const nTokens = parseInt(tokensCount) + 3;
        setTokensCount(nTokens.toString());
      }
    );

    return () => {
      unsubscribeEarned();
    };
  }, [tokensCount]);

  return (
    <View style={styles.container}>
      <IconButton
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          marginHorizontal: 24,
          marginVertical: 48,
        }}
        onPress={handleClose}
      >
        <Icon name="close" size={32} color="white" />
      </IconButton>
      <Image source={brainCoinsGroup} />
      <TextStyled
        fontSize={"extrabig"}
        fontWeight={"bold"}
        style={{ margin: 16, textAlign: "center" }}
      >
        {t("modalReward.yourBrainCoins")} : {tokensCount}
      </TextStyled>
      <View style={styles.containerModal}>
        <TextStyled
          fontSize={"title"}
          style={{ textAlign: "center" }}
          color={"white"}
          fontWeight={"bold"}
        >
          {t("navbar.tokenShop")}
        </TextStyled>

        <OptionReward
          titleReward={t("modalReward.watchAd")}
          ctaReward={t("modalReward.get")}
          reward={" 3 "}
          btnIsDisabled={btnIsDisabled}
          handleReward={handleShowAd}
        />
      </View>
      <TextStyled
        color={"white"}
        fontSize={"subheading "}
        style={{
          opacity: 0.5,
          textAlign: "center",
          fontSize: 12,
          marginTop: 8,
        }}
      >
        {t("modalReward.anouncementAds")}
      </TextStyled>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  containerModal: {
    padding: 16,
    borderRadius: 8,
    opacity: 1,
    backgroundColor: theme.colors.backgrounBaseLight,
    gap: 16,
  },
  optionRewardContainer: {
    borderRadius: 8,
    padding: 16,
    borderColor: theme.colors.white,
    borderWidth: 1,
    gap: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default GetTokens;
