import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '^/cadastro$': 'http://127.0.0.1:5000',
      '^/login$': 'http://127.0.0.1:5000',
    },
  },
});
