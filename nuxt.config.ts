import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
export default defineNuxtConfig({
    app: {
        rootId: 'edubyte',
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    build: {
        transpile: ['@headlessui/vue'],
    },
    css: [
        'virtual:windi-base.css',
        'virtual:windi-components.css',
        'virtual:windi-utilities.css',
        '~/assets/sass/vendor.scss',
        '~/assets/sass/app.scss',
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    ssr: true,
    modules: [
        '@intlify/nuxt3',
        'nuxt-security',
        'nuxt-windicss',
        '@vueuse/nuxt',
        'unplugin-icons/nuxt',
    ],
    plugins: ['~/plugins/navbar.ts'],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://edubyte.com',
            siteName: 'Edubyte',
            siteDescription: 'Welcome to Edubyte!',
            language: 'en', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    intlify: {
        // @ts-ignore
        localDir: 'locales',
        vueI18n: {
            availableLocales: ['en', 'bn'],
            fallbackLocale: 'en',
            locale: 'en',
        },
    },
    typescript: {
        strict: false,
        typeCheck: false,
    },
    vite: {
        plugins: [
            UnpluginComponentsVite({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },
    vueuse: {
        ssrHandlers: true,
    },
})
