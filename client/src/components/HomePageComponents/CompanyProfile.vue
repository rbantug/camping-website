<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const MDandUp = breakpoints.greaterOrEqual('md')

const images = ref([
  {
    path: 'company-profile-1.jpg',
    altText: 'camping tents 1',
    gridStyle:
      'col-start-1 col-end-3 row-start-1 row-end-3',
    imgStyle: 'object-cover rounded-xl h-60 w-60 md:h-100 md:w-100'
  },
  {
    path: 'company-profile-2.jpg',
    altText: 'camping tents 2',
    gridStyle:
      'col-start-3 col-end-5 row-start-1 row-end-2',
    imgStyle: 'object-cover rounded-xl h-30 w-50 md:h-60 md:w-100'
  },
  {
    path: 'company-profile-3.jpg',
    altText: 'camping tents 3',
    gridStyle:
      'col-start-1 col-end-3 row-start-3 row-end-5',
    imgStyle: 'object-cover rounded-xl h-30 w-50 -mt-3 md:h-60 md:w-100 md:-mt-25'  
  },
  {
    path: 'company-profile-4.jpg',
    altText: 'camping tents 4',
    gridStyle:
      'col-start-3 col-end-5 row-start-2 row-end-5',
    imgStyle: 'object-cover rounded-xl h-60 w-60 md:h-100 md:w-100'
  },
])
</script>

<template>
  <div
    class="w-[90%] h-200 mx-auto flex flex-col md:w-[92%] lg:w-[95%] lg:flex-row lg:gap-x-15 lg:items-center lg:max-w-300"
  >
    <div class="lg:order-2">
      <TransitionScroll>
        <div class="flex flex-col gap-y-4 lg:w-120">
          <h2 class="text-2xl font-bold text-neutral-800 md:text-3xl lg:text-4xl">
            What makes us different?
          </h2>
          <p class="text-neutral-600 leading-7 md:text-lg">
            Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien
            vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
          </p>
          <hr class="text-neutral-600 my-2" />
          <p class="text-neutral-600 leading-7 md:text-lg md:mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit
            quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            Vitae pellentesque sem placerat in id cursus mi.
          </p>
          <div>
            <SecondaryButton
              :size="MDandUp ? 'large' : 'default'"
              label="About us"
              class="md:w-[20%] lg:w-[30%]"
            />
          </div>
        </div>
      </TransitionScroll>
    </div>
    <div class="lg:order-1">
      <TransitionScroll>
        <div class="mt-12 h-80 max-w-100 mx-auto md:max-w-210 lg:mt-0 lg:h-160">
          <div class="grid grid-cols-4 grid-rows-4 gap-3 justify-center md:gap-6">
            <div v-for="{ path, altText, gridStyle, imgStyle } in images" :key="altText" :class="gridStyle">
              <img
                :src="'src/assets/images/' + path"
                :alt="altText"
                :class="imgStyle"
              />
            </div>
          </div>
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>
