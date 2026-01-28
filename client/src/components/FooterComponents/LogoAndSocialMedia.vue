<script setup lang="ts">
import 'iconify-icon'

const iconArr = ['mynaui:facebook-solid', 'uil:twitter', 'mynaui:instagram-solid', 'mynaui:youtube-solid']
</script>

<template>
  <div class="mb-10 flex flex-col gap-y-4">
    <router-link to="home" class="">
      <div class="flex items-start gap-x-2">
        <iconify-icon
          icon="icon-park-outline:camp"
          height="36"
          width="36"
          class="text-accent-primary"
        />
        <span class="text-2xl font-bold">DemoCamp</span>
      </div>
    </router-link>
    <p class="text-neutral-600 md:text-lg md:pb-6 lg:p-0">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    <div class="flex gap-x-4">
      <div v-for="icon in iconArr" :key="icon">
        <a href="/">
          <div class="w-8 h-8 md:w-9 md:h-9 rounded-full shadow-md/20 flex items-center justify-center">
            <iconify-icon
              :icon="icon"
              width="18"
              height="18"
              class="text-accent-primary md:scale-110"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
