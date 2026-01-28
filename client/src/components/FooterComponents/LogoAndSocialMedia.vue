<script setup lang="ts">
import 'iconify-icon'
</script>

<template>
  <div class="mb-10 max-w-full grid grid-cols-1 gap-y-4">
    <router-link to="home" class="p-0">
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
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    <div class="flex gap-x-4">
      <a href="/">
        <div class="w-8 h-8 rounded-full shadow-md/30 flex items-center justify-center">
          <iconify-icon
            icon="mynaui:facebook-solid"
            width="18"
            height="18"
            class="text-accent-primary"
          />
        </div>
      </a>
      <a href="/">
        <div class="w-8 h-8 rounded-full shadow-md/30 flex items-center justify-center">
          <iconify-icon icon="uil:twitter" width="18" height="18" class="text-accent-primary" />
        </div>
      </a>
      <a href="/">
        <div class="w-8 h-8 rounded-full shadow-md/30 flex items-center justify-center">
          <iconify-icon
            icon="mynaui:instagram-solid"
            width="18"
            height="18"
            class="text-accent-primary"
          />
        </div>
      </a>
      <a href="/">
        <div class="w-8 h-8 rounded-full shadow-md/30 flex items-center justify-center">
          <iconify-icon
            icon="mynaui:youtube-solid"
            width="18"
            height="18"
            class="text-accent-primary"
          />
        </div>
      </a>
    </div>
  </div>
</template>
