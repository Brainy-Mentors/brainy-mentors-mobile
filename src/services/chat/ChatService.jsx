import axios from "axios";
const API_OPENAI_URL = 'https://api.openai.com/v1/chat/completions';


const chatService = {
    chat: (messageInput) => {
        const requestData = {
            messages: [
                { role: 'system', content: 'Actua como un experto en desarrollo personal, tu nombre es Tom Robbins,también debes responder de forma carismática responde de forma directa y breve' },
                { role: 'user', content: messageInput },
            ],
            model: 'gpt-3.5-turbo',
        };

        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ',
            },
        };

        return axios.post('https://api.openai.com/v1/chat/completions', requestData, requestConfig);
    },
};


export default chatService;

