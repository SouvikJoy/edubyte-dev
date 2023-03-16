import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module '@nuxt/schema' {
    interface AppConfigInput {
        name: string
        author: {
            name: string
            link: string
        }
    }
}

declare module 'nuxt/config' {
    interface NuxtConfig {
        intlify?: IntlifyModuleOptions
    }
}

export {}