import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import router from './router'
import { type answer } from './types'
import { authConfig } from './auth_config'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      season: '',
      cusine: '',
      anime: ''
    }
  },
  mutations: {
    update(state: answer, payload: answer) {
      state.season = payload.season
      state.cusine = payload.cusine
      state.anime = payload.anime
    }
  }
})
const app = createApp(App)

app
  .use(router)
  .use(store)
  .use(
    createAuth0({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  )

app.mount('#app')
