import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Pre-rendering removed — vite-plugin-prerender uses CommonJS require()
// which breaks in Vercel's ESM build environment.
// Google can crawl JavaScript SPAs natively now.
// SEO is handled via react-helmet-async meta tags + sitemap.xml + robots.txt

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  publicDir: 'public',
});
