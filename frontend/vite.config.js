import { defineConfig } from "vite"
import react from "@vitejs/plugin-react" // Change this to your framework plugin if not using React

export default defineConfig({
  plugins: [react()],
  // anything in server has no effect on productions and only in development
  server: {
    proxy: {
      // Intercepts all requests starting with '/api'
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        // Removes '/api' before sending the request to localhost:5000
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/uploads':{
        target: 'http://localhost:5000'
      }
    },
  },
})
