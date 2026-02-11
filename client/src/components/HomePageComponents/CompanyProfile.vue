<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const MDandUp = breakpoints.greaterOrEqual('md')

const images = ref([
  { path: 'company-profile-1.jpg', altText: 'camping tents 1', gridStyle: 'col-start-1 col-end-3 row-start-1 row-end-3' },
  { path: 'company-profile-2.jpg', altText: 'camping tents 2', gridStyle: 'col-start-4 col-end-6 row-start-1 row-end-2' },
  { path: 'company-profile-3.jpg', altText: 'camping tents 3', gridStyle: 'col-start-1 col-end-3 row-start-4 row-end-6' },
  { path: 'company-profile-4.jpg', altText: 'camping tents 4', gridStyle: 'col-start-4 col-end-6 row-start-3 row-end-6' },
])
</script>

<template>
  <div class="w-[90%] h-200 mx-auto md:w-[87%] lg:w-[85%]">
    <div class="flex flex-col gap-y-4">
      <h2 class="text-2xl font-bold text-neutral-800">What makes us different?</h2>
      <p class="text-neutral-600 leading-7">
        Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien
        vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
      </p>
      <hr class="text-neutral-600 my-2" />
      <p class="text-neutral-600 leading-7">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit
        quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat.
        Vitae pellentesque sem placerat in id cursus mi.
      </p>
      <div>
        <SecondaryButton :size="MDandUp ? 'large' : 'default'" label="About us" />
      </div>
    </div>
    <div class="mt-12 h-80 max-w-100">
      <div class="grid grid-cols-4 grid-rows-4 gap-3 justify-center">
        <!-- <div v-for="{ path, altText, gridStyle } in images" :key="altText">
          <img :src="'src/assets/images/' + path" :alt="altText" class="h-40 object-cover" :class="gridStyle"/>
        </div> -->
        <img src="/src/assets/images/company-profile-1.jpg" alt="" class="col-start-1 col-end-3 row-start-1 row-end-3 object-cover rounded-xl h-60 w-60">
        <img src="/src/assets/images/company-profile-2.jpg" alt="" class="col-start-3 col-end-5 row-start-1 row-end-2 object-cover rounded-xl h-30 w-50">
        <img src="/src/assets/images/company-profile-3.jpg" alt="" class="col-start-1 col-end-3 row-start-3 row-end-5 object-cover rounded-xl h-30 w-50 -mt-3">
        <img src="/src/assets/images/company-profile-4.jpg" alt="" class="col-start-3 col-end-5 row-start-2 row-end-5 object-cover rounded-xl h-60 w-60">
      </div>
    </div>
  </div>
</template>
