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
  <div class="w-[90%] mx-auto h-10 flex flex-col gap-y-4 justify-center text-center">
    <h1 class="text-white font-bold text-5xl md:text-6xl leading-16 md:leading-20">
      Camping good! Lorem ipsum stuff
    </h1>
    <p class="pb-4 text-white md:text-lg">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque
      faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
    </p>
    <div class="grid grid-cols-1 gap-y-4 md:grid-cols-8 md:gap-x-4">
      <PrimaryButton
        :size="outputBtnSize"
        label="Explore camps"
        class="w-full md:col-start-3 md:col-end-5"
      />
      <SecondaryButton :size="outputBtnSize" label="About us" class="md:col-start-5 md:col-end-7" />
    </div>
  </div>
</template>
