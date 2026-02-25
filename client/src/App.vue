<script setup lang="ts">
  import TransitionScroll from './components/util/TransitionScroll.vue';
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import ScrollUpButton from './components/ScrollUpButton.vue';
  import ToggleDarkModeButton from './components/ToggleDarkModeButton.vue';
</script>

<template>
  <main class="font-DM-Sans transition-colors duration-300">
    <TransitionScroll :z-index="1" :relative="true">
      <TheHeader />
    </TransitionScroll>
    <RouterView />
    <TheFooter />

    <ScrollUpButton />
    <ToggleDarkModeButton />
  </main>

</template>

<style scoped></style>
