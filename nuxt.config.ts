// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
      css: {
        // vuetify variable overrides: https://vitejs.dev/config/#css-preprocessoroptions
        preprocessorOptions: {
          scss: {
            additionalData: ['@import "assets/main.scss";', ''].join('\n'),
          },
        },
      },
      },
modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
],
})
