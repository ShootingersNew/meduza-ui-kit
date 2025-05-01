// vite.config.js
import vue from "file:///E:/dev/meduza-ui-kit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///E:/dev/meduza-ui-kit/node_modules/vite/dist/node/index.js";
import dts from "file:///E:/dev/meduza-ui-kit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/dev/meduza-ui-kit/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "meduza-pet-ui-kit",
      fileName: (format) => `meduza-pet-ui-kit.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      cleanVueFileName: true,
      entryRoot: path.resolve(__dirname, "src/components"),
      outDir: path.resolve(__dirname, "dist/types")
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZXZcXFxcbWVkdXphLXVpLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZGV2XFxcXG1lZHV6YS11aS1raXRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2Rldi9tZWR1emEtdWkta2l0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tcG9uZW50cy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwibWVkdXphLXBldC11aS1raXRcIixcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgbWVkdXphLXBldC11aS1raXQuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgdHNjb25maWdQYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInRzY29uZmlnLmpzb25cIiksXG4gICAgICBjbGVhblZ1ZUZpbGVOYW1lOiB0cnVlLFxuICAgICAgZW50cnlSb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzXCIpLFxuICAgICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImRpc3QvdHlwZXNcIiksXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgXCJAZm9udHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvYXNzZXRzL2ZvbnRzXCIpLFxuICAgIH0sXG4gIH0sXG59KTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxPQUFPLFNBQVM7QUFDcFEsWUFBWSxVQUFVO0FBQ3RCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUpxSSxJQUFNLDJDQUEyQztBQU10TSxJQUFNLGFBQWEsY0FBYyx3Q0FBZTtBQUNoRCxJQUFNLFlBQWlCLGFBQVEsVUFBVTtBQUd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFZLGFBQVEsV0FBVyx5QkFBeUI7QUFBQSxNQUN4RCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxxQkFBcUIsTUFBTTtBQUFBLElBQ25EO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixjQUFtQixhQUFRLFdBQVcsZUFBZTtBQUFBLE1BQ3JELGtCQUFrQjtBQUFBLE1BQ2xCLFdBQWdCLGFBQVEsV0FBVyxnQkFBZ0I7QUFBQSxNQUNuRCxRQUFhLGFBQVEsV0FBVyxZQUFZO0FBQUEsSUFDOUMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxXQUFXLEtBQUs7QUFBQSxNQUNsQyxVQUFlLGFBQVEsV0FBVyxrQkFBa0I7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
