<script setup lang="ts">
import { ref, onMounted, onBeforeMount, watch } from 'vue'
import { useHead } from '@unhead/vue'
import { useBreakpoints } from '@vueuse/core'

import { useMainStore } from '@/stores/mainStore'
import TransitionScroll from '../util/TransitionScroll.vue'
import CampCard from '../BaseComponents/CampCard.vue'

import type { Camps } from '../../../interface'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/26jjsubwisadujxc1ye60/title-1.avif?rlkey=6gxgj5ndtv8r7cg251ea3m5g9',
    },
  ],
})

const mainStore = useMainStore()

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')

const itemList = mainStore.getAllCamps

const currentPage = ref(1)
const itemsPerPage = ref(3)
const currentList = ref<Camps[]>([])
const totalPages = ref(1)
const refArray = ref<HTMLElement[]>([])

function paginateList() {
  const page = currentPage.value - 1
  const start = page * itemsPerPage.value
  const end = start + itemsPerPage.value

  currentList.value = itemList.value.slice(start, end)
}

function createPageBtn() {
  totalPages.value = Math.ceil(itemList.value.length / itemsPerPage.value)
}

function activeBtn(el: HTMLElement) {
  const currentBtnIndex = refArray.value.findIndex((x: HTMLElement) =>
    x.classList.contains('bg-accent-secondary'),
  )
  refArray.value[currentBtnIndex].classList.remove('bg-accent-secondary')
  refArray.value[currentBtnIndex].classList.add('bg-neutral-500')

  el.classList.remove('bg-neutral-500')
  el.classList.add('bg-accent-secondary')
}

function scrollToTopCamp() {
  const el = document.getElementById('topCamp')
  el?.scrollIntoView({ behavior: 'smooth' })
}

function changePage(event: Event) {
  const target = event.target as HTMLInputElement
  if (currentPage.value === parseInt(target.textContent)) return

  activeBtn(target)
  currentPage.value = parseInt(target.textContent)
  paginateList()
  scrollToTopCamp()
}

function nextPage() {
  if (currentPage.value === totalPages.value) return

  currentPage.value++
  activeBtn(refArray.value[currentPage.value - 1])
  paginateList()
  scrollToTopCamp()
}

function previousPage() {
  if (currentPage.value === 1) return

  currentPage.value--
  activeBtn(refArray.value[currentPage.value - 1])
  paginateList()
  scrollToTopCamp()
}

watch(
  md,
  (newVal, oldVal) => {
    if (newVal === true) {
      itemsPerPage.value = 6
    } else {
      itemsPerPage.value = 3
    }
    paginateList()
    createPageBtn()
  },
  { immediate: true },
)

onMounted(() => {
  itemsPerPage.value = md.value ? 6 : 3
  paginateList()
  createPageBtn()
  console.log(refArray.value)
  refArray.value[0].classList.remove('bg-neutral-500')
  refArray.value[0].classList.add('bg-accent-secondary')
})

onBeforeMount(() => {
  refArray.value = []
})
</script>

<template>
  <div class="h-650 bg-neutral-100 dark:bg-neutral-900 lg:h-525 flex flex-col">
    <div
      class="h-130 bg-[url(https://dl.dropboxusercontent.com/scl/fi/26jjsubwisadujxc1ye60/title-1.avif?rlkey=6gxgj5ndtv8r7cg251ea3m5g9)] bg-bottom bg-cover flex flex-col md:h-140"
    >
      <TransitionScroll>
        <div
          class="w-[90%] h-10 pt-60 mx-auto flex flex-col justify-center text-center md:w-[85%] md:pt-80"
        >
          <h1 class="text-neutral-100 font-bold text-5xl md:text-6xl">Camps</h1>
          <p class="text-neutral-100 leading-8 pt-5 md:text-lg">
            Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus
            duis.
          </p>
        </div>
      </TransitionScroll>
    </div>
    <div class="pt-10">
      <div
        class="h-490 max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 lg:h-330"
        id="topCamp"
      >
        <div v-for="camp in currentList" :key="camp.name" class="pb-10">
          <CampCard
            :name="camp.name"
            :shortDescription="camp.shortDescription"
            :fullDescription="camp.fullDescription"
            :price="camp.price"
            :image="camp.image"
            :blurryImg="camp.blurryImg"
            :status="camp.status"
            :amenities="camp.amenities"
          />
        </div>
      </div>
    </div>
    <!-- Pagination buttons -->
    <div class="py-10">
      <div class="flex gap-x-5 items-center justify-center">
        <!-- Previous button -->
        <button class="cursor-pointer dark:text-white" @click="previousPage">
          <!-- simple-line-icons:arrow-left -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099c13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474s-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
            />
          </svg>
        </button>
        <!-- Page buttons -->
        <button
          v-for="(page, index) of totalPages"
          :key="page"
          class="h-10 w-10 rounded-full outline-none text-white bg-neutral-500 cursor-pointer hover:bg-accent-outline"
          :ref="(el) => (refArray[index] = el)"
          @click.self="changePage"
        >
          {{ page }}
        </button>
        <!-- next button -->
        <button class="cursor-pointer dark:text-white" @click="nextPage">
          <!-- simple-line-icons:arrow-right -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475s35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
