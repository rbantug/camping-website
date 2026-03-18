<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  imgPath: string | undefined
  blurryImgPath: string | undefined
  altName?: string
  notLazy?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  notLazy: false,
  class: '',
  imgPath: '',
  blurryImgPath: ''
})

const loaded = ref(false)
const error = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = props.imgPath

  img.onload = () => {
    loaded.value = true
  }

  img.onerror = () => {
    error.value = true
  }
})
</script>

<template>
  <div class="relative overflow-hidden">
    
    <!-- Skeleton -->
    <div
      v-if="!loaded && !error"
      class="absolute inset-0 animate-pulse bg-gray-300/20"
    ></div>

    <!-- Placeholder (blurred) -->
    <img
      v-if="props.blurryImgPath && !loaded"
      :src="props.blurryImgPath"
      :alt="props.altName"
      class="absolute inset-0 w-full h-full object-cover blur-md scale-105"
      :loading="notLazy ? 'eager': 'lazy'"
    />

    <!-- Main Image -->
    <img
      v-if="!error"
      :src="props.imgPath"
      :alt="props.altName"
      :class="[
        'object-cover transition-all duration-700',
        loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105', props.class
      ]"
      :loading="notLazy ? 'eager': 'lazy'"
    />

    <!-- Error Fallback -->
    <div
      v-if="error"
      class="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-sm"
    >
      Image failed to load
    </div>

  </div>
</template>