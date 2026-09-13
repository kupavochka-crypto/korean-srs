import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/korean-srs/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/favicon.svg', 'icons/apple-touch-icon.png', 'icons/icon-maskable-512.png'],
      manifest: {
        name: 'Woori · 우리',
        short_name: 'Woori',
        description: 'Корейский с любимой группой — слова, карточки и повторения',
        theme_color: '#F8F9FA',
        background_color: '#F8F9FA',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/korean-srs/',
        scope: '/korean-srs/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,gif,webmanifest}'],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
        navigateFallback: '/korean-srs/index.html'
      }
    })
  ]
});