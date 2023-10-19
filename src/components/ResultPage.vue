<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore();
</script>

<template>
  <div class="w-full p-10 space-y-2">
    <p  class="font-sans text-base">Favourite season:{{ store.state.season }}</p>
    <p  class="font-sans text-base">Favourite cusine:{{ store.state.cusine }}</p>
    <p  class="font-sans text-base">Favourite anime: {{ store.state.anime }}</p>
  </div>
</template>