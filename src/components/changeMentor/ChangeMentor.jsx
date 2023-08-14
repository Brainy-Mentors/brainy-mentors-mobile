import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextStyled from "../ui/common/TextStyled";
import Button from "../ui/common/Button";
import theme from "../../theme";
import Feather from "react-native-vector-icons/Feather";
import mentorImage from "../../assets/images/mentors/profesional-development-expert.png";

function ChangeMentor() {
  const mentor = {
    name: "Adrian JS",
    imageUrl: mentorImage,
  };

  const handleChange = () => {};

  return (
    <View style={styles.container}>
      <TextStyled
        color={"white"}
        fontWeight={"bold"}
        fontSize={"extrabig"}
        style={{ textAlign: "center" }}
      >
        Tu mentor es...
      </TextStyled>
      <View>
        <TouchableOpacity style={styles.changeButton} onPress={handleChange}>
          <Feather name="repeat" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.containerMentor}>
          <Image style={styles.mentorImage} source={mentor.imageUrl}></Image>
        </View>
      </View>
      <View>
        <TextStyled
          color={"white"}
          fontWeight={"bold"}
          fontSize={"extrabig"}
          style={{ textAlign: "center" }}
        >
          Adrian JS
        </TextStyled>
        <TextStyled style={{ textAlign: "center" }}>
          [Mentor de programación]
        </TextStyled>
      </View>
      <Button primary title={"Chatear"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingVertical: 40, gap: 32 },
  containerMentor: {
    width: 240,
    aspectRatio: 8 / 12,
    backgroundColor: "#627a96",
    borderRadius: 140,
    borderColor: theme.colors.white,
    borderWidth: 1,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "relative",
  },
  mentorImage: { width: 250, height: 255 },
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
