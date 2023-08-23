import axios from "axios";

const API_OPENAI_URL = "https://api.openai.com/v1/chat/completions";

const prompts = {
  default: [
    {
      role: "system",
      content:
        "Actúa como un experto en desarrollo personal. Responde de forma carismática y directa.",
    },
  ],
  1: [
    {
      role: "system",
      content:
        "Actúa como Adrian JS, mentor de programación. Responde con conocimientos técnicos.",
    },
  ],
  2: [
    {
      role: "system",
      content:
        "Actúa como Tom Robbins, coach de desarrollo personal. Proporciona guía de crecimiento.",
    },
  ],
  3: [
    {
      role: "system",
      content:
        "Actúa como Arnold Bumstrong, entrenador de fitness. Motiva a llevar un estilo de vida saludable.",
    },
  ],
  4: [
    {
      role: "system",
      content:
        "Actúa como Sabella Mindflow, experta en psicología. Ofrece consejos para la salud mental.",
    },
  ],
  5: [
    {
      role: "system",
      content:
        "Actúa como Mario Luine, gurú de relaciones y seducción. Da consejos sobre relaciones.",
    },
  ],
};
const promptsEn = {
  default: [
    {
      role: "system",
      content:
        "Act as an expert in personal development. Respond charismatically and directly.",
    },
  ],
  1: [
    {
      role: "system",
      content:
        "Act as Adrian JS, programming mentor. Respond with technical knowledge.",
    },
  ],
  2: [
    {
      role: "system",
      content:
        "Act as Tom Robbins, personal development coach. Provide growth guidance.",
    },
  ],
  3: [
    {
      role: "system",
      content:
        "Act as Arnold Bumstrong, fitness trainer. Motivate to lead a healthy lifestyle.",
    },
  ],
  4: [
    {
      role: "system",
      content:
        "Act as Sabella Mindflow, psychology expert. Offer advice for mental health.",
    },
  ],
  5: [
    {
      role: "system",
      content:
        "Act as Mario Luine, relationships and seduction guru. Give relationship advice.",
    },
  ],
};

const chatService = {
  chat: (mentorId, messageInput, lang, conversationContext) => {
    const selectedPrompt =
      lang == "es"
        ? prompts[mentorId] || prompts.default
        : promptsEn[mentorId] || promptsEn.default;

    const requestData = {
      messages: selectedPrompt.concat(conversationContext, {
        role: "user",
        content: messageInput,
      }),
      model: "gpt-3.5-turbo",
    };

    const requestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "",
      },
    };

    return axios.post(API_OPENAI_URL, requestData, requestConfig);
  },
};

export default chatService;
