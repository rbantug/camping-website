<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const showScrollToTopBtn = ref(false)
const notAtTopOfWebpage = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handleScroll() {
  showScrollToTopBtn.value = window.scrollY > 800
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  notAtTopOfWebpage.value = window.screenY > 800
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div
    class="fixed w-10 h-10 bg-accent-secondary rounded-full bottom-5 right-5 flex items-center justify-center cursor-pointer hover:-translate-y-2 hover:bg-accent-primary duration-300 z-10" :class="{ 'opacity-0': !showScrollToTopBtn && !notAtTopOfWebpage, 'opacity-100': showScrollToTopBtn || notAtTopOfWebpage }"
    @click="scrollToTop"
  >
    <div class="text-white">
      <!-- mdi:arrow-up -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"
        />
      </svg>
    </div>
  </div>
</template>
