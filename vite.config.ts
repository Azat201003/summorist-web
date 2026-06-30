import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: `http://${process.env.GATEWAY_HOST || 'localhost'}:${process.env.GATEWAY_PORT || 8080}`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
