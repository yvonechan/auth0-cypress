<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="w-full p-10 bg-gradient-to-r from-cyan-700 from-60%">
    <h1 class="font-sans text-2xl font-extrabold text-white">{{ msg }}</h1>
  </div>
</template>