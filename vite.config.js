import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}
