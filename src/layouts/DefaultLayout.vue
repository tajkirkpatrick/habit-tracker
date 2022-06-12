<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <div class="h-screen w-full flex flex-col bg-gray">
    <NavBar />
    <slot class="flex-grow" />
  </div>
</template>
