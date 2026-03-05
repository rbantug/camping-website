<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useHead } from '@unhead/vue'

import TransitionScroll from '../util/TransitionScroll.vue'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://dl.dropboxusercontent.com/scl/fi/26jjsubwisadujxc1ye60/title-1.avif?rlkey=6gxgj5ndtv8r7cg251ea3m5g9',
    },
  ],
})

const itemList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

const currentPage = ref<number>(1)
const itemsPerPage = ref(6)
const currentList = ref<null | number[]>(null)
const totalPages = ref(1)
const refArray = ref([])

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
  const currentBtnIndex = refArray.value.findIndex((x:HTMLElement) => x.classList.contains('bg-accent-secondary'))
  refArray.value[currentBtnIndex].classList.remove('bg-accent-secondary')
  refArray.value[currentBtnIndex].classList.add('bg-neutral-300')

  el.classList.remove('bg-neutral-300')
  el.classList.add('bg-accent-secondary')
}

function changePage(event: Event) {
  const target = event.target as HTMLInputElement
  activeBtn(target)
  currentPage.value = parseInt(target.textContent)
  paginateList()
}

function nextPage() {
  if (currentPage.value === totalPages.value) return

  currentPage.value++
  activeBtn(refArray.value[currentPage.value - 1])
  paginateList()
}

function previousPage() {
  if (currentPage.value === 1) return
  
  currentPage.value--
  activeBtn(refArray.value[currentPage.value - 1])
  paginateList()
}

onMounted(() => {
  paginateList()
  createPageBtn()
  console.log(refArray.value)
  refArray.value[0].classList.remove("bg-neutral-300")
  refArray.value[0].classList.add("bg-accent-secondary")
})

onBeforeMount(() => {
  refArray.value = []
})
</script>

<template>
  <div class="h-1000">
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
    <div class="">
      <div class="bg-red-200 h-300 grid grid-cols-3 gap-x-2 gap-y-8">
        <div v-for="n in currentList" :key="n" class="">
          <div class="h-140 w-90 rounded-2xl border-2 mx-auto">
            {{ n }}
          </div>
        </div>
      </div>
      <!-- Pagination buttons -->
      <div class="flex gap-x-5">
        <!-- Previous button -->
        <button class="cursor-pointer" @click="previousPage">
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
          class="h-10 w-10 rounded-full outline-none bg-neutral-300 cursor-pointer hover:bg-accent-outline"
          :ref="(el) => (refArray[index] = el)"
          @click.self="changePage"
        >
          {{ page }}
        </button>
        <!-- next button -->
        <button class="cursor-pointer" @click="nextPage">
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
