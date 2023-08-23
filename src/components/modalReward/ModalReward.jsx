import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import brainCoinsGroup from "../../assets/images/brainCoins.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import Button from "../ui/common/Button";
import TextStyled from "../ui/common/TextStyled";
import theme from "../../theme";
import IconButton from "../ui/common/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TestIds } from "react-native-google-mobile-ads";
import AppContext from "../../context/AppContext";
import AdContext from "../../context/AdContext";

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

export default function ModalReward({ isOpenModal, setIsOpenModal }) {
  const { showAd, loadAd } = useContext(AdContext);
  const { tokensCount, setTokensCount } = useContext(AppContext);
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);

  const { t } = useTranslation("global");

  const handleClose = () => {
    setIsOpenModal(false);
  };
  useEffect(() => {
    loadAd();
  }, []);

  const handleShowAd = async () => {
    let nTokens = parseInt(tokensCount) + 3;
    setBtnIsDisabled(true);
    try {
      await showAd();
      setTokensCount(nTokens.toString());
      await loadAd();
      setBtnIsDisabled(false);
    } catch (error) {
      setBtnIsDisabled(true);

      await loadAd();

      setTimeout(() => {
        showAd();
        setTokensCount(nTokens.toString());
        setBtnIsDisabled(false);
      }, 1500);
    }
  };

  return (
    <Modal visible={isOpenModal} transparent={true} animationType="fade">
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.colors.backgroundBase,
          position: "absolute",
          opacity: 0.985,
        }}
      ></View>

      <View
        style={{
          paddingHorizontal: 24,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          style={{ position: "absolute", top: 0, right: 0, margin: 24 }}
          onPress={handleClose}
        >
          <Icon name="close" size={32} color="white" />
        </IconButton>
        <Image source={brainCoinsGroup}></Image>
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
    </Modal>
  );
}

const styles = StyleSheet.create({
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
