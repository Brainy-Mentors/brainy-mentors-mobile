import React from "react";
import ScreenBase from "../ScreenBase";
import MentorsList from "../../components/mentorList/MentorList";

export default function SelectMentor() {
  return (
    <ScreenBase complete>
      <MentorsList />
    </ScreenBase>
  );
}
