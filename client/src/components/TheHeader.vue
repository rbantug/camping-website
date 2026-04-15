<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import PrimaryButton from './BaseComponents/Buttons/PrimaryButton.vue'
import HamburgerMenu from './HeaderComponents/HamburgerMenu.vue'
import NavMenu from './HeaderComponents/NavMenu.vue'

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
function forceCloseNavBar() {
  navBarsAnimation.value = false
  mainStore.updateMoreNavItems(false)
}

const pagesNavBarIsOpen = ref(false)

function forceClosePNBIO() {
  pagesNavBarIsOpen.value = false
}
function togglePNBIO() {
  pagesNavBarIsOpen.value = !pagesNavBarIsOpen.value
}

const navItems = ref(mainStore.getAllPages.value.slice(0, 2))

const additionalNavItems = ref(
  mainStore.getAllPages.value.slice(2, mainStore.getAllPages.value.length),
)

const breakpoints = useBreakpoints({
  sm: 480,
  md: 768,
  lg: 994,
})

const mdAndLarger = breakpoints.greater('md')
const lgAndLarger = breakpoints.greater('lg')

watch(mdAndLarger, () => {
  forceCloseNavBar()
})
</script>

<template>
  <div>
    <div v-if="pagesNavBarIsOpen" class="fixed h-screen w-screen bg-transparent z-1" @click="forceClosePNBIO"></div>
    <div v-if="navBarsAnimation" class="fixed h-screen w-screen bg-transparent z-1" @click="forceCloseNavBar"></div>
    <div class="z-6 bg-transparent absolute top-7.5 inset-x-0">
      <div class="px-4 max-w-317 mx-auto flex flex-col gap-2">
        <div
          class="px-6.5 bg-white rounded-[132px] justify-between items-center py-5.5 flex dark:bg-neutral-900 transition-color duration-300"
        >
          <!-- Logo -->
          <router-link to="/home" class="p-0">
            <div class="flex justify-center items-center gap-x-2">
              <div class="text-accent-primary dark:text-accent-secondary transition-color duration-300">
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
              <span class="text-2xl font-bold dark:text-white transition-color duration-300">DemoCamp</span>
            </div>
          </router-link>
          <div class="justify-end items-center flex gap-x-4">
            <!-- Hamburger menu -->
            <div v-if="!lgAndLarger" class="p-0 cursor-pointer" @click="toggleNavBarsAnimation">
              <hamburger-menu :is-open="navBarsAnimation" />
            </div>
            <!-- Header links -->
            <div v-else class="flex gap-x-8 text-lg">
              <div v-for="{ link, route } in navItems" :key="link">
                <router-link :to="route" class="hover:text-accent-primary duration-100 ease dark:text-white transition-color" @click="forceClosePNBIO">{{
                  link
                }}</router-link>
              </div>
              <div
                class="flex items-center cursor-pointer hover:text-accent-primary duration-100 ease dark:text-white transition-color"
                @click="togglePNBIO"
              >
                <span>Pages</span>
                <div
                  :class="{
                    'rotate-180 duration-200 ease': pagesNavBarIsOpen,
                    'duration-200 ease': !pagesNavBarIsOpen,
                  }"
                >
                <!-- Icon name= iconamoon:arrow-down-2 -->
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
                      d="m7 10l5 5m0 0l5-5"
                    />
                  </svg>
                </div>
              </div>
              <!-- Pages Dropdown -->
              <transition name="pagesNav">
                <div
                  v-show="pagesNavBarIsOpen"
                  class="absolute top-17 right-60 bg-white px-10 py-2 shadow-lg shadow-neutral-800/50 rounded-xl z-2 flex flex-col gap-y-4 dark:bg-neutral-700 transition-color duration-300"
                >
                  <div
                    v-for="{ link, route } in additionalNavItems"
                    :key="link"
                    class="justify-start hover:text-accent-primary duration-100 ease dark:text-white transition-color" 
                  >
                    <router-link :to="route" @click="togglePNBIO">{{ link }}</router-link>
                  </div>
                </div>
              </transition>
            </div>
            <!-- Cart -->
            <div
              class="relative cursor-pointer hover:scale-90 hover:bg-gray-200 hover:rounded-4xl duration-100 ease dark:hover:bg-black transition-color"
            >
              
               <div class="text-neutral-800 scale-150 dark:text-neutral-200 transition-color duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"/><path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1" opacity="0.5"/></g></svg>
               </div>
              <div class="absolute top-3 -left-2">
                <div class="p-2.5 bg-accent-secondary rounded-full">
                  <span class="absolute left-1.25 top-0.5 pb-1 text-xs text-white font-semibold"
                    >0</span
                  >
                </div>
              </div>
            </div>
            <!-- breakpoint "md" only, book now button -->
            <div v-if="mdAndLarger">
              <primary-button label="Book now" size="default" route-path="/camps" />
            </div>
          </div>
        </div>
        <!-- Nav Menu -->
        <nav-menu
          :is-open="navBarsAnimation"
          :nav-items="navItems"
          :additional-nav-items="additionalNavItems"
          @emit1="forceCloseNavBar"
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
