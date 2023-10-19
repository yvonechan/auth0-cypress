<script setup lang="ts">
import { useStore } from 'vuex'
import { type displayWordMapInterface } from '../types'
const store = useStore()

const displayWordMap: displayWordMapInterface = {
  cusine: {
    chinese: 'Chinese',
    japanese: 'Japanese',
    western: 'Western'
  },
  anime: {
    spyAndFamily: 'Spy and Family',
    oshinoko: '推しのこ'
  }
}
</script>

<template>
  <div class="w-full p-10 space-y-2">
    <p class="font-sans text-base">Favourite season:{{ store.state.season }}</p>
    <p class="font-sans text-base">
      Favourite cusine:{{ displayWordMap.cusine[store.state.cusine] }}
    </p>
    <p class="font-sans text-base">
      Favourite anime: {{ displayWordMap.anime[store.state.anime] }}
    </p>
  </div>
</template>
