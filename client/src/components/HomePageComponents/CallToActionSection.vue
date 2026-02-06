<script setup lang="ts">
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue';
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue';
import TransitionScroll from '../util/TransitionScroll.vue'
</script>

<template>
  <div class="h-200 mb-40 w-[90%] mx-auto md:w-[87%] lg:w-[85%] relative">
    <TransitionScroll class="relative">
      <div
        class="h-110 bg-accent-secondary rounded-4xl bg-[url(@/assets/images/CTAPattern.jpg)] bg-cover bg-blend-color-burn"
      >
        <div class="h-110 bg-accent-secondary rounded-4xl mask-y-from-90% mask-y-to-90%"></div>
      </div>
    </TransitionScroll>
    <TransitionScroll class="absolute top-12 h-150">
      <div class="w-[80%] mx-auto flex flex-col">
        <h1 class="text-white text-2xl font-bold text-shadow-lg mb-4">Nature is the Ultimate Playground. Find a camp today!</h1>
        <p class="text-white leading-7 text-shadow-sm mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.</p>
          <div class="flex flex-col gap-y-2">
              <PrimaryButton :alt-color="true" label="Explore camps" size="default"/>
              <SecondaryButton :alt-color="true" label="About us" size="default" />
          </div>
      </div>
    </TransitionScroll>
  </div>
</template>
