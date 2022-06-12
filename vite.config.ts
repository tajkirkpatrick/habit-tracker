import vue from '@vitejs/plugin-vue';
import { presetIcons, presetUno } from 'unocss';
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

  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
          collections: {
            carbon: () =>
              import('@iconify-json/carbon/icons.json').then((i) => i.default),
          },
        }),
      ],
    }),
  ],
});
