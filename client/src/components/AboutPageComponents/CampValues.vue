<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import TransitionScroll from '../util/TransitionScroll.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const lg = breakpoints.greaterOrEqual('lg')

const content = [
  {
    title: 'Unique experience',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/5jmmampundkqxhtd7d7kz/values-1.avif?rlkey=k62utgb2t6bwfp0sbd6oykzvw',
    blurryImgPath:
      'https://dl.dropboxusercontent.com/scl/fi/knybtmqn3mtsuda0nopsg/values-1.avif?rlkey=a1u5g6ocvye154sezx5i31ki4',
    transitionAnimation: 'top-bottom',
  },
  {
    title: 'Customer-first',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/ym12ker4to0bytpt3mgxa/values-4.avif?rlkey=tirjymb7urt4iqm1bnpib1275',
    blurryImgPath:
      'https://dl.dropboxusercontent.com/scl/fi/xncynwz0prp1nyf6v4hp2/values-4.avif?rlkey=w54s56ovuduj7xky6zmypgn8h',
    transitionAnimation: 'top-bottom',
  },
  {
    title: 'Eco-friendly',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/xn6mjakukeucc8rww71q7/values-2.avif?rlkey=ghrykuo91k0ic4a440of0rcmt',
    blurryImgPath:
      'https://dl.dropboxusercontent.com/scl/fi/9vouj2w63cynnc8fr7xml/values-2.avif?rlkey=ts0mteqpl08vsvr49ki368enw',
    transitionAnimation: 'bottom-top',
  },
  {
    title: 'Sustainable',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/atjc8yxjlt9lvduok9xef/values-3.avif?rlkey=vzg92c08prytzpndmi70mpihk',
    blurryImgPath:
      'https://dl.dropboxusercontent.com/scl/fi/tp841ja5xht3plt08k4p8/values-3.avif?rlkey=mwnuvitclbtedco2f7zqlw8jr',
    transitionAnimation: 'bottom-top',
  },
]
</script>

<template>
  <div class="h-480 bg-neutral-300 pt-40 transition-colors duration-300 md:h-370 lg:h-260 dark:bg-neutral-800">
    <div class="w-[95%] mx-auto md:w-[90%] lg:w-[95%]">
      <TransitionScroll>
        <div class="mx-auto text-center flex flex-col lg:max-w-200">
          <h1
            class="text-2xl font-bold px-5 text-neutral-900 md:text-4xl dark:text-neutral-100 dark:text-shadow-neutral-200"
          >
            What makes our camps different?
          </h1>
          <p class="pt-5 px-5 leading-7 text-neutral-700 md:text-lg dark:text-neutral-400">
            Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.
          </p>
        </div>
      </TransitionScroll>
      <div class="pt-10">
        <div class="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-x-10">
          <div v-for="value in content" :key="value.title">
            <TransitionScroll threshold :transition-direction="value.transitionAnimation" :no-animation="lg ? false : true">
              <div class="pt-10 flex flex-col items-center gap-y-5 md:flex-row lg:pt-15">
                <div class="w-50 flex justify-center md:mr-10">
                    <div class="overflow-hidden w-40 h-40 rounded-full md:w-50 md:h-50">
                      <LazyLoadImage
                        :img-path="value.imgPath"
                        :blurry-img-path="value.blurryImgPath"
                        :alt-name="value.title"
                        class="w-40 h-40 scale-120 rounded-full object-cover md:w-50 md:h-50"
                      />
                    </div>
                </div>
                <div class="w-80 flex flex-col items-center text-center gap-y-2 md:text-left md:w-120 md:items-start">
                  <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-200">{{ value.title }}</h2>
                  <p class="text-neutral-700 leading-7 dark:text-neutral-400">
                    {{ value.description }}
                  </p>
                </div>
              </div>
            </TransitionScroll>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
