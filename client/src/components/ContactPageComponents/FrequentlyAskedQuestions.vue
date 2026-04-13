<script setup lang="ts">
import { ref } from 'vue'

import TransitionScroll from '../util/TransitionScroll.vue'

const faqs = ref([
  {
    question: 'What are your check-in and check-out times?',
    answer:
      'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    open: false,
  },
  {
    question: 'Do I need a reservation, or do you accept walk-ins?',
    answer:
      'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    open: false,
  },
  {
    question: 'What types of campsites do you offer (tent, RV, cabins)?',
    answer:
      'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    open: false,
  },
  {
    question: 'Are pets allowed at the campground?',
    answer:
      'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    open: false,
  },
  {
    question: 'Is the campground open year-round?',
    answer:
      'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo.',
    open: false,
  },
])

function toggleAnswer(index: number) {
  if (faqs.value[index]) {
    faqs.value[index].open = !faqs.value[index].open
  }
}
</script>

<template>
  <div class="h-fit py-20 bg-neutral-200 dark:bg-neutral-800">
    <div class="w-[90%] mx-auto">
      <TransitionScroll>
        <div class="text-center">
          <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h1>
          <p class="mt-5 leading-7 text-neutral-900 dark:text-neutral-100">
            Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna
            tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.
          </p>
        </div>
      </TransitionScroll>
      <div class="my-10 grid grid-cols-1">
        <div v-for="({ question, answer, open }, index) of faqs" :key="question">
          <TransitionScroll class="flex justify-center ">
            <div
              class="w-80 my-5 p-10 shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-transparent rounded-2xl hover:cursor-pointer md:w-full lg:w-120 dark:shadow-none dark:border-neutral-300"
              @click="toggleAnswer(index)"
            >
              <div class="flex items-center gap-x-2">
                <div class="w-[80%] dark:text-neutral-100">{{ question }}</div>
                <div class="w-[20%] flex justify-end">
                  <button
                    class="w-10 h-10 rounded-full flex justify-center items-center duration-300"
                    :class="{ 'bg-neutral-300': !open, 'bg-accent-secondary': open }"
                  >
                    <div
                      :class="{
                        'text-neutral-100 rotate-90 duration-200 ease': open,
                        'duration-200 ease': !open,
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <Transition
                enter-active-class="transition-all duration-200 ease-out md:duration-300"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-40"
                leave-active-class="transition-all duration-150 ease-in md:duration-200"
                leave-from-class="opacity-100 max-h-40"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="open" class="w-[80%] mt-5 text-neutral-700 dark:text-neutral-400">{{ answer }}</div>
              </Transition>
            </div>
          </TransitionScroll>
        </div>
      </div>
    </div>
  </div>
</template>
