// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  runtimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    snipcartApiKey: process.env.SNIPCART_API_KEY,
    googleApiKey: process.env.GOOGLE_API_KEY,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/snipcart",
    "nuxt-headlessui",
    "@nuxt/image-edge",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    // @ts-expect-error
    origin: (process.env?.AUTH_ORIGIN as string) || "http://localhost:3000",
    enableGlobalAppMiddleware: true,
  },
  headlessui: {
    prefix: "Headless",
  },
  snipcart: {
    publicApiKey: process.env.SNIPCART_API_KEY,
    loadStrategy: "on-user-interaction",
    modalStyle: "side",
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
