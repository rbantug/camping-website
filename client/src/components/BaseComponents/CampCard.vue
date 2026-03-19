<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { Camps } from '../../../interface'

import BaseBadge from './Buttons/BaseBadge.vue'
import PrimaryButton from './Buttons/PrimaryButton.vue'
import LazyLoadImage from '../util/LazyLoadImage.vue'

type Prop = Omit<Camps, 'imageHires'>

const router = useRouter()

const props = defineProps<Prop>()

function goToCampDetails() {
  if (props.status === 'full') return
  
  router.push({
    name: 'campDetails',
    params: {
      slug: props.slug,
    },
  })
}
</script>

<template>
  <div :class="{ 'cursor-pointer': props.status === 'available' }" @click="goToCampDetails">
    <div class="max-w-90 mx-auto rounded-2xl group md:max-w-85 lg:max-w-90">
      <div class="h-65 rounded-t-2xl overflow-hidden">
        <LazyLoadImage
          :alt-name="props.name"
          :img-path="props.image"
          :blurry-img-path="props.image"
          class="object-cover object-center h-65 w-100 rounded-t-2xl duration-300"
          :class="[
            { 'grayscale': props.status === 'full' },
            { 'group-hover:scale-105': props.status === 'available' },
          ]"
        />
      </div>
      <div
        class="h-90 max-w-100 rounded-b-2xl -translate-y-2 duration-300 md:shadow bg-white dark:bg-neutral-800"
        :class="{ 'group-hover:-translate-y-4': props.status === 'available' }"
      >
        <div class="w-[90%] mx-auto flex flex-col">
          <!-- Camp name and description -->
          <h3
            class="text-2xl font-semibold pt-8 duration-200 dark:text-white transition-colors"
            :class="[
              { 'text-xl': props.name.length > 20, 'pb-1': props.name.length > 20 },
              { 'group-hover:text-accent-primary': props.status === 'available' },
              { 'dark:group-hover:text-accent-secondary': props.status === 'available' },
            ]"
          >
            {{ props.name }}
          </h3>
          <p class="pt-2 text-neutral-600 dark:text-neutral-500 transition-colors">
            {{ props.shortDescription }}
          </p>
          <!-- Amenities Badge -->
          <div class="flex gap-x-2 pt-4">
            <div v-for="n in 2" :key="n">
              <base-badge :name="props.amenities[n]" />
            </div>
          </div>
          <div
            v-if="props.amenities?.length > 2"
            class="pl-2 pt-1 dark:text-neutral-300 transition-colors duration-300"
          >
            Plus {{ props.amenities.length - 2 }} more
          </div>
          <hr class="text-neutral-400 font-bold mt-8" />
          <!-- Price -->
          <div class="mt-6 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <span class="text-xl font-semibold tracking-wider dark:text-white"
                >${{ props.price }}</span
              >
              <span class="text-sm text-neutral-500"> /night</span>
            </div>
            <PrimaryButton
              size="default"
              :label="props.status === 'available' ? 'Book now' : 'Full'"
              :group-animate="true"
              class="mt-4 md:mt-0"
              :disabled="props.status === 'available' ? false : true"
              :route-path="`/camps/${props.slug}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
