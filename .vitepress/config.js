import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig('cif'),
  title: "GTIF UKIF Demonstrator",
  description: "GTIF Kickstarter (UK-Ireland-France demonstrator)",
  
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
  head: [
    ["link", { rel: "icon", href: "https://hub-brands.eox.at/eox/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://gtif-ukif.github.io/gtif-ukif-client/",
      },
    ],
    ["meta", { property: "og:title", content: "GTIF UKIF Demonstrator" }],
    [
      "meta",
      {
        property: "og:description",
        content: "GTIF Kickstarter (UK-Ireland-France demonstrator)",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://gtif-ukif.github.io/gtif-ukif-client/",
      },
    ],
    ["meta", { property: "twitter:title", content: "GTIF UKIF Demonstrator" }],
    [
      "meta",
      {
        property: "twitter:description",
        content: "GTIF Kickstarter (UK-Ireland-France demonstrator)",
      },
    ],
  ],
  themeConfig: {
    logo: { light: "/assets/EOX_Logo_inverse.png", dark: "https://hub-brands.eox.at/eox/EOX_Logo.svg"},
    theme: {
      primaryColor: "#333333",
      secondaryColor: "#004170",
    },
    analytics: null,
    nav: [
      { text: "Home", link: "/" },
      { text: 'Stories', link: '/storyviewer/' },
      { text: "Dashboard", link: "/explore" },
      { text: "Other GTIFs", items: [
        { text: "GTIF Baltic", link: "https://gtif-baltic.info", target:"_blank" },
        { text: "GTIF Cerulean", link: "https://cif.eox.at", target:"_blank"},
        { text: "GTIF Austria", link: "https://gtif-austria.info", target:"_blank" }
      ]},
      { text: "About", link: "/about" },
    ],
  },
});
