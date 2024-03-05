import 'dotenv/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import dotenv from 'dotenv';

// dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
          // target: `http://localhost:${process.env.PORT}`,
          host: 'localhost',
          target: `http://localhost:${process.env.PORT}`,
          changeOrigin: true,
          secure: false,
          ws: true,
      }
    },
    watch: {
        usePolling: true
    }
  },
  // define: {
  //   __KEY__: `"${process.env.VITE_RAWG_KEY}"`,
  // },
})
