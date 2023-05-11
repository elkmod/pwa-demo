// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa'],
    // Page title
    app: {
        head: {
            title: 'Discover the new iPhone!'
        }
    }
})
