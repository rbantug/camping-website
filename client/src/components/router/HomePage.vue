<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import TransitionScroll from '../util/TransitionScroll.vue'
import HeroSection from '../HomePageComponents/HeroSection.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})
</script>

<template>
  <div class="w-screen h-screen">
    <div
      class="flex items-center bg-[url(@/assets/images/camping-stars-2.jpg)] bg-cover bg-center h-200 md:h-250"
    >
      <TransitionScroll>
        <HeroSection />
      </TransitionScroll>
    </div>
  </div>
</template>
