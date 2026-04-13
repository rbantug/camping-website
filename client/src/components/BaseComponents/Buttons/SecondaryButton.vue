<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size: 'small' | 'default' | 'large';
  label: string;
  altColor?: boolean;
  darkModeNoRing?: boolean;
  noRing?: boolean;
  whiteRing?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  altColor: false,
  darkModeNoRing: false,
  noRing: false,
  whiteRing: true,
})

const rootStyling = 'bg-white rounded-full w-full cursor-pointer hover:bg-accent-secondary hover:ring-transparent hover:-translate-y-1 duration-200 group dark:bg-neutral-900 transition-color'

const outputRootStyle = computed(() => {
  let newStyle = rootStyling

   if (!props.darkModeNoRing) {
    newStyle = newStyle + ' dark:ring-2 dark:ring-white dark:hover:ring-transparent'
  }
  
  if (!props.noRing) {
    newStyle += ' ring-2'
  }

  if (props.whiteRing) {
    newStyle += ' ring-white'
  }

  if (props.altColor) {
    newStyle = newStyle.replace('bg-white', 'bg-transparent').replace('hover:bg-accent-secondary', 'hover:bg-white')
  }

  return newStyle
})

const txtStyle = 'text-neutral-800 group-hover:text-white dark:text-white dark:group-hover:text-neutral-900'

const outputTxtStyle = computed(() => {
    const newStyle = txtStyle

  if (props.altColor) {
    return 'text-white group-hover:text-neutral-800'
  }

  return newStyle
})
</script>

<template>
  <div>
    <button :class="[outputRootStyle, { 'px-3 py-2': props.size === 'small', 'px-5 py-4': props.size === 'default', 'px-7 py-5': props.size === 'large' }]">
      <span :class="[outputTxtStyle, { 'text-sm': props.size === 'small', 'text-md': props.size === 'default', 'text-lg': props.size === 'large' }]">{{ props.label }}</span>
    </button>
  </div>
</template>
