<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const el = ref(null)
const isVisible = useElementVisibility(el)
const trueCount = ref(0)

watchEffect(() => {
    if (isVisible.value === true && trueCount.value < 1) {
        trueCount.value++
    }
})


</script>

<template>
    <div ref="el" class="duration-900" :class="{ 'opacity-0 translate-y-8': isVisible === false && trueCount < 1, 'opacity-100 translate-y-0': isVisible === true && trueCount >= 1 }">
        <slot />
    </div>
</template>