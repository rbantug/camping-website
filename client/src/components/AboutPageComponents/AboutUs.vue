<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import TransitionScroll from '../util/TransitionScroll.vue';
import LazyLoadImage from '../util/LazyLoadImage.vue';

const imgVertical = {
    img: 'https://dl.dropboxusercontent.com/scl/fi/yfkjtzwv60vlt4ij9rgr1/company-profile-1.avif?rlkey=9o7l26b5jqxba4675jpkkflks',
    blurryImg: 'https://dl.dropboxusercontent.com/scl/fi/tqc6rdjkqgv7odhro32j7/company-profile-1.avif?rlkey=9ukctd1txrn8l14hd8gbzcxkv'
}

const imgHoriz1 = {
    img: 'https://dl.dropboxusercontent.com/scl/fi/7sd3rtg9paruptvulpdp6/company-profile-2.avif?rlkey=xitiacsxf6xtp9ts4g1wdvb70',
    blurryImg: 'https://dl.dropboxusercontent.com/scl/fi/ve5qcx7jf035c574vxgy6/company-profile-2.avif?rlkey=yc4t7a82mohfu9ev04z4qjomp'
}

const imgHoriz2 = {
    img: 'https://dl.dropboxusercontent.com/scl/fi/rux4htg0w7eqilntylr1a/company-profile-3.avif?rlkey=sw73dvip6mlo9v753lf27igmo',
    blurryImg: 'https://dl.dropboxusercontent.com/scl/fi/k1jokxz04jd0iehzh27mo/company-profile-3.avif?rlkey=r1jpu19ud4utq7359f2bbhjkw'
} 

const imgHoriz3 = {
    img: 'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
    blurryImg: 'https://dl.dropboxusercontent.com/scl/fi/18wqydf0v7hu4i1tgldn7/forest-1.avif?rlkey=8kkubpmzyj0twcrc7yrapgmc7'
}

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')
</script>

<template>
    <div class="h-fit mx-auto max-w-150 py-40 bg-neutral-100 md:max-w-600 dark:bg-neutral-900 transition-colors duration-300">
        <div class="w-[90%] max-w-350 mx-auto flex flex-col lg:w-[95%]">
          <div class="flex flex-col md:flex-row md:gap-x-5" id="topAbout">
            <TransitionScroll threshold>
              <div class="max-w-200">
                <h1 class="text-2xl font-bold text-neutral-900 lg:text-4xl dark:text-neutral-100">
                  How we started
                </h1>
                <p class="pt-5 leading-7 text-neutral-700 lg:text-lg dark:text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
                  quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
                  Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo
                  eu aenean.
                </p>
              </div>
            </TransitionScroll>
            <TransitionScroll threshold>
              <div class="max-w-200 pt-10 md:pt-0">
                <h1 class="text-2xl font-bold text-neutral-900 lg:text-4xl dark:text-neutral-100">
                  Our story
                </h1>
                <p class="pt-5 leading-7 text-neutral-700 lg:text-lg dark:text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
                  quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
                  Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo
                  eu aenean.
                </p>
              </div>
            </TransitionScroll>
          </div>
          <!-- Images -->
          <div>
            <TransitionScroll :threshold="md" :no-animation="true">
            <div
              class="max-w-100 mx-auto pt-5 grid grid-cols-1 gap-y-5 md:gap-5 md:grid-cols-[40%_60%] md:max-w-300"
            >
              <div class="lg:max-w-140">
                <LazyLoadImage alt-name="about-us-1" :img-path="imgVertical.img"
                :blurry-img-path="imgVertical.blurryImg" class="rounded-2xl md:h-120 md:object-cover lg:h-180"/>
              </div>
              <div class="grid grid-cols-2 gap-5 md:gap-y-5 md:gap-x-5">
                <div>
                    <LazyLoadImage alt-name="about-us-2" :img-path="imgHoriz1.img" :blurry-img-path="imgHoriz1.blurryImg" class="h-40 rounded-2xl object-cover lg:h-70" />
                </div>
                <div>
                    <LazyLoadImage alt-name="about-us-3" :img-path="imgHoriz2.img" :blurry-img-path="imgHoriz2.blurryImg" class="h-40 rounded-2xl object-cover lg:h-70" />
                </div>
                <div class="col-start-1 col-end-3">
                    <LazyLoadImage alt-name="about-us-4" :img-path="imgHoriz3.img" :blurry-img-path="imgHoriz3.blurryImg" class="h-75 w-full  rounded-2xl object-cover lg:h-105" />
                </div>
              </div>
            </div>
            </TransitionScroll>
          </div>
        </div>
    </div>
</template>
