<script setup lang="ts">
import { useImage } from '@vueuse/core'
import { useHead } from '@unhead/vue'

interface Props {
  imgPath: string
  blurryImgPath: string
  altName?: string
  notLazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  notLazy: false
})

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: props.imgPath,
    },
    {
      rel: 'preload',
      as: 'image',
      href: props.blurryImgPath,
    },
  ],
})

const { isLoading } = useImage({
  src: props.imgPath,
  fetchPriority: 'high',
})
</script>

<template>
  <transition mode="out-in">
    <img
      v-if="isLoading"
      :src="props.blurryImgPath"
      alt=""
      class="object-cover blur-md animate-pulse"
      :loading="notLazy ? 'eager' : 'lazy'"
    />
    <img v-else :src="props.imgPath" :alt="props.altName" :loading="notLazy ? 'eager' : 'lazy'" />
  </transition>
</template>

<style scoped>
.v-enter-from {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: all 2s ease;
}
</style>
