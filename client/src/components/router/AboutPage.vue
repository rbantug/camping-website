<script setup lang="ts">
import { useHead } from '@unhead/vue'

import TransitionScroll from '../util/TransitionScroll.vue'
import AboutUs from '../AboutPageComponents/AboutUs.vue'
import CampValues from '../AboutPageComponents/CampValues.vue'
import CallToAction from '../AboutPageComponents/CallToAction.vue'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/tayfsfnprltsz3x4ng9qs/title-2.avif?rlkey=9eyg687z0ds6nwc3dctnjic2e',
    },
  ],
})

function goToTopAbout() {
  const el = document.getElementById('topAbout')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="h-1340 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 md:h-1100 lg:h-990">
    <div
      class="h-150 bg-[url('https://dl.dropboxusercontent.com/scl/fi/tayfsfnprltsz3x4ng9qs/title-2.avif?rlkey=9eyg687z0ds6nwc3dctnjic2e')] bg-cover bg-center bg-black/30 bg-blend-overlay"
    >
      <TransitionScroll>
        <div
          class="w-[90%] h-10 pt-70 mx-auto flex flex-col justify-center text-center md:w-[85%] md:pt-80"
        >
          <h1 class="text-neutral-100 tracking-wide font-bold text-5xl md:text-6xl">
            About our camps
          </h1>
          <p class="text-neutral-100 leading-8 pt-5 md:text-lg">
            Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus
            duis.
          </p>
          <div class="mx-auto pt-5">
            <div
              class="h-15 w-15 flex justify-center items-center rounded-full bg-transparent ring-1 ring-neutral-100 overflow-hidden group cursor-pointer" @click="goToTopAbout"
            >
              <div
                class="text-neutral-100 scale-150 translate-y-1 animate-bounce"
              >
                <!-- iconamoon:arrow-down-2 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7 10l5 5m0 0l5-5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </TransitionScroll>
    </div>
    <AboutUs />
    <CampValues />
    <CallToAction />
  </div>
</template>

<style scoped>
</style>
