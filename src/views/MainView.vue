<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'

const auth0 = useAuth0()

const isAuthenticated = ref(auth0.isAuthenticated)
const user = ref(auth0.user)
</script>

<template>
  <div v-if="isAuthenticated && user" class="w-full flex justify-center p-3">
    Logged in. Welcome {{ user.nickname }}!
  </div>
  <div v-else class="w-full flex justify-center p-3">Please login</div>
</template>
