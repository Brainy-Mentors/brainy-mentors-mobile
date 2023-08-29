import adrianJ from "../assets/images/mentors/adrianJ.png";
import tomR from "../assets/images/mentors/tomR.png";
import arnoldB from "../assets/images/mentors/arnoldB.png";
import isabellaM from "../assets/images/mentors/isabellaM.png";
import marioL from "../assets/images/mentors/marioL.png";
import matteoN from "../assets/images/mentors/matteoN.png";
import mayaC from "../assets/images/mentors/mayaC.png";
import islaM from "../assets/images/mentors/islaM.png";
import nicoC from "../assets/images/mentors/nicoC.png";

import { useTranslation } from "react-i18next";

export const dataMentors = () => {
  const { t } = useTranslation("global");
  const arrMentors = [
    {
      id: 1,
      name: t("mentors.1.name"),
      specialization: t("mentors.1.specialization"),
      shortDescription: t("mentors.1.shortDescription"),
      imageUrl: adrianJ,
      initialMessage: t("mentors.1.initialMessage"),
      gradient: ["#ffc3a09d", "#FFD6B2"],
    },
    {
      id: 2,
      name: t("mentors.2.name"),
      specialization: t("mentors.2.specialization"),
      shortDescription: t("mentors.2.shortDescription"),
      imageUrl: tomR,
      initialMessage: t("mentors.2.initialMessage"),
      gradient: ["#aee7e6a8", "#C3EFEF"],
    },
    {
      id: 3,
      name: t("mentors.3.name"),
      specialization: t("mentors.3.specialization"),
      shortDescription: t("mentors.3.shortDescription"),
      imageUrl: arnoldB,
      initialMessage: t("mentors.3.initialMessage"),
      gradient: ["#ffd0a9a8", "#FFDFC2"],
    },
    {
      id: 4,
      name: t("mentors.4.name"),
      specialization: t("mentors.4.specialization"),
      shortDescription: t("mentors.4.shortDescription"),
      imageUrl: isabellaM,
      initialMessage: t("mentors.4.initialMessage"),
      gradient: ["#b6e4e0ad", "#D5F5F3"],
    },
    {
      id: 5,
      name: t("mentors.5.name"),
      specialization: t("mentors.5.specialization"),
      shortDescription: t("mentors.5.shortDescription"),
      imageUrl: marioL,
      initialMessage: t("mentors.5.initialMessage"),
      gradient: ["#c9d7b5b0", "#D6E2C3"],
    },
    {
      id: 6,
      name: t("mentors.6.name"),
      specialization: t("mentors.6.specialization"),
      shortDescription: t("mentors.6.shortDescription"),
      imageUrl: matteoN,
      initialMessage: t("mentors.6.initialMessage"),
      gradient: ["#f9d6acb5", "#FFEDC2"],
    },
    {
      id: 7,
      name: t("mentors.7.name"),
      specialization: t("mentors.7.specialization"),
      shortDescription: t("mentors.7.shortDescription"),
      imageUrl: mayaC,
      initialMessage: t("mentors.7.initialMessage"),
      gradient: ["#f8d8d8bb", "#FFECEC"],
    },
    {
      id: 8,
      name: t("mentors.8.name"),
      specialization: t("mentors.8.specialization"),
      shortDescription: t("mentors.8.shortDescription"),
      imageUrl: islaM,
      initialMessage: t("mentors.8.initialMessage"),
      gradient: ["#fad6a5c3", "#FFEDB7"],
    },
    {
      id: 9,
      name: t("mentors.9.name"),
      specialization: t("mentors.9.specialization"),
      shortDescription: t("mentors.9.shortDescription"),
      imageUrl: nicoC,
      initialMessage: t("mentors.9.initialMessage"),
      gradient: ["#89aabdbc", "#a2dada"],
    },
  ];
  return arrMentors;
};
