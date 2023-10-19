<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <head>
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body class="flex flex-col place-items-start w-8/12">
    <TopBanner msg="Simple Questionnaire & Results"/>
    <NavBar/>
    <RouterView/>
  </body>
</template>
<style scoped>

</style>
