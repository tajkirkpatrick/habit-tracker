<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <nav class="w-full h-12 py-8 flex bg-gray items-center justify-around px-12">
    <Button>
      <div class="i-carbon-add-alt text-2xl"></div>
      Add Todo
    </Button>
    <Button>
      <div class="i-carbon-task-remove text-2xl"></div>
      Remove Todo
    </Button>
    <Button>
      <div class="i-carbon-location-heart-filled text-2xl"></div>
      Send Love
    </Button>
  </nav>
</template>
