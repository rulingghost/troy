// Vercel Serverless Function: POST /api/upload-image
// Uploads file to Vercel Blob storage and returns the public CDN URL

import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

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

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  try {
    let filename = `upload-${Date.now()}`;
    let buffer;
    let contentType = 'image/jpeg';

    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // Raw string
      }
    }

    if (body && body.fileData) {
      // Base64 encoded file upload
      const base64Data = body.fileData.replace(/^data:image\/\w+;base64,/, '');
      buffer = Buffer.from(base64Data, 'base64');
      if (body.filename) {
        // Sanitize filename
        filename = `${Date.now()}-${body.filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      }
      if (body.contentType) {
        contentType = body.contentType;
      }
    } else if (Buffer.isBuffer(req.body)) {
      buffer = req.body;
      const queryName = req.query.filename || `upload-${Date.now()}.png`;
      filename = `${Date.now()}-${queryName}`;
    } else {
      return res.status(400).json({
        success: false,
        error: 'No valid image data provided. Send { filename, fileData: "base64..." }'
      });
    }

    if (!token) {
      // Fallback in case BLOB token is not set yet in local dev:
      // Return a base64 data URL so user can still preview and test locally!
      console.warn('BLOB_READ_WRITE_TOKEN is not set. Falling back to data URI for local test.');
      const dataUri = `data:${contentType};base64,${buffer.toString('base64')}`;
      return res.status(200).json({
        success: true,
        url: dataUri,
        warning: 'BLOB_READ_WRITE_TOKEN is not configured in Vercel. Image saved as data URI.'
      });
    }

    // Upload to Vercel Blob
    const blob = await put(filename, buffer, {
      access: 'public',
      token,
      contentType
    });

    return res.status(200).json({
      success: true,
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      pathname: blob.pathname
    });
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Image upload failed'
    });
  }
}
