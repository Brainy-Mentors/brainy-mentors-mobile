import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MentorCard from "../cards/MentorCard";
import TextStyled from "../ui/common/TextStyled";
import { dataMentors } from "../../constants/dataMentors";

export default function MentorsList() {

  const mentorsData = dataMentors;


  return (
    <View style={{ gap: 16, paddingHorizontal: 0, paddingBottom:24 }}>
      <ScrollView style={styles.container}>
        <TextStyled
          fontWeight={"bold"}
          fontSize={"big"}
          color={"white"}
          style={{ textAlign: "center", paddingBottom: 16  }}
        >
          ¿Con quién quieres hablar?
        </TextStyled>
        {mentorsData.map((mentor, index) => (
          <MentorCard
            mentor={mentor}
            style={{ marginBottom: 16 }}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ container: { marginBottom: 32 } });
