import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      allow: ['/service-worker.js', '.']
    }
  }
});
