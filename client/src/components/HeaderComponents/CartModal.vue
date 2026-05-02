<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useMainStore } from '@/stores/mainStore'
import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

import { useToast } from '@/composables/useToast'

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

const cartData = mainStore.getCart

// "price" is a string. It goes through type coercion into a number here.
const getSubTotal = computed(() => {
  return cartData.value.reduce((acc, { price, nights }) => acc + price * nights, 0)
})

function updateNights(
  campName: string,
  nights: number,
  startDate: string,
  event: Event & { target: HTMLInputElement },
) {
  const checkInput = event.target.value.search(/^\d+$/)
  if (checkInput !== -1) {
    mainStore.updateCampNights({ name: campName, nights, startDate })
  } else {
    event.target.value = '1'
    mainStore.updateCampNights({ name: campName, nights: 1, startDate })
  }
}

function removeCamp(campName: string) {
  mainStore.deleteItemFromCart(campName)
}

const totalCartItems = computed(() => mainStore.getCart.value.length)

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')

const { show, setPosition } = useToast()

function goToCheckout() {
  setPosition('bottom-center')
  show('Sorry! This feature will be implemented in the future.', 'info', 5000)
}
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
          v-show="props.isOpen"
          class="fixed top-0 w-screen h-screen bg-neutral-900/50 z-6 flex justify-center items-center"
          @click="closeModal"
        >
          <div class="fixed top-0 h-full w-full flex justify-center items-center">
            <div
              class="bg-neutral-100 z-7 md:rounded-3xl md:h-fit md:max-h-200 md:w-150 md:text-lg dark:bg-neutral-700"
              @click.stop
            >
              <div class="flex flex-col py-5">
                <!-- header -->
                <div class="w-[85%] mx-auto mb-5 flex justify-between">
                  <div class="flex items-center gap-x-2">
                    <h3 class="font-semibold dark:text-neutral-100">Your Cart</h3>
                    <div
                      class="w-7 h-7 flex justify-center items-center rounded-full bg-accent-primary text-sm"
                    >
                      <span class="font-semibold text-neutral-100 -ml-0.5 -mt-0.5">{{
                        totalCartItems
                      }}</span>
                    </div>
                  </div>
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
                <div
                  class="flex flex-col w-[90%] mx-auto max-h-120 overflow-y-auto md:max-h-80 md:w-[85%]"
                >
                  <div v-if="cartData.length === 0">
                    <div
                      class="text-xl font-semibold flex justify-center items-center dark:text-neutral-100"
                    >
                      There are currently no camps
                    </div>
                  </div>
                  <div v-else>
                    <div
                      v-for="data in cartData"
                      class="my-5 flex gap-x-5 justify-between justify-items-start"
                      :key="data.name"
                    >
                      <div class="w-[20%]">
                        <div class="w-15 h-15 rounded-lg overflow-hidden">
                          <LazyLoadImage
                            :img-path="data.image"
                            :alt-name="data.name"
                            class="w-15 h-15"
                          />
                          image
                        </div>
                      </div>
                      <div class="w-[50%] flex flex-col items-start">
                        <span class="font-semibold leading-7 dark:text-neutral-100">{{
                          data.name
                        }}</span>
                        <span
                          class="w-30 leading-7 text-neutral-700 md:w-full dark:text-neutral-400"
                          >Start date: {{ data.startDate }}</span
                        >
                        <span class="mt-2 font-bold text-neutral-700 dark:text-neutral-400"
                          >${{ data.price * data.nights }}.00</span
                        >
                        <span
                          class="mt-2 text-neutral-900 hover:cursor-pointer hover:text-accent-primary dark:text-neutral-100 dark:hover:text-accent-secondary"
                          @click="removeCamp(data.name)"
                          >Remove</span
                        >
                      </div>
                      <div class="w-[30%] flex flex-col items-center gap-y-2">
                        <span class="dark:text-neutral-300">Nights:</span>
                        <input
                          type="number"
                          min="1"
                          class="w-20 h-10 pl-5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] border-0 dark:shadow-none dark:border-neutral-400 dark:border-2 dark:bg-neutral-700 dark:text-neutral-100 dark:scheme-dark"
                          v-model.number="data.nights"
                          @input="updateNights(data.name, data.nights, data.startDate, $event)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="mt-10 text-neutral-400" />
                <!-- subtotal and checkout btn -->
                <div class="w-[85%] mx-auto">
                  <div class="mt-10 flex justify-between">
                    <span class="text-neutral-700 dark:text-neutral-400">Subtotal:</span>
                    <span class="font-semibold tracking-wide dark:text-neutral-100"
                      >$ {{ getSubTotal }}.00 USD</span
                    >
                  </div>
                  <PrimaryButton
                    label="Continue to Checkout"
                    :size="md ? 'large' : 'default'"
                    class="mt-10"
                    :disabled="cartData.length === 0"
                    disable-route
                    @click="goToCheckout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
