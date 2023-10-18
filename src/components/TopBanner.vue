<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="w-full p-10 bg-gradient-to-r from-cyan-700 from-60% space-y-2">
    <p class="font-sans text-2xl font-extrabold text-white">{{ msg }}</p>
    <p  class="font-sans text-base text-white">A learning project for using vue3, okta and cypress</p>
  </div>
</template>