<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
useHead({
  title: 'Home',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Welcome to my edubyte',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
useSeoMeta({
  title: 'Home',
  description: 'Welcome to my edubyte',
})
</script>

<template>
  <div>
    <ComingSoon launchDate="2023-07-01T00:00:00Z"/>
  </div>
</template>

<style scoped></style>
