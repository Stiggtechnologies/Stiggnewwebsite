import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePrerender from 'vite-plugin-prerender';
import path from 'path';

// All routes pre-rendered as static HTML so Google can crawl them
const PRERENDER_ROUTES = [
  '/',
  '/services/security-guards',
  '/services/alarm-monitoring',
  '/services/camera-systems',
  '/services/risk-assessment',
  '/services/risk-consulting',
  '/services/private-investigation',
  '/services/mobile-security',
  '/services/technology',
  '/services/cash-solutions',
  '/industries/aviation',
  '/industries/corporate',
  '/industries/healthcare',
  '/industries/manufacturing',
  '/industries/retail',
  '/industries/government',
  '/about/history',
  '/about/leadership',
  '/about/sustainability',
  '/about/careers',
  '/insights/news',
  '/insights/blog',
  '/insights/case-studies',
  '/insights/white-papers',
  '/contact',
  '/projects',
];

const Renderer = vitePrerender.PuppeteerRenderer;

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: PRERENDER_ROUTES,
      renderer: new Renderer({
        renderAfterDocumentEvent: 'render-event',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      }),
    }),
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
