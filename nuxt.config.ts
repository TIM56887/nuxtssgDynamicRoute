// https://v3.nuxtjs.org/api/configuration/nuxt.config

import path from "path";
import route from "./data.json"


const getPostRoutes = async () => {
    let articles = route
    let slugs = articles.map((each) => {
        return '/articles/' + each.title
    })
    return slugs
}

export default defineNuxtConfig({
    modules: ["vuetify-nuxt-module"],
    alias: {
        'components': path.resolve('components'),
    },
    hooks: {
        async 'nitro:config'(nitroConfig) {
            if (nitroConfig.dev) {
                return
            }
            let slugs = await getPostRoutes();
            nitroConfig.prerender.routes.push(...slugs)
            return
        }
    }
})