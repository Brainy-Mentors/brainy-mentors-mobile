import axios from "axios";
import { OPENAI_API_URL_BASE, OPENAI_API_KEY } from "@env";

const prompts = {
  default: "Actúa como un experto en desarrollo personal. Responde de forma carismática y directa.",
  1: "Actúa como Adrian JS, mentor de programación. Responde con conocimientos técnicos.",
  2: "Actúa como Tom Robbins, coach de desarrollo personal. Proporciona guía de crecimiento.",
  3: "Actúa como Arnold Bumstrong, entrenador de fitness. Motiva a llevar un estilo de vida saludable.",
  4: "Actúa como Sabella Mindflow, experta en psicología. Ofrece consejos para la salud mental.",
  5: "Actúa como Mario Luine, gurú de relaciones y seducción. Da consejos sobre relaciones.",
};

const promptsEn = {
  default: "Act as an expert in personal development. Respond charismatically and directly.",
  1: "Act as Adrian JS, programming mentor. Respond with technical knowledge.",
  2: "Act as Tom Robbins, personal development coach. Provide growth guidance.",
  3: "Act as Arnold Bumstrong, fitness trainer. Motivate to lead a healthy lifestyle.",
  4: "Act as Sabella Mindflow, psychology expert. Offer advice for mental health.",
  5: "Act as Mario Luine, relationships and seduction guru. Give relationship advice.",
};

const getSelectedPrompt = (mentorId, lang) => {
  return lang == "es" ? prompts[mentorId] || prompts.default : promptsEn[mentorId] || promptsEn.default;
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
      const response = await axios.post(OPENAI_API_URL_BASE, requestData, requestConfig);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default chatService;
