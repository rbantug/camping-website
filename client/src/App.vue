<script setup lang="ts">
import { onBeforeMount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

import TransitionScroll from './components/util/TransitionScroll.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ScrollUpButton from './components/ScrollUpButton.vue'
import ToggleDarkModeButton from './components/ToggleDarkModeButton.vue'
import ToastContainer from './components/util/ToastContainer.vue'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/26jjsubwisadujxc1ye60/title-1.avif?rlkey=6gxgj5ndtv8r7cg251ea3m5g9',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/tayfsfnprltsz3x4ng9qs/title-2.avif?rlkey=9eyg687z0ds6nwc3dctnjic2e',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/2d04we4ywoi5i5dx8xkiu/gallery-mountain-1.avif?rlkey=obelhwb17doqjqwjb4im1jg9p',
    },
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/ion6jewkcufvpwm3upynj/camping-stars-2.avif?rlkey=oowzevuai5e7stxk3r5wdw8bl',
    },
  ],
})

import { useMainStore } from './stores/mainStore'

const route = useRoute()

const mainStore = useMainStore()

watch(() => route.path, setupY, { immediate: true })

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
    mainStore.updateDarkMode(true)
  }
})

onMounted(() => {
  setupY(route.path)
  mainStore.retrieveCart(true)
})
</script>

<template>
  <main class="font-DM-Sans transition-colors duration-300">
    <TransitionScroll :z-index="1" :relative="true" no-animation>
      <TheHeader />
    </TransitionScroll>
    <!-- <RouterView /> -->
    <router-view :key="$route.params.slug" v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
    <TheFooter />

    <ScrollUpButton />
    <ToggleDarkModeButton />
    <ToastContainer />
  </main>
</template>

<style scoped></style>
