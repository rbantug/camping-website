<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { computed, ref, watchEffect } from 'vue';

interface Props {
    threshold?: boolean;
    transitionDirection?: 'top-bottom' | 'bottom-top';
    zIndex?: number;
    relative?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    threshold: false,
    transitionDirection: 'bottom-top',
    zIndex: 0,
    relative: false,
})

const el = ref(null)
const isVisible = useElementVisibility(el, { threshold: props.threshold ? 1 : 0, once: true })
const trueCount = ref(0)

watchEffect(() => {
    if (isVisible.value === true && trueCount.value < 1) {
        trueCount.value++
    }
})

const outputDir0 = computed(() => {
    let style = `opacity-0 z-${props.zIndex}`

    if (props.transitionDirection === 'top-bottom') {
        style = style + ' translate-y-0'
    }

    if (props.transitionDirection === 'bottom-top') {
        style = style + ' translate-y-8'
    }

    if (props.relative) {
        style = style + ' relative'
    }

    return style
})

const outputDir1 = computed(() => {
    let style = `opacity-100 z-${props.zIndex}`

    if (props.transitionDirection === 'top-bottom') {
        style = style + ' translate-y-8'
    }

    if (props.transitionDirection === 'bottom-top') {
        style = style + ' translate-y-0'
    }

    if (props.relative) {
        style = style + ' relative'
    }
    
    return style
})
</script>

<template>
    <div ref="el" class="mx-auto duration-900 delay-200" :class="{ [outputDir0]: trueCount < 1 && isVisible === false, [outputDir1]: trueCount >= 1 && isVisible === true }">
        <slot />
    </div>
</template>