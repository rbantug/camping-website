<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import PrimaryButton from './BaseComponents/Buttons/PrimaryButton.vue'
import HamburgerMenu from './HeaderComponents/HamburgerMenu.vue'
import NavMenu from './HeaderComponents/NavMenu.vue'
import { Icon } from '@iconify/vue'

import { useMainStore } from '@/stores/mainStore'

export interface NavItems {
  link: string
  route: string
}

const mainStore = useMainStore()

const navBarsAnimation = ref(false)
function toggleNavBarsAnimation() {
  navBarsAnimation.value = !navBarsAnimation.value
}

const pagesNavBarIsOpen = ref(false)
function togglePNBIO() {
  pagesNavBarIsOpen.value = !pagesNavBarIsOpen.value
}

const navItems = ref(mainStore.getAllPages.value.slice(0,2))

const additionalNavItems = ref(mainStore.getAllPages.value.slice(2,mainStore.getAllPages.value.length))

const breakpoints = useBreakpoints({
  sm: 480,
  md: 768,
  lg: 994,
})

const mdAndLarger = breakpoints.greater('md')
const lgAndLarger = breakpoints.greater('lg')
</script>

<template>
  <div>
    <div class="z-6 bg-transparent absolute top-7.5 inset-x-0 bottom-auto pt-0 pb-0">
      <div class="pl-4 pr-4 max-w-317 ml-auto mr-auto flex flex-col gap-2">
        <div
          class="pl-6.5 pr-6.5 bg-white rounded-[132px] justify-between items-center pt-5.5 pb-5.5 flex"
        >
          <!-- Logo -->
          <router-link to="home" class="p-0">
            <div class="flex justify-center items-center gap-x-2">
              <Icon
                icon="icon-park-outline:camp"
                height="36"
                width="36"
                class="text-accent-primary"
              />
              <span class="text-2xl font-bold">DemoCamp</span>
            </div>
          </router-link>
          <div class="justify-end items-center flex gap-x-2 md:gap-x-4">
            <!-- Hamburger menu -->
            <div v-if="!lgAndLarger" class="p-0 cursor-pointer" @click="toggleNavBarsAnimation">
              <hamburger-menu :is-open="navBarsAnimation" />
            </div>
            <!-- Header links -->
            <div v-else class="flex gap-x-8 text-lg">
              <div v-for="{ link, route } in navItems" :key="link">
                <router-link :to="route" class="hover:text-accent-primary duration-100 ease">{{
                  link
                }}</router-link>
              </div>
              <div
                class="flex items-center cursor-pointer hover:text-accent-primary duration-100 ease"
                @click="togglePNBIO"
              >
                <span>Pages</span>
                <Icon
                  icon="iconamoon:arrow-down-2"
                  width="24"
                  height="24"
                  :class="{
                    'rotate-180 duration-200 ease': pagesNavBarIsOpen,
                    'duration-200 ease': !pagesNavBarIsOpen,
                  }"
                />
              </div>
              <!-- Pages Dropdown -->
              <transition name="pagesNav">
                <div
                  v-show="pagesNavBarIsOpen"
                  class="absolute top-17 right-60 bg-white px-10 py-2 shadow-lg shadow-neutral-800/50 rounded-xl z-2 flex flex-col gap-y-4"
                >
                  <div
                    v-for="{ link, route } in additionalNavItems"
                    :key="link"
                    class="justify-start hover:text-accent-primary duration-100 ease"
                  >
                    <router-link :to="route">{{ link }}</router-link>
                  </div>
                </div>
              </transition>
            </div>
            <!-- Cart -->
            <div
              class="relative cursor-pointer hover:scale-90 hover:bg-gray-200 hover:rounded-4xl duration-100 ease"
            >
              <Icon
                icon="solar:bag-line-duotone"
                width="40"
                height="40"
                class="text-neutral-800"
              />
              <div class="absolute top-6 left-0.5">
                <div class="p-2.5 bg-accent-secondary rounded-full">
                  <span class="absolute left-1.25 top-0.5 pb-1 text-xs text-white font-semibold"
                    >0</span
                  >
                </div>
              </div>
            </div>
            <!-- breakpoint "md" only, book now button -->
            <div v-if="mdAndLarger">
              <primary-button label="Book now" size="default" />
            </div>
          </div>
        </div>
        <!-- Nav Menu -->
        <nav-menu
          :is-open="navBarsAnimation"
          :nav-items="navItems"
          :additional-nav-items="additionalNavItems"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagesNav-enter-active,
.pagesNav-leave-active {
  transition: all 0.2s ease;
}

.pagesNav-enter-from,
.pagesNav-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}

.pagesNav-enter-to,
.pagesNav-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
