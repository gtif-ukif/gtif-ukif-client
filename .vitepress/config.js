import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig('eox'),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite:{
    envPrefix:["VITE_", "EODASH_"],
    server:{
      allowedHosts: true
    }
  },
  themeConfig: {
    
    nav: [
      { text: "Home", link: "/" },
      { text: 'Stories', link: '/storyviewer/' },
      { text: "Dashboard", link: "/explore" },
      { text: "About", link: "/about" },
    ],
  },
});
