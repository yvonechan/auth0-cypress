<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import 'dotenv/config'
</script>

<template>
  <head>
    <link href="/dist/output.css" rel="stylesheet" />
  </head>
  <body class="flex flex-col place-items-start w-8/12">
    <TopBanner msg="Simple Questionnaire & Results" />
    <RouterView />
  </body>
</template>
<style scoped></style>
