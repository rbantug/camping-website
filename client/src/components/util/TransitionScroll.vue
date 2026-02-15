<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { computed, ref, watchEffect } from 'vue';

interface Props {
    threshold?: boolean;
    transitionDirection?: 'top-bottom' | 'bottom-top';
}

const props = withDefaults(defineProps<Props>(), {
    threshold: false,
    transitionDirection: 'top-bottom',
})

const el = ref(null)
const isVisible = useElementVisibility(el, { threshold: props.threshold ? 1 : 0 })
const trueCount = ref(0)

watchEffect(() => {
    if (isVisible.value === true && trueCount.value < 1) {
        trueCount.value++
    }
})

const outputDir0 = computed(() => {
    if (props.transitionDirection === 'top-bottom') {
        return 'opacity-0 translate-y-8'
    }

    if (props.transitionDirection === 'bottom-top') {
        return 'opacity-0 translate-y-0'
    }

    return ''
})

const outputDir1 = computed(() => {
    if (props.transitionDirection === 'top-bottom') {
        return 'opacity-100 translate-y-0'
    }

    if (props.transitionDirection === 'bottom-top') {
        return 'opacity-100 translate-y-8'
    }

    return ''
})
</script>

<template>
    <div ref="el" class="mx-auto duration-900 delay-200" :class="{ [outputDir0]: trueCount < 1 && isVisible === false, [outputDir1]: trueCount >= 1 && isVisible === true }">
        <slot />
    </div>
</template>