// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa', '@shopware-pwa/nuxt3-module'],
  pwa: {
    meta: {
      title: 'Discover the new iPhone!'
    },
    workbox: {
      // enabled: true
    }
  },
  // Page title
  app: {
    head: {
      title: 'Discover the new iPhone!'
    }
  },

  runtimeConfig: {
    public: {
      shopware: {
        shopwareEndpoint: "https://demo-frontends.swstage.store/",
        shopwareAccessToken: "SWSCREFGYKJ1ZDDTAW9BDKFZNA"
      }
    }
  }
})
