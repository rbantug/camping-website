<script setup lang="ts">
import Button from 'primevue/button'
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
})

const rootStyling = 'bg-white rounded-full w-full cursor-pointer hover:bg-accent-secondary hover:-translate-y-1 duration-200 group'

const outputRootStyle = computed(() => {
  if (props.size === 'small') {
    return rootStyling + ' px-3 py-2'
  }

  if (props.size === 'default') {
    return rootStyling + ' px-5 py-4'
  }

  return rootStyling + ' px-7 py-5'
})

const txtStyle = 'text-neutral-800 group-hover:text-white'

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
    <Button :label="props.label" :pt:root="outputRootStyle" :pt:label="outputTxtStyle" />
  </div>
</template>
