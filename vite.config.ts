import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: []
  },
  server: {
    port: 15014
  },
  define: {
    "process.env": process.env,
    global: "window"
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ["localforage", "toastr"]
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["@fluentui"])]
    },
    exclude: ["@fluentui"]
  }
});
