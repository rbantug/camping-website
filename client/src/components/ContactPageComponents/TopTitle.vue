<script setup lang="ts">
import LazyLoadImage from '../util/LazyLoadImage.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
</script>

<template>
  <div class="relative">
    <LazyLoadImage
      :img-path="'https://dl.dropboxusercontent.com/scl/fi/2d04we4ywoi5i5dx8xkiu/gallery-mountain-1.avif?rlkey=obelhwb17doqjqwjb4im1jg9p'"
      blurry-img-path="'https://dl.dropboxusercontent.com/scl/fi/enhlrtl3j06zbn56m6h48/gallery-mountain-1.avif?rlkey=rd7yy36va5pm7w8iyi2dpntnr'"
      alt-name="mountain camping"
      not-lazy
      class="object-cover w-full h-150 md:h-180"
    />
    <div class="absolute h-150 top-0 bg-black/20 w-full flex flex-col justify-center items-center md:h-180">
      <TransitionScroll threshold no-animation>
        <div class="w-[90%] mx-auto text-center md:w-[80%] lg:w-[60%]">
          <h1
            class="text-neutral-100 text-5xl font-bold tracking-wide mb-3 md:text-6xl"
          >
            Contact us
          </h1>
          <p class="text-neutral-100 leading-8 mb-10 md:text-lg">Lorem is not ipsuming hard enough. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi.</p>
        </div>
      </TransitionScroll>
    </div>
  </div>
</template>
