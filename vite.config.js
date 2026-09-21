import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local Dev API Mock & Persistence Plugin
function localDevApiPlugin() {
  let inMemoryContent = null;
  const devDbPath = path.resolve(__dirname, '.dev-site-content.json');

  return {
    name: 'local-dev-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // GET /api/get-content
        if (req.url && req.url.startsWith('/api/get-content')) {
          res.setHeader('Content-Type', 'application/json');
          try {
            if (!inMemoryContent && fs.existsSync(devDbPath)) {
              inMemoryContent = JSON.parse(fs.readFileSync(devDbPath, 'utf-8'));
            }
          } catch (e) {
            console.warn('Local dev DB read error:', e);
          }
          res.end(JSON.stringify({ success: true, data: inMemoryContent || null }));
          return;
        }

        // POST /api/save-content
        if (req.url && req.url.startsWith('/api/save-content') && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              const contentToSave = parsed.content !== undefined ? parsed.content : parsed;
              inMemoryContent = contentToSave;
              fs.writeFileSync(devDbPath, JSON.stringify(contentToSave, null, 2));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, updatedAt: new Date().toISOString() }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // POST /api/upload-image
        if (req.url && req.url.startsWith('/api/upload-image') && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: true, 
                url: parsed.fileData || ''
              }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // /api/ai-chats handler (GET, POST, PUT, DELETE)
        if (req.url && req.url.startsWith('/api/ai-chats')) {
          const devChatsDbPath = path.resolve(__dirname, '.dev-ai-chats.json');
          const getChats = () => {
            try {
              if (fs.existsSync(devChatsDbPath)) {
                return JSON.parse(fs.readFileSync(devChatsDbPath, 'utf-8'));
              }
            } catch (e) {}
            return [];
          };
          const saveChats = (chats) => {
            try {
              fs.writeFileSync(devChatsDbPath, JSON.stringify(chats, null, 2));
            } catch (e) {}
          };

          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, data: getChats() }));
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body);
                const session = parsed.session;
                let chats = getChats();
                const idx = chats.findIndex(c => c.id === session.id);
                if (idx >= 0) {
                  chats[idx] = { ...chats[idx], ...session, updatedAt: new Date().toISOString() };
                } else {
                  chats.unshift({ ...session, updatedAt: new Date().toISOString() });
                }
                saveChats(chats.slice(0, 100));
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: session }));
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }

          if (req.method === 'PUT') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const { id, status } = JSON.parse(body);
                let chats = getChats();
                const target = chats.find(c => c.id === id);
                if (target) {
                  target.status = status;
                  target.updatedAt = new Date().toISOString();
                  saveChats(chats);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, updatedId: id }));
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }

          if (req.method === 'DELETE') {
            try {
              const url = new URL(req.url, 'http://localhost');
              const id = url.searchParams.get('id');
              let chats = getChats();
              chats = chats.filter(c => c.id !== id);
              saveChats(chats);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, deletedId: id }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
            return;
          }
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localDevApiPlugin()],
});
