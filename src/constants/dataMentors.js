import marioL from "../assets/images/mentors/marioL.png";
import adrianJ from "../assets/images/mentors/adrianJ.png";
import arnoldB from "../assets/images/mentors/arnoldB.png";
import isabellaM from "../assets/images/mentors/isabellaM.png";
import tomR from "../assets/images/mentors/tomR.png";
import { useTranslation } from "react-i18next";

export const dataMentors = () => {
  const { t } = useTranslation("global");

  return [
    {
      id: 1,
      name: t("mentors.1.name"),
      specialization: t("mentors.1.specialization"),
      shortDescription: t("mentors.1.shortDescription"),
      imageUrl: adrianJ,
      initialMessage:t("mentors.1.initialMessage")
    },
    {
      id: 2,
      name: t("mentors.2.name"),
      specialization: t("mentors.2.specialization"),
      shortDescription: t("mentors.2.shortDescription"),
      imageUrl: tomR,
      initialMessage:t("mentors.2.initialMessage")
    },
    {
      id: 3,
      name: t("mentors.3.name"),
      specialization: t("mentors.3.specialization"),
      shortDescription: t("mentors.3.shortDescription"),
      imageUrl: arnoldB,
      initialMessage:t("mentors.3.initialMessage")
    },
    {
      id: 4,
      name: t("mentors.4.name"),
      specialization: t("mentors.4.specialization"),
      shortDescription: t("mentors.4.shortDescription"),
      imageUrl: isabellaM,
      initialMessage:t("mentors.4.initialMessage")
    },
    {
      id: 5,
      name: t("mentors.5.name"),
      specialization: t("mentors.5.specialization"),
      shortDescription: t("mentors.5.shortDescription"),
      imageUrl: marioL,
      initialMessage:t("mentors.5.initialMessage")
    },
  ];
};
