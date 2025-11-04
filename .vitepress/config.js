import { defineConfig } from "vitepress";
// import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // extends: baseConfig('eox'),
  title: "GTIF UKIF DASHBOARD",
  description: "<img src='./assets/ESA_Logo.png' class='center bottom-margin large-margin' style='height: 40px' />Green Transition Information Factory Kickstarter (UK-Ireland-France demonstrator)",
  appearance: false, // disable dark mode
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
