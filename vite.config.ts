import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function saveCreatorPhotoPlugin(): Plugin {
  return {
    name: 'save-creator-photo-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-creator-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { imageBase64 } = JSON.parse(body);
              if (imageBase64 && imageBase64.includes('base64,')) {
                const base64Data = imageBase64.split('base64,')[1];
                const buffer = Buffer.from(base64Data, 'base64');
                const targetDir = path.resolve(process.cwd(), 'public/images/creator');
                fs.mkdirSync(targetDir, { recursive: true });
                fs.writeFileSync(path.join(targetDir, 'oladepo-rokeeb.jpg'), buffer);
                fs.writeFileSync(path.join(targetDir, 'WhatsApp Image 2026-10-01 at 5.02.45 PM.jpeg'), buffer);

                const distDir = path.resolve(process.cwd(), 'dist/images/creator');
                if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
                  fs.mkdirSync(distDir, { recursive: true });
                  fs.writeFileSync(path.join(distDir, 'oladepo-rokeeb.jpg'), buffer);
                  fs.writeFileSync(path.join(distDir, 'WhatsApp Image 2026-10-01 at 5.02.45 PM.jpeg'), buffer);
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, size: buffer.length }));
                return;
              }
            } catch (err) {
              console.error('Failed to save creator photo on server:', err);
            }
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false }));
          });
        } else {
          res.statusCode = 405;
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), saveCreatorPhotoPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
