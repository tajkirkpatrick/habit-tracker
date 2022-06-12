import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
  },

  build: {
    emptyOutDir: true,
  },

  plugins: [vue(), Unocss()],
});
