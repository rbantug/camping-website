<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  isOpen: {
    required: true,
    type: Boolean
  }
})

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <button
    class="w-7 h-6 flex flex-col justify-between p-0 cursor-pointer sm:w-8 md:w-11"
    :class="{ open: props.isOpen, animate: mounted }"
    aria-label="Toggle menu"
    :aria-expanded="props.isOpen"
  >
    <span class="bg-neutral-800 rounded-[20px] w-full h-0.75"/>
    <span class="bg-neutral-800 rounded-[20px] w-full h-0.75"/>
    <span class="bg-neutral-800 rounded-[20px] w-full h-0.75"/>
  </button>
</template>



<style scoped>
.hamburger {
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Bars */
  span {
  display: block;
  height: 3px;
  width: 100%;
  background: #000;
  border-radius: 2px;
}

/* Enable animation ONLY after mount */
.animate span {
  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}

/* Open state (X icon) */
.open span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.open span:nth-child(2) {
  opacity: 0;
}

.open span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
