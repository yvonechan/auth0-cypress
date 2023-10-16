<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import QuestionPage from './components/QuestionPage.vue'
</script>

<template>
  <head>
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body class="flex flex-col place-items-start">
    <TopBanner msg="Simple Questionnaire & Results"/>
    <QuestionPage msg="questions"/>
  </body>
</template>
<style scoped>

</style>
