<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  import { useHead } from '@unhead/vue'

  import TransitionScroll from './components/util/TransitionScroll.vue';
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import ScrollUpButton from './components/ScrollUpButton.vue';
  import ToggleDarkModeButton from './components/ToggleDarkModeButton.vue';

  useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/a1q1m6i4529oba7ls4kh6/camping-stars-2.avif?rlkey=14kkjyab0xaii38ns6pz5f0jy'
    }
  ]
})

  onBeforeMount(() => {
    const saved = localStorage.getItem('theme')

      if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    }
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
