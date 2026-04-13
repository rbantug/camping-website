<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

const activities = ref([
  {
    title: 'Hiking',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/6beys8hpp8oyxaeomfms5/activities-hiking.avif?rlkey=wzwzplbb3fqfzc96q22yxr9rc',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/1upeqjax53hzcaqt4ie08/activities-hiking.avif?rlkey=l6kofo5y81nwxl6hsb6lwmms9',
  },
  {
    title: 'Fishing',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/bjxaa7s6a4hzbixbb1vgv/activities-fishing.avif?rlkey=2verqzp74xj2fxvtfr3pasqmu',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/157s92b9zh16z0dl0v7of/activities-fishing.avif?rlkey=gijqlm0ws8gop2byto3tk95k7',
  },
  {
    title: 'Campfire Areas',
    description: 'Pretium tellus duis convallis tempus leo eu aenean.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/i8wyzjnrar3z1f1qd4il4/activities-campfire.avif?rlkey=esd7ipqcm91ciwy6tdb274rrp',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/97ont59jwn1vqvgj77ktw/activities-campfire.avif?rlkey=stcf3bhkhsl6teazffu3i3iet',
  },
])

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const mdAbove = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div class="bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300">
    <div class="h-fit max-w-200 w-[95%] mx-auto py-40 lg:w-[85%]">
      <TransitionScroll>
        <div class="flex flex-col justify-center mb-10 md:mb-5 md:w-[90%] md:mx-auto">
          <h1 class="text-2xl font-bold text-center mb-4 md:text-3xl dark:text-white">Explore our activities</h1>
          <p class="text-center text-neutral-600 leading-8 md:text-lg dark:text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem
            placerat in id.
          </p>
        </div>
      </TransitionScroll>
      <TransitionScroll :threshold="mdAbove ? true : false">
        <div
          class="flex flex-col justify-center gap-y-8 mb-10 md:flex-row md:gap-y-0 md:gap-x-7 md:h-120"
        >
          <div
            v-for="({ title, description, image, blurryImg }, index) in activities"
            :key="title"
            :data-index="index"
          >
            <div class="flex relative h-120 max-w-90 mx-auto md:h-100 md:max-w-60 lg:h-120 lg:max-w-80">
              <LazyLoadImage
                :img-path="image"
                :alt-name="title"
                :blurry-img-path="blurryImg"
                class="h-120 w-90 rounded-3xl object-cover"
              />
              <div class="absolute bottom-10 left-10 w-65 md:left-5 md:top-10 md:w-55">
                <h2 class="text-xl text-white font-semibold text-shadow-lg md:text-2xl">
                  {{ title }}
                </h2>
                <p class="text-white text-shadow-3xl md:text-lg">{{ description }}</p>
              </div>
            </div>
          </div>
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>
