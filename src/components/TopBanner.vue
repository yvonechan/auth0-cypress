<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import NavBar from './NavBar.vue'
defineProps<{
  msg: string
}>()

const auth0 = useAuth0()

const isAuthenticated = ref(auth0.isAuthenticated)
const isLoading = ref(auth0.isLoading)
const user = ref(auth0.user)

function login() {
  auth0.loginWithRedirect()
}
function logout() {
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>

<template>
  <div class="w-full pb-2 flex justify-end">
    <button
      v-if="!isAuthenticated && !isLoading"
      @click.prevent="login"
      class="border-2 rounded-lg p-3"
    >
      Login
    </button>
    <div v-if="isAuthenticated && user">
      <img :src="user.picture" alt="User's profile picture" width="50" />
      <div>
        <div>{{ user.name }}</div>
        <a href="#" @click.prevent="logout">Log out</a>
      </div>
    </div>
  </div>
  <div class="w-full p-10 bg-gradient-to-r from-cyan-700 from-60% space-y-2">
    <p class="font-sans text-2xl font-extrabold text-white">{{ msg }}</p>
    <p class="font-sans text-base text-white">
      A learning project for using vue3, auth0 and cypress
    </p>
  </div>
  <NavBar v-if="isAuthenticated" />
</template>
