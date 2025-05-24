// api/chat.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Secure environment variable
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = response.data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error calling OpenAI:', error.message);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI.' });
  }
}
