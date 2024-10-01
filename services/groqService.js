import Groq from "groq-sdk";
import { config } from '../config/dotenvConfig.js';

config();  // Load environment variabless

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export const getGroqChatCompletion = async (userPrompt) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Continue the text starting with the following prompt:",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 0.5,
    max_tokens: 25,
    top_p: 1,
    stop: null,
    stream: false,
  });

  return chatCompletion.choices[0]?.message?.content || "";
};
