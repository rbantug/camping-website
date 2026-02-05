<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import TransitionScroll from '../util/TransitionScroll.vue'
import HeroSection from '../HomePageComponents/HeroSection.vue'
import CampCarousel from '../HomePageComponents/CampCarousel.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})
</script>

<template>
  <div class="max-w-screen h-600">
    <div
      class="flex items-center bg-[url(@/assets/images/camping-stars-2.jpg)] bg-cover bg-center h-200 md:h-screen"
    >
      <TransitionScroll>
        <HeroSection />
      </TransitionScroll>
    </div>
    <CampCarousel />
  </div>
</template>
