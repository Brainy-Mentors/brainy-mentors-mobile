import React from "react";
import ScreenBase from "../ScreenBase";
import MentorsList from "../../components/mentorList/MentorList";

export default function SelectMentor({ navigation }) {
  return (
    <ScreenBase>
      <MentorsList />
    </ScreenBase>
  );
}
