/*!

 =========================================================
 * Nuxt Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt Black Dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css",
      },
    ],
    bodyAttrs: {
      class: "", // Add `white-content` class here to enable "white" mode.
    },
  },
  router: {
    middleware: ['auth'],
    linkExactActiveClass: "active",
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "assets/css/demo.css",
    "assets/css/nucleo-icons.css",
    "assets/sass/black-dashboard.scss",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/dashboard-plugin.js`],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa', 
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDLZqQYPKyAV_tqSHZaBcWoaK7aBMe-nGE",
          authDomain: "upay-c226d.firebaseapp.com",
          projectId: "upay-c226d",
          storageBucket: "upay-c226d.appspot.com",
          messagingSenderId: "319387770176",
          appId: "1:319387770176:web:794160db1a9dbecf92aea5",
          measurementId: "G-Z72EEKKN3S"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: true
          }
        }
      }
    ],
    "nuxt-i18n"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "ar",
        file: "ar.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
  },
};
