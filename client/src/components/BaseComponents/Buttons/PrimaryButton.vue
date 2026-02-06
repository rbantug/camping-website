<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    validator: function (value: string) {
      return ['small', 'default', 'large'].includes(value)
    },
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  groupAnimate: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  altColor: {
    type: Boolean,
    required: false,
    default: false
  }
})

const rootStyling =
  'bg-accent-secondary rounded-full w-full cursor-pointer shadow hover:bg-accent-primary hover:-translate-y-1 duration-200 group'

function moreStyling(style: string) {
  let newStyle = style

  if (props.disabled) {
    return 'bg-neutral-600 rounded-full w-full'
  }

  if (props.altColor) {
    newStyle = newStyle.replace('bg-accent-secondary', 'bg-white').replace('hover:bg-accent-primary', 'hover:bg-white')
  }

  if (props.groupAnimate) {
    newStyle = newStyle.replace(
      'hover:bg-accent-primary hover:-translate-y-1',
      'group-hover:bg-accent-primary group-hover:-translate-y-1',
    )
  }

  return newStyle
}

const outputRootStyle = computed(() => {
  if (props.size === 'small') {
    return moreStyling(rootStyling) + ' px-3 py-2'
  }

  if (props.size === 'default') {
    return moreStyling(rootStyling) + ' px-5 py-4'
  }

  return moreStyling(rootStyling) + ' px-7 py-5'
})

const txtStyle = 'text-white font-semibold'

function moreTxtStyling(style:string) {
  let newStyle = style

  if (props.altColor) {
    newStyle = newStyle.replace('text-white', 'text-accent-secondary group-hover:text-neutral-800')
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
    <button :class="outputRootStyle" :disabled="props.disabled">
      <span :class="outputTxtStyle">{{ props.label }}</span>
    </button>
  </div>
</template>
