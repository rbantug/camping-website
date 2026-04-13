<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y } from 'swiper/modules'
import { useBreakpoints } from '@vueuse/core'

import 'swiper/css'

import LazyLoadImage from '../util/LazyLoadImage.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const greaterEqualLG = breakpoints.greaterOrEqual('lg')
const greaterEqualMD = breakpoints.greaterOrEqual('md')

const clientArr = [
  {
    name: 'Jessica M.',
    location: 'Portland, OR',
    review:
      "We stayed for three nights and absolutely loved the peaceful atmosphere. The campsites were spacious and clean, and the staff was super friendly. Waking up to the sound of birds and the smell of pine trees was exactly what we needed. We'll definitely be back next summer!",
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/91mq5zjl7d68xqad9z4kz/client-jessica.avif?rlkey=ii8vg2qbxu02uae6p8o419wd3',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/4vfj9ja5jiw1jm5sm9jop/client-jessica.avif?rlkey=gd0g83r6vicad8v1q78l2jkuj',
  },
  {
    name: 'Daniel R.',
    location: 'Austin, TX',
    review:
      'We brought our kids for a weekend getaway and they had the best time exploring the trails and roasting marshmallows. It felt safe and family-friendly, and the lake views were stunning at sunset. Highly recommend for families.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/f390dklkc9osa6fm7hmk7/client-daniel.avif?rlkey=v3jjdy4kht8lqn4u4kcc02r43',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/3pi0vhsoqqx9vct0zg34w/client-daniel.avif?rlkey=tst12ccl0m7828fcr53iq85pa',
  },
  {
    name: 'Michelle K.',
    location: 'Seattle, WA',
    review:
      'This campground struck the perfect balance between rustic and comfortable. The hiking trails nearby were beautiful, and the fire pits at each site made evenings extra cozy. The restrooms were surprisingly well maintained too. Great experience overall.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/4a982y24jb9plk8c476p1/client-michelle.avif?rlkey=3mchaadt4e6ozt04ygatehctn',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/886jgrkl9z512zcduta3h/client-michelle.avif?rlkey=sjcrwd2dg1wjj0v3p308ff137',
  },
  {
    name: 'Brian T.',
    location: 'Denver, CO',
    review:
      "If you're looking to unplug and disconnect, this is the place. No noisy crowds, just fresh air and quiet nights under the stars. The staff gave great local tips for fishing spots nearby.",
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/9qg6a8hzaqbnck5ttkz9p/client-brian.avif?rlkey=i3en9bjs3cxrtp5ikz49kyqj9',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/e42jvc82i1qvye77hgkm9/client-brian.avif?rlkey=4ea4akcavu66j2h30knbjrp02',
  },
  {
    name: 'Amanda L.',
    location: 'San Diego, CA',
    review:
      'The sites are well spaced, giving you a lot of privacy. I especially loved the morning fog rolling through the trees — it felt magical. Bathrooms and common areas were clean and stocked. Five stars from us.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/blo7ljnldlxziwgr61rky/client-amanda.avif?rlkey=xaa9ruug9nfxh820867n9jayw',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/rwo17r7yknqqwlt6sosu6/client-amanda.avif?rlkey=meuh6kz5h6hsahd3hn2fmq1g8',
  },
  {
    name: 'Mark C.',
    location: 'Chicago, IL',
    review:
      'We camped here during a road trip and ended up wishing we had planned a longer stay. Easy check-in, clear signage, and beautiful scenery. The campground felt thoughtfully designed.',
    imgPath:
      'https://dl.dropboxusercontent.com/scl/fi/ozxuzdjtz8ewkibh9j8ku/client-mark.avif?rlkey=twsmldow63atupvr8ic9t7uyy',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/h1g2kharp979ndty46cf0/client-mark.avif?rlkey=hisppzxue4cnni90gpav378xo',
  },
]
</script>

