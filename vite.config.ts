import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from 'vite-plugin-sitemap';
import path from "path";
import { componentTagger } from "lovable-tagger";

const routes = [
  '/',
  '/career',
  '/about',
  '/services',
  '/contact',
  '/gallery',
  '/faq'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    sitemap({
      hostname: 'https://www.aiimscare.com',
      exclude: ['/admin/*', '/private/*'],
      urls: routes.map(route => ({
        url: route,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: route === '/' ? 1.0 : 0.8
      }))
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu'
          ]
        }
      }
    },
    sourcemap: true,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
}));
