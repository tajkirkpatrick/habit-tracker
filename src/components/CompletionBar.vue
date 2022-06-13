<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

const clicked = ref(false);

const flipClicked = () => {
  clicked.value = !clicked.value;
  console.log(clicked.value);
};
</script>

<template>
  <div class="flex w-full" @click="flipClicked">
    <h1 class="grow">{{ title }}</h1>
    <div v-if="clicked" class="text-3xl i-carbon-checkbox-checked-filled"></div>
    <div v-else class="text-3xl i-carbon-checkbox"></div>
  </div>
</template>
