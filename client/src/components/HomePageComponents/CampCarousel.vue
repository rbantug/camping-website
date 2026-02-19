<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y } from 'swiper/modules'
import { useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

import 'swiper/css'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import BaseBadge from '../BaseComponents/Buttons/BaseBadge.vue'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const mdTolg = breakpoints.between('md', 'lg')
const greaterEqualLG = breakpoints.greaterOrEqual('lg')

const testCamps = ref([
  {
    name: 'Quiet Ember Campground',
    shortDescription: 'lorem something is flying over the chasm',
    fullDescription:
      "Quiet Ember Campground is a tucked-away forest retreat where slow mornings and crackling campfires set the pace. Surrounded by tall pines, soft moss trails, and the distant sound of a flowing creek, it's a place designed for people who come to the woods to truly unplug. Evenings glow with lantern light and warm embers, while the night sky opens wide above the treetops.",
    price: '12',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/18wqydf0v7hu4i1tgldn7/forest-1.avif?rlkey=8kkubpmzyj0twcrc7yrapgmc7',
    status: 'available',
    amenities: ['toilet', 'firePit', 'waterSupply', 'campStore'],
  },
  {
    name: 'Cedar Ridge Outpost',
    shortDescription: 'lorem something is flying over the chasm',
    price: '34',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/mlej6lktl7222u7yqt8xr/forest-2.avif?rlkey=c3kttwp5119rt1wu940hakfno',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/7meuc2pir0mtsjp1e92lr/forest-2.avif?rlkey=ueavpt1nftp432cw20632jyy9',
    status: 'full',
    amenities: ['grill', 'trashBins', 'picnicTable'],
  },
  {
    name: 'Breakline Beach Camp',
    shortDescription: 'lorem something is flying over the chasm',
    price: '56',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/xt0kr8kv85bgerfk6ohhh/beach-1.avif?rlkey=sxkf3kr4xdxze5byzvvzkb0ug',
    blurryImg: '/client/src/assets/images/lowres/beach-1.avif',
    status: 'available',
    amenities: ['shower', 'waterSupply', 'wifiAccess'],
  },
  {
    name: 'Highpass Outpost',
    shortDescription: 'lorem something is flying over the chasm',
    price: '78',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/s8q8u7tnnudy8j6ed5z75/mountain-1.avif?rlkey=u8724riknpoc464vekmk3xgqe',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/5tkk1iht2isx7rqxwaroq/mountain-1.avif?rlkey=16v6idbvlocetszbq3hbuhw2g',
    status: 'available',
    amenities: ['shower', 'waterSupply', 'wifiAccess'],
  },
  {
    name: 'North Summit Camp',
    shortDescription: 'lorem something is flying over the chasm',
    price: '90',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/bxicpr9ysg35d6gc8cwh5/mountain-2.avif?rlkey=k0c890ridekn13qfgwi9j2ft7',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/vvzdhi7m7cj8duk3qv14f/mountain-2.avif?rlkey=njz2ki0bnp6kepnev06rkisho',
    status: 'available',
    amenities: ['grill', 'trashBins', 'picnicTable'],
  },
  {
    name: 'Cloudrest Campground',
    shortDescription: 'lorem something is flying over the chasm',
    price: '14',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/apars1hjdyqr5efk8myps/mountain-3.avif?rlkey=8dhggk1z3p0qevjgvig0a8w31',
    blurryImg:
      'https://dl.dropboxusercontent.com/scl/fi/j9opfda1c2szjcdq5qbeo/mountain-3.avif?rlkey=qwwery67yeedwvwd8wzglhx0u',
    status: 'available',
    amenities: ['grill', 'trashBins', 'picnicTable'],
  },
])
</script>

<template>
  <div class="h-200 w-[90%] pt-40 mb-70 mx-auto md:w-[87%] lg:w-[85%]">
    <transition-scroll>
      <div class="flex flex-col justify-between w-full pb-10 md:flex-row md:items-center">
        <h1 class="text-3xl font-bold pb-10 md:pb-0">Explore our camps</h1>
        <div class="w-full md:w-fit">
          <secondary-button label="Browse all" size="large" />
        </div>
      </div>
    </transition-scroll>
    <transition-scroll>
      <div class="h-160 mb-10 mx-auto hover:cursor-pointer hover:h-157 duration-300">
        <swiper
          :slides-per-view="mdTolg ? 2 : greaterEqualLG ? 3 : 1"
          :modules="[Navigation, A11y]"
          :space-between="20"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
          :loop="true"
          class="md:max-w-185 lg:min-w-230 lg:max-w-300"
        >
          <swiper-slide v-for="camp in testCamps" :key="camp.name">
            <div class="max-w-90 mx-auto rounded-2xl group md:max-w-85 lg:max-w-90">
              <div class="h-65 rounded-t-2xl overflow-hidden">
                <LazyLoadImage
                  :alt-name="camp.name"
                  :img-path="camp.image"
                  :blurry-img-path="camp.image"
                  class="object-cover object-center h-65 w-100 rounded-t-2xl group-hover:scale-120 duration-300"
                  :class="{ grayscale: camp.status === 'full' }"
                />
                <!-- <img
                  :src="camp.image"
                  :alt="camp.name"
                  class="object-cover object-center h-65 w-100 rounded-t-2xl group-hover:scale-120 duration-300"
                  :class="{ grayscale: camp.status === 'full' }"
                  loading="lazy"
                /> -->
              </div>
              <div
                class="h-90 max-w-100 bg-white rounded-b-2xl -translate-y-2 group-hover:-translate-y-4 duration-300 md:shadow"
              >
                <div class="w-[90%] mx-auto flex flex-col">
                  <!-- Camp name and description -->
                  <h3
                    class="text-2xl font-semibold pt-8 group-hover:text-accent-primary duration-200"
                    :class="{ 'text-xl': camp.name.length > 20, 'pb-1': camp.name.length > 20 }"
                  >
                    {{ camp.name }}
                  </h3>
                  <p class="pt-2 text-neutral-600">{{ camp.shortDescription }}</p>
                  <!-- Amenities Badge -->
                  <div class="flex gap-x-2 pt-4">
                    <div v-for="n in 2" :key="n">
                      <base-badge :name="camp.amenities[n]" class="" />
                    </div>
                  </div>
                  <div v-if="camp.amenities?.length > 2" class="pl-2 pt-1">
                    Plus {{ camp.amenities.length - 2 }} more
                  </div>
                  <hr class="text-neutral-400 font-bold mt-8" />
                  <!-- Price -->
                  <div class="mt-6 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <span class="text-xl font-semibold tracking-wider">${{ camp.price }}</span>
                      <span class="text-sm text-neutral-500"> /night</span>
                    </div>
                    <PrimaryButton
                      size="default"
                      :label="camp.status === 'available' ? 'Book now' : 'Full'"
                      :group-animate="true"
                      class="mt-4 md:mt-0"
                      :disabled="camp.status === 'available' ? false : true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="relative">
          <!-- custom previous button -->
          <button
            class="prev-btn absolute -left-5 bottom-85 z-1 w-15 h-15 rounded-full flex items-center justify-center bg-accent-secondary duration-300 hover:bg-accent-primary hover:cursor-pointer hover:scale-90"
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
            class="next-btn absolute -right-4.5 bottom-85 z-1 w-15 h-15 rounded-full flex items-center justify-center bg-accent-secondary duration-300 hover:bg-accent-primary hover:cursor-pointer hover:scale-90"
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
    </transition-scroll>
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
