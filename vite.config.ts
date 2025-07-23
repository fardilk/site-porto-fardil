import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // default, bisa diabaikan
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
