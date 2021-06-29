import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // Found solution here if there are issues in the future: https://github.com/vitejs/vite/issues/279
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    vue(),
    Pages({
      nuxtStyle: true,
      routeBlockLang: 'yaml',
      importMode: 'async',
    }),
  ],
  build: {
    sourcemap: true,
  },
})
