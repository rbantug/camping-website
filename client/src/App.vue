<script setup lang="ts">
  import 'iconify-icon'
  import Button from 'primevue/button';

  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <main class="font-DM-Sans">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>

</template>

<style scoped></style>
