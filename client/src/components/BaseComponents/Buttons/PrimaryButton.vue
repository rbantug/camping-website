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
})

const rootStyling =
  'bg-accent-secondary rounded-full w-full cursor-pointer hover:bg-accent-primary hover:-translate-y-1 duration-200'

function moreStyling(style: string) {
  let newStyle = style

  if (props.disabled) {
    return 'bg-neutral-600 rounded-full w-full'
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

const outputTxtStyle = computed(() => {
  if (props.size === 'small') {
    return txtStyle + ' text-sm'
  }

  if (props.size === 'default') {
    return txtStyle + ' text-md'
  }

  return txtStyle + ' text-lg'
})
</script>

<template>
  <div>
    <button :class="outputRootStyle" :disabled="props.disabled">
      <span :class="outputTxtStyle">{{ props.label }}</span>
    </button>
  </div>
</template>
