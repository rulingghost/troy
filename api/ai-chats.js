// Vercel Serverless Function: /api/ai-chats
// Manages AI Live Support chat sessions & customer leads in Upstash Redis / Vercel KV

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!kvUrl || !kvToken) {
    return res.status(200).json({
      success: true,
      data: [],
      message: 'KV variables not set. Running in local fallback mode.'
    });
  }

  const KEY = 'site_ai_chats';

  // Helper to fetch current chats from KV
  const getChatsFromKV = async () => {
    try {
      const response = await fetch(`${kvUrl}/get/${KEY}`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      if (!response.ok) return [];
      const result = await response.json();
      let data = result.result;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (e) {}
      }
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('KV get chats error:', e);
      return [];
    }
  };

  // Helper to save chats to KV
  const saveChatsToKV = async (chats) => {
    try {
      await fetch(`${kvUrl}/set/${KEY}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chats)
      });
      return true;
    } catch (e) {
      console.error('KV save chats error:', e);
      return false;
    }
  };

  try {
    // 1. GET: Tüm sohbetleri getir
    if (req.method === 'GET') {
      const chats = await getChatsFromKV();
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ success: true, data: chats });
    }

    // 2. POST: Yeni sohbet veya lead kaydet / güncelle
    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (e) {}
      }
      const session = body?.session;
      if (!session || !session.id) {
        return res.status(400).json({ success: false, error: 'Oturum verisi eksik.' });
      }

      const chats = await getChatsFromKV();
      const existingIdx = chats.findIndex(c => c.id === session.id);

      if (existingIdx >= 0) {
        chats[existingIdx] = { ...chats[existingIdx], ...session, updatedAt: new Date().toISOString() };
      } else {
        chats.unshift({ ...session, updatedAt: new Date().toISOString() });
      }

      // En son 200 görüşmeyi tut
      const trimmedChats = chats.slice(0, 200);
      await saveChatsToKV(trimmedChats);

      return res.status(200).json({ success: true, data: session });
    }

    // 3. PUT: Durum güncelle (örn: lead arandı)
    if (req.method === 'PUT') {
      let body = req.body;
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (e) {}
      }
      const { id, status } = body || {};
      if (!id || !status) {
        return res.status(400).json({ success: false, error: 'ID ve durum zorunludur.' });
      }

      const chats = await getChatsFromKV();
      const target = chats.find(c => c.id === id);
      if (target) {
        target.status = status;
        target.updatedAt = new Date().toISOString();
        await saveChatsToKV(chats);
      }

      return res.status(200).json({ success: true, updatedId: id, status });
    }

    // 4. DELETE: Sohbet kaydını sil
    if (req.method === 'DELETE') {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const id = url.searchParams.get('id');

      if (!id) {
        return res.status(400).json({ success: false, error: 'Silinecek ID belirtilmedi.' });
      }

      let chats = await getChatsFromKV();
      chats = chats.filter(c => c.id !== id);
      await saveChatsToKV(chats);

      return res.status(200).json({ success: true, deletedId: id });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('API /api/ai-chats error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
