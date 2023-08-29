import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import brainCoinsGroup from "../../assets/images/brainCoins.png";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/MaterialIcons";
// import AdContext from "../../context/AdContext";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import IconButton from "../../components/ui/common/IconButton";
import TextStyled from "../../components/ui/common/TextStyled";
import Button from "../../components/ui/common/Button";
import theme from "../../theme";
import ScreenBase from "../ScreenBase";

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
      <View
        style={{
          gap: 4,
        }}
      >
        <Button
          onPress={() => handleReward()}
          title={ctaReward}
          style={{ alignSelf: "center" }}
          inactive={btnIsDisabled}
          secondary
        ></Button>
      </View>
    </View>
  );
};

const GetTokens = () => {
  //   const { showAd, loadAd } = useContext(AdContext);
  const { tokensCount, setTokensCount } = useContext(AppContext);
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const navigation = useNavigation();

  const { t } = useTranslation("global");

  useEffect(() => {
    // loadAd();
  }, []);

  const handleShowAd = async () => {
    let nTokens = parseInt(tokensCount) + 3;
    setBtnIsDisabled(true);
    try {
      //   await showAd();
      setTokensCount(nTokens.toString());
      //   await loadAd();
      setBtnIsDisabled(false);
    } catch (error) {
      try {
        setBtnIsDisabled(true);

        // await loadAd();

        setTimeout(() => {
          //   showAd();
          setTokensCount(nTokens.toString());
          setBtnIsDisabled(false);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
      <View style={styles.container}>
        <IconButton
          style={{ position: "absolute", top: 0, right: 0, margin: 24 }}
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
