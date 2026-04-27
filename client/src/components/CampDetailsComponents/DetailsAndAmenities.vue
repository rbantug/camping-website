<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core';

import BaseBadge from '../BaseComponents/Buttons/BaseBadge.vue'

interface Props {
  fullDescription: string
  amenities: string[]
}

const props = defineProps<Props>()

const additionalContentList = [
  'Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.',
  'Ad litora torquent per conubia nostra inceptos himenaeos.',
  'In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
]

const additionalContentParagraph = [
  'Nec metus bibendum egestas iaculis massa nisl malesuada. Integer nunc posuere ut hendrerit semper vel class. Taciti sociosqu ad litora torquent per conubia nostra. Himenaeos orci varius natoque penatibus et magnis dis. Montes nascetur ridiculus mus donec rhoncus eros lobortis.',
  'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.',
]

const breakpoints = useBreakpoints({
  md: 768,
  lg: 994,
})

const md = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div class="h-fit bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 lg:max-w-200">
    <div class="w-[90%] mx-auto">
      <div>
        <h1 class="pt-10 text-3xl font-bold text-neutral-900 dark:text-neutral-100" data-test="headerMain">
          About the camp
        </h1>
        <p class="mt-5 text-neutral-600 leading-7 dark:text-neutral-400 md:text-lg" data-test="fullDescription">
          {{ props.fullDescription }}
        </p>
        <ul class="my-8 ml-4">
          <li v-for="list in additionalContentList" :key="list" class="mt-3 flex gap-5 text-neutral-600 leading-7 dark:text-neutral-400 md:text-lg" data-test="listContent">
            <span>•</span>
            <span>{{ list }}</span>
          </li>
        </ul>
        <p v-for="paragraph in additionalContentParagraph" :key="paragraph" class="mt-5 text-neutral-600 leading-7 dark:text-neutral-400 md:text-lg" data-test="paragraphContent">{{ paragraph }}</p>
      </div>
      <hr class="my-10 text-neutral-700 dark:text-neutral-400" />
      <div>
        <h1 class="my-10 text-3xl font-bold text-neutral-900 dark:text-neutral-100" data-test="headerAmenities">
          Camp Amenities
        </h1>
        <div class="max-w-100 grid grid-cols-2 gap-y-8 md:grid-cols-3 md:max-w-150 md:gap-5">
          <div v-for="amenity in props.amenities" :key="amenity" data-test="amenityBadge">
            <BaseBadge :name="amenity" :border="false" :text-size="md ? 'lg' : 'md'" increase-gap />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
