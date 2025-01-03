/// <reference types="vitest" />
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  test: {
    // globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
})
