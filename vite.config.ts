import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
 
// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "https://github.com/nt987-sf/" : "./",
  plugins: [react(), tailwindcss()],
});