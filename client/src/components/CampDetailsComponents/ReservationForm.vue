<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

import { useMainStore } from '@/stores/mainStore'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import TransitionScroll from '../util/TransitionScroll.vue'
import SecondaryButton from '../BaseComponents/Buttons/SecondaryButton.vue'

interface Props {
  name: string
  price: string
  image: string
}

const props = defineProps<Props>()

const mainStore = useMainStore()

const tomorrowInMilliseconds = Date.now() + 86400000
const nights = ref(1)
const date = ref(new Date(tomorrowInMilliseconds))

const formattedDate = computed({
  get() {
    return date.value.toISOString().split('T')[0]
  },
  set(value) {
    date.value = new Date(value!)
  },
})

const monthArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function addToCart() {
  if (typeof nights.value !== 'number' || nights.value < 1) {
    nights.value = 1
    updateInvalidNights(true)
    return
  }

  if (date.value < new Date(tomorrowInMilliseconds)) {
    updateInvalidDate(true)
    return
  }

  const month = monthArr[date.value.getMonth()]
  const day = date.value.getDate()
  const year = date.value.getFullYear()
  mainStore.addToCart({
    image: props.image,
    name: props.name,
    price: parseInt(props.price),
    startDate: `${month} ${day}, ${year}`,
    nights: nights.value
  })
  
  mainStore.updateCartModalIsOpen()
}

const invalidDate = ref(false)
const invalidNights = ref(false)

function updateInvalidDate(val:boolean) {
    invalidDate.value = val
}
function updateInvalidNights(val:boolean) {
    invalidNights.value = val
}

onMounted(() => {
  invalidDate.value = false
  invalidNights.value = false
})
</script>

<template>
  <div class="flex justify-center items-center pt-10 lg:-mt-250">
    <TransitionScroll delay="delay-1000">
      <div
        class="bg-neutral-100 rounded-3xl border-2 border-neutral-500 h-175 w-full max-w-90 dark:bg-neutral-900 transition-color duration-300 dark:border-neutral-400 md:max-w-190 lg:max-w-100"
      >
        <div class="w-[85%] pt-10 mx-auto">
          <div>
            <!-- Heading -->
            <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Reserve Camp</h1>
            <p class="mt-2 text-neutral-700 dark:text-neutral-400 md:text-lg">
              Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis
              convallis tempus leo.
            </p>
          </div>
          <!-- Price -->
          <div class="mt-5">
            <div class="text-neutral-700 dark:text-neutral-400 text-lg">From</div>
            <span class="font-bold text-xl text-neutral-900 dark:text-neutral-100"
              >$ {{ props.price }} USD</span
            >
            <span class="text-neutral-700 dark:text-neutral-400 text-lg"> /night</span>
          </div>
          <hr class="my-8 text-neutral-700 dark:text-neutral-400" />
          <!-- Input boxes -->
          <div class="w-full h-25 gap-x-3 grid grid-cols-[60%_40%] md:w-90 lg:gap-0">
            <div class="flex flex-col items-start gap-y-3 w-45">
              <span class="font-bold text-neutral-900 dark:text-neutral-100">Start Date</span>
              <input
                type="date"
                class="w-full h-15 rounded-4xl text-neutral-900 border-2 focus:border-accent-primary hover:border-accent-primary dark:focus:border-accent-outline dark:hover:border-accent-outline dark:text-neutral-400 dark:border-neutral-400 dark:bg-neutral-900 dark:scheme-dark" :class="{ 'border-red-500 dark:border-red-500': invalidDate }"
                v-model="formattedDate"
                @click="updateInvalidDate(false)"
              />
              <span v-if="invalidDate" class="text-red-400 font-semibold -mt-3 self-center">Invalid Date</span>
            </div>
            <div class="flex flex-col items-start gap-y-3 w-28">
              <span class="font-bold text-neutral-900 dark:text-neutral-100">Nights</span>
              <input
                type="number"
                min="1"
                inputmode="numeric"
                class="rounded-4xl w-full h-15 text-neutral-900 border-2 focus:border-accent-primary hover:border-accent-primary dark:focus:border-accent-outline dark:hover:border-accent-outline dark:text-neutral-400 dark:border-neutral-400 dark:bg-neutral-900 dark:scheme-dark"
                :class="{ 'border-red-500 dark:border-red-500': invalidNights }"
                v-model="nights"
                @click="updateInvalidNights(false)"
              />
              <span v-if="invalidNights" class="text-red-400 font-semibold -mt-3 self-center">Invalid Nights</span>
            </div>
          </div>
          <!-- buttons -->
          <div class="mt-10 flex flex-col items-center gap-y-5">
            <PrimaryButton
              label="Add to Cart"
              size="large"
              class="w-full"
              disable-route
              @click="addToCart"
            />
            <div class="flex items-center gap-x-5">
              <hr class="w-30 text-neutral-900 dark:text-neutral-400" />
              <div class="text-neutral-900 dark:text-neutral-400">OR</div>
              <hr class="w-30 text-neutral-900 dark:text-neutral-400" />
            </div>
            <!-- This is a placeholder for a stripe checkout -->
            <SecondaryButton label="Buy me" size="large" class="w-full" />
          </div>
        </div>
      </div>
    </TransitionScroll>
  </div>
</template>
