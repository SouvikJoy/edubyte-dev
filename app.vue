<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  titleTemplate: '%s - Edubyte',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Edubyte',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
import { AppSetup } from '~/utils/app'
import { ITheme } from '~/utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')

</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
  <SeoKit />
  <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
  >
  <NuxtLayout>
    <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
    <NuxtPage />
  </NuxtLayout>
  </Body>
  </Html>
</template>