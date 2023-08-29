import React, { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextStyled from "../ui/common/TextStyled";
import Button from "../ui/common/Button";
import theme from "../../theme";
import Feather from "react-native-vector-icons/Feather";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from 'expo-linear-gradient';


function ChangeMentor() {
  const { t } = useTranslation("global");
  const { selectedMentor } = useContext(AppContext);
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate("select-mentor");
  };

  const handleChat = () => {
    navigation.navigate("chat", { mentor: JSON.parse(selectedMentor) });
  };

  return (
    <View style={styles.container}>
      <TextStyled
        color={"white"}
        fontWeight={"bold"}
        fontSize={"extrabig"}
        style={{ textAlign: "center" }}
      >
        {t("home.yourMentorIs")}
      </TextStyled>
      <View>
        <TouchableOpacity style={styles.changeButton} onPress={handleChange}>
          <Feather name="repeat" style={styles.icon} />
        </TouchableOpacity>
        <LinearGradient
          colors={[JSON.parse(selectedMentor).gradient[0], JSON.parse(selectedMentor).gradient[1]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.containerMentor}
        >
          <Image
            style={styles?.mentorImage}
            source={JSON.parse(selectedMentor)?.imageUrl}
          ></Image>
        </LinearGradient>
      </View>
      <View style={{ gap: 2 }}>
        <TextStyled
          color={"white"}
          fontWeight={"bold"}
          fontSize={"extrabig"}
          style={{ textAlign: "center" }}
        >
          {JSON.parse(selectedMentor).name}
        </TextStyled>
        <TextStyled style={{ textAlign: "center" }}>
          [ {t(`mentors.${JSON.parse(selectedMentor).id}.specialization`)} ]
        </TextStyled>
      </View>
      <Button
        primary
        title={t("home.chating")}
        style={{ gap: 8 }}
        onPress={handleChat}
      >
        <Icon name="message1" size={20} color="black" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingVertical: 40, gap: 32 },
  containerMentor: {
    width: 240,
    aspectRatio: 8 / 12,
    borderRadius: 140,
    borderColor: theme.colors.white,
    borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  mentorImage: { width: 280, height: 330, transform: [{ translateY: 25 }] },
  changeButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.black,
    borderWidth: 1,
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 100,
    transform: [{ translateX: -16 }, { translateY: 20 }],
  },
  icon: {
    fontSize: theme.fontSizes.title,
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.black,
    margin: "auto",
  },
});

export default ChangeMentor;
