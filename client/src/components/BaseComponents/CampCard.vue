<script setup lang="ts">
import type { Camps } from '../../../interface'

import BaseBadge from './Buttons/BaseBadge.vue';
import PrimaryButton from './Buttons/PrimaryButton.vue';
import LazyLoadImage from '../util/LazyLoadImage.vue';

const props = defineProps<Camps>()
</script>

<template>
  <div>
    <div class="max-w-90 mx-auto rounded-2xl group md:max-w-85 lg:max-w-90">
      <div class="h-65 rounded-t-2xl overflow-hidden">
        <LazyLoadImage
          :alt-name="props.name"
          :img-path="props.image"
          :blurry-img-path="props.image"
          class="object-cover object-center h-65 w-100 rounded-t-2xl group-hover:scale-120 duration-300"
          :class="{ grayscale: props.status === 'full' }"
        />
      </div>
      <div
        class="h-90 max-w-100 rounded-b-2xl -translate-y-2 group-hover:-translate-y-4 duration-300 md:shadow bg-white dark:bg-neutral-800"
      >
        <div class="w-[90%] mx-auto flex flex-col">
          <!-- Camp name and description -->
          <h3
            class="text-2xl font-semibold pt-8 group-hover:text-accent-primary duration-200 dark:text-white dark:group-hover:text-accent-secondary transition-colors"
            :class="{ 'text-xl': props.name.length > 20, 'pb-1': props.name.length > 20 }"
          >
            {{ props.name }}
          </h3>
          <p class="pt-2 text-neutral-600 dark:text-neutral-500 transition-colors">
            {{ props.shortDescription }}
          </p>
          <!-- Amenities Badge -->
          <div class="flex gap-x-2 pt-4">
            <div v-for="n in 2" :key="n">
              <base-badge :name="props.amenities[n]" class="" />
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
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
