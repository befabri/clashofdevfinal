import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import svgr from "vite-plugin-svgr";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact(), svgr(), imagetools()],
});
