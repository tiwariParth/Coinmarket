import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Pass environment variables to the client-side code
    "process.env.REACT_APP_API_KEY": JSON.stringify(
      process.env.REACT_APP_API_KEY
    ),
    "process.env.REACT_APP_API_URL": JSON.stringify(
      process.env.REACT_APP_API_URL
    ),
  },
});
