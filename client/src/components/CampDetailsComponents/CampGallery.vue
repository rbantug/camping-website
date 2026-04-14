<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y, Pagination } from 'swiper/modules'
import { useMainStore } from '@/stores/mainStore'
import { useBreakpoints } from '@vueuse/core'

import type { Swiper as SwiperType } from 'swiper'

// do not delete
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'
import TransitionScroll from '../util/TransitionScroll.vue'

interface Props {
  category: 'forest' | 'beach' | 'mountain'
}

const props = withDefaults(defineProps<Props>(), {
  category: 'forest',
})

const mainStore = useMainStore()

let img: string[]
let blurryImg: string[]
const imgIndex = ref<number>(0)

const overlayIsVisible = ref(false)

function showOverlay(index: number) {
  overlayIsVisible.value = true
  document.body.style.overflow = 'hidden'
  imgIndex.value = index
}

function hideOverlay() {
  overlayIsVisible.value = false
  document.body.style.overflow = ''
  imgIndex.value = 0
}

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')
const lg = breakpoints.greaterOrEqual('lg')

function scrollToForm() {
  let topPos = 0 
  if (!md.value) topPos = 1780
  if (md.value) topPos = 1460
  if (lg.value) topPos = 0

  window.scrollTo({
    top: topPos,
    behavior: 'smooth',
  })
}

///////////////////
//// swiperjs code
///////////////////

const swiperRef = ref<SwiperType>()
function onSwiper(swiper: SwiperType) {
  swiperRef.value = swiper
}

function goToNextSlide() {
  swiperRef.value?.slideNext()
}

function goToPrevSlide() {
  swiperRef.value?.slidePrev()
}

onBeforeMount(() => {
  img = mainStore.getGalleryImage[props.category]
  blurryImg = mainStore.getGalleryBlurryImg[props.category]
})

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (overlayIsVisible.value === true && e.key === 'Escape') {
      hideOverlay()
    }
  })
})
</script>

<template>
  <div class="relative py-20 bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800">
    <div class="h-fit w-[90%] mx-auto">
      <TransitionScroll>
        <div
          class="mx-auto max-w-100 flex flex-col gap-y-5 md:flex-row md:max-w-400 md:justify-between md:items-center"
        >
          <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Camp Gallery</h1>
          <!-- TODO: clicking will shift the browser back to the reserve camp form -->
          <PrimaryButton label="Book camp" :size="md ? 'large' : 'default'" class="md:w-60" disable-btn @click="scrollToForm"/>
        </div>
      </TransitionScroll>
      <div
        class="mt-10 mx-auto grid grid-cols-1 items-center justify-center gap-y-5 md:grid-cols-2 md:max-w-200 lg:max-w-260"
      >
        <div v-for="n in 4" :key="n - 1" class="mx-auto">
          <div
            class="overflow-hidden w-80 h-50 rounded-xl hover:cursor-pointer md:w-90 md:h-60 lg:w-120 lg:h-80"
            @click="showOverlay(n - 1)"
          >
            <LazyLoadImage
              :img-path="img[n - 1]"
              :alt-name="`${props.category}-${n - 1}`"
              :blurry-img-path="blurryImg[n - 1]"
              class="w-90 h-50 rounded-xl duration-300 hover:scale-110 md:w-100 md:h-70 lg:w-130 lg:h-80"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Overlay for image preview -->
    <div
      v-if="overlayIsVisible"
      class="fixed inset-0 flex items-center justify-center bg-neutral-900/60 z-15"
      @click="hideOverlay"
    >
      <swiper
        :slides-per-view="1"
        :modules="[Navigation, A11y, Pagination]"
        :loop="true"
        :initial-slide="imgIndex"
        :pagination="true"
        @swiper="onSwiper"
        class="mx-auto"
      >
        <swiper-slide v-for="n in 4" :key="n - 1">
          <div class="relative max-w-200 mx-auto lg:max-w-300" @click.stop="goToNextSlide">
            <LazyLoadImage
              :img-path="img[n - 1]"
              :blurry-img-path="blurryImg[n - 1]"
              :alt-name="`${props.category}-${n - 1}`"
            />
            <div
              class="absolute top-0 left-0 bg-transparent h-100 w-45 z-20 md:h-150 md:w-100 lg:h-200 lg:w-150"
              @click.stop="goToPrevSlide"
            ></div>
            <div
              class="absolute top-0 right-0 bg-transparent h-100 w-45 md:h-150 md:w-100 lg:h-200 lg:w-150 z-20"
              @click.stop="goToNextSlide"
            ></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: rgb(190, 190, 190);
  width: 10px;
  height: 10px;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: oklch(62.7% 0.265 303.9);
  transform: scale(1.5);
}

:deep(.swiper-pagination) {
  bottom: 10px;
}
</style>
