<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isDarkMode = ref(false)
const showScrollToTopBtn = ref(false)

function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark')
}

function handleScroll() {
  showScrollToTopBtn.value = window.scrollY > 800
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <div class="fixed bottom-30 right-5 z-10 duration-300" :class="{ 'translate-y-20': !showScrollToTopBtn, 'translate-y-0': showScrollToTopBtn }">
        <div v-if="!isDarkMode"
          class="w-15 h-15 bg-accent-secondary rounded-full bottom-30 right-5 flex items-center justify-center cursor-pointer group hover:scale-110 hover:bg-white duration-300" :class="{ 'opacity-0': isDarkMode, 'opacity-100': !isDarkMode }" @click="toggleDarkMode"
        >
          <div class="text-white scale-200 group-hover:text-accent-primary">
            <!-- solar:moon-bold -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"/></svg>
          </div>
        </div>
        <div v-if="isDarkMode"
          class="w-15 h-15 bg-white rounded-full bottom-30 right-5 flex items-center justify-center cursor-pointer border-5 border-accent-primary group hover:bg-neutral-300 hover:border-neutral-300 hover:scale-110 duration-300" :class="{ 'opacity-0': !isDarkMode, 'opacity-100': isDarkMode }" @click="toggleDarkMode"
        >
          <div class="text-accent-primary scale-200 group-hover:text-accent-secondary">
            <!-- tabler:sun -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
              />
            </svg>
          </div>
        </div>
    </div>
</template>
