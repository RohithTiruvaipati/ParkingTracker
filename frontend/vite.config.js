import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('../frontend/certs/localhost+1-key.pem'),
      cert: fs.readFileSync('../frontend/certs/localhost+1.pem'),
    },
    host: true,
    strictPort: true
  }
})
