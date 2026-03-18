<script setup lang="ts">
import { onBeforeMount, onMounted, watch } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

import TransitionScroll from './components/util/TransitionScroll.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ScrollUpButton from './components/ScrollUpButton.vue'
import ToggleDarkModeButton from './components/ToggleDarkModeButton.vue'

import { useMainStore } from './stores/mainStore'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/a1q1m6i4529oba7ls4kh6/camping-stars-2.avif?rlkey=14kkjyab0xaii38ns6pz5f0jy',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/tayfsfnprltsz3x4ng9qs/title-2.avif?rlkey=9eyg687z0ds6nwc3dctnjic2e',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/26jjsubwisadujxc1ye60/title-1.avif?rlkey=6gxgj5ndtv8r7cg251ea3m5g9',
    },
  ],
})

const route = useRoute()

const mainStore = useMainStore()

watch(
  () => route.path, setupY, { immediate: true })

function setupY(path: string) {
  if (path === '/about') {
    mainStore.updateBottomRightY(600)
  }

  if (path === '/') {
    mainStore.updateBottomRightY(1000)
  }

  if (path === '/camps') {
    mainStore.updateBottomRightY(550)
  }
}

onBeforeMount(() => {
  const saved = localStorage.getItem('theme')

  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
  }
})

onMounted(() => {
  setupY(route.path)
})
</script>

<template>
  <main class="font-DM-Sans transition-colors duration-300">
    <TransitionScroll :z-index="1" :relative="true">
      <TheHeader />
    </TransitionScroll>
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
    <TheFooter />

    <ScrollUpButton />
    <ToggleDarkModeButton />
  </main>
</template>

<style scoped></style>
