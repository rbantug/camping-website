<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y } from 'swiper/modules'
import { useBreakpoints } from '@vueuse/core'
import { useMainStore } from '@/stores/mainStore'

import 'swiper/css'

import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import CampCard from '../BaseComponents/CampCard.vue'

const mainStore = useMainStore()

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const mdTolg = breakpoints.between('md', 'lg')
const greaterEqualLG = breakpoints.greaterOrEqual('lg')

const campList = mainStore.getAllCamps
</script>

<template>
  <div class="dark:bg-neutral-900 transition-color duration-300">
    <div class="h-fit w-[90%] py-40 mx-auto md:w-[87%] lg:w-[85%]">
      <transition-scroll>
        <div class="flex flex-col justify-between w-full pb-10 md:flex-row md:items-center md:h-30">
          <h1
            class="text-3xl font-bold pb-10 text-black md:pb-0 dark:text-white transition-color duration-300"
          >
            Explore our camps
          </h1>
          <div class="w-full md:w-fit">
            <secondary-button label="Browse all" size="large" :white-ring="false" route-path="/camps" />
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
            <swiper-slide v-for="camp in campList" :key="camp.name">
              <CampCard
                :name="camp.name"
                :short-description="camp.shortDescription"
                :full-description="camp.fullDescription"
                :price="camp.price"
                :image="camp.image"
                :blurry-img="camp.blurryImg"
                :status="camp.status"
                :amenities="camp.amenities"
                :slug="camp.slug"
              />
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
