// Vercel Serverless Function: POST /api/save-content
// Writes site_content into Vercel KV / Upstash Redis

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!kvUrl || !kvToken) {
    return res.status(500).json({
      success: false,
      error: 'Vercel KV environment variables (KV_REST_API_URL, KV_REST_API_TOKEN) are not configured in Vercel.'
    });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch (e) {
        // Payload might already be string
      }
    }

    const contentToSave = payload?.content !== undefined ? payload.content : payload;

    if (!contentToSave || typeof contentToSave !== 'object') {
      return res.status(400).json({
        success: false,
        error: 'Invalid content payload provided.'
      });
    }

    // Save to KV / Upstash Redis via REST API
    const response = await fetch(`${kvUrl}/set/site_content`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${kvToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contentToSave)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`KV set error: ${response.statusText} - ${errText}`);
    }

    const result = await response.json();

    return res.status(200).json({
      success: true,
      result,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error saving to KV:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
