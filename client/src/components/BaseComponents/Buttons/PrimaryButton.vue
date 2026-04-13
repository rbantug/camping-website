<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  size: 'small' | 'default' | 'large'
  label: string
  groupAnimate?: boolean
  disabled?: boolean
  altColor?: boolean
  routePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  groupAnimate: false,
  disabled: false,
  altColor: false,
  routePath: '/',
})

const router = useRouter()

const rootStyling =
  'bg-accent-secondary rounded-full w-full cursor-pointer shadow hover:bg-accent-primary hover:-translate-y-1 duration-200 group'

const outputRootStyle = computed(() => {
  let newStyle = rootStyling

  if (props.disabled) {
    return 'bg-neutral-600 rounded-full w-full'
  }

  if (props.altColor) {
    newStyle = newStyle
      .replace('bg-accent-secondary', 'bg-white')
      .replace('hover:bg-accent-primary', 'hover:bg-white')
  }

  if (props.groupAnimate) {
    newStyle = newStyle.replace(
      'hover:bg-accent-primary hover:-translate-y-1',
      'group-hover:bg-accent-primary group-hover:-translate-y-1',
    )
  }

  return newStyle
})

const txtStyle = 'text-white font-semibold'

const outputTxtStyle = computed(() => {
  let newStyle = txtStyle

  if (props.altColor) {
    newStyle = newStyle.replace('text-white', 'text-accent-secondary group-hover:text-neutral-800')
  }

  return newStyle
})

function gotoRoute() {
  router.push(props.routePath)
}
</script>

<template>
  <div>
    <button
      :class="[
        outputRootStyle,
        {
          'px-4 py-3': props.size === 'small',
          'px-5 py-4': props.size === 'default',
          'px-7 py-5': props.size === 'large',
        },
      ]"
      :disabled="props.disabled"
      @click="gotoRoute"
    >
      <span
        :class="[
          outputTxtStyle,
          {
            'text-sm': props.size === 'small',
            'text-md': props.size === 'default',
            'text-lg': props.size === 'large',
          },
        ]"
        >{{ props.label }}</span
      >
    </button>
  </div>
</template>
