import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    watch: {
      usePolling: true,
    },
      proxy: {
        "/posts": {
          target: "http://localhost:8080/",
          changeOrigin: true,
          secure: false,
        },
      },
  },
});
