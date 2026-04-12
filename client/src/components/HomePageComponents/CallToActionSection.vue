<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'
import { useMainStore } from '@/stores/mainStore'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const greaterEqualMd = breakpoints.greaterOrEqual('md')

const mainStore = useMainStore()

const bg = computed(() => {
  if (mainStore.getDarkMode) {
    return 'bg-accent-outline'
  } else {
    return 'bg-accent-secondary'
  }
})
</script>

<template>
  <div class="bg-white dark:bg-neutral-900 transition-colors duration-300">
    <div class="relative h-fit w-[90%] mx-auto py-40 md:w-[87%] md:py-60 lg:w-[85%] lg:max-w-250">
      <TransitionScroll threshold class="relative">
        <div
          class="h-125 rounded-4xl bg-[url(https://dl.dropboxusercontent.com/scl/fi/ey7nsufyxq50dzygc4pbs/CTAPattern.avif?rlkey=cyld6es4yhh8i9v6m41iltxda)] bg-cover bg-blend-color-burn md:h-115" :class="[bg]"
        >
          <div
            class="h-125 bg-accent-secondary rounded-4xl mask-y-from-90% mask-y-to-90% md:h-115 md:mask-y-from-80% md:mask-y-to-80%"
          ></div>
        </div>
      </TransitionScroll>
      <TransitionScroll threshold class="absolute w-full top-56 h-150 md:top-88">
        <div class="w-[80%] mx-auto flex flex-col">
          <h1 class="text-white text-2xl font-bold text-shadow-lg mb-4 md:text-3xl">
            Nature is the Ultimate Playground. Find a camp today!
          </h1>
          <p class="text-white leading-7 text-shadow-sm mb-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <div class="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
            <PrimaryButton
              :alt-color="true"
              label="Explore camps"
              :size="greaterEqualMd ? 'large' : 'default'"
            />
            <SecondaryButton
              :alt-color="true"
              label="About us"
              :size="greaterEqualMd ? 'large' : 'default'"
              dark-mode-no-ring
            />
          </div>
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>
