import { getGroqChatCompletion } from '../services/groqService.js';

export const completeText = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await getGroqChatCompletion(prompt);
    res.json({ completion });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
};
