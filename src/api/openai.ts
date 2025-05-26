import OpenAI from 'openai';
import type { AgentRole } from '../types/agent';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('OpenAI API key is missing. Please add VITE_OPENAI_API_KEY to your .env file.');
}

const openai = new OpenAI({ 
  apiKey: OPENAI_API_KEY || 'dummy-key',
  dangerouslyAllowBrowser: true 
});

export const getAgentResponse = async (role: AgentRole, message: string, context: string) => {
  try {
    if (!OPENAI_API_KEY) {
      return "Configuration error: OpenAI API key is missing. Please contact support.";
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a professional ${role} agent. ${context}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content || "I apologize, but I couldn't process your request.";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please try again later.";
  }
};