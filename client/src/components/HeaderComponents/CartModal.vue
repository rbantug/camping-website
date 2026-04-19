<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useMainStore } from '@/stores/mainStore'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

interface Props {
  isOpen: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})

const emits = defineEmits(['emitCloseModal'])

function closeModal() {
  emits('emitCloseModal')
}

const mainStore = useMainStore()

const testData = ref([
  {
    name: 'Quiet Ember Campground',
    moreInfo: 'lorem is not ipsuming',
    price: 100,
    quantity: 1,
    image:
      'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
  },
  {
    name: 'Quiet Ember Campground',
    moreInfo: 'lorem is not ipsuming',
    price: 100,
    quantity: 1,
    image:
      'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
  },
  {
    name: 'Quiet Ember Campground',
    moreInfo: 'lorem is not ipsuming',
    price: 100,
    quantity: 1,
    image:
      'https://dl.dropboxusercontent.com/scl/fi/b1w3ybugfyq8c9thb0si1/forest-1.avif?rlkey=gd4vdo8y30jpj3ics9uecxevd',
  },
])

const getSubTotal = computed(() => {
  return testData.value.reduce((acc, { price, quantity }) => acc + (price * quantity), 0)
})

function testRemoveItem() {
  testData.value.pop()
}

/* watch(testData, () => {

}, { immediate: true }) */

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-200 ease-out md:duration-300"
        enter-from-class="opacity-0 md:scale-120"
        enter-to-class="opacity-100 md:scale-100"
        leave-active-class="transition-all duration-150 ease-in md:duration-200"
        leave-from-class="opacity-100 md:scale-100"
        leave-to-class="opacity-0 md:scale-80"
      >
        <div
          v-show="isOpen"
          class="fixed top-0 w-screen h-screen bg-neutral-900/50 z-6 flex justify-center items-center"
          @click="closeModal"
        >
          <div
            class="fixed top-0 h-full w-full bg-neutral-100 z-7 md:top-50 md:rounded-3xl md:h-160 md:w-150 md:text-lg dark:bg-neutral-800"
            @click.stop
          >
            <div class="flex flex-col py-5">
              <!-- header -->
              <div class="w-[85%] mx-auto mb-5 flex justify-between ">
                <h3 class="font-semibold dark:text-neutral-100">Your Cart</h3>
                <div class="hover:cursor-pointer dark:text-neutral-100" @click="closeModal">
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
                      d="m7 7l10 10M7 17L17 7"
                    />
                  </svg>
                </div>
              </div>
              <!-- cart items -->
              <div class="flex flex-col w-[90%] mx-auto max-h-120 overflow-y-auto md:max-h-80 md:w-[85%]">
                <div v-for="data in testData" class="my-5 flex gap-x-5 justify-between justify-items-start" :key="data.name">
                  <div class="w-[20%]">
                    <div class="w-15 h-15 rounded-lg overflow-hidden">
                      <LazyLoadImage :img-path="data.image" :alt-name="data.name" class="w-15 h-15" />
                      image
                    </div>
                  </div>
                  <div class="w-[50%] flex flex-col items-start">
                    <span class="font-semibold leading-7 dark:text-neutral-100">{{ data.name }}</span>
                    <span class="w-30 leading-7 text-neutral-700 md:w-full dark:text-neutral-400">Some text: {{ data.moreInfo }}</span>
                    <span class="mt-2 font-bold text-neutral-700 dark:text-neutral-400">${{ data.price * data.quantity }}.00</span>
                    <span class="mt-2 text-neutral-900 hover:cursor-pointer hover:text-accent-primary dark:text-neutral-100 dark:hover:text-accent-secondary" @click="testRemoveItem">Remove</span>
                  </div>
                  <div class="w-[30%]">
                    <input
                      type="number"
                      class="w-20 h-10 pl-5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border-0 dark:shadow-none dark:border-neutral-400 dark:border-2 dark:bg-neutral-800 dark:text-neutral-100 dark:scheme-dark"
                      v-model="data.quantity"
                    />
                  </div>
                </div>
              </div>
              <hr class="mt-10 text-neutral-400"/>
              <!-- subtotal and checkout btn -->
              <div class="w-[85%] mx-auto">
                <div class="mt-10 flex justify-between">
                  <span class="text-neutral-700 dark:text-neutral-400">Subtotal:</span>
                  <span class="font-semibold tracking-wide dark:text-neutral-100">$ {{getSubTotal}}.00 USD</span>
                </div>
                <PrimaryButton label="Continue to Checkout" :size="md ? 'large' : 'default'" class="mt-10" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
