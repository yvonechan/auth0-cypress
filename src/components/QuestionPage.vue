<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="w-full p-10 border-x-4 border-zinc-200">
    <form>
      <p>Message is:</p>
      <input class="border-1" placeholder="edit me" />
    </form>
  </div>
</template>
