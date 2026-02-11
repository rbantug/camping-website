<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

const activities = ref([
  {
    title: 'Hiking',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image: 'activities-hiking.jpg',
  },
  {
    title: 'Fishing',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image: 'activities-fishing.jpg',
  },
  {
    title: 'Campfire Areas',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image: 'activities-campfire.jpg',
  },
])

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const mdAbove = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div class="h-480 w-[95%] mx-auto md:h-180 lg:w-[85%]">
    <TransitionScroll>
      <div class="flex flex-col justify-center mb-10 md:mb-5 md:w-[90%] md:mx-auto">
        <h1 class="text-2xl font-bold text-center mb-4 md:text-3xl">Explore our activities</h1>
        <p class="text-center text-neutral-600 leading-8 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem
          placerat in id.
        </p>
      </div>
    </TransitionScroll>
    <TransitionScroll :threshold="mdAbove ? true : false">
      <div class="flex flex-col gap-y-8 mb-10 md:flex-row md:gap-y-0 md:gap-x-7 lg:h-100">
        <div
          v-for="({ title, description, image }, index) in activities"
          :key="title"
          :data-index="index"
        >
          <div>
            <div class="flex justify-center relative">
              <img
                :src="'/src/assets/images/' + image"
                :alt="title"
                class="h-120 w-90 rounded-3xl object-cover md:h-95"
              />
              <div class="absolute bottom-10 left-8 w-65 md:left-5 md:top-10 md:w-55">
                <h2 class="text-xl text-white font-semibold text-shadow-lg md:text-2xl">
                  {{ title }}
                </h2>
                <p class="text-white text-shadow-3xl md:text-lg">{{ description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionScroll>
    <TransitionScroll>
      <SecondaryButton :size="mdAbove ? 'large' : 'default'" label="More activities" class="md:w-[20%] md:mx-auto"/>
    </TransitionScroll>
  </div>
</template>
