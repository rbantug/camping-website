<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const props = defineProps({
    threshold: {
        type: Boolean,
        required: false,
        default: false
    }
})

const el = ref(null)
const isVisible = useElementVisibility(el, { threshold: props.threshold ? 1 : 0 })
const trueCount = ref(0)

watchEffect(() => {
    if (isVisible.value === true && trueCount.value < 1) {
        trueCount.value++
    }
})
</script>

<template>
    <div ref="el" class="mx-auto duration-900" :class="{ 'opacity-0 translate-y-8': trueCount < 1 && isVisible === false, 'opacity-100 translate-y-0': trueCount >= 1 && isVisible === true }">
        <slot />
    </div>
</template>