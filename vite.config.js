import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/academy-demo/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienessomos: resolve(__dirname, 'quienessomos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        login: resolve(__dirname, 'login.html'),
        avisolegal: resolve(__dirname, 'avisolegal.html'),
      },
    },
  },
})

