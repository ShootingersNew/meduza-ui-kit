import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "meduza-pet-ui-kit",
      fileName: (format) => `meduza-pet-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      cleanVueFileName: true,
      entryRoot: path.resolve(__dirname, "src/components"),
      outDir: path.resolve(__dirname, "dist/types"), // Убедитесь, что указана правильная директория для типов
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
