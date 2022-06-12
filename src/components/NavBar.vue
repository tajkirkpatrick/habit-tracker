<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <nav class="w-full h-12 py-8 flex bg-gray items-center justify-around px-12">
    <Button>
      <div class="i-carbon-add-alt"></div>
      Add Todo
    </Button>
    <Button>
      <div class="i-carbon-task-remove"></div>
      Remove Todo
    </Button>
    <Button>
      <div class="i-carbon-location-heart-filled"></div>
      Send Love
    </Button>
  </nav>
</template>
