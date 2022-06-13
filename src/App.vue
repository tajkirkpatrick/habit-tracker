<script setup lang="ts">
import Task from './components/Task.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <div class="w-full h-full text-center px-24">
      <h1 class="text-white">Habit Tracker</h1>
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  </DefaultLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
