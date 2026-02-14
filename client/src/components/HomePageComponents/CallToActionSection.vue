<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core';

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue';
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue';
import TransitionScroll from '../util/TransitionScroll.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const greaterEqualMd = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div class="h-150 w-[90%] mx-auto md:w-[87%] lg:w-[85%] relative">
    <TransitionScroll threshold class="relative">
      <div
        class="h-115 bg-accent-secondary rounded-4xl bg-[url(@/assets/images/CTAPattern.avif)] bg-cover bg-blend-color-burn"
      >
        <div class="h-115 bg-accent-secondary rounded-4xl mask-y-from-90% mask-y-to-90% md:mask-y-from-80% md:mask-y-to-80%"></div>
      </div>
    </TransitionScroll>
    <TransitionScroll threshold class="absolute top-11 h-150 md:top-27 lg:top-32">
      <div class="w-[80%] mx-auto flex flex-col">
        <h1 class="text-white text-2xl font-bold text-shadow-lg mb-4 md:text-3xl">Nature is the Ultimate Playground. Find a camp today!</h1>
        <p class="text-white leading-7 text-shadow-sm mb-4 md:text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.</p>
          <div class="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
              <PrimaryButton :alt-color="true" label="Explore camps" :size="greaterEqualMd ? 'large' : 'default'"/>
              <SecondaryButton :alt-color="true" label="About us" :size="greaterEqualMd ? 'large' : 'default'" />
          </div>
      </div>
    </TransitionScroll>
  </div>
</template>
