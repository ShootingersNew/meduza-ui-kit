import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { fileURLToPath } from 'url';
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "meduza-pet-ui-kit",
      fileName: (format) => `meduza-pet-ui-kit.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: false, // Критично: объединить CSS в один файл
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath : path.resolve(__dirname, "tsconfig.json"),
      outDir: path.resolve(__dirname, "scr/components"),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    // КРИТИЧНО: Явно отключить CSS Modules для utility классов
    modules: {
      scopeBehaviour: 'global', // Убедиться, что импорт из index.styl будет глобальным
    },
  },
});

