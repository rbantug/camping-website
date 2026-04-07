<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore';

const mainStore = useMainStore()

const iconArr = mainStore.getIconArr
</script>

<template>
  <div class="mb-10 flex flex-col gap-y-4">
    <router-link to="home" class="">
      <div class="flex items-center gap-x-2">
        <div class="text-accent-primary dark:text-accent-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path d="M44 35h-4L24 6.5L8 35H4" />
              <path
                d="M24 31c-2.761 0-5 3.582-5 8v2h10v-2c0-4.418-2.239-8-5-8M4 41h40M15 23s5-4 9-4s9 4 9 4m7-17l-2 3l2 3m0-6l2 3l-2 3M7 17l-1 2l1 2m0-4l1 2l-1 2"
              />
            </g>
          </svg>
        </div>
        <span class="text-2xl font-bold text-black dark:text-neutral-200">DemoCamp</span>
      </div>
    </router-link>
    <p class="text-neutral-600 md:text-lg md:pb-6 lg:p-0 dark:text-neutral-500">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </p>
    <div class="flex gap-x-4">
      <div v-for="{ name, svg } in iconArr" :key="name">
        <a href="/">
          <div
            class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-transparent shadow-md/20 flex items-center justify-center dark:shadow-none dark:ring-2 dark:ring-neutral-500"
          >
            <div v-html="svg" class="text-accent-primary md:scale-110 dark:text-accent-secondary"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
