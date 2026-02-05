<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { Icon } from '@iconify/vue'

import PrimaryButton from '../BaseComponents/Buttons/PrimaryButton.vue'
import type { NavItems } from '../TheHeader.vue'

const props = defineProps({
  isOpen: {
    required: true,
    type: Boolean,
  },
  navItems: {
    required: true,
    type: Array as PropType<Array<NavItems>>,
  },
  additionalNavItems: {
    required: true,
    type: Array as PropType<Array<NavItems>>,
  },
})

const moreNavItems = ref(false)
function toggleMoreNavItems() {
  moreNavItems.value = !moreNavItems.value
}
</script>

<template>
  <transition name="nav">
    <div
      v-if="props.isOpen"
      class="w-full bg-white pl-6.5 pr-6.5 rounded-[30px] justify-between items-start pt-5.5 pb-5.5 flex flex-col"
    >
      <div class="flex flex-col gap-y-4">
        <div v-for="{ link, route } in navItems" :key="link">
          <router-link :to="route">{{ link }}</router-link>
        </div>
      </div>
      <div class="flex cursor-pointer pt-4 pb-2" @click="toggleMoreNavItems">
        <span>Pages</span>
        <Icon
            icon="iconamoon:arrow-down-2"
            width="24"
            height="24"
            :class="{ 'rotate-180 duration-200 ease': moreNavItems, 'duration-200 ease': !moreNavItems }"
        />
      </div>
      <div v-if="moreNavItems" class="flex flex-col gap-2 translate-x-4 pb-4">
        <div v-for="{ link, route } in additionalNavItems" :key="link">
          <router-link :to="route">{{ link }}</router-link>
        </div>
      </div>
      <div class="w-full md:w-[20%]">
        <PrimaryButton size="default" label="Book now" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: all 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.nav-enter-to,
.nav-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
