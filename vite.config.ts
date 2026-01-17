import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Note: vite-plugin-prerender has compatibility issues with ES modules
// Uncomment when prerender is needed, or use alternative solution
// import prerender from "vite-plugin-prerender"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // prerender({
    //   staticDir: "dist",
    //   routes: [
    //     "/",
    //     "/about",
    //     "/services",
    //     "/services/accounting",
    //     "/services/financial",
    //     "/services/tax",
    //     "/services/payroll",
    //     "/training",
    //     "/technologies",
    //     "/clients",
    //     "/contact",
    //   ],
    // }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
})
