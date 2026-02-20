import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/academy-demo/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienessomos: resolve(__dirname, 'quienessomos.html'),
      },
    },
  },
})

