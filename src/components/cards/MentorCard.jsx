import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "../../theme";
import TextStyled from "../ui/common/TextStyled";
import Button from "../ui/common/Button";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { LinearGradient } from "expo-linear-gradient";

export default function MentorCard({ mentor, style }) {
  const styleMentorCard = [styles.container, style];
  const { t } = useTranslation("global");
  const { setSelectedMentor } = useContext(AppContext);
  const navigation = useNavigation();

  const handleSelect = () => {
    const mentorClicked = JSON.stringify(mentor);
    setSelectedMentor(mentorClicked);
    navigation.navigate("home");
  };
  return (
    <View style={styleMentorCard}>
      <LinearGradient
        colors={[mentor.gradient[0], mentor.gradient[1]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.containerImage}
      >
        <Image style={styles.image} source={mentor.imageUrl}></Image>
      </LinearGradient>
      <View style={styles.containerDetails}>
        <TextStyled fontWeight={"bold"} fontSize={"title"}>
          {mentor.name} | {mentor.specialization}
        </TextStyled>
        <TextStyled color={"white"}>
          {mentor.shortDescription.slice(0, 80)}
        </TextStyled>
        <Button
          secondary
          title={t("mentorList.select")}
          onPress={handleSelect}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.backgrounBaseLight,
    padding: 16,
    borderRadius: 8,
    gap: 16,
  },
  containerDetails: {
    width: "auto",
    flex: 1,
    gap: 8,
  },
  containerImage: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: theme.colors.white,
    borderWidth: 1,
    borderRadius: 60,
    aspectRatio: 4 / 6,
    backgroundColor: theme.colors.backgroundBase,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 150,
    transform: [{ translateY: 15 }],
  },
});
