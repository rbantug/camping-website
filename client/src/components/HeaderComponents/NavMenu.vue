<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import type { NavItems } from '../TheHeader.vue'

interface Props {
  isOpen: boolean
  navItems: NavItems[]
  additionalNavItems: NavItems[]
}

const props = defineProps<Props>()

const emits = defineEmits(['emit1'])

const mainStore = useMainStore()

const moreNavItems = mainStore.getMoreNavItems
function toggleMoreNavItems() {
  mainStore.updateMoreNavItems()
}
function closeNavMenu() {
  mainStore.updateMoreNavItems(false)
  emits('emit1')
}
</script>

<template>
  <transition name="nav">
    <div
      v-if="props.isOpen"
      class="w-full bg-white pl-6.5 pr-6.5 rounded-[30px] justify-between items-start pt-5.5 pb-5.5 flex flex-col z-10 dark:bg-neutral-900 transition-color duration-300"
    >
      <div class="flex flex-col gap-y-4">
        <div v-for="{ link, route } in navItems" :key="link">
          <router-link
            :to="route"
            class="text-black dark:text-white transition-color duration-300"
            @click="closeNavMenu"
            >{{ link }}</router-link
          >
        </div>
      </div>
      <div
        class="flex cursor-pointer pt-4 pb-2 text-black dark:text-white transition-color duration-300"
        @click="toggleMoreNavItems"
      >
        <span>Pages</span>
        <!-- iconamoon:arrow-down-2 -->
        <div
          :class="{
            'rotate-180 duration-200 ease': moreNavItems,
            'duration-200 ease': !moreNavItems,
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 10l5 5m0 0l5-5"
            />
          </svg>
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
        <div v-if="moreNavItems" class="flex flex-col gap-2 translate-x-4 pb-4">
          <div v-for="{ link, route } in additionalNavItems" :key="link">
            <router-link
              :to="route"
              class="text-black dark:text-white transition-color duration-300"
              @click="closeNavMenu"
              >{{ link }}</router-link
            >
          </div>
        </div>
      </Transition>
      <div class="w-full md:w-[20%]">
        <PrimaryButton size="default" label="Book now" route-path="/camps"/>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: all 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.nav-enter-to,
.nav-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
