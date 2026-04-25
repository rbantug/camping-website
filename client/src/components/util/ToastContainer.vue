<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '@/composables/useToast'

const { toasts, remove, position } = useToast()

function getToastClasses(type?: string) {
  switch (type) {
    case 'success':
      return 'bg-green-600 text-white'
    case 'error':
      return 'bg-red-600 text-white'
    default:
      return 'bg-yellow-300 text-neutral-700 font-bold'
  }
}

const containerClasses = computed(() => {
  switch (position.value) {
    case 'bottom-left':
      return 'fixed bottom-5 left-5 items-start'
    case 'bottom-center':
      return 'fixed bottom-5 left-1/2 -translate-x-1/2 items-center'
    default:
      return 'fixed top-5 right-5 items-end'
  }
})
</script>

<template>
  <div
    :class="[
      containerClasses,
      'z-50 flex flex-col gap-3 pointer-events-none'
    ]"
  >
    <transition-group name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'pointer-events-auto px-20 py-8 rounded-lg shadow-lg cursor-pointer',
          'min-w-55 max-w-sm flex items-center justify-between gap-3',
          getToastClasses(toast.type)
        ]"
        @click="remove(toast.id)"
      >
        <span class="text-2xl">{{ toast.message }}</span>

        <button
          class="text-neutral-900 hover:scale-120 text-xl duration-200"
          @click.stop="remove(toast.id)"
        >
          ✕
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.toast-enter-active {
  transition: all 0.25s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.toast-leave-active {
  transition: all 0.2s ease;
}
</style>