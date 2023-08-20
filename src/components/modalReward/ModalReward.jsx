import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import Button from "../ui/common/Button";
import TextStyled from "../ui/common/TextStyled";
import theme from "../../theme";
import IconButton from "../ui/common/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProgressBar = ({ style, progress, maxCount }) => {
  let progressBar = progress;

  return (
    <View
      style={{
        flex: 1,
        maxHeight: 30,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.white,
        position: "relative",
      }}
    >
      <TextStyled>1/16</TextStyled>
    </View>
  );
};
const OptionReward = ({ ctaReward, titleReward, handleReward, reward }) => {
  const [percent, setPercent] = useState(0);
  return (
    <View style={styles.optionRewardContainer}>
      <View style={{ gap: 0 }}>
        <TextStyled color={"white"} fontWeight={"bold"} fontSize={"subheading"}>
          🪧 {titleReward}
        </TextStyled>
        {/* <ProgressBar progress={percent} /> */}
        <TextStyled
          color="primary"
          fontWeight={"bold"}
          style={{ textAlign: "center" }}
        >
          +{reward} tokens
        </TextStyled>
      </View>
      <View
        style={{
          gap: 4,
        }}
      >
        <Button
          onPress={handleReward}
          title={ctaReward}
          style={{ alignSelf: "center" }}
          secondary
        ></Button>
      </View>
    </View>
  );
};

export default function ModalReward({ isOpenModal, setIsOpenModal }) {
  const { t } = useTranslation("global");

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal visible={isOpenModal} transparent={true} animationType="fade">
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.colors.backgroundBase,
          position: "absolute",
          opacity: 0.95,
        }}
      ></View>

      <TouchableOpacity
        style={{
          paddingHorizontal: 24,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <TextStyled style={{ margin: 16, textAlign: "center" }}>
          Tus tokens : 30
        </TextStyled>
        <View style={styles.containerModal}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <TextStyled fontSize={"big"} fontWeight={"bold"}>
              {t("navbar.tokenShop")}
            </TextStyled>
            <IconButton style={{ marginTop: -4 }} onPress={handleClose}>
              <Icon name="close" size={20} color="white" />
            </IconButton>
          </View>

          <OptionReward titleReward={"Mira un anuncio"} ctaReward={"Obtener"} />
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
          Realmente nos gustaría evitar usar anuncios pero no sería sostenible,
          espero que entiendan, gracias! :D
        </TextStyled>
      </TouchableOpacity>
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
