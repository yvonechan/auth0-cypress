<script setup lang="ts">
import type { answerInterface } from '@/types'
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const season = ref('')
const cusine = ref('')
const anime = ref('')

function handleSubmit(): void {
  const updatedAnswer: answerInterface = {
    season: season.value,
    cusine: cusine.value,
    anime: anime.value
  }
  store.commit('update', updatedAnswer)
  season.value = ''
  cusine.value = ''
  anime.value = ''
}
</script>

<template>
  <div class="w-full p-10 border-x-4 border-zinc-200 space-y-6">
    <p>1. What is your favourite season?</p>
    <input class="border-2 w-1/3 ml-4" placeholder="Summer" v-model="season" />
    <p>2. What is your favourite cusine?</p>
    <div class="flex flex-row w-8/12 space-x-8 ml-4">
      <div class="space-x-2">
        <input type="radio" id="chinese" name="cusine" value="chinese" v-model="cusine" />
        <label for="chinese">Chinese</label>
      </div>
      <div class="space-x-2">
        <input type="radio" id="japanese" name="cusine" value="japanese" v-model="cusine" />
        <label for="chinese">Japanese</label>
      </div>
      <div class="space-x-2">
        <input type="radio" id="western" name="cusine" value="western" v-model="cusine" />
        <label for="chinese">Western</label>
      </div>
    </div>
    <p>3. Which one is your favourite anime?</p>
    <select class="border-2 ml-4" name="animes" id="animes-select" v-model="anime">
      <option value="">---Please select---</option>
      "
      <option value="spyAndFamily">Spy and Family</option>
      <option value="oshinoko">推しのこ</option>
    </select>
    <div class="w-full text-center">
      <button
        class="w-1/4 border-2 rounded-lg p-2 bg-lime-600 hover:bg-green-600 text-white"
        @click="handleSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>
