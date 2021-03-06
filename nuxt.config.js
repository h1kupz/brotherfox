export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Brother Fox",
    script: [
      {
        hid: "alpine intersect",
        src: "https://unpkg.com/@alpinejs/intersect@3.x.x/dist/cdn.min.js",
      },
      {
        hid: "alpine",
        src: "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js",
        defer: true,
      },
      {
        hid: "netlify",
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",

    "nuxt-gsap-module",
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollFrom: true,
      scrollTrigger: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxt/content"],
  content: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
