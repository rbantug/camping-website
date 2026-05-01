<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore'
import { useToast } from '@/composables/useToast'

const mainStore = useMainStore()

const pages = mainStore.getAllPages

const { show, setPosition } = useToast()

function checkRoute(route: string) {
  if (route === '/auth') {
    setPosition('bottom-center')
    show('Sorry! This feature will be implemented in the future.', 'info', 5000)
  }
}
</script>

<template>
  <div class="mb-12">
    <div class="font-semibold mb-4 text-black md:text-lg dark:text-neutral-200">Pages</div>
    <div class="flex flex-col gap-y-2 md:gap-y-4">
      <div v-for="{ link, route } in pages" :key="route">
        <router-link
          :to="route"
          class="text-neutral-600 md:text-lg dark:text-neutral-500"
          @click="checkRoute(route)"
          >{{ link }}</router-link
        >
      </div>
    </div>
  </div>
</template>
