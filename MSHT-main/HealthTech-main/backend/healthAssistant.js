const express = require('express');
const router = express.Router();
require('dotenv').config();

function convertToBulletPoints(text) {
  // Try splitting long paragraph into separate lines and add dashes
  return text
    .split(/[.?!]\s+/) // split by sentence end
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `- ${line}`)
    .join('\n');
}

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
                {
                  // text: `You are a helpful maternal health assistant.\nAnswer in 3 to 5 very short bullet points only.\nDo NOT write paragraphs.\nEach point must start with a dash (-).\nKeep each point under 20 words.`
                },
                ...(req.body.contents?.[0]?.parts?.slice(1) || [])
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
            topP: 1,
            topK: 1
          }
        }),
      }
    );
    const data = await response.json();
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      data.candidates[0].content.parts[0].text =
        convertToBulletPoints(data.candidates[0].content.parts[0].text);
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching from Gemini API' });
  }
});

module.exports = router; 