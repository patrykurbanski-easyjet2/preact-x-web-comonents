import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "login",
      fileName: (format) => `login.${format}.js`,
    },
    target: "esnext",
  },
});
