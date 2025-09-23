import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactportfolio/",  
  server: {
    host: '0.0.0.0', 
    port: 10000,  // Port expected by Render
    allowedHosts: [
      "reactportfolio-frg5.onrender.com",
      "candid-ops.github.io"
    ]
  }
})
