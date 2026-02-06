<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const greaterEqualMD = breakpoints.greaterOrEqual('md')

const outputBtnSize = computed(() => {
  if (greaterEqualMD.value) {
    return 'large'
  }
  return 'default'
})
</script>

<template>
  <div class="w-[90%] mx-auto h-10 flex flex-col gap-y-4 justify-center text-center md:w-[87%] lg:w-[85%]">
    <h1 class="text-white font-bold text-5xl md:text-6xl leading-16 md:leading-20">
      Camping good! Lorem ipsum stuff
    </h1>
    <p class="pb-4 text-white md:text-lg">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque
      faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
    </p>
    <div class="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-8">
      <PrimaryButton
        :size="outputBtnSize"
        label="Explore camps"
      />
      <SecondaryButton :size="outputBtnSize" label="About us"  />
    </div>
  </div>
</template>
