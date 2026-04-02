<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useMainStore } from '@/stores/mainStore'

import LazyLoadImage from '../util/LazyLoadImage.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'

const mainStore = useMainStore()

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const lg = breakpoints.isGreaterOrEqual('lg')

const content = {
  imgPath:
    'https://dl.dropboxusercontent.com/scl/fi/6uamdsftzpf63p8ug50kr/about-us-cta.avif?rlkey=gc23e5jkqbzt4jlha4cp5sbbr',
  imgPathDark:
    'https://dl.dropboxusercontent.com/scl/fi/c96dj743f2x8qvgrtlj7q/about-us-cta-2.avif?rlkey=a4uvfzuy6nmt1hkc4fhiaf0ks',
  blurryImgPath:
    'https://dl.dropboxusercontent.com/scl/fi/gvzskbfz4ltaswnq1ulpl/about-us-cta.avif?rlkey=3asngdhybmbh5g72x6aoz7a2k',
  blurryImgPathDark:
    'https://dl.dropboxusercontent.com/scl/fi/nva2ebxyxvmmt4k5n5do7/about-us-cta-2.avif?rlkey=rkrvvnbph1k1n21ra3m9rg471',
  altName: 'about-page-call-to-action',
}

const outputImgPath = computed(() => {
  if (mainStore.getDarkMode) {
    return content.imgPathDark
  } else {
    return content.imgPath
  }
})

const outputBlurryImgPath = computed(() => {
  if (mainStore.getDarkMode) {
    return content.blurryImgPathDark
  } else {
    return content.blurryImgPath
  }
})
</script>

<template>
  <div
    class="h-480 bg-neutral-100 transition-colors duration-300 md:h-370 lg:h-280 dark:bg-neutral-900"
  >
    <div class="h-250 relative">
      <LazyLoadImage
        :img-path="outputImgPath"
        :blurry-img-path="outputBlurryImgPath"
        :alt-name="content.altName"
        class="h-300 object-cover w-full"
      />
      <div class="absolute h-300 w-full top-0 bg-black/30 bg-blend-overlay">
        <TransitionScroll threshold no-animation>
          <div class="flex flex-col items-center mt-120">
            <h1
              class="font-bold text-4xl text-center mx-auto text-neutral-100 text-shadow-md tracking-wide md:text-5xl lg:text-6xl"
            >
              Wake up to this view
            </h1>
            <p class="w-[85%] text-center text-neutral-300 text-shadow-md leading-7 mt-5 md:text-lg md:w-[80%] lg:w-[50%]">
              Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo
              eu aenean.
            </p>
            <PrimaryButton :size="lg ? 'large' : 'default'" label="Check our camps" class="w-[60%] mt-10 md:w-[50%] lg:w-[30%]" />
          </div>
        </TransitionScroll>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
