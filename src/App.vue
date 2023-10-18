<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import NavBar from './components/NavBar.vue'
import QuestionPage from './components/QuestionPage.vue'
</script>

<template>
  <head>
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body class="flex flex-col place-items-start w-8/12">
    <TopBanner msg="Simple Questionnaire & Results"/>
    <NavBar/>
    <QuestionPage msg="questions"/>
  </body>
</template>
<style scoped>

</style>
