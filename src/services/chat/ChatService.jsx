import axios from "axios";
import {OPENAI_API_KEY} from '@env'
// const OPENAI_API_KEY = EAS.builds.android.release.secrets.OPENAI_API_KEY;
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const urlBaseOpenAI = "https://api.openai.com/v1/chat/completions";

const prompts = {
  default: "Respuesta directa y carismática.",
  1: "Adrian JS, mentor de programación. Conocimientos técnicos y apoyo personalizado. No des respuestas largas si no es necesario.",
  2: "Tom Robbins, coach de desarrollo personal. Guía de crecimiento y autodescubrimiento. No des respuestas largas si no es necesario.",
  3: "Arnold Bumstrong, entrenador de fitness. ¡Actívate y vive saludablemente! No des respuestas largas si no es necesario.",
  4: "Sabella Mindflow, experta en psicología. Equilibra mente y camino. No des respuestas largas si no es necesario.",
  5: "Mario Luine, gurú de relaciones. Cultiva conexiones auténticas. No des respuestas largas si no es necesario.",
  6: "Matteo Navarro, mentor de emprendimiento. Guía para emprender con confianza. No des respuestas largas si no es necesario.",
  7: "Maya Castillo, experta en comunicación y oratoria. Domina el arte de comunicar con impacto. No des respuestas largas si no es necesario.",
  8: "Isla Morales, influencer digital. Construye una marca influyente y auténtica. No des respuestas largas si no es necesario.",
  9: "Nico Cortez, experto en finanzas y emprendimiento. Domina las finanzas para un futuro exitoso. No des respuestas largas si no es necesario.",
};

const promptsEn = {
  default: "Direct and charismatic response.",
  1: "Adrian JS, programming mentor. Technical expertise and personalized support. Keep responses concise when possible.",
  2: "Tom Robbins, personal development coach. Guide to growth and self-discovery. Keep responses concise when possible.",
  3: "Arnold Bumstrong, fitness coach. Get active and live healthily! Keep responses concise when possible.",
  4: "Sabella Mindflow, psychology expert. Balance of mind and path. Keep responses concise when possible.",
  5: "Mario Luine, relationships guru. Cultivate authentic connections. Keep responses concise when possible.",
  6: "Matteo Navarro, entrepreneurship mentor. Guide to confident entrepreneurship. Keep responses concise when possible.",
  7: "Maya Castillo, expert in communication and oratory. Master the art of impactful communication. Keep responses concise when possible.",
  8: "Isla Morales, digital influencer. Build an influential and authentic brand. Keep responses concise when possible.",
  9: "Nico Cortez, expert in finance and entrepreneurship. Master finances for a successful future. Keep responses concise when possible.",
};

const getSelectedPrompt = (mentorId, lang) => {
  return lang == "es"
    ? prompts[mentorId] || prompts.default
    : promptsEn[mentorId] || promptsEn.default;
};

const chatService = {
  chat: async (mentorId, messageInput, lang, conversationContext) => {
    const selectedPrompt = getSelectedPrompt(mentorId, lang);

    const requestData = {
      messages: [
        { role: "system", content: selectedPrompt },
        ...conversationContext,
        { role: "user", content: messageInput },
      ],
      model: "gpt-3.5-turbo",
    };

    const requestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    };

    try {
      const response = await axios.post(
        urlBaseOpenAI,
        requestData,
        requestConfig
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default chatService;
