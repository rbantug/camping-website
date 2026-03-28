<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

interface Props {
  category: 'forest' | 'beach' | 'mountain'
}

const props = withDefaults(defineProps<Props>(), {
  category: 'forest'
})

const mainStore = useMainStore()

let img:string[]
let blurryImg:string[]
const imgIndex = ref<number>(0)

const overlayIsVisible = ref(false)

function showOverlay(index:number) {
  overlayIsVisible.value = true
  document.body.style.overflow = 'hidden'
  imgIndex.value = index
}

function hideOverlay() {
  overlayIsVisible.value = false
  document.body.style.overflow = ''
  imgIndex.value = 0
}

function simpleCarousel() {
  const imgLen = img.length
  if (imgIndex.value < imgLen) imgIndex.value++
  
  if (imgIndex.value === imgLen) imgIndex.value = 0
}

onBeforeMount(() => {
  img = mainStore.getGalleryImage[props.category]
  blurryImg = mainStore.getGalleryBlurryImg[props.category]
})
</script>

<template>
  <div class="relative pt-20 bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800">
    <div class="h-400 w-[90%] mx-auto">
      <div class="flex flex-col gap-y-5">
        <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Camp Gallery</h1>
        <PrimaryButton label="Book room" size="default" />
      </div>
      <div class="mt-10 flex flex-col items-center gap-y-5">
        <div v-for="n in 4" :key="n - 1">
          <div class="overflow-hidden w-80 h-80 rounded-xl object-cover hover:cursor-pointer" @click="showOverlay(n - 1)">
            <LazyLoadImage
              :img-path="img[n - 1]"
              :alt-name="`${props.category}-${n - 1}`"
              :blurry-img-path="blurryImg[n - 1]"
              class="w-80 h-80 rounded-xl duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="overlayIsVisible" class="fixed inset-0 flex items-center justify-center bg-neutral-900/60 z-15" @click="hideOverlay">
      <!-- <div class="absolute top-60 left-70 text-neutral-100 hover:cursor-pointer hover:text-accent-secondary duration-300" >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"/></g></svg>
      </div> -->
      <div class="max-w-200">
        <LazyLoadImage :img-path="img[imgIndex]" :blurry-img-path="blurryImg[imgIndex]" :alt-name="`${props.category}-${imgIndex}`" @click.stop="simpleCarousel"/>
      </div>
    </div>
  </div>
</template>
