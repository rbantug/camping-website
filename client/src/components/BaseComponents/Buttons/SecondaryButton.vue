<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size: 'small' | 'default' | 'large';
  label: string;
  altColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  altColor: false
})

const rootStyling = 'bg-white rounded-full inset-shadow-xs shadow-md w-full cursor-pointer hover:bg-accent-secondary hover:-translate-y-1 duration-200 group'

function moreRootStyling(style:string) {
  let newStyle = style

  if (props.altColor) {
    newStyle = newStyle.replace('bg-white', 'bg-accent-secondary border border-white').replace('hover:bg-accent-secondary', 'hover:bg-white')
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

const txtStyle = 'text-neutral-800 group-hover:text-white'

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
