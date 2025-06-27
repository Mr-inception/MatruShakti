const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post('/api/health-assistant', async (req, res) => {
  console.log('Received request at /api/health-assistant');
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "You are a helpful maternal health assistant. Answer questions about pregnancy, maternal health, and government schemes in India. Always answer in 3-5 short bullet points. Do not write any paragraphs. Start each point with a dash (-) or a number." },
                ...(req.body.contents?.[0]?.parts?.slice(1) || [])
              ]
            }
          ]
        }),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching from Gemini API' });
  }
});

module.exports = router; 