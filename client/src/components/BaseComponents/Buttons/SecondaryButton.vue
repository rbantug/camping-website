<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size: 'small' | 'default' | 'large';
  label: string;
  altColor?: boolean;
  darkModeNoRing?: boolean;
  noRing?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  altColor: false,
  darkModeNoRing: false,
  noRing: false,
})

const rootStyling = 'bg-white rounded-full w-full cursor-pointer hover:bg-accent-secondary hover:ring-transparent hover:-translate-y-1 duration-200 group dark:bg-neutral-900 transition-color'

function moreRootStyling(style:string) {
  let newStyle = style

  if (props.altColor) {
    newStyle = newStyle.replace('bg-white', 'bg-transparent').replace('hover:bg-accent-secondary', 'hover:bg-white')
  }

   if (!props.darkModeNoRing) {
    newStyle = newStyle + ' dark:ring-2 dark:ring-white dark:hover:ring-transparent'
  }
  
  if (!props.noRing) {
    newStyle += ' ring-2 ring-white'
  }

  return newStyle
}

const outputRootStyle = computed(() => {
  if (props.size === 'small') {
    return moreRootStyling(rootStyling) + ' px-3 py-2'
  }

  if (props.size === 'default') {
    return moreRootStyling(rootStyling) + ' px-5 py-4'
  }

  return moreRootStyling(rootStyling) + ' px-7 py-5'
})

const txtStyle = 'text-neutral-800 group-hover:text-white dark:text-white dark:group-hover:text-neutral-900'

function moreTxtStyling(style:string) {
  let newStyle = style

  if (props.altColor) {
    return 'text-white group-hover:text-neutral-800'
  }

  return newStyle
} 

const outputTxtStyle = computed(() => {
    if (props.size === 'small') {
    return moreTxtStyling(txtStyle) + ' text-sm'
  }

  if (props.size === 'default') {
    return moreTxtStyling(txtStyle) + ' text-md'
  }

  return moreTxtStyling(txtStyle) + ' text-lg'
})
</script>

<template>
  <div>
    <button :class="outputRootStyle">
      <span :class="outputTxtStyle">{{ props.label }}</span>
    </button>
  </div>
</template>
