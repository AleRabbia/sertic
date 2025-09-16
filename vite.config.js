import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5678', // tu n8n
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // quita el /api del inicio
      },
    },
  },
})
