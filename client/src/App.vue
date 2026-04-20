<script setup lang="ts">
import { onBeforeMount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import TransitionScroll from './components/util/TransitionScroll.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ScrollUpButton from './components/ScrollUpButton.vue'
import ToggleDarkModeButton from './components/ToggleDarkModeButton.vue'

import { useMainStore } from './stores/mainStore'

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
    mainStore.updateDarkMode(true)
  }
})

onMounted(() => {
  setupY(route.path)
  mainStore.retrieveCart()
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
  </main>
</template>

<style scoped></style>
