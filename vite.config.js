import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio/",  // 👈 Make sure this matches your repo name

   server: {
    host: '0.0.0.0', 
    port: 10000,  // Use the port expected by Render
    allowedHosts:"https://reactportfolio-frg5.onrender.com"
  }
})
