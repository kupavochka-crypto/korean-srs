export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { model, key, body } = req.body ?? {};
  if (!model || !body) {
    return res.status(400).json({ error: 'Missing model or body' });
  }

  const apiKey = key;
  if (!apiKey) {
    return res.status(400).json({ error: 'Missing API key' });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

  try {
    const upstream = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const text = await upstream.text();
    return res.status(upstream.status).setHeader('Content-Type', 'application/json').send(text);
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Proxy error' });
  }
}

export const config = {
  maxDuration: 30,
};