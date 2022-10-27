import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vitePlugin } from 'babel-plugin-vue-function-component'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [vue(), vitePlugin() as Plugin, vueJsx()],
  build: {
    minify: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
