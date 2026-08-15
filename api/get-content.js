// Vercel Serverless Function: GET /api/get-content
// Reads site_content from Vercel KV / Upstash Redis

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!kvUrl || !kvToken) {
    // If KV environment variables are not set yet, return null data so frontend uses fallback
    return res.status(200).json({
      success: true,
      data: null,
      message: 'KV environment variables not configured. Using fallback content.'
    });
  }

  try {
    // Fetch directly from KV/Upstash REST endpoint
    const response = await fetch(`${kvUrl}/get/site_content`, {
      headers: {
        Authorization: `Bearer ${kvToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`KV response error: ${response.statusText}`);
    }

    const result = await response.json();
    let data = result.result;

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        // Keep as is if already parsed
      }
    }

    // Set cache control for performance
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
    return res.status(200).json({
      success: true,
      data: data || null
    });
  } catch (error) {
    console.error('Error reading from KV:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
}
