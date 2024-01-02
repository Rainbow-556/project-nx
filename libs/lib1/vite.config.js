import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5175
  },
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'Counter',
      fileName: 'counter'
    }
  }
});
