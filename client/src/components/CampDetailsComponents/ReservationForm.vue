<script setup lang="ts">
import { ref } from 'vue'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'

const props = defineProps({
  price: {
    type: String,
    required: true,
  },
})

const nights = ref(1)
const date = ref()
</script>

<template>
  <div class="flex justify-center items-center pt-10 lg:-mt-230">
    <TransitionScroll delay="1s">
      <div
        class="bg-neutral-100 rounded-3xl border-2 border-neutral-500 h-175 w-full max-w-90 dark:bg-neutral-900 transition-color duration-300 dark:border-neutral-400 md:max-w-190 lg:max-w-100"
      >
        <div class="w-[85%] pt-10 mx-auto">
          <div>
            <!-- Heading -->
            <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Reserve Camp</h1>
            <p class="mt-2 text-neutral-700 dark:text-neutral-400 md:text-lg">
              Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis
              convallis tempus leo.
            </p>
          </div>
          <!-- Price -->
          <div class="mt-5">
            <div class="text-neutral-700 dark:text-neutral-400 text-lg">From</div>
            <span class="font-bold text-xl text-neutral-900 dark:text-neutral-100"
              >$ {{ props.price }} USD</span
            >
            <span class="text-neutral-700 dark:text-neutral-400 text-lg"> /night</span>
          </div>
          <hr class="my-8 text-neutral-700 dark:text-neutral-400" />
          <!-- Input boxes -->
          <div class="w-full gap-x-3 grid grid-cols-[60%_40%] md:w-90 lg:gap-0">
            <div class="flex flex-col items-start gap-y-3 w-45">
              <span class="font-bold text-neutral-900 dark:text-neutral-100">Start Date</span>
              <input
                type="date"
                class="w-full h-15 rounded-4xl text-neutral-900 border-2 focus:border-accent-primary hover:border-accent-primary dark:focus:border-accent-outline dark:hover:border-accent-outline dark:text-neutral-400 dark:border-neutral-400 dark:bg-neutral-900 dark:scheme-dark"
              />
            </div>
            <div class="flex flex-col items-start gap-y-3 w-25">
              <span class="font-bold text-neutral-900 dark:text-neutral-100">Nights</span>
              <input
                type="number"
                class="rounded-4xl w-full h-15 text-neutral-900 border-2 focus:border-accent-primary hover:border-accent-primary dark:focus:border-accent-outline dark:hover:border-accent-outline dark:text-neutral-400 dark:border-neutral-400 dark:bg-neutral-900 dark:scheme-dark"
                v-model="nights"
              />
            </div>
          </div>
          <!-- buttons -->
          <div class="mt-10 flex flex-col items-center gap-y-5">
            <PrimaryButton label="Add to Cart" size="large" class="w-full"/>
            <div class="flex items-center gap-x-5">
              <hr class="w-30 text-neutral-900 dark:text-neutral-400">
              <div class="text-neutral-900 dark:text-neutral-400">OR</div>
              <hr class="w-30 text-neutral-900 dark:text-neutral-400">
            </div>
            <!-- TODO: This is a placeholder for shopify instant checkout -->
            <SecondaryButton label="Buy me" size="large" class="w-full"/>
          </div>
        </div>
      </div>
    </TransitionScroll>
  </div>
</template>
