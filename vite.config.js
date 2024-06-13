import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portafolio-jcd/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});