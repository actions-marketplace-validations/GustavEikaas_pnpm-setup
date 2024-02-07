import { defineConfig } from "vite";

export default defineConfig({
  appType: "custom",
  build: {
    emptyOutDir: true,
    lib: {
      entry: "./src/main.ts",
      fileName: "main",
      formats: ["es"],
    },
  },
});
