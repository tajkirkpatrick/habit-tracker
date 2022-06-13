<script setup lang="ts">
import CompletionBar from './CompletionBar.vue';
</script>

<template>
  <div class="h-50 flex justify-center max-h-md bg-black text-white">
    <slot />
    <CompletionBar title="Task Name" />
  </div>
</template>
