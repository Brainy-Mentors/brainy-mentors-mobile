import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MentorCard from "./cards/MentorCard";
import entrepenur from "../../assets/images/mentors/entrepenur-expert.png";
import marketing from "../../assets/images/mentors/marketing-expert.png";
import poet from "../../assets/images/mentors/poet-expert.png";
import profesionalDev from "../../assets/images/mentors/profesional-development-expert.png";
import relations from "../../assets/images/mentors/relations-expert.png";

export default function MentorsList() {
  const mentorsData = [
    {
      name: "Alex Mendez",
      specialization: "Emprendedor",
      shortDescription:
        "Especializado en negocios digitales, estrategias empresariales y comercio electrónico.",
      imageUrl: entrepenur,
    },
    {
      name: "Elena García",
      specialization: "Marketing",
      shortDescription:
        "Experta en marketing digital y estrategias para llegar a tu audiencia objetivo.",
      imageUrl: marketing,
    },
    {
      name: "Carlos Rodríguez",
      specialization: "Poeta",
      shortDescription:
        "Explorando emociones a través de la poesía. Te guiaré para expresarte y conectar con otros a través de las palabras.",
      imageUrl: poet,
    },
    {
      name: "Isabella Martínez",
      specialization: "Desarrollo Profesional",
      shortDescription:
        "Desarrollo profesional personalizado para alcanzar tus metas. Abordaremos tus habilidades y desafíos para impulsar tu carrera.",
      imageUrl: profesionalDev,
    },
    {
      name: "Laura Sánchez",
      specialization: "Relaciones Sociales",
      shortDescription:
        "Domina el arte de las relaciones sociales. Aprende a construir conexiones genuinas y a comunicarte efectivamente en cualquier entorno.",
      imageUrl: relations,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {mentorsData.map((mentor, index) => (
        <MentorCard mentor={mentor} style={{ marginBottom: 16 }} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingBottom: 16 } });
