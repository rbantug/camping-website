<script setup lang="ts">
import TransitionScroll from '../util/TransitionScroll.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

interface Props {
  imgPath: string
  blurryImg: string
  name: string
  shortDescription: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="relative">
    <LazyLoadImage
      :img-path="props.imgPath"
      :blurry-img-path="props.blurryImg"
      :alt-name="props.name"
      not-lazy
      class="object-cover w-full h-120 md:h-150"
    />
    <div class="absolute h-120 top-0 bg-black/20 w-full flex flex-col justify-end md:h-150">
      <TransitionScroll threshold no-animation>
        <div class="ml-[7vw] lg:w-150">
          <h1 data-test="header" class="text-neutral-100 text-3xl font-bold tracking-wide mb-3 md:text-5xl lg:text-6xl">{{ props.name }}</h1>
          <p data-test="description" class="text-neutral-100 leading-8 mb-10 md:text-lg">{{ props.shortDescription }}</p>
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>