<template>
  <div class="bg-white dark:bg-neutral-900 transition-colors duration-300">
    <div class="h-fit w-[90%] py-40 mx-auto lg:w-full">
      <TransitionScroll threshold>
        <div class="flex flex-col items-center text-center gap-y-4 lg:px-20">
          <h2 class="font-bold text-2xl lg:text-4xl dark:text-white">What our past clients say</h2>
          <p class="text-neutral-600 leading-8 md:text-lg dark:text-neutral-500">
            Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
            pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.
          </p>
        </div>
      </TransitionScroll>
      <div class="h-160 mb-10 mx-auto md:h-120">
        <swiper
          :slides-per-view="greaterEqualLG ? 1.5 : 1"
          :modules="[Navigation, A11y]"
          :space-between="0"
          :centered-slides="true"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
          :loop="true"
          class="md:max-w-250 lg:min-w-230 lg:max-w-400"
        >
          <swiper-slide
            v-for="{ name, review, location, imgPath, blurryImg } in clientArr"
            :key="name"
            class="my-10"
          >
            <div
              class="max-w-90 mx-auto w-[90%] rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:py-10 md:max-w-250 lg:max-w-300 lg:min-w-150 lg:w-[95%] lg:px-8 lg:gap-x-2 dark:ring dark:ring-neutral-600 dark:shadow-none"
            >
              <div
                class="h-90 rounded-full overflow-hidden flex justify-center items-center md:w-150"
              >
                <LazyLoadImage
                  :alt-name="name"
                  :img-path="imgPath"
                  :blurry-img-path="blurryImg"
                  class="object-cover object-center h-70 rounded-full md:h-60 lg:h-80"
                />
              </div>
              <div
                class="pb-10 w-full max-w-100 mx-2 md:h-70 md:pb-0 md:flex md:flex-col md:justify-center lg:max-w-120"
              >
                <div
                  class="w-[90%] mx-auto flex flex-col md:justify-center md:w-80 md:mx-0 md:mr-10 lg:w-full lg:pr-0"
                >
                  <!-- Camp name and description -->
                  <p class="text-neutral-600 md:text-lg dark:text-neutral-500">{{ review }}</p>
                  <h3 class="text-2xl font-semibold pt-2 md:text-3xl dark:text-white">
                    {{ name }}
                  </h3>
                  <p class="md:text-lg dark:text-white">{{ location }}</p>
                  <!-- Price -->
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="relative">
          <!-- custom previous button -->
          <button
            class="prev-btn absolute -left-5 bottom-85 z-1 w-15 h-15 rounded-full flex items-center justify-center bg-accent-secondary duration-300 hover:bg-accent-primary hover:cursor-pointer hover:scale-90 md:bottom-55 lg:left-15"
          >
            <div class="text-white scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m12 19l-7-7l7-7m7 7H5"
                />
              </svg>
            </div>
          </button>

          <!-- custom next button -->
          <button
            class="next-btn absolute -right-4.5 bottom-85 z-1 w-15 h-15 rounded-full flex items-center justify-center bg-accent-secondary duration-300 hover:bg-accent-primary hover:cursor-pointer hover:scale-90 md:bottom-55 lg:right-15"
          >
            <div class="text-white scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <!-- Buttons -->
      <TransitionScroll threshold>
        <div
          class="flex flex-col gap-y-5 pt-20 md:flex-row md:gap-y-0 md:gap-x-5 md:pt-0 md:justify-center"
        >
          <SecondaryButton label="Explore camps" :size="greaterEqualMD ? 'large' : 'default'" :white-ring="false" route-path="/camps" />
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-button-next) {
  background-color: oklch(62.7% 0.265 303.9);
  border-radius: 100%;
  color: white;
  background-image: url();
}
:deep(.swiper-button-next:hover) {
  background-color: oklch(55.8% 0.288 302.3);
  cursor: pointer;
}

.next-btn {
}
.prev-btn {
}
</style>
